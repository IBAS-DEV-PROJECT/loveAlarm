import numpy as np
import csv
from sklearn.metrics.pairwise import cosine_similarity

def encode_single_response(question_idx, answer):
    if question_idx == 3 or question_idx == 6:
        vec = np.zeros(4)
        if 1 <= answer <= 4:
            vec[answer - 1] = 1
        return vec
    else:
        return np.array([0]) if answer == 1 else np.array([1])

def encode_all_responses(responses):
    encoded_list = []
    for q_idx, ans in enumerate(responses):
        encoded_vec = encode_single_response(q_idx, ans)
        encoded_list.append(encoded_vec)
    return np.concatenate(encoded_list)

def scale_encoded_vectors_for_cosine_9(encoded_matrix, question_weights):
    w_sqrt = np.sqrt(question_weights)
    encoded_matrix[:, 0]    *= w_sqrt[0]    
    encoded_matrix[:, 1]    *= w_sqrt[1]    
    encoded_matrix[:, 2]    *= w_sqrt[2]    
    encoded_matrix[:, 3:7]  *= w_sqrt[3]   
    encoded_matrix[:, 7]    *= w_sqrt[4]   
    encoded_matrix[:, 8]    *= w_sqrt[5]    
    encoded_matrix[:, 9:13] *= w_sqrt[6]   
    encoded_matrix[:, 13]   *= w_sqrt[7]
    encoded_matrix[:, 14]   *= w_sqrt[8]   
    return encoded_matrix

def load_candidate_data(csv_file='../data/data.csv'):
    candidates = []
    candidate_names = []
    with open(csv_file, newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile)
        header = next(reader)
        for row in reader:
            candidate_names.append(row[1])           # 이름 저장
            candidate_answers = row[2:11]           # 응답 데이터
            candidates.append(candidate_answers)
    return candidates, candidate_names


def calculate_match_with_db(user_data):
    mapping = {
        'gender': {'남성': 1, '여성': 2},
        'weekend_comment': {'맛집': 1, '휴식': 2},
        'conflict_response': {'정리 후 말하기': 1, '즉각 대화': 2},
        'contact_frequency': {'30분': 1, '1시간': 2, '2시간': 3, '상관없음': 4},
        'friend_party': {'절대 안됨': 1, '아는 사람은 괜찮다': 2, '이성친구와 밥/술자리': 3},
        'possible_party': {'짝 맞춘 술자리': 1, '단둘이': 2, '6명 이상': 3, '대규모': 4},
        'date_course': {'엑티비티': 1, '맛집/카페': 2, '영화관': 3, '집': 4},
        'team_comment': {'멘트1': 1, '멘트2': 2},
        'music_taste': {'힙합': 1, '발라드/R&B': 2, '밴드': 3, 'K-pop': 4}
    }

    responses = [
       mapping['gender'].get(user_data.get('gender'), 1),
       mapping['weekend_comment'].get(user_data.get('weekend_comment'), 1),
       mapping['conflict_response'].get(user_data.get('conflict_response'), 1),
       mapping['contact_frequency'].get(user_data.get('contact_frequency'), 1),
       mapping['friend_party'].get(user_data.get('friend_party'), 1),
       mapping['possible_party'].get(user_data.get('possible_party'), 1),
       mapping['date_course'].get(user_data.get('date_course'), 1),
       mapping['team_comment'].get(user_data.get('team_comment'), 1),
       mapping['music_taste'].get(user_data.get('music_taste'), 1)
    ]

    user_vec = encode_all_responses(responses)

    candidate_list, candidate_names = load_candidate_data()  # 수정된 부분
    
    converted_candidates = []
    for candidate in candidate_list:
        candidate_int_answers = [
            mapping['gender'].get(candidate[0], 1),
            mapping['weekend_comment'].get(candidate[1], 1),
            mapping['conflict_response'].get(candidate[2], 1),
            mapping['contact_frequency'].get(candidate[3], 1),
            mapping['friend_party'].get(candidate[4], 1),
            mapping['possible_party'].get(candidate[5], 1),
            mapping['date_course'].get(candidate[6], 1),
            mapping['team_comment'].get(candidate[7], 1),
            mapping['music_taste'].get(candidate[8], 1)
        ]
        converted_candidates.append(candidate_int_answers)
    
    candidate_vecs = [encode_all_responses(c) for c in converted_candidates]
    all_vectors = np.vstack([user_vec] + candidate_vecs)
    question_weights = np.array([1.0, 2.0, 1.5, 2.0, 1.0, 1.0, 2.0, 1.0, 1.0])
    scaled_matrix = scale_encoded_vectors_for_cosine_9(all_vectors.copy(), question_weights)
    
    sim_matrix = cosine_similarity(scaled_matrix)
    user_similarities = sim_matrix[0, 1:]
    best_match_idx = np.argmax(user_similarities)
    best_score = user_similarities[best_match_idx]
    best_match_name = candidate_names[best_match_idx]
    
    return best_score, best_match_idx, best_match_name, user_similarities


if __name__ == "__main__":
    test_user_data = {
        'gender': '남성',
        'weekend_comment': '맛집',
        'conflict_response': '정리 후 말하기',
        'contact_frequency': '30분',
        'friend_party': '절대 안됨',
        'possible_party': '짝 맞춘 술자리',
        'date_course': '영화관',
        'team_comment': '멘트1',
        'music_taste': '힙합'
    }
    best_score, best_match_idx, best_match_name, similarities = calculate_match_with_db(test_user_data)

    print("최고의 매칭 점수:", best_score)
    print("최고의 매칭 후보 인덱스:", best_match_idx)
    print("전체 유사도 배열:", similarities)
    print(f"이름 {best_match_name}")