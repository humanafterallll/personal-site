import styled from "styled-components";

//--------------------------------------------------------------------------------------------
// Style
//--------------------------------------------------------------------------------------------
const Container = styled.div<{ $dimension?: string; $cursor?: boolean }>`
  height: calc(var(--d-dimension) * 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 0;
  @media (max-height: 30rem) {
    height: calc(var(--d-dimension) * 0.55);
  }
  @media (min-width: 75rem) {
    height: calc(var(--d-dimension) * 0.6);
  }
`;

const SVG = styled.svg`
  height: 100%;
`;

const Path = styled.path`
  fill: #fff;
`;

export const Icon = () => {
  return (
    <Container
      onClick={() =>
        window.open(
          "https://www.linkedin.com/in/davide-macciocchi-5b86aa12b/",
          "_blank"
        )
      }
    >
      <SVG viewBox="0 0 64.23 64.64">
        <g>
          <Path d="m59.49,0H4.75C2.13,0,0,2.07,0,4.63v55.38c0,2.56,2.13,4.63,4.75,4.63h54.74c2.62,0,4.75-2.07,4.75-4.63V4.63c0-2.56-2.13-4.63-4.75-4.63ZM19.47,54.11h-9.7v-29.19h9.7v29.19Zm-4.85-33.17h-.06c-3.26,0-5.36-2.24-5.36-5.04s2.17-5.04,5.49-5.04,5.36,2.18,5.42,5.04c0,2.8-2.11,5.04-5.49,5.04Zm39.83,33.17h-9.7v-15.62c0-3.92-1.4-6.6-4.91-6.6-2.68,0-4.28,1.81-4.98,3.55-.26.62-.32,1.5-.32,2.37v16.3h-9.7s.13-26.45,0-29.19h9.7v4.13c1.29-1.99,3.59-4.82,8.74-4.82,6.38,0,11.17,4.17,11.17,13.14v16.74Zm-19.98-24.96s.04-.07.06-.1v.1h-.06Z" />
        </g>
      </SVG>
    </Container>
  );
};
