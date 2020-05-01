import React, { Fragment } from "react";
import styled from "styled-components";

const StyledInfoPanel = styled.ul`
  list-style: none;
`;

export const ShowRevs = ({ info }) => {
  const countTotalFeedback = (obj) =>
    Object.values(obj).reduce((acc, item) => (acc += item), 0);
  return (
    <Fragment>
      <h2>Statistics</h2>
      <StyledInfoPanel>
        <li>Good: {info.good}</li>
        <li>Neutral: {info.neutral}</li>
        <li>Bad: {info.bad}</li>
        <li>Total: {countTotalFeedback(info)}</li>
        <li>
          Positive: {Math.round((info.good / countTotalFeedback(info)) * 100)}%
        </li>
      </StyledInfoPanel>
    </Fragment>
  );
};

export default ShowRevs;
