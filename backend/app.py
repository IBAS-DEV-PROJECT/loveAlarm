from flask import Flask, request, jsonify
from flask_cors import CORS
import algorithm

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
    
    return jsonify({
        "best_score": best_score,
        "best_match_idx": best_match_idx,
        "best_match_name": best_match_name,  # 이름도 추가
        "all_similarities": similarities.tolist()
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
