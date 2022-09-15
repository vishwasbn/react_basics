
import About from "./Component/About";
import Profile from "./Component/Profile";
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import {AppContext} from './Context'
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
      <AppContext.Provider value={{count}}>
      <Routes>
        <Route element={<About></About>} path="/about">      </Route>
        <Route element={<Profile ></Profile>} path="/profile">      </Route>
        <Route element={<h1>Hello</h1>} path="/">      </Route>
      </Routes>
      </AppContext.Provider>

    </div>

  );
}

export default App;
