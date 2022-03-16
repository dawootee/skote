import './App.css';
import Dashboard from './screens/dashboard/dashboard';
import Saas from './screens/dashboard/screens/Saas/Saas';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Login from './screens/Auth/Login';
import Signup from './screens/Auth/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard-saas" element={<Saas />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
