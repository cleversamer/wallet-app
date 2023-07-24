import { FunctionComponent, ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import colors from "../colors";

interface RegularTextProps {
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}

const RegularText: FunctionComponent<RegularTextProps> = ({
  textStyles,
  children,
}) => {
  return <StyledText style={textStyles}>{children}</StyledText>;
};

const StyledText = styled.Text`
  font-size: 15px;
  color: ${colors.gray};
  text-align: left;
  font-family: Lato-Bold;
`;

export default RegularText;
