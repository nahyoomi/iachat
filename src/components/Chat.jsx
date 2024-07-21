import { useState } from "react";
import NewChatButton from "./NewChatButton";
import SearchInput from "./SearchInput";
import ChatCard from "./ChatCard";
import ChatBotHeader from "./ChatBotHeader";
import ChatArea from "./ChatArea";
import ChatFooter from "./ChatFooter";

const Chat = () => {
    const [ /* searchTerm */, setSearchTerm ] = useState("");
    
    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleNewChat = () => {
        console.log("Nueva conversación");
    }

    const chatsMock = [
        {
          id: 1,
          title: "General Discussion",
          messageCount: 120,
          lastEdited: "2023-04-01"
        },
        {
          id: 2,
          title: "Tech Talk",
          messageCount: 75,
          lastEdited: "2023-03-28"
        },
        {
          id: 3,
          title: "Random",
          messageCount: 200,
          lastEdited: "2023-04-03"
        }
      ];

  return (
    <div className="chat">
        <div className="sidebar">
            <SearchInput  onChange = {handleSearch} />
            <NewChatButton onClick= {handleNewChat}/>
            {chatsMock.map(chat => (
                <ChatCard
                    key={chat.id}
                    title={chat.title}
                    messageCount={chat.messageCount}
                    lastEdited={chat.lastEdited}
                />
            ))}
        </div> 
        <div className="chatbot">
            <ChatBotHeader />
            <ChatArea />
            <ChatFooter />
        </div>
    </div>
  );
};

export default Chat;
