import { useState , useEffect} from "react";
import Form from "./Form";
import Message from "./Message";


const FormIndex = () => {
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
    <>
      
      <Message messageList={messageList} />
      <Form messageChange={handleMessage} />
    </>
  );
};

export default FormIndex;
