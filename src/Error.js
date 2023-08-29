import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Error() {
  return (
    <Wrapper className="flex justify-center">
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <Link to="/home">
            <Button className="hover:border-none hover:bg-lime-100 hover:text-black">Go Back to Home</Button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .container {
    padding: 2rem 0;
    text-align: center;

    h2 {
      font-size: 5rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;

const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: white;
  color: black;
  padding: 1.4rem 2.4rem;
  border: 4px solid black;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;

export default Error;
