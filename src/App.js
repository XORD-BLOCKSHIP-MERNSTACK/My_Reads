import React from 'react';

// Importing context to wrap our app component
import ContextProvider from './context/BookContext';

// Importing Navigation which contain our app links
import Navigation from './navigation/Navigation';

function App() {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider>
  );
}

export default App;
