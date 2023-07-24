import { FunctionComponent, ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import colors from "../colors";

interface BigTextProps {
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}

const BigText: FunctionComponent<BigTextProps> = ({ textStyles, children }) => {
  return <StyledText style={textStyles}>{children}</StyledText>;
};

const StyledText = styled.Text`
  font-size: 37px;
  color: ${colors.white};
  text-align: left;
  font-family: Lato-Bold;
`;

export default BigText;
