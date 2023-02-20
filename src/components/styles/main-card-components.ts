import styled, { css } from "styled-components";
import colors from "./colors.scss";

export const flexDivStyles = css`
  display: flex;
  flex-direction: column;
`;

export const MainCardDiv = styled.div`
  ${flexDivStyles}
  height:100%;
  max-width: 480px;
  margin: 10px auto;
  box-shadow: 1px 1px 10px 1px grey;
`;

export const DivWrapper = styled("div")<{
  alignItems?: string;
  justifyContent?: string;
  bgColor?: string;
  boxShadow?: string;
}>`
  ${flexDivStyles}
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) => props.justifyContent};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : colors.white};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : "none")};
`;

export const Headline = styled.h2`
  margin-bottom: 0;
  letter-spacing: 0.05em;
  text-shadow: 0px 4px 4px grey;
`;

export const SubHeadline = styled.p`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 12px;
  margin-bottom: 0;
`;

export const Ul = styled.ul`
  li {
    font-size: 30px;
  }
  li:nth-of-type(1) {
    color: ${colors.chartDarkBlue};
  }
  li:nth-of-type(2) {
    color: ${colors.chartBlue};
  }
  li span {
    position: relative;
    left: -4px;
    top: -4px;
  }
`;

export const P = styled("p")<{
  fontWeight?: string;
  textAlign?: string;
  margin?: string;
  textShadow?: string;
}>`
  color: ${colors.navyBlue};
  font-size: 14px;
  white-space: nowrap;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 600)};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  text-shadow: ${(props) => props.textShadow};
`;

export const ListItem = styled(P)<{}>`
  font-weight: 500;
  text-shadow: 0px 2px 3px ${colors.grey};
  margin: 0;List
`;

export const Divider = styled.hr`
  border-top: 2px solid ${colors.lightGrey};
  width: 90%;
`;

export const TwoColDiv = styled("div")<{
  marginRight?: string;
  marginLeft?: string;
  alignItems?: string;
}>`
  ${flexDivStyles}
  align-items: ${(props) => props.alignItems};
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
`;

export const Select = styled.select`
  width: 33%;
  height: 44px;
  color: ${colors.grey};
  border: 2px solid ${colors.lightgrey};
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 2px solid ${colors.navyBlue};
  height: 32px;
  width: 64%;
  margin: 16px 0;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  color: ${colors.darkGrey};
  &:not([step="any"])::-webkit-inner-spin-button,
  &:not([step="any"])::-webkit-outer-spin-button {
    opacity: 1;
  }
`;

export const Button = styled("button")<{
  isDark?: boolean;
}>`
  width: 180px;
  border: 2px solid ${colors.navyBlue};
  padding: 10px 20px;
  border-radius: 30px;
  text-align: center;
  vertical-align: center;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.1em;
  background-color: ${colors.white};
  color: ${colors.navyBlue};
  margin: 24px 0;
  ${({ isDark }) =>
    isDark &&
    `
  background-color: ${colors.navyBlue};
  color: ${colors.cyan};
  margin:24px 0;
  `}
`;
