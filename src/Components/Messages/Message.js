import styled from 'styled-components';

const StyledP = styled.p
`

text-align: center;
margin: 10px  auto;
width: 200px;
height: 70px;
background-color:#00BFFF;
color: white;
border: 2px solid #696969;
border-radius: 10px;
`

const Message = ( {messageList} ) => {

    return(
        <>
            { messageList.map( (msg, idx) => { return  <div  key={idx}> <StyledP> {msg.author}: {msg.message} </StyledP> </div> } ) }
        </>
    )
}

export default Message;