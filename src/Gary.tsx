import styled from "styled-components";

//--------------------------------------------------------------------------------------------
// Style
//--------------------------------------------------------------------------------------------
const Container = styled.div<{ $dimension?: string; $cursor?: boolean }>`
  height: calc(var(--d-dimension) * 3);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 35rem) {
    height: calc(var(--d-dimension) * 4);
  }
`;

const SVG = styled.svg`
  height: 100%;
`;

const Path1 = styled.path`
  fill: none;
  stroke: #231f20;
  stroke-miterlimit: 10;
  stroke-width: 1.32px;
  stroke-linecap: round;
`;

const Path2 = styled.path`
  fill: none;
  stroke: #231f20;
  stroke-miterlimit: 10;
  stroke-width: 1.32px;
`;

const Path3 = styled.path`
  fill: #cce954;
`;

const Path4 = styled.path`
  fill: #f2b8d0;
`;

const Path5 = styled.path`
  fill: #7dcbb1;
`;

const Path7 = styled.path`
  fill: #e20005;
`;

const Path8 = styled.path`
  fill: #231f20;
`;

const Ellipse1 = styled.ellipse`
  fill: #1f5aa6;
`;

const Ellipse2 = styled.ellipse`
  fill: #fe2606;
`;

const Ellipse3 = styled.ellipse``;

const Circle = styled.circle``;

