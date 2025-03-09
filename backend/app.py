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

"""수정한 부분입니다"""

@app.route("/api/update", methods=["POST"])
def update_db():
    try:
        data = request.json
        best_match_name = data.get("best_match_name")

        if not best_match_name:
            return jsonify({"error": "Missing best_match_name"}), 400

        print(f"삭제 요청 받은 사용자: {best_match_name}") # 이건 지워도 될 듯 함

        #algorithm.py의 삭제 함수 실행
        success = algorithm.delete_user_from_db(best_match_name)

        if not success:
            return jsonify({"error": "DB 업데이트 실패"}), 500

        return jsonify({"message": f"{best_match_name} 삭제 완료!"}), 200

    except Exception as e:
        print(f"서버 오류 발생: {str(e)}")
        return jsonify({"error": "Internal Server Error", "message": str(e)}), 500

"""수정한 부분입니다"""

if __name__ == '__main__':
    app.run(debug=True, port=5000)
