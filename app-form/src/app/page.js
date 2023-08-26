'use client'
import styles from './page.module.css'
import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  //Declara uma nova variável dados como state e atribui um objeto
  const [data, setData] = useState({
    name: '',
    email: '',
    subject: '',
    content: ''
  })

  //State que vai receber a mensagem
  const [msg, setMsg] = useState("")

  //Recebe os dados dos campos do formulário
  const valorInput = e => setData({...data, [e.target.name]: e.target.value})

  //Executa a função quando clicar no botão
  const sendData = async(e) => {
    //Bloquea o recarregamento da página
    e.preventDefault();
    //Manipula os dados recebidos, por exemplo, envia para api
    //Cria a constante com os dados do cabeçalho
    const headers = {
      'headers': {
        //Indica que será enviado os dados em formato de objeto
        'Content-Type': 'application/json'
      }
    }
    //Faz a requisição para o servidor
    await axios.post('http://localhost:8080/message', data, headers).then((response) => {//Acessa o then quando o status retornar 200
        setMsg(response.data.message)
    }).catch((err) => {
        setMsg("response.data.message")
    })
  }

  return (
    <main >
      <form onSubmit={sendData} className='form'>
        <fieldset>
          <legend>Fórmulatio Cadastro</legend>
          <label>Nome</label>
          <div>
            <input type="text" name='name' placeholder="Informe o nome:" onChange={valorInput}/>
          </div>
          <label>Email</label>
          <div>
            <input type="email" name='email' placeholder="Informe o email:" onChange={valorInput}/>
          </div>
          <label>Assunto</label>
          <div>
            <input type="text" name='subject' placeholder="Informe o assunto:" onChange={valorInput}/>
          </div>
          <label>Conteúdo</label>
          <div>
            <textarea name="content" cols="30" rows="10" placeholder="Informe o conteúdo:" onChange={valorInput}/>
          </div>
          <button type='submit'>Enviar</button>
        </fieldset>
      </form>
    </main>
  )
}
