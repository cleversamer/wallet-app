import { FunctionComponent, ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import colors from "../colors";

interface SmallTextProps {
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}

const SmallText: FunctionComponent<SmallTextProps> = ({
  textStyles,
  children,
}) => {
  return <StyledText style={textStyles}>{children}</StyledText>;
};

const StyledText = styled.Text`
  font-size: 13px;
  color: ${colors.gray};
  text-align: left;
  font-family: Lato-Regular;
`;

export default SmallText;
