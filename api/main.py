from flask import Flask

# print(__name__)

app = Flask(__name__)
#__name__ is set at runtime and is the name of the module

@app.route("/")
def hello():
    return "Hello, World!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
