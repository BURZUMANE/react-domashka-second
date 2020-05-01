
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`

`
export function Button({increment , value}){
    return(
    <StyledButton onClick={()=>increment(value)}>{value}</StyledButton>
  )};