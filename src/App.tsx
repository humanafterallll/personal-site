import { useState } from "react";
import styled from "styled-components";
import { DeveloperBadge, Icon } from ".";

//--------------------------------------------------------------------------------------------
// Theme
//--------------------------------------------------------------------------------------------
const white = "#f4f4f4";
const black = "#2c2c2d";

const theme = {
  light: {
    name: "light",
    mainColor: black,
    secondaryColor: white,
  },
  dark: {
    name: "dark",
    mainColor: white,
    secondaryColor: black,
  },
};

type ThemeType = {
  name: string;
  mainColor: string;
  secondaryColor: string;
};

//--------------------------------------------------------------------------------------------
// Style
//--------------------------------------------------------------------------------------------
const MainSection = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
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

const ImageContainerInner = styled.div<{ $color: string }>`
  position: relative;
  background-color: ${({ $color }) => $color};
  width: 100%;
  height: 100%;
  border-radius: calc(var(--d-distance) * 1.2);
  overflow: hidden;
`;

const ImageBorder = styled.div<{ $color: string, $themeName: string }>`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: calc(var(--d-distance) * 1.2);
  border: ${({ $color, $themeName }) =>
    $themeName === "light"
      ? `calc(var(--d-distance) * 0.5) solid ${$color}`
      : "unset"};
`;

const Picture = styled.img`
  width: 110%;
  height: 110%;
  object-fit: cover;
  object-position: top center;
  @media (min-width: 75rem) {
    width: 100%;
    height: 100%;
  }
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

const JobContainer = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
  padding: calc(var(--d-distance) * 0.8) calc(var(--d-distance) * 1.2);
  border-radius: calc(var(--d-distance) * 0.8);
  cursor: pointer;
`;

const Job = styled.p<{ $color: string }>`
  font-family: "White Rabbit", sans-serif;
  font-size: calc(var(--f-size) * 1.6);
  color: ${({ $color }) => $color};
  width: auto;
  @media (max-height: 30rem) {
    font-size: calc(var(--f-size) * 2);
  }
  @media (min-width: 75rem) {
    font-size: calc(var(--f-size) * 2);
  }
`;

const NameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: calc(var(--d-distance) * 1);
`;

const Name = styled.p<{ $color: string }>`
  font-family: "White Rabbit", sans-serif;
  font-size: calc(var(--f-size) * 3.8);
  color: ${({ $color }) => $color};
  width: 100%;
  text-align: center;
  line-height: 0.8;
  @media (max-height: 30rem) {
    font-size: calc(var(--f-size) * 5.5);
  }
  @media (min-width: 75rem) {
    text-align: left;
    font-size: calc(var(--f-size) * 6);
  }
`;

const ListContainer = styled.div`
  width: 100%;
  height: 100lvh;
  display: flex;
  flex-direction: column;
  row-gap: calc(var(--d-distance) * 1.5);
  @media (max-height: 30rem) {
    flex-direction: row;
    row-gap: unset;
  }
  @media (min-width: 75rem) {
    width: 50%;
    height: 55svh;
    flex-direction: row;
    row-gap: unset;
  }
`;

const ListContainerInner1 = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  row-gap: calc(var(--d-distance) * 2);
  @media (max-height: 30rem) {
    height: 100%;
    justify-content: center;
  }
  @media (min-width: 75rem) {
    width: 50%;
    height: 100%;
    padding-left: calc(var(--d-distance) * 4);
    padding-bottom: calc(var(--d-distance) * 2);
    align-items: flex-start;
    row-gap: calc(var(--d-distance) * 3);
  }
`;

const ListContainerInner2 = styled(ListContainerInner1)`
  justify-content: flex-start;
  @media (max-height: 30rem) {
    height: 100%;
    justify-content: center;
  }
  @media (min-width: 75rem) {
    justify-content: flex-end;
    row-gap: calc(var(--d-distance) * 3);
    padding-bottom: calc(var(--d-distance) * 2);
  }
`;

const ListItem = styled.p<{ $color: string }>`
  font-size: calc(var(--f-size) * 2.5);
  color: ${({ $color }) => $color};
  @media (max-height: 30rem) {
    font-size: calc(var(--f-size) * 4.3);
  }
  @media (min-width: 75rem) {
    font-size: calc(var(--f-size) * 3);
  }
`;

const Footer = styled.div<{ $color: string }>`
  width: 100%;
  background-color: ${({ $color }) => $color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: calc(var(--d-distance) * 1);
  padding: calc(var(--d-distance) * 1.5);
  @media (max-height: 30rem) {
    flex-direction: row;
  }
  @media (min-width: 75rem) {
    flex-direction: row;
  }
`;

const Email = styled.p<{ $color: string }>`
  font-size: calc(var(--f-size) * 1.1);
  color: ${({ $color }) => $color};
  width: 100%;
  text-align: center;
  cursor: pointer;
  @media (max-height: 30rem) {
    text-align: right;
    font-size: calc(var(--f-size) * 1.7);
  }
  @media (min-width: 75rem) {
    text-align: right;
    font-size: calc(var(--f-size) * 1.2);
  }
`;

//--------------------------------------------------------------------------------------------
// Component
//--------------------------------------------------------------------------------------------
export const App = () => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>(theme.dark);

  const badgeProps = {
    dimension: "calc(var(--d-dimension) * 1.2)",
    color: selectedTheme.mainColor,
  };

  return (
    <MainSection $color={selectedTheme.secondaryColor}>
      <ImageContainer>
        <ImageContainerInner $color={selectedTheme.mainColor}>
          <ImageBorder $themeName={selectedTheme.name} $color={selectedTheme.mainColor} />
          <Picture src={"/picture.webp"} />
        </ImageContainerInner>
      </ImageContainer>
      <MainContainer>
        <BadgeContainer>
          <DeveloperBadge {...badgeProps} />
        </BadgeContainer>
        <JobContainer
          $color={selectedTheme.mainColor}
          onClick={() =>
            setSelectedTheme(
              selectedTheme.name === "light" ? theme.dark : theme.light
            )
          }
        >
          <Job $color={selectedTheme.secondaryColor}>Web Developer</Job>
        </JobContainer>
        <NameContainer>
          <Name $color={selectedTheme.mainColor}>Davide</Name>
          <Name $color={selectedTheme.mainColor}>Macciocchi</Name>
        </NameContainer>
      </MainContainer>
      <ListContainer>
        <ListContainerInner1>
          <ListItem $color={selectedTheme.mainColor}>HTML</ListItem>
          <ListItem $color={selectedTheme.mainColor}>CSS</ListItem>
          <ListItem $color={selectedTheme.mainColor}>JavaScript</ListItem>
          <ListItem $color={selectedTheme.mainColor}>TypeScript</ListItem>
        </ListContainerInner1>
        <ListContainerInner2>
          <ListItem $color={selectedTheme.mainColor}>React</ListItem>
          <ListItem $color={selectedTheme.mainColor}>Node</ListItem>
          <ListItem $color={selectedTheme.mainColor}>Express</ListItem>
          <ListItem $color={selectedTheme.mainColor}>MySQL</ListItem>
        </ListContainerInner2>
      </ListContainer>
      <Footer $color={selectedTheme.mainColor}>
        <Icon color={selectedTheme.secondaryColor} />
        <Email
          $color={selectedTheme.secondaryColor}
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
