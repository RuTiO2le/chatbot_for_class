from flask import Flask, render_template, request

from bot import get_completion

app = Flask(__name__)

@app.route("/")
def home():    
    return render_template("index.html")
  
@app.route("/get")
def get_bot_response():    
    userText = request.args.get('msg')
    response = get_completion(userText)
    return response
  
if __name__ == "__main__":
  app.run(host='0.0.0.0', port=81)