import os
from flask import Flask


def server():
    base_dir = os.path.dirname(os.path.abspath(__file__))

    app = Flask(
        __name__,
        template_folder=os.path.join(base_dir, "templates"), 
        static_folder=os.path.join(base_dir, "static"), 
        static_url_path="/static",  
    )

    from views import views

    app.register_blueprint(views)

    return app
