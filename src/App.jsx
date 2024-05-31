import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import data from "./components/data";
function App() {
  const [cardsData, setCardsData] = useState(data);

  const selector = (id) => {
    const newCards = cardsData.filter((card) => {
      return card.id == id;
    });
    setCardsData(newCards);
  };
  const deleter = (id) => {
    const newCards = cardsData.filter((card) => {
      return card.id !== id;
    });
    setCardsData(newCards);
  };
  const refreshPage = () => {
    setCardsData(data);
  };
  if (cardsData.length == 0) {
    return (
      <div className="tour-div">
        <h2>No Tour Left</h2>
        <button onClick={() => refreshPage()}>Refresh Page</button>
      </div>
    );
  }
  return (
    <>
      <div className="main-heading">
        <h1>University Trip</h1>
      </div>
      <div>
        <Cards data={cardsData} deleter={deleter} selector={selector} />
      </div>
    </>
  );
}

export default App;
