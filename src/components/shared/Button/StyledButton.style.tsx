import styled, { css } from "styled-components";

const StyledButton = styled.a`
  ${() => {
    return css`
      width: auto;
      min-width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 10px 16px;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 1.2px;
      text-decoration: none;
      border: 1px solid var(--secondary-text-color);
      color: var(--primary-text-color);
      cursor: pointer;
      border-radius: 32px;
      background-color: var(--background-color-1);

      &,
      > * {
        transition: all 0.25s ease-in;
      }

      &:hover {
        border-color: var(--primary-color);
        background-color: var(--primary-color-light);
        transform: translateY(-2px);

        > svg {
          stroke: var(--primary-color);
          transform: scale(1.1);
        }
      }
    `;
  }}
`;

StyledButton.displayName = "StyledButton";
export default StyledButton;
