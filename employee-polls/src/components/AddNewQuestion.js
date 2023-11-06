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
