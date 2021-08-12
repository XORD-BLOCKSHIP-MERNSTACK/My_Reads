import React, { createContext, useState, useEffect } from 'react';

// Creating Context
export const bookContext = createContext();
export const bookActionContext = createContext();

const ContextProvider = (props) => {
  // Books State where we store our books data
  const [books, setBooks] = useState([]);

  return (
    <bookContext>
      <bookActionContext>{props.children}</bookActionContext>
    </bookContext>
  );
};

export default ContextProvider;
