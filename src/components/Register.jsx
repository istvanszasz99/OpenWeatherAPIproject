import React from 'react'
import { useState } from 'react'

function Register(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleRegister(e) {
      e.preventDefault()
      // Register backend...
      props.toggle()
  }

  return (
<form onSubmit={handleRegister}>
  <div className="form-control w-full max-w-xs">
    <label className="label">
      <span className="label-text">Felhasználónév</span>
    </label>
    <input type="text" placeholder="" value={username} onChange={e => setUsername(e.target.value)} className="input input-bordered w-full max-w-xs" />
    <label className="label">
    <span className="label-text">‎</span>
    </label>
  </div>
  <div className="form-control w-full max-w-xs">
    <label className="label">
      <span className="label-text">Email cím</span>
    </label>
    <input type="email" placeholder="" value={email} onChange={e => setEmail(e.target.value)} className="input input-bordered w-full max-w-xs" />
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
    <span className="label-text">‎</span>
    </label>
  </div>
  <div className="form-control w-full max-w-xs">
    <label className="label">
      <span className="label-text">Jelszó újra</span>
    </label>
    <input type="password" placeholder="********" value={password} onChange={e => setPassword(e.target.value)} className="input input-bordered w-full max-w-xs" />
    <label className="label">
      <span className="label-text-alt">Már van fiókja?</span>
      <span className="label-text-alt"><a href="/" className='hover:underline'>Bejelentkezés</a></span>
    </label>
  </div>
  <div className="form-control w-full max-w-xs">
    <button type="submit" className="btn">Regisztráció</button>
  </div>
</form>
  )
}

export default Register