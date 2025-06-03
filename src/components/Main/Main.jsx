import Navbar from "../Navbar/Navbar";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <Navbar></Navbar>
      <div className="main__content_container">
        <h1 className="main__title">Actress Extraordinaire</h1>
        <p className="main__paragraph">TV, Film, and Theater</p>
        <div className="main__button_container">
          <button className="main__button_videos" type="button">
            Videos
          </button>
          <button className="main__button_contact" type="button">
            Contact
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
