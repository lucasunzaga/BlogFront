import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import FormTema from './components/temas/formtema/formtema';
import ListaTemas from './components/temas/listatemas/listatemas';
import { AuthProvider } from './contexts/authcontext';
import Cadastro from './pages/cadastro/cadastro';
import Home from './pages/home/home';
import Login from './pages/login/login';
import DeletarTema from './components/temas/deletartemas/deletartema';
import ListaPostagens from './components/postagens/listapostagens/listapostagens';
import FormPostagem from './components/postagens/formpostagem/formpostagem';
import DeletarPostagem from './components/postagens/deletarpostagem/deletarpostagem';
import Perfil from './pages/perfil/perfil';
import {ToastContainer} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <AuthProvider>
            <ToastContainer />
                <BrowserRouter>
                    <Navbar />
                    <div className="min-h-[80vh]">
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/cadastro" element={<Cadastro />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/temas" element={<ListaTemas />} />
                            <Route path="/cadastrartema" element={<FormTema />} />
                            <Route path="/editartema/:id" element={<FormTema />} />
                            <Route path="/deletartema/:id" element={<DeletarTema />} />
                            <Route path="/postagens" element={<ListaPostagens />} />
                            <Route path="/cadastrarpostagem" element={<FormPostagem />} />
                            <Route path="/editarpostagem/:id" element={<FormPostagem />} />
                            <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
                            <Route path="/perfil" element={<Perfil />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;
