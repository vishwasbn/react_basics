import { useState } from "react";
import About from "./Component/About";
import Profile from "./Component/Profile";

function App() {

  const [state, setState] = useState()

  return (
    <div>
      <button onClick={() => {
        setState('about')
      }}>About</button>
      <button onClick={() => {
        setState('profile')
      }}>Profile</button>
      {state === 'about' ? <About /> : <Profile />}
    </div>

  );
}

export default App;
