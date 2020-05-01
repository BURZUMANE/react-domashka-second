
import React from "react";
import styled from "styled-components";
import {Button} from "../Button/Button"
const StyledButtons = styled.div`

`

export const CounterPanel = ({good, neutral, bad, increment})=>{
  return(
  <StyledButtons>
    <Button increment={increment} value={'good'}/>
    <Button increment={increment} value={'neutral'}/>
    <Button increment={increment} value={'bad'}/>
  </StyledButtons>
)};