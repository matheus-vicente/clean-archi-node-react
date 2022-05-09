import styled from "styled-components";

export const Container = styled.button`
  padding: 1rem;
  margin-top: 2rem;
  font-size: 1.125rem;

  border: none;

  color: var(--grey-50);
  background-color: var(--teal);

  transition: all 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    filter: brightness(0.6);
  }
`;
