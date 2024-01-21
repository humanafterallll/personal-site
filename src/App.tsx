import styled from "styled-components";
import { DeveloperBadge, Icon } from ".";

const MainSection = styled.div`
  width: 100svw;
  max-width: 120rem;
  min-height: 100svh;
  display: flex;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 45svh;
  padding: calc(var(--d-distance) * 1.5) calc(var(--d-distance) * 1.5) 0
    calc(var(--d-distance) * 1.5);
  @media (max-height: 30rem) {
    height: 100svh;
    width: 50%;
    padding: calc(var(--d-distance) * 1.5);
  }
  @media (min-width: 75rem) {
    padding: calc(var(--d-distance) * 2) calc(var(--d-distance) * 2) 0
      calc(var(--d-distance) * 2);
  }
`;

const ImageContainerInner = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  border-radius: calc(var(--d-distance) * 1.2);
  overflow: hidden;
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 55svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: calc(var(--d-distance) * 2);
  padding: calc(var(--d-distance) * 1.5);
  @media (max-height: 30rem) {
    height: 100svh;
    width: 50%;
  }
  @media (min-width: 75rem) {
    width: 50%;
    height: 55svh;
    padding: calc(var(--d-distance) * 2);
    align-items: flex-start;
  }
`;

const BadgeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 75rem) {
    justify-content: flex-start;
  }
`;

const JobContainer = styled.div`
  background-color: black;
  padding: calc(var(--d-distance) * 0.8) calc(var(--d-distance) * 1.2);
  border-radius: calc(var(--d-distance) * 0.8);
`;

const Job = styled.p`
  font-family: "White Rabbit", sans-serif;
  font-size: calc(var(--f-size) * 1.6);
  color: white;
  width: auto;
`;

const NameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: calc(var(--d-distance) * 1);
`;

const Name = styled.p`
  font-family: "White Rabbit", sans-serif;
  font-size: calc(var(--f-size) * 3.8);
  color: black;
  width: 100%;
  text-align: center;
  line-height: 0.8;
  @media (min-width: 75rem) {
    text-align: left;
    font-size: calc(var(--f-size) * 6);
  }
`;

const ListContainer = styled.div`
  width: 100%;
  height: 100svh;
  display: flex;
  flex-direction: column;
  @media (min-width: 75rem) {
    width: 50%;
    height: 55svh;
    flex-direction: row;
  }
`;

const ListContainerInner = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 75rem) {
    width: 50%;
    height: 100%;
    padding: calc(var(--d-distance) * 2);
    align-items: flex-start;
  }
`;

const ListItem = styled.p`
  font-size: calc(var(--f-size) * 2.5);
  color: black;
  @media (min-width: 75rem) {
    font-size: calc(var(--f-size) * 3);
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
  @media (min-width: 75rem) {
    flex-direction: row;
  }
`;

const Email = styled.p`
  font-size: calc(var(--f-size) * 1.1);
  color: white;
  width: 100%;
  text-align: center;
  cursor: pointer;
  @media (max-height: 30rem) {
    font-size: calc(var(--f-size) * 1.7);
  }
  @media (min-width: 75rem) {
    text-align: right;
    font-size: calc(var(--f-size) * 1.2);
  }
`;

export const App = () => {
  const badgeProps = {
    dimension: "calc(var(--d-dimension) * 1.2)",
    backgroundColor: "red",
  };

  return (
    <MainSection>
      <ImageContainer>
        <ImageContainerInner>
          <Picture src={"/picture.jpg"} />
        </ImageContainerInner>
      </ImageContainer>
      <MainContainer>
        <BadgeContainer>
          <DeveloperBadge {...badgeProps} />
        </BadgeContainer>
        <JobContainer>
          <Job>Web Developer</Job>
        </JobContainer>
        <NameContainer>
          <Name>Davide</Name>
          <Name>Macciocchi</Name>
        </NameContainer>
      </MainContainer>
      <ListContainer>
        <ListContainerInner>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>TypeScript</ListItem>
        </ListContainerInner>
        <ListContainerInner>
          <ListItem>React</ListItem>
          <ListItem>Node</ListItem>
          <ListItem>Express</ListItem>
          <ListItem>MySQL</ListItem>
        </ListContainerInner>
      </ListContainer>
      <Footer>
        <Icon />
        <Email
          onClick={() =>
            window.open("mailto:davide.macciocchi@live.com", "_self")
          }
        >
          davide.macciocchi@live.com
        </Email>
      </Footer>
    </MainSection>
  );
};

export default App;
