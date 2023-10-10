import axios from "axios";
import { useEffect, useState } from "react";



const Chat = () => {

  const fetchChat = async () => {
    const data = await axios.get("/api/chat");
    const chats = data.data;
    setChat(chats)
    console.log(chats)
  };


  const [chat, setChat] = useState([]);
  useEffect(() => {
    fetchChat();
  }, []);
  return <div>
   {
    chat.map((chat,index) =>{
      return (<div key={index}>{chat.chatName}</div>)
    })
   }
  </div>;
};

export default Chat;
