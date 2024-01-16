import json
import os
import subprocess

import js2py
from js2py import require

# with open("exePy.js", "r") as rf:
#     jscode = rf.read()

# print(jscode)


# ctx = js2py.EvalJs(enable_require=True)
# js2py.translate_file("exePy.js", "exePy.py")
# ctx.execute(jscode)
# from exePy import exePy

# fetch request
request = {
    "language": "Python",
    "code": 'user_input = input("Enter something: ")\nprint("You entered:", user_input)',
    "input": "Hello in python",
}

req = json.dumps(request)
print(req)
p1 = subprocess.run(["node", "app.js", req], capture_output=True, text=True)
print(p1.stdout)


"""
/execute



"""
