//액션 상수 정의
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const ISDONE_TODO = "ISDONE_TODO";
const FIND_TODO = "FIND_TODO";

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

export const findTodo = (id) => {
  return {
    type: FIND_TODO,
    id,
  };
};

//초기값
const initialState = {
  todos: [
    {
      id: 1,
      title: "리액트 공부합시다",
      content: "리액트 ..!",
      isDone: false,
    },
    {
      id: 2,
      title: "리덕스도 공부합시다",
      content: "리덕스....",
      isDone: true,
    },
    {
      id: 3,
      title: "scss 공부합시다",
      content: "스타일드컴포넌츠..",
      isDone: true,
    },
  ],
  todo: {},
};

//리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case DELETE_TODO:
      console.log("...state.todos", ...state.todos, "[...state.todos]", [
        ...state.todos,
      ]);
      // console.log(state);
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case ISDONE_TODO:
      // const findIdx = [
      //   ...state.todos.findIndex((todo) => todo.id === action.id),
      // ];
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case FIND_TODO:
      return {
        ...state,
        todo: [...state.todos].find((todo) => todo.id === action.id),
      };

    default:
      return state;
  }
};

//익스포트
export default reducer;
