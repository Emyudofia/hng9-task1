import "./App.css";
import Footer from "./component/Footer";
import Props from "./component/Props";
import Profile from "./component/Profile";

function App() {
  return (
    <div className='App'>
      <Profile />
      <Props />
      <Footer />
    </div>
  );
}

export default App;