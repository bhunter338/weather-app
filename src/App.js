import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";
import Footer from "./Footer";

function App() {
  return (
    <main>
      <Navbar></Navbar>
      <CardContainer></CardContainer>
      <Footer></Footer>
    </main>
  );
}

export default App;
