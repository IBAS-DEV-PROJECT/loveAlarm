from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/submit', methods=['POST'])
def submit():
    data = request.json
    return jsonify({"message": "Data received successfully!", "received_data": data})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
