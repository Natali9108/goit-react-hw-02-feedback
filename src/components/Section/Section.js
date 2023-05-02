import React from 'react';

export const Section = ({ title, children }) => {
  // title = {
  //   feedback: <h1>Please leave feedback</h1>,
  //   statistics: <h2>Statictics</h2>,
  // };

  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
