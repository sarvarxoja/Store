import '../styles/login.scss'
import useHttp from '../hooks/useHttp'
import { useState } from 'react'
const Login = () => {
  const { request } = useHttp()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [checked, setChecked] = useState(false)
  const [message, setMessage] = useState('')



  const handleName = (e) => {
    setName(e.target.value)
  }

  const handlePasswd = (e) => {
    setPassword(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChecked = () => {
    setChecked(!checked)
  }
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


  const handleSubmit = (e) => {
    e.preventDefault()
    //check Password

    if (password.length < 8) {
      setMessage("Parol 8 belgidan kam ")
      setTimeout(() => {
        setMessage('')
      }, 2500);
    }
    // check Email
    if (!re.test(email)) {
      setMessage('Email xato !!!')
    }

    const newUsers = {
      name, email, password
    }

    request(
      "http://localhost:5000/users",
      "POST",
      JSON.stringify(newUsers)
    ).then(
      alert("seccessfull validation "),

      setName(""),
      setPassword(""),
      setEmail("")
    );

  }
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__boxes">

          <form onSubmit={handleSubmit} className='login__form'>
            <h2 className='login__title'>Login</h2>
            <input name='name' required onChange={handleName} value={name} className='login__name' type="text" placeholder='Ismingiz ...' />
            <input name='email' required onChange={handleEmail} value={email} className='login__name' type="email" placeholder='Emailingiz ...' />
            <input name='password' required onChange={handlePasswd} value={password} type="password" className='login__name' placeholder='Parolingiz...' />
            <p className='login__text'>{message}</p>
            <div>

              <input value={checked} onChange={handleChecked} id='checked' type="checkbox" /><label htmlFor="checked">
                Ommaviy offerta bilan tanishib chiqdim
              </label>
            </div>

            <input id={checked ? 'submit' : 'unsubmit'} required type="submit" className='login__submit intro__btn' value='Yuborish' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login