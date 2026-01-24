document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (!form) return;

    function clearZero(e) {
        if (e.target.type === "number" && e.target.value === "0") {
            e.target.value = "";
        }
    }

    function restoreZero(e) {
        if (e.target.type === "number" && e.target.value === "") {
            e.target.value = "0";
        }
    }

    form.addEventListener("focusin", clearZero);
    form.addEventListener("focusout", restoreZero);

    form.addEventListener("input", (e) => {
        const id = e.target.id;

        if (id.startsWith("utility_unit_") || id.startsWith("utility_price_")) {
            const index = id.match(/\d+$/)?.[0];
            if (!index) return;

            const unit =
                parseFloat(document.getElementById(`utility_unit_${index}`)?.value) || 0;
            const price =
                parseFloat(document.getElementById(`utility_price_${index}`)?.value) || 0;

            const totalInput = document.getElementById(`utility_total_${index}`);
            if (totalInput) {
                totalInput.value = (unit * price).toFixed(2);
            }
        }

        if (
            id.startsWith("fixedutility_ns_") ||
            id.startsWith("fixedutility_price_")
        ) {
            const index = id.match(/\d+$/)?.[0];
            if (!index) return;

            const unit =
                parseFloat(document.getElementById(`fixedutility_ns_${index}`)?.value) || 0;
            const price =
                parseFloat(document.getElementById(`fixedutility_price_${index}`)?.value) || 0;

            const totalInput = document.getElementById(`fixedutility_total_${index}`);
            if (totalInput) {
                totalInput.value = (unit * price).toFixed(2);
            }
        }
    });

    const STORAGE_KEY = "receipt_draft";

    function saveForm() {
        const data = {};
        form.querySelectorAll("input, select, textarea").forEach(el => {
            if (el.name) data[el.name] = el.value;
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    function restoreForm() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return;

        const data = JSON.parse(saved);
        Object.keys(data).forEach(name => {
            const field = form.querySelector(`[name="${name}"]`);
            if (field) {
                field.value = data[name];
                field.dispatchEvent(new Event("input", { bubbles: true }));
            }
        });
    }

    form.addEventListener("submit", () => {
        localStorage.removeItem(STORAGE_KEY);
    });

    form.addEventListener("input", saveForm);
    form.addEventListener("change", saveForm);

    restoreForm();


    const fromInput = document.getElementById("period_from");
    const toInput = document.getElementById("period_to");

    if (fromInput && toInput && !fromInput.value && !toInput.value) {
        const now = new Date();
        const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
        const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

        fromInput.value = formatDateLocal(firstDay);
        toInput.value = formatDateLocal(lastDay);
    }
});

function formatDateLocal(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function calculateAllToday() {
    let sum = 0;

    const totalInputs = document.querySelectorAll(
        'input[id^="rent_total_"],' +
        'input[id^="utility_total_"],' +
        'input[id^="fixedutility_total_"],' +
        'input[id^="additional_total_"]'
    );

    totalInputs.forEach(input => {
        sum += parseFloat(input.value) || 0;
    });

    const allToday = document.getElementById("all_today");
    if (allToday) {
        allToday.value = sum.toFixed(2);
    }

    return sum;
}

function calculatePayableAndDue() {
    const allToday = parseFloat(document.getElementById("all_today")?.value) || 0;
    const deduction = parseFloat(document.getElementById("deduction_today")?.value) || 0;
    const paid = parseFloat(document.getElementById("paid_today")?.value) || 0;

    const payable = Math.max(allToday - deduction, 0);
    const due = Math.max(payable - paid, 0);

    const payableInput = document.getElementById("payable_today");
    const dueInput = document.getElementById("due_today");

    if (payableInput) payableInput.value = payable.toFixed(2);
    if (dueInput) dueInput.value = due.toFixed(2);
}

document.addEventListener("input", (e) => {
    const id = e.target.id;

    if (
        id.startsWith("rent_total_") ||
        id.startsWith("utility_total_") ||
        id.startsWith("fixedutility_total_") ||
        id.startsWith("additional_total_") ||
        id === "deduction_today" ||
        id === "paid_today"
    ) {
        calculateAllToday();
        calculatePayableAndDue();
    }
});