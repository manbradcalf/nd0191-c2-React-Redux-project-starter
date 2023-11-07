import Login from "../components/Login";

export const authedComponent = (authedUser, component, componentName) => {
  if (!authedUser) {
    return (
      <div>
        <h1>Please login to view {componentName}</h1>
        <Login />
      </div>
    );
  } else {
    return component;
  }
};