export const Gary = () => {
  return (
    <Container>
      <SVG viewBox="0 0 173.57 149.14">
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            <g>
              <g>
                <Path4
                  d="m66.15,138.18c-11.99,0-24.62-1.9-37.54-5.64l-.11-.03-.09-.06c-2.41-1.7-3.73-3.46-3.92-5.23-.14-1.29.31-2.57,1.33-3.82C9.12,102.36.66,81.99.66,62.85.66,26.82,24.08.66,56.34.66c13.37,0,26.9,7.58,37.12,20.8,9.97,12.89,15.69,29.49,15.69,45.54,0,19.95-2.37,31.99-6.76,46.92,7.48,1.74,11.97,5.7,13.33,11.76l.11.5-.46.23c-15.35,7.81-31.92,11.77-49.24,11.77Z"
                />
                <Path8
                  d="m56.34,1.32c28.06,0,52.15,32.88,52.15,65.67,0,20.12-2.48,32.37-6.93,47.41,7.66,1.61,12.17,5.41,13.52,11.41-15.39,7.83-31.71,11.7-48.94,11.7-12.02,0-24.47-1.88-37.36-5.61-4.03-2.83-4.73-5.66-2.11-8.49C15.78,109.76,1.32,87.74,1.32,62.85,1.32,24.93,26.52,1.32,56.34,1.32m0-1.32c-15.27,0-29.35,6.02-39.66,16.96C5.77,28.55,0,44.41,0,62.85c0,19.17,8.4,39.54,24.98,60.55-.9,1.26-1.29,2.56-1.15,3.88.21,2,1.59,3.87,4.2,5.71l.18.13.21.06c12.98,3.76,25.68,5.66,37.72,5.66,17.42,0,34.09-3.98,49.54-11.84l.92-.47-.23-1c-1.38-6.14-5.81-10.21-13.15-12.09,4.18-14.37,6.59-26.83,6.59-46.44,0-16.19-5.77-32.94-15.83-45.94C83.64,7.67,69.92,0,56.34,0h0Z"
                />
              </g>
              <Ellipse1 cx="11.97" cy="64.8" rx="4.48" ry="6.09" />
              <Ellipse1
                cx="38.66"
                cy="19.45"
                rx="7.89"
                ry="5.56"
                transform="translate(-3.73 10.71) rotate(-15.06)"
              />
              <Ellipse1
                cx="65.31"
                cy="40.43"
                rx="5.56"
                ry="7.89"
                transform="translate(-10.67 51.68) rotate(-40.18)"
              />
              <Ellipse1
                cx="81.46"
                cy="69.8"
                rx="4.43"
                ry="7.21"
                transform="translate(-24.95 56.22) rotate(-33.32)"
              />
              <Ellipse1
                cx="17.13"
                cy="43.34"
                rx="6.17"
                ry="4.08"
                transform="translate(-28.97 36.5) rotate(-60)"
              />
              <g>
                <Path7
                  d="m64.91,125.2c-3.6,12.29-10.69,16.4-16.01,17.68l-2.59-10.73c7.5-1.81,11.27-15.44,9.16-33.16-2.23-18.78-10.65-35.25-18.01-35.25-1.41,0-5.17,0-6.74,6.81-1.94,8.38,1.32,17.84,3.52,20.02,1-.98,2.44-3.18,3.45-5.33l6.28,10.88c-2.93,3.85-6.15,5.8-9.6,5.8-9.55,0-15.25-13.18-15.25-25.92,0-4.17.65-10.18,3.75-15.19,3.23-5.22,8.41-8.09,14.6-8.09,16.22,0,26.39,23.31,28.97,44.97.86,7.24,1.3,17.9-1.52,27.51Z"
                />
                <Path7 d="m43.97,96.13l-6.28-10.88" />
              </g>
            </g>
            <g>
              <Path3
                d="m170.27,135.62s-4.11,7.64-10.2,7.64-3.97-.65-7.52-.65-13.5,3.46-18,3.46-4.96-.9-8-.9-10.76,1.69-14.71,1.69-10.82-2.31-14.98-1.86c-4.17.45-7.75,2.03-10.76,2.03s-5.91-2.29-11.66-2.26c-9.41.04-10.26,3.04-15.89,3.04-9.63,0-8.71-3.77-19.86-3.77-7.34,0-8.51-.16-13.05-2.99-3.03-1.88-6.04-.52-7.93-.52-1.48,0-4.02-.73-4.02-3.54s3.72-3.04,5.3-3.04c.61,0,2.39-.64,5.02-1.43,3.03,1.57,3.56,3.42,6.64,4.78,3.08,1.35,8.41,1.1,11.92,1.1s9,.85,12.8.85,10.43-1.44,16.52-1.52c6.09-.08,8.96,2.2,16.82,2.2,20.54,0,23.11-5.53,32.24-5.53,11.79,0,17.31,3.5,22.36,3.5,8.81,0,15.99-5.63,15.99-5.63,1.23,1.7,3.22,3.35,10.98,3.35Z"
              />
              <Path8
                d="m126.46,122.86c4,0,7.52,2.08,11.41,2.14.29,0,.6,0,.93,0,1.27,0,2.76-.03,4.3-.03,3.3,0,6.81.12,8.81.86,3.16,1.18,5.18,3.21,6.59,5.24,1.41,2.03,2.2,4.54,11.78,4.54,0,0-4.11,7.63-10.2,7.63s-3.97-.65-7.52-.65-13.49,3.47-18,3.47-4.96-.9-8-.9-10.76,1.69-14.71,1.69c-3.59,0-9.62-1.92-13.82-1.92-.41,0-.8.02-1.17.06-4.17.45-7.75,2.03-10.76,2.03s-5.88-2.25-11.56-2.25c-.04,0-.07,0-.11,0-9.41.05-10.25,3.04-15.89,3.04-9.63,0-8.71-3.78-19.86-3.78-7.34,0-8.51-.16-13.04-2.99-1.24-.77-2.47-1-3.63-1-1.67,0-3.19.48-4.3.48-1.47,0-4.01-.73-4.01-3.54s3.72-3.04,5.3-3.04,10.99-4.28,22.71-4.28,21.75,3.66,32.96,3.66,17-3.74,19.04-5.92c2.67-2.84,7.56-3.85,11.12-3.85.54,0,1.04.02,1.5.07,1.47.14,2.98.19,4.48.19,6.28,0,12.44-.97,15.67-.97m0-1.32c-1.41,0-3.3.17-5.49.37-2.93.27-6.57.6-10.17.6-1.56,0-3.02-.06-4.35-.19-.51-.05-1.06-.07-1.63-.07-3.9,0-9.13,1.12-12.08,4.27-.86.92-5.79,5.5-18.08,5.5-5.43,0-10.51-.87-15.89-1.78-5.43-.92-11.03-1.88-17.07-1.88-8.78,0-16.24,2.33-20.25,3.58-1.07.33-2.18.68-2.48.7-5.96,0-6.6,3.05-6.6,4.37,0,3.34,2.77,4.86,5.34,4.86.61,0,1.26-.11,1.94-.22.76-.13,1.55-.26,2.36-.26,1.12,0,2.05.25,2.93.8,4.8,2.99,6.2,3.19,13.74,3.19,5.53,0,7.94.96,10.27,1.9,2.31.92,4.7,1.88,9.59,1.88,2.7,0,4.42-.63,6.23-1.31,2.16-.8,4.61-1.71,9.67-1.74h.1c3.08,0,5.28.71,7.22,1.33,1.48.48,2.87.92,4.34.92,1.76,0,3.62-.47,5.58-.96,1.7-.43,3.45-.87,5.32-1.07.31-.03.66-.05,1.03-.05,2.05,0,4.65.5,7.17.99,2.46.48,4.79.93,6.65.93,2.2,0,5.37-.48,8.43-.94,2.55-.38,4.95-.75,6.27-.75,1.23,0,1.95.16,2.86.35,1.18.26,2.52.55,5.14.55s6.49-.98,10.3-1.93c3.04-.76,6.19-1.54,7.7-1.54,1.37,0,1.75.1,2.22.22.79.2,1.68.43,5.3.43,6.8,0,11.18-7.99,11.36-8.33l1.05-1.95h-2.22c-8.08,0-9.22-1.74-10.33-3.43-.12-.18-.24-.36-.36-.54-1.91-2.75-4.27-4.62-7.21-5.72-2.23-.84-5.94-.95-9.27-.95-.81,0-1.61,0-2.37.01-.68,0-1.33.01-1.93.01-.32,0-.62,0-.91,0-1.73-.03-3.42-.5-5.21-1.01-1.96-.56-4-1.13-6.22-1.13h0Z"
              />
              <Path5
                d="m138.78,125.01c-8.95-19.81-15.24-46.76-18.45-81.98-6.13-1.24-11-.1-14.46,3.72,13.36,22.27,18.37,49.1,16.23,79.84,6.7,2.71,12.33,2.38,16.68-1.57Z"
              />
              <Path5
                d="m158.3,44.4c-4.83,35.24-9.03,68.93-4.77,82.18-4.5,2.11-8.21,1.58-11.15-1.6,6.99-32.15,7.12-62.97,3.84-81.52,4.4-1.49,8.45-1.32,12.09.94Z"
              />
              <Path2
                d="m105.87,46.74c13.36,22.27,18.37,49.1,16.23,79.84"
              />
              <Path2
                d="m158.3,44.4c-4.74,34.58-8.87,67.68-5,81.42.13.45.41.84.81,1.08,1.95,1.16,3.34,2.67,4.39,4.18"
              />
              <Path2
                d="m120.33,43.02c3.15,34.62,9.29,61.25,17.99,80.96.27.62.9,1.02,1.58,1.01h1.11c.8-.01,1.5-.58,1.66-1.36,6.7-31.67,6.78-61.88,3.55-80.17"
              />
              <Path5
                d="m159.3,132.27s-7.18,5.63-15.99,5.63c-5.04,0-10.57-3.5-22.36-3.5-9.13,0-11.7,5.53-32.24,5.53-7.86,0-10.73-2.28-16.82-2.2-6.09.08-12.72,1.52-16.52,1.52s-9.3-.85-12.8-.85-8.84.26-11.92-1.1c-3.09-1.35-3.61-3.21-6.64-4.78,4.18-1.24,10.5-2.86,17.69-2.86,11.72,0,21.75,3.66,32.96,3.66s17-3.74,19.04-5.91c3.07-3.27,9.09-4.11,12.62-3.78,7.66.71,16.14-.78,20.14-.78s7.52,2.08,11.41,2.14,10.88-.34,14.03.85c3.16,1.18,5.18,3.21,6.59,5.24.27.39.52.79.8,1.19Z"
              />
              <Path1
                d="m105.87,46.74c13.36,22.27,18.37,49.1,16.23,79.84"
              />
              <g>
                <g>
                  <Path3
                    d="m153.71,45.6c-10.59,0-19.2-8.06-19.2-17.96s8.61-17.96,19.2-17.96,19.2,8.06,19.2,17.96-8.61,17.96-19.2,17.96Z"
                  />
                  <Path8
                    d="m153.71,10.34c10.24,0,18.54,7.74,18.54,17.3s-8.3,17.3-18.54,17.3-18.54-7.74-18.54-17.3,8.3-17.3,18.54-17.3m0-1.32c-10.95,0-19.86,8.35-19.86,18.62s8.91,18.62,19.86,18.62,19.86-8.35,19.86-18.62-8.91-18.62-19.86-18.62h0Z"
                  />
                </g>
                <Ellipse2 cx="160.99" cy="22.82" rx="6.82" ry="7.58" />
                <Circle cx="161.45" cy="22.65" r="2.7" />
              </g>
              <g>
                <g>
                  <Path3
                    d="m108.49,47.4c-11.07,0-20.07-8.32-20.07-18.55s9-18.55,20.07-18.55,20.07,8.32,20.07,18.55-9,18.55-20.07,18.55Z"
                  />
                  <Path8
                    d="m108.49,10.96c10.72,0,19.41,8.01,19.41,17.89s-8.69,17.89-19.41,17.89-19.41-8.01-19.41-17.89,8.69-17.89,19.41-17.89m0-1.32c-11.43,0-20.73,8.62-20.73,19.21s9.3,19.21,20.73,19.21,20.73-8.62,20.73-19.21-9.3-19.21-20.73-19.21h0Z"
                  />
                </g>
                <Ellipse2 cx="116.27" cy="25.35" rx="7.33" ry="8.06" />
                <Ellipse3 cx="116.63" cy="24.93" rx="2.96" ry="3.16" />
              </g>
            </g>
          </g>
        </g>
      </SVG>
    </Container>
  );
};
