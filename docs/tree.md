.
└── /
    ├── docs/
    │   ├── changelog.md          <!--Where we publish our release note-->
    │   ├── contributors.md       <!--Name of Contributors -->
    │   ├── howto.md              <!--Web/Code Walkthrough-->
    │   ├── security.md           <!--Thanks to every cyber heroes-->
    │   ├── todo.md               <!--What we are working on-->
    │   └── tree.md               <!--Currently here-->
    ├── static/
    │   ├── css/
    │   │   ├── home.css
    │   │   └── mfak.min.css
    │   ├── font/
    │   │   └── Shadhinata
    │   ├── img/
    │   │   ├── background.gif
    │   │   ├── facivon.ico
    │   │   ├── favicon.png
    │   │   ├── footer.webp
    │   │   ├── moon.webp
    │   │   ├── nebula.jpg
    │   │   └── sun.webp
    │   └── js/
    │       ├── index.helper.js
    │       ├── index.js
    │       ├── navbar.js
    │       ├── nopaste.js
    │       └── tailwind.cdn.js
    ├── templates/
    │   ├── home.html
    │   ├── docs.html
    │   └── pdf_template.html
    ├── __init__.py
    ├── app.py                  <!--For Production, use this-->
    ├── build.py                <!--For Development, use this-->
    ├── gunicorn.conf.py        <!--Default Gunicorn Setup-->
    ├── models.py               <!--Backend Logics-->
    ├── views.py                <!--Controls Public Files-->
    ├── readme.md
    ├── requirements.txt
    └── vercel.json
