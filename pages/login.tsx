import styled from "styled-components";
import React from "react";

const login = () => {
  const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `;

  return (
    <Container>
      <Title>Login</Title>
    </Container>
  );
};

export default login;
