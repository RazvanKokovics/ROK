import styled, { css } from "styled-components";

const StyledHeroBanner = styled.div`
  ${() => {
    return css`
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 140px;

      @media only screen and (max-width: 600px) {
        padding-top: 80px;
      }

      .heading {
        color: var(--primary-text-color);
        text-align: center;
        font-size: 42px;
        margin-bottom: 16px;
        width: 600px;
        max-width: 100%;
      }

      .subheading {
        font-size: 20px;
        font-weight: 400;
        color: var(--secondary-text-color);
        text-align: center;
        width: 450px;
        max-width: 80%;
        margin-top: 0;
        margin-bottom: 24px;
      }

      .find-more {
        margin-bottom: 48px;
      }

      .animation {
        width: 100%;
        height: 40%;
      }
    `;
  }}
`;

StyledHeroBanner.displayName = "StyledHeroBanner";
export default StyledHeroBanner;
