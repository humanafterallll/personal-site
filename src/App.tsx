import styled from "styled-components";
import { Icon } from ".";

const MainSection = styled.div`
  width: 100svw;
  max-width: 120rem;
  min-height: 100svh;
  display: flex;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  background-color: yellowgreen;
  width: 100%;
  height: 45svh;
`;

const MainContainer = styled.div`
  background-color: aliceblue;
  width: 100%;
  height: 55svh;
  @media (orientation: landscape) {
    width: 50%;
    height: 55svh;
  }
`;

const ListContainer = styled.div`
  background-color: tomato;
  width: 100%;
  height: 100svh;
  @media (orientation: landscape) {
    width: 50%;
    height: 55svh;
  }
`;

const Footer = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: calc(var(--d-distance) * 1);
  padding: calc(var(--d-distance) * 1.5);
  @media (orientation: landscape) {
    flex-direction: row;
  }
`;

const EmailText = styled.p`
  font-family: "Consolas";
  font-size: calc(var(--f-size) * 1);
  color: white;
  width: 100%;
  text-align: center;
  @media (orientation: landscape) {
    text-align: right;
  }
`;

export const App = () => {

  return (
    <MainSection>
      <ImageContainer></ImageContainer>
      <MainContainer></MainContainer>
      <ListContainer></ListContainer>
      <Footer>
        <Icon />
        <EmailText>davide.macciocchi@live.com</EmailText>
      </Footer>
    </MainSection>
  );
};

export default App;
