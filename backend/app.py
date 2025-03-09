from flask import Flask, request, jsonify
from flask_cors import CORS
import algorithm
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route('/api/submit', methods=['POST'])
def submit_answers():
    data = request.json
    return jsonify({"message": "Answers received successfully!", "received_data": data})

@app.route('/api/match', methods=['POST'])
def get_best_match():
    user_data = request.json
    best_score, best_match_idx, best_match_name, similarities = algorithm.calculate_match_with_db(user_data)
    
    response_data = {
        "best_score": float(best_score),
        "best_match_idx": int(best_match_idx),
        "best_match_name": str(best_match_name),  
        "all_similarities": similarities.tolist()  
    }
    print(response_data)
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
