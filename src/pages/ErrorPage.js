import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import error from "../assets/error.svg";
const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <img src={error} alt="error" />
        <h3>Sorry, this page doesn't exist</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  section img {
    width: 500px;
    height: 300px;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
