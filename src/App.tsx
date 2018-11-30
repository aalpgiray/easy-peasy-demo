import { StoreProvider } from "easy-peasy";
import React, { Component } from "react";

import { Todo } from "./components/Todo";
import store from "./store/model";

function App() {
  return (
    <StoreProvider store={store}>
      <div className="app">
        <header />
        <Todo />
      </div>
    </StoreProvider>
  );
}

export default App;
