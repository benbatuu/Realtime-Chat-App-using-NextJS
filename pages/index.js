import React, { useContext } from "react";
import { Context } from '../context';
import { useRouter } from "next/router";
import axios from 'axios';
export default function Auth() {

  const { username,setUsername,secret,setSecret } = useContext(Context);
  const router = useRouter();
  function onSubmit(e){
    e.preventDefault();

    if(username.length === 0 || secret.length === 0 ) return 0;

    axios.put(
      'https://api.chatengine.io/users/',
      {username,secret},
      {headers: { 
        'PRIVATE-KEY': '99cad3b1-1809-4736-901a-09b31053898b'
      },}
      ).then(r => router.push('/chats'))
  }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={e => onSubmit(e)}>
          <div className="auth-title">NextJS Chat App</div>
          
          <div className="input-container">
            <input
              placeholder="E-mail Address"
              className="text-input"
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="**********"
              className="text-input"
              onChange={e => setSecret(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login / SignUp
          </button>
        </form>
      </div>
    </div>
  );
}
