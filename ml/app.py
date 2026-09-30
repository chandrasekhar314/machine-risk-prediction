from flask import Flask, request, jsonify
import numpy as np
from sklearn.linear_model import LogisticRegression

app = Flask(__name__)

# Dummy training data
X = [[85,120,2],[60,80,0],[70,100,1]]
y = [2,0,1]  # 0=Low,1=Medium,2=High
model = LogisticRegression().fit(X,y)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    temp = float(data.get("Temperature",0))
    pressure = float(data.get("Pressure",0))
    vibration = {"Low":0,"Medium":1,"High":2}.get(data.get("Vibration"),0)
    pred = model.predict([[temp,pressure,vibration]])[0]
    risk = ["Low","Medium","High"][pred]
    return jsonify({"risk":risk})

if __name__ == '__main__':
    app.run(port=5000)
