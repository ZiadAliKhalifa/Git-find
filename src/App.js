import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import RepositoryInfo from "./components/RepositoryInfo/RepositoryInfo";
import Container from './components/Container/Container';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<Container />} />
          <Route path="/repository" element={<RepositoryInfo />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
