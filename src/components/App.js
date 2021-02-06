import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return <h1>Page One</h1>;
};

const PageTwo = () => {
  return <h1>Page Two</h1>;
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' exact component={PageOne} />
        <Route path='/two' component={PageTwo} />
      </div>
    </BrowserRouter>
  );
};
export default App;
