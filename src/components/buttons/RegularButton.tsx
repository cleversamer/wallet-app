import { FunctionComponent, ReactNode } from "react";
import {
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  TextStyle,
} from "react-native";
import { styled } from "styled-components/native";
import colors from "../colors";
import RegularText from "../texts/RegularText";

interface RegularButtonProps {
  buttonStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  onPress: (event: GestureResponderEvent) => void | undefined;
  children: ReactNode;
}

const RegularButton: FunctionComponent<RegularButtonProps> = ({
  children,
  onPress,
  buttonStyles,
  textStyles,
}) => {
  return (
    <ButtonView style={buttonStyles} onPress={onPress}>
      <RegularText textStyles={textStyles}>{children}</RegularText>
    </ButtonView>
  );
};

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.prirmary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

export default RegularButton;
