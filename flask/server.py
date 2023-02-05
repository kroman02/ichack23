# Call some information.
from flask import Flask
from flask import request

app = Flask(__name__)

# localhost:8000/terra
@app.route("/terra", methods=["POST"])
def create_terra_server():
    print("Terra Request")
    print(request.json)
    return "OK"

app.run(port=8000)