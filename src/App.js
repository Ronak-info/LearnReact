import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Header";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Row from "./Pages/Row";
import "./mystyle.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Row />
      <Footer />
    </div>
  );
}

export default App;
