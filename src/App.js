import { Provider } from "react-redux";
import appstore from "./Utils/appstore";
import Body from "./Components/Body";

function App() {
  return (
    <Provider store={appstore}>
      <Body />
    </Provider>
  );
}

export default App;
