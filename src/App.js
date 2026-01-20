import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

function App() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 40px',
    backgroundColor: '#282c34',
    color: 'white',
    height: '60px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
    fontWeight: 'bold'
  };

  return (
    <Router>
      <nav style={navStyle}>
        <h2>INCOPS</h2>
        <div>
          <Link path to="/login" style={linkStyle}>Login</Link>
          <Link path to="/register" style={linkStyle}>Signup</Link>
        </div>
      </nav>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;