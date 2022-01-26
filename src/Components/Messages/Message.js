import styled from 'styled-components';

const StyledP = styled.p
`
text-align: center;
margin: 0 auto;
width: 200px;
height: 70px;
background-color:#00BFFF;
color: white;
border: 2px solid #696969;
border-radius: 10px;
`

const Message = ( {text} ) => {

    return(
        <StyledP>Привет, {text}!</StyledP>
    )
}

export default Message;