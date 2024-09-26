export const initialState = {
  // Todo
  todo: {
    id: "",
    text: "",
  },
  todos: [],

  // Users
  user: {
    id: "",
    name: "",
    age: "",
  },
  users: [],
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

    // User states
    case "addUser":
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: Date.now().toString(),
            name: action.payload.name,
            age: action.payload.age,
          },
        ],
      };
    case "deleteUser":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "updateUser":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id
            ? { ...user, name: action.payload.name, age: action.payload.age }
            : user
        ),
      };
    default:
      return state;
  }
}

export default reducer;
