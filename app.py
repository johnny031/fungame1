from flask import Flask, render_template, request
import random

app = Flask(__name__)

@app.route("/")
def index():
    r=[]
    c=[]

    for i in range(334):
        r.append(i)
    for i in range(25):
        c.append(i)

    random.shuffle(r)
    random.shuffle(c)

    w = r[:25]
    return render_template("index.html", w=w, c=c)

@app.route("/main")
def go():
    w = request.args.getlist("w")
    c = request.args.getlist("c")
    return render_template("main.html",w=w, c=c)