export const initialState = {
  todo: {
    id: "",
    text: "",
  },
  todos: [],
  editingId: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now().toString(), text: action.payload },
        ],
      };
    case "deleteTodo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "updateTodo":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    default:
      return state;
  }
}

export default reducer;
