import styled from "styled-components";
const StyledWrapper = styled.div`
max-width:300px;
margin:0 auto;
ul {
  list-style: none;
  padding:0;
}
li{
    width:300px;
    display:flex;
    justify-content:space-between;
}
form {
  display: flex;
  flex-direction: column;
}
input{
    width:300px;
}
button{
}
`;

export default StyledWrapper;