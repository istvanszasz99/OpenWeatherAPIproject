import React from 'react'
import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Navbar = () => {

  const [seenL, setSeenLog] = useState(false)
  const [seenR, setSeenReg] = useState(false)

  function togglePopLog () {
    setSeenLog(!seenL);
  };

  function togglePopReg () {
    setSeenReg(!seenR);
};

  return (
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a href="https://openweathermap.org" className="btn btn-ghost normal-case text-xl">OpenWeather</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href={() => false} onClick={togglePopLog}>Bejelentkezés</a>{seenL ? <Login toggle={togglePopLog} /> : null}</li>
      <li><a href={() => false} onClick={togglePopReg}>Regisztráció</a>{seenR ? <Register toggle={togglePopReg} /> : null}</li>
    </ul>
  </div> 
</div>
  )
}
export default Navbar

