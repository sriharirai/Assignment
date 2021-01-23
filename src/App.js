import React from "react";
import Root from "./components/root";
import { Provider } from 'react-redux'
import store from "./store"
import './App.css';

function App() {
  return (
    <Provider store={store}>
        <Root/>
    </Provider>
  );
}

export default App;
