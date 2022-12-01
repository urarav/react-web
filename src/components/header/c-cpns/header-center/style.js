import styled from "styled-components";
export const CenterWrapper = styled.div`
  width: 300px;
  display: flex;
  cursor: pointer;
  align-items: center;
  border-radius: 40px;
  border: 1px solid #ddd;
  justify-content: space-between;
  ${(props) => props.theme.mixins.boxShadow}

  .text {
    font-weight: 600;
    padding-left: 24px;
  }

  .icon-wrapper {
    color: #fff;
    margin: 7px;
    width: 32px;
    height: 32px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.color.primaryColor};
  }
`;
