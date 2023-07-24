import { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Container } from "../components/shared";
import colors from "../components/colors";
import BigText from "../components/texts/BigText";
import SmallText from "../components/texts/SmallText";
import RegularButton from "../components/buttons/RegularButton";

const WelcomeScreen: FunctionComponent = () => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={require("../assets/bgs/background_v1.png")} />
        </TopSection>

        <BottomSection>
          <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best way to track your money
          </BigText>

          <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best payment method, connects your money to your friends and family.
          </SmallText>

          <RegularButton onPress={() => {}}>Get started</RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
  justify-content: flex-end;
`;

export default WelcomeScreen;
