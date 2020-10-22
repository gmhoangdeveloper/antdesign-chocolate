import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HomePageScreen from "./screens/HomePageScreen/HomePageScreen";
import Recruitery from "./screens/Recruitery";
import Shop from "./screens/Shop/Shop";
import Test from "./screens/Test";
import TestClass from "./screens/TestClass";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact={true} path="/" component={HomePageScreen}></Route>
        <Route exact={true} path="/shop" component={Shop}></Route>
        <Route exact={true} path="/recruitery" component={Recruitery}></Route>
        <Route exact={true} path="/test" component={Test}></Route>
        <Route exact={true} path="/testclass" component={TestClass}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
