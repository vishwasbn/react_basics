import { useState } from "react";
import About from "./Component/About";
import Profile from "./Component/Profile";

function App() {

  const [state, setState] = useState('about')
  let component = '';

  if (state === 'about') {
    component = <About />
  }
  if (state === 'profile') {
    component = <Profile />
  }

  return (
    <div>
      <button onClick={() => {
        setState('about')
      }}>About</button>
      <button onClick={() => {
        setState('profile')
      }}>Profile</button>
      {component}
    </div>

  );
}

export default App;
