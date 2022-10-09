import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Main from "./pages/main";
import Part0 from "./pages/part0";
import Part1 from "./pages/part1";
import Part2 from "./pages/part2";
import Part3 from "./pages/part3";
import Part4 from "./pages/part4";
import Part5 from "./pages/part5";
import Map from "./pages/map";

import End from "./pages/end";
import Login from "./pages/login";
import Signup from "./pages/signup";

const routeList = [
  { name : "메인", path : "/", Component : Main },
  { name : "진행", path : "/0", Component : Map },
  { name : "파트0", path : "/erased", Component : Part0 },
  { name : "파트1", path : "/1", Component : Part1 },
  { name : "파트2", path : "/2", Component : Part2 },
  { name : "파트3", path : "/3", Component : Part3 },
  { name : "파트4", path : "/4", Component : Part4 },
  { name : "파트5", path : "/5", Component : Part5 },
  { name : "종료", path : "/end", Component : End },
  { name : "로그인", path : "/signin", Component : Login },
  { name : "회원가입", path : "/signup", Component : Signup },
]

function App() {

  const location = useLocation();
  return (
    <Routes location={location}>
      {routeList.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component/>}/>
      ))}
    </Routes>
  );
}

export default App;
