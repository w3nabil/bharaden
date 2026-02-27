from flask import Blueprint, render_template, request, send_from_directory, current_app, abort
import pprint 
from models import fnum, text_purify
import markdown
import os
from datetime import datetime
import random

views = Blueprint("views", __name__)

DEBUG = False

@views.route("/", methods=["GET", "POST"])
def home():
    if request.method == "GET":
        useragent = request.headers.get("User-Agent")
        ipaddr = request.headers.get("X-Forwarded-For", request.remote_addr)
        if DEBUG:
            print(f"[DEBUG] GET request from IP: {ipaddr}, User-Agent: {useragent}")
        return render_template("home.html", useragent=useragent, ipaddress=ipaddr)

    data = request.form.to_dict()

    rents = []
    utilities = []
    fixed_utilities = []
    additionals = []

    rent_indexes = {
        k.split("_")[1]
        for k in data
        if k.startswith("rent_") and not k.startswith("rent_total_")
    }

    for i in rent_indexes:
        name = data.get(f"rent_{i}", "").strip()
        total = fnum(data.get(f"rent_total_{i}", 0))

        if name and total > 0:
            rents.append({"name": name, "total": total})

    utility_indexes = {
        k.split("_")[1]
        for k in data
        if k.startswith("utility_")
        and not any(
            k.startswith(p)
            for p in ("utility_unit_", "utility_price_", "utility_total_")
        )
    }

    for i in utility_indexes:
        name = data.get(f"utility_{i}", "").strip()
        unit = fnum(data.get(f"utility_unit_{i}", 0))
        price = fnum(data.get(f"utility_price_{i}", 0))
        total = fnum(data.get(f"utility_total_{i}", 0))

        if name and total > 0:
            utilities.append(
                {
                    "name": name,
                    "unit": unit,
                    "price": price,
                    "total": total,
                }
            )

    fixed_indexes = {
        k.split("_")[1]
        for k in data
        if k.startswith("fixedutility_")
        and not any(
            k.startswith(p)
            for p in (
                "fixedutility_ns_",
                "fixedutility_price_",
                "fixedutility_total_",
            )
        )
    }

    for i in fixed_indexes:
        name = data.get(f"fixedutility_{i}", "").strip()
        ns = fnum(data.get(f"fixedutility_ns_{i}", 0))
        price = fnum(data.get(f"fixedutility_price_{i}", 0))
        total = fnum(data.get(f"fixedutility_total_{i}", 0))

        if name and total > 0:
            fixed_utilities.append(
                {
                    "name": name,
                    "ns": ns,
                    "price": price,
                    "total": total,
                }
            )

    additional_indexes = {
        k.split("_")[1]
        for k in data
        if k.startswith("additional_") and not k.startswith("additional_total_")
    }

    for i in additional_indexes:
        name = data.get(f"additional_{i}", "").strip()
        total = fnum(data.get(f"additional_total_{i}", 0))

        if name and total > 0:
            additionals.append({"name": name, "total": total})

    timegenerated = datetime.now().strftime("%d %B, %Y %I:%M %p")
    print(timegenerated)
    period_form = datetime.strptime(data.get("period_from"), "%Y-%m-%d").strftime('%d %B, %Y')
    period_to = datetime.strptime(data.get("period_to"), "%Y-%m-%d").strftime("%d %B, %Y")
    billing_month = period_form.split(" ")[1][:-1]
    billing_year = period_form.split(" ")[2]

    verses_bangla = [
        "পড়ুন আপনার প্রতিপালক এর নামে, যিনি আপনাকে সৃষ্টি করেছেন।",
        "হে প্রতিপালক, আমায় জ্ঞান দিন।",
        "অতএব, অবশ্যই কষ্টের সাথে স্বস্তি আসে। অবশ্যই সেই কষ্টের সাথে আরও স্বস্তি আসে।",
        "আল্লাহর পথে যত ক্ষতিই হোক না কেন, তারা কখনও দমে যায়নি, দুর্বল হয়নি বা হার মানেনি! আল্লাহ ধৈর্যশীলদের ভালোবাসেন।",
        "হে ঈমানদারগণ! ধৈর্য ও নামাজের মাধ্যমে সান্ত্বনা কামনা করো। নিশ্চয়ই আল্লাহ ধৈর্যশীলদের সাথে আছেন।",
    ]
    
    bottom_verse = random.choice(verses_bangla)

    if DEBUG:
        print("[DEBUG] Parsed dynamic sections:")
        print("Rents:")
        pprint.pprint(rents)
        print("Utilities:")
        pprint.pprint(utilities)
        print("Fixed Utilities:")
        pprint.pprint(fixed_utilities)
        print("Additionals:")
        pprint.pprint(additionals)

    return render_template(
        "pdf_template.html",
        owner_name=data.get("owner_name", ""),
        owner_address=data.get("owner_address", ""),
        owner_phone=data.get("owner_phone", ""),
        owner_email=data.get("owner_email", ""),
        tenant_name=data.get("tenant_name", ""),
        tenant_address=data.get("tenant_address", ""),
        tenant_phone=data.get("tenant_phone", ""),
        tenant_email=data.get("tenant_email", ""),
        rents=rents,
        utilities=utilities,
        fixed_utilities=fixed_utilities,
        additionals=additionals,
        currency=data.get("currency", ""),
        period_from=period_form,
        period_to=period_to,
        paid_today=data.get("paid_today", 0),
        all_today=data.get("all_today", 0),
        due_today=data.get("due_today", 0),
        deduction_today=data.get("deduction_today", 0),
        deduction_reason=data.get("deduction_reason", ""),
        timegenerated=timegenerated,
        billing_year=billing_year,
        billing_month=billing_month,
        bottom_verse=bottom_verse,
    )

@views.route("/favicon.ico")
def slap_favicon_ico():
    return send_from_directory(
        current_app.static_folder + "/img",
        "favicon.ico",
        mimetype="image/vnd.microsoft.icon",
    )


@views.route("/favicon.png")
def slap_favicon_png():
    return send_from_directory(
        current_app.static_folder + "/img",
        "favicon.png",
        mimetype="image/png",
    )

@views.route("/changelog", methods=["GET"])
def changelog():
    return render_template("changelog.html")


@views.route("/docs/<name>")
def docs(name):
    path = os.path.join("docs", f"{name}.md")
    if not os.path.isfile(path):
        abort(404)

    with open(path, "r", encoding="utf-8") as f:
        content = markdown.markdown(
            f.read(), extensions=["fenced_code", "tables", "codehilite"]
        )

    return render_template("docs.html", content=content, title=name, version="1.0.0")
