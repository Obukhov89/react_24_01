import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';

const ChatList = () =>{

    const ChatList =
        [
            {name: 'Давай знакомиться', id: 1},
            {name: 'Дневная фиеста', id: 2 },
            {name: 'Вечерние посиделочки', id:3},
        ]

    return(
        
            <List sx={{width:'50%'}}>
               {ChatList.map((chat, idx)=>(<ListItem sx={{width:'50%'}}key={chat.id}><Link to={`/chats/${chat.id}`}>{chat.name}</Link></ListItem>))}
            </List>
        
    )
}

export default ChatList;