import WelcomeScreen from "./src/screens/WelcomeScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [isFontLoaded] = useFonts({
    "Lato-Bold": require("./src/assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./src/assets/fonts/Lato-Regular.ttf"),
  });

  if (!isFontLoaded) {
    return null;
  }

  return <WelcomeScreen />;
}
