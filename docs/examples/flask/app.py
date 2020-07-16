from dotenv import load_dotenv
from flask import Flask
import os

load_dotenv()

GREETING = os.getenv('GREETING', 'Hello')
app = Flask(__name__)

@app.route("/hello/<name>")
def hello(name):
    resp = {
      'message': GREETING + ' ' + name 
    }
    return resp

if __name__ == '__main__': 
  app.run(host='0.0.0.0', port=80)
