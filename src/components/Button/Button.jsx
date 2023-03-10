import React from "react";
import PropTypes from 'prop-types';
import { ButtonMore, Container } from "./Button.styled";

export const Button = ({nextPage}) => {
  return (
      <Container>
      <ButtonMore type="button" onClick={() => nextPage()}>Load more</ButtonMore>
      </Container>
    )  
}

Button.propTypes = {
  nextPage: PropTypes.func.isRequired,
};