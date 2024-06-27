from flask import Flask, jsonify, request
from services import get_weather_data, personalize_forecast

app = Flask(__name__)

@app.route('/api/weather', methods=['GET'])
def weather():
    city = request.args.get('city')
    data = get_weather_data(city)
    return jsonify(data)

@app.route('/api/personalize', methods=['POST'])
def personalize():
    user_data = request.json
    personalized_data = personalize_forecast(user_data)
    return jsonify(personalized_data)

if __name__ == "__main__":
    app.run(debug=True)