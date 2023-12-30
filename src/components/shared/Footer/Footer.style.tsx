import styled, { css } from "styled-components";

const StyledFooter = styled.footer`
  ${() => {
    return css`
      padding: 20px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--background-color-1);
      color: var(--primary-text-color);
      font-size: 12px;
      font-weight: 200;
      gap: 8px;
      letter-spacing: 1.2px;
    `;
  }}
`;

StyledFooter.displayName = "StyledFooter";
export default StyledFooter;
