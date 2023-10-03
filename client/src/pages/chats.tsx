import axios from "axios";
import { useEffect, useState } from "react";

const chatPage = () => {
  const [chats, setChats] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/");

    setChats(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {chats.map((chat, index) => (
        <div key={index}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default chatPage;
