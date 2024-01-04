import styled from "styled-components";
import { Icon, Gary } from ".";

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: calc(var(--d-distance) * 3);
  @media (min-width: 35rem) {
    column-gap: calc(var(--d-distance) * 4);
  }
`;

const IconContainer = styled.div`
  min-height: calc(var(--d-dimension) * 3.7);
  @media (min-width: 35rem) {
    min-height: calc(var(--d-dimension) * 5);
  }
`;

export const App = () => {
  return (
    <Container>
      <Gary />
      <IconContainer>
        <Icon />
      </IconContainer>
    </Container>
  );
};

export default App;
