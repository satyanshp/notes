import "./App.css";
import ChatList from "./components/ChatList";
import Chats from "./components/Chats";
import { useContext } from "react";
import { ChatContext } from "./context/chatsContext";

function App() {
  const { selected } = useContext(ChatContext);
  return (
    <div className="App">
      {
        window.innerWidth>600?
        <>
          <div className="chatList">
            <ChatList />
          </div>
          <div className="chats">
            <Chats />
          </div>
        </>:
        <>
          {(selected||selected===0) ? (
            <div className="chats">
              <Chats />
            </div>
          ) : (
            <div className="chatList">
              <ChatList />
            </div>
          )}
        </>
      }
    </div>
  );
}

export default App;
