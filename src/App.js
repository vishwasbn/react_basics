
import About from "./Component/About";
import Profile from "./Component/Profile";
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
function App() {


  let History = useNavigate();
  const [count, setCount] = useState(10)

  return (
    <div>

      <button onClick={() => {
        History('/about');
      }}>About Page</button>
      <button onClick={() => {
        History('/profile');
        setCount(count+1);
      }}>Profile Page</button>


      <Link to='/about'>About Page</Link>
      <Link to='/profile'>Profile Page</Link>
      <Routes>
        <Route element={<About></About>} path="/about">      </Route>
        <Route element={<Profile data={count}></Profile>} path="/profile">      </Route>
        <Route element={<h1>Hello</h1>} path="/">      </Route>
      </Routes>

    </div>

  );
}

export default App;
