import axios from "axios";

const api = axios.create({
    baseURL: 'https://blogpessoal-h5ho.onrender.com'
})

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    console.log(dados)
    const resposta = await api.post(url, dados)
    console.log (resposta)
    setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}