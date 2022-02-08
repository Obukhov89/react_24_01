import { useState , useEffect} from "react";
import Form from "./Form";
import Message from "./Message";
import styled from 'styled-components';


const Div = styled.div
`
text-align: center;
`


const IndexForm = () => {
  const [messageList, setMessageList] = useState([
    { author: "Robot", message: "Привет! Это робот" },
  ]);

  function handleMessage({ author, message }) {
    if (!author) author = "anonim";

    setMessageList((prevValue) => [...prevValue, { author, message }]);
  };

  useEffect (() => {
    const lastMessage = messageList[messageList.length -1];

    if (lastMessage?.author && lastMessage?.author!=='Robot'){
        setTimeout(() => {
            setMessageList ((state) => [
                ...state,
                {author:'Robot', message : `Ну что молчишь на меня, ${lastMessage.author}?`}
            ])
        },9000)
    }
},[messageList]);

  return (
    <Div>
      
      <Message messageList={messageList} />
      <Form messageChange={handleMessage} />
    </Div>
  );
};

export default IndexForm;
