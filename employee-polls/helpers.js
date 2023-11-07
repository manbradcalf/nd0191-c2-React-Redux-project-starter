export const checkAuth = (authedUser, component) => {
  if (!authedUser) {
    return (
      <div>
        <h1>Please login to view questions</h1>
        <Login />
      </div>
    );
  } else {
    return component;
  }
};
