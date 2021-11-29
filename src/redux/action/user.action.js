export const LoginAction = (user) => {
  return {
    type: "LOGIN",
    user,
  };
};

export const setLoadingAction = (loading) => {
  return {
    type: "LOGIN",
    loading,
  };
};

export const logoutAction = () => {
  return {
    type: "LOGOUT",
  };
};
