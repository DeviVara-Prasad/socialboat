import './App.css';
import Profile from './Profile/Profile';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './Login'
import Edit from './Profile/Edit';
function App() {
  return (
    <div className="App">
      <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Profile/>}/>
          <Route path="/edit" element={<Edit/>}/>
        </Routes>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
