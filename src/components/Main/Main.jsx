import Navbar from "../Navbar/Navbar";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <Navbar></Navbar>
      <div className="main__content_container">
        <h1 className="main__title">Actress Extraordinaire</h1>
        <p className="main__paragraph">TV, Film, and Theater</p>
      </div>
    </main>
  );
}

export default Main;
