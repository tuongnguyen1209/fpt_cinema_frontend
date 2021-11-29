const initState = {
  isLoading: false,
  isLogin: localStorage.getItem("user") ? true : false,
  user: JSON.parse(localStorage.getItem("user")) || {},
};

const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      const user = action.user;
      if (!user?.id_user) return state;
      const newState = { ...state, user: user, isLogin: true };
      localStorage.setItem("user", JSON.stringify(user));
      return newState;

    case "SET_LOADING":
      const newStateLoading = { ...state, isLoading: action.loading || false };
      return newStateLoading;
    case "LOGOUT":
      localStorage.removeItem("user");
      return {
        isLoading: false,
        isLogin: false,
        user: {},
      };
    default:
      return state;
  }
};

export default UserReducer;
