//액션 상수 정의
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const ISDONE_TODO = "ISDONE_TODO";

//액션 크리에이터 정의
let newId = 3;
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

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const isDoneTodo = (id) => {
  return {
    type: ISDONE_TODO,
    id,
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
    {
      id: 2,
      title: "리액ㅌ..",
      content: "리덕스..",
      isDone: true,
    },
    {
      id: 3,
      title: "리액ㅌ..",
      content: "리덕스..",
      isDone: true,
    },
  ],
};

//리듀서
const reducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.id)],
      };
    case ISDONE_TODO:
      // const findIdx = [
      //   ...state.todos.findIndex((todo) => todo.id === action.id),
      // ];
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) =>
            todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
          ),
        ],
      };
    default:
      return state;
  }
};

//익스포트
export default reducer;
