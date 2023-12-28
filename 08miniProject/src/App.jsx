import "./App.css";
import Login from "./componets/login";
import Profile from "./componets/profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Hello Everyone</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
