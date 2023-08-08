import React, { useState, useEffect, useContext } from "react";
import { Context } from '../context';
import { useRouter } from 'next/router';
import dynamic from "next/dynamic";


const ChatEngine = dynamic(() =>
  import ("react-chat-engine").then((module) => module.ChatEngine)
);

const MessageFormSocial = dynamic(() =>
  import ("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Chats() {
  
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if(typeof document !== null){
      setShowChat(true);
    }
  })

  if(!showChat) return <div />;

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine 
          height=' calc(100vh - 200px)'
          projectID = 'efdf46d1-6d2c-4544-9cd1-0b6ec5c26f4e'
          userName={username}
          userSecret={secret}
        />
      </div>
    </div>
  );
}
