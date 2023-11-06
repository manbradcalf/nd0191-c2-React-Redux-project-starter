// There should be a way for the user to impersonate/ log in as an existing user.
// (This could be as simple as having a login box that appears at the root of the application.
// The user could then select a name from the list of existing users.)

// The application works correctly regardless of which user is selected.

// The application allows the user to log out and log back in.
// The user should be logged in to submit new polling questions, vote, and view the leaderboard.

// Once the user logs in, the home page is shown.

// Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.

import React from 'react';

export const Login = () => {
  return (
    <div className="bordered">
      <p>Login</p>
    </div>
  );
};
