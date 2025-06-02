import { HashRouter } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </HashRouter>
  );
}

export default App;
