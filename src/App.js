
import About from "./Component/About";
import Profile from "./Component/Profile";
import { BrowserRouter as Router, Route, Routes , Link} from 'react-router-dom'
function App() {



  return (
    <div>

      {/* <Link to='/about'>About Page</Link>
      <Link to='/profile'>Profile Page</Link> */}

      <a href="/about">about page</a>
      <a href="/profile">profile page</a>

      <Router>
        <Routes>
          <Route element={<About />} path="/about">      </Route>
          <Route element={<Profile />} path="/profile">      </Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
