import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import Cadastro from './pages/cadastro/cadastro';

function App() {
    return (
        <Router>
            <Routes>
                {/* Página inicial: Login */}
                <Route path="/" element={<Login />} />

                {/* Página de cadastro */}
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </Router>
    );
}

export default App;