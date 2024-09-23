export const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
        return state;
  }
}

export default reducer;
