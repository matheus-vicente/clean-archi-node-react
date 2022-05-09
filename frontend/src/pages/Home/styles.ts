import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
`;

export const Content = styled.div`
  height: 100vh;
  display: flex;
`;

export const ContentLeft = styled.section`
  flex: 4;

  display: grid;
  place-content: center;

  text-align: center;
  color: var(--white);
  background-color: var(--grey-800);

  h1 {
    font-size: 2.75rem;
  }

  span {
    font-weight: 300;
    font-size: 2rem;
  }
`;

export const ContentRight = styled.section`
  flex: 6;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--grey-50);

  form {
    display: flex;
    flex-direction: column;

    padding: 2rem 2rem;
    background-color: var(--white);

    .form-control {
      label {
        display: block;
        margin-bottom: 0.5rem;
      }

      input {
        outline: 1px;
        width: 25rem;
        padding: 0.5rem 0.8rem;
      }
    }

    .form-control + .form-control {
      margin-top: 1.25rem;
    }

    .signup {
      margin-top: 0.8rem;
    }
  }
`;
