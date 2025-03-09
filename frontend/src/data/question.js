export const questions = [
  {
    id: 1,
    type: 'text',
    question: '인스타그램 아이디를 입력해 주세요.',
    placeholder: 'e.g. @your_instagram',
    style: {
      size: 'q.m',
    },
  },
  {
    id: 2,
    type: 'select',
    question: '성별을 선택해 주세요.',
    options: ['남성', '여성'],
    style: {
      size: 'q.m',
      buttonWidth: '7.75rem',
      fontSize: 'text.m',
      layout: 'row',
    },
  },
  {
    id: 3,
    type: 'select',
    question: '드디어 다가온 주말! 당신이 오늘 하고 싶은 일은?',
    options: [
      '친구와 함께 저번부터 가보고 싶었던 맛집에 가야지 🍽️',
      '평일 동안 고생했으니 주말에는 집에서 쉬어야지 😴',
    ],
    style: {
      size: 'q.sm',
      buttonWidth: '21.75rem',
      fontSize: 'text.xs',
      layout: 'col',
    },
  },
  {
    id: 4,
    type: 'select',
    question: '연인과 다퉜을 때, 당신의 반응은?',
    options: [
      '지금은 생각을 정리하고 싶어. 나중에 이야기하자. 🤔',
      '당장 대화하면서 지금 상황을 정리하자. 🗣️',
    ],
    style: {
      size: 'q.sm',
      buttonWidth: '21.75rem',
      fontSize: 'text.xs',
      layout: 'col',
    },
  },
  {
    id: 5,
    type: 'select',
    question: '연인과 원하는 연락 빈도는?',
    options: ['30분마다 한 번', '1시간마다 한 번', '2시간마다 한 번', '상관없음'],
    style: {
      size: 'q.sm',
      buttonWidth: '10.25rem',
      fontSize: 'text.xs',
      layout: 'grid',
    },
  },
  {
    id: 6,
    type: 'select',
    question: '연인이 이성이 있는 술자리에 가는 것, 허용할 수 있을까?',
    options: [
      '절대 안 된다. 🤬',
      '아는 사람이 있으면 괜찮다! (과 사람 등) 👥',
      '연인이 이성 친구와 밥이나 술자리를 가는 것, 괜찮다! 👏',
    ],
    style: {
      size: 'q.xs',
      buttonWidth: '21.75rem',
      fontSize: 'text.xs',
      layout: 'col',
    },
  },
  {
    id: 7,
    type: 'select',
    question: '다음 중 허용할 수 있는 상황은?',
    options: [
      '남녀 짝을 맞춘 술자리 (e.g. 2:2)',
      '이성 친구와 단둘이 술자리',
      '6명 이상의 짝 맞추지 않은 술자리',
      '대규모 술자리 (총회, 회식 등)',
    ],
    style: {
      size: 'q.sm',
      buttonWidth: '15.5rem',
      fontSize: 'text.xs',
      layout: 'grid',
    },
  },
  {
    id: 8,
    type: 'select',
    question: '오늘의 데이트 계획은?',
    options: ['액티비티 (e.g. 롯데월드)', '느좋 맛집·카페 탐방', '영화관 데이트', '집 데이트'],
    style: {
      size: 'q.sm',
      buttonWidth: '10.5rem',
      fontSize: 'text.xs',
      layout: 'grid',
    },
  },
  {
    id: 9,
    type: 'select',
    question: '팀플로 지친 나에게 더 와닿는 말은?',
    options: [
      '진짜? 힘들겠다... 사람들 너무하네. 😢 + 달달한 간식 사주기',
      '그래? 네가 의견 내면 되잖아. 🧐 + 자료 찾는 거 도와주기',
    ],
    style: {
      size: 'q.sm',
      buttonWidth: '25.75rem',
      fontSize: 'text.xs',
      layout: 'col',
    },
  },
  {
    id: 10,
    type: 'select',
    question: '당신의 음악 취향은?',
    options: ['힙합', '발라드 / R&B', '밴드', 'K-pop'],
    style: {
      size: 'q.sm',
      buttonWidth: '10.5rem',
      fontSize: 'text.xs',
      layout: 'grid',
    },
  },
];
