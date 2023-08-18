import { useState } from "react"
import React from "react"

function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e) {
      e.preventDefault()
      // Login backend...
      props.toggle()
  }

  return (
<form onSubmit={handleLogin}>
  <div className="form-control w-full max-w-xs">
    <label className="label">
      <span className="label-text">Felhasználónév</span>
    </label>
    <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="" className="input input-bordered w-full max-w-xs" />
    <label className="label">
    <span className="label-text">‎</span>
    </label>
  </div>
  <div className="form-control w-full max-w-xs">
    <label className="label">
      <span className="label-text">Jelszó</span>
    </label>
    <input type="password" placeholder="********" value={password} onChange={e => setPassword(e.target.value)} className="input input-bordered w-full max-w-xs" />
    <label className="label">
      <span className="label-text-alt">Még nincs fiókja?</span>
      <span className="label-text-alt"><a href="/" className='hover:underline'>Regisztráció</a></span>
    </label>
  </div>
  <div className="form-control w-full max-w-xs">
    <button type="submit" className="btn">Bejelentkezés</button>
  </div>
</form>
  )
}

export default Login