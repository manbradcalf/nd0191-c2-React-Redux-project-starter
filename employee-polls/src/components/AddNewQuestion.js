// The application shows the text “Would You Rather” and has a form for creating two options.
// Upon submitting the form, a new poll is created and the user is taken to the home page.
// The new polling question appears in the correct category on the home page.
// The form is available at/add.

import React from 'react';

export const AddNewQuestion = () => {
  return (
    <div className="bordered">
      <h1>Ask a Question!</h1>
      <p>Would you rather?</p>
      <textarea />
      <p>or</p>
      <textarea />
      <br />
      <button>Submit</button>
    </div>
  );
};
