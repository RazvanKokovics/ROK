import styled, { css } from "styled-components";

const StyledHeader = styled.header`
  ${() => {
    return css`
      padding: 20px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        object-fit: contain;
      }

      > svg {
        color: var(--primary-text-color);
        transition: all 0.3s ease-in;
        cursor: pointer;

        &:hover {
          color: var(--primary-color);
          transform: translateY(-2px);
        }
      }
    `;
  }}
`;

StyledHeader.displayName = "StyledHeader";
export default StyledHeader;
