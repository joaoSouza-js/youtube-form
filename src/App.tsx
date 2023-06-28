import styles from './styles/app.module.css'
import {FormEvent, useState} from 'react'

interface FormProps {
  email: string,
  password: string
}

export function App() {
  //estados
  const [email,setEmail ] = useState<null | string>()
  const [password,setPassword] = useState<null | string>()
 
  function handleSubmit(event: FormEvent<HTMLFormElement> ){
    event.preventDefault()
    const formData = {
      email,
      password
    }
   
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Formulário</h1>
        <input 
          name='email' 
          type="email" 
          required
          placeholder='Digite o seu Email'
          onChange={event=> setEmail(event?.target.value)} 
        />
        <input 
          name='password'
          type="password" 
          required
          placeholder='Digite a sua Senha' 
          onChange={event=> setPassword(event?.target.value)}
        />
        <button  type="submit">Cadastrar</button>
      </form>


  )
}

