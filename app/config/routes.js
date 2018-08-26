import { createStackNavigator } from "react-navigation";
import Login from "../containers/login";
import Register from "../containers/register";

const Router = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register }
    // Home: { screen: Home }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default Router;
