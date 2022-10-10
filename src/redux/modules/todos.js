//액션 상수 정의
const ADD_TODO = "ADD_TODO";

//액션 크리에이터 정의
let newId = 1;
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    todo: {
      id: (newId += 1),
      title: payload.title,
      content: payload.content,
      isDone: false,
    },
  };
};

//초기값
const initialState = {
  todos: [
    {
      id: 1,
      title: "리액ㅌ..",
      content: "리덕스..",
      isDone: false,
    },
  ],
};

//리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    default:
      return state;
  }
};

//익스포트
export default reducer;
