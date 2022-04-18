import { BrowserRouter, Link } from "react-router-dom";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { ImHome } from "react-icons/im";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/" className="home-button">
          <ImHome/>
        </Link>
        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
