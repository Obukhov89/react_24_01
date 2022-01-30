import { useState } from "react";

const Form = ( {messageChange} ) => {

     const [author, setAuthor] = useState("");
     const [message, setMessage] = useState("");

     const formHandler = (e) => {
        e.preventDefault();
        messageChange( {author,message} );
        setAuthor("");
        setMessage("");
     }

     return(
          <form onSubmit = { formHandler }>
              <label> Автор:
                  <input type = "text" value = { author } onChange = {(e) => setAuthor(e.target.value)} name="author" />
              </label>
              <label> Сообщение:
                <input type = "text" value = {message} onChange={ (e) => setMessage(e.target.value)} name = "message" />
              </label>
              <button type = "submit" value = "Отправить">Отправить</button>
          </form>
     );
}

export default Form;