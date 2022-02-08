import { useState, useRef } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';




const Form = ( {messageChange} ) => {

     const [author, setAuthor] = useState("");
     const [message, setMessage] = useState("");

     const InputMessage = useRef(null);

     const formHandler = (e) => {
        e.preventDefault();
        messageChange( {author,message} );
        setAuthor("");
        setMessage("");

        InputMessage.current.focus();
     }

     return(
          <form onSubmit = { formHandler }>
                <TextField label = 'Автор:' variant="filled"  color="primary" focused  sx = {{margin: 'auto 5px',}} type = "text" value = { author } 
                            onChange = {(e) => setAuthor(e.target.value)} name="author" />

                <TextField label='Сообщение:' variant="filled"  color="primary" focused  sx = {{margin: 'auto 5px',}} type = "text" value = {message} 
                            onChange={ (e) => setMessage(e.target.value)} ref = {InputMessage} name = "message" />

                <Button variant="contained" sx = {{margin: '20px 5px',}} type = "submit" value = "Отправить">Отправить</Button>
          </form>
     );
}

export default Form;