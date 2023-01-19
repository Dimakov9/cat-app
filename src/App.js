import "./App.css";
import Card from "./card/indes";
import { useEffect } from "react";

function App() {
  const fuaGra = {
    title: "Нямушка",
    name: "с фуа-гра",
    quantity: "10 порций мышь в подарок",
    weight: "0,5",
    pay: [
      "Чего сидишь? Порадуй котэ, ",
      "Печень утки разварная с артишоками.",
      "Печалька, с фуа-гра закончился.",
    ],
  };

  const fish = {
    title: "Нямушка",
    name: "с рыбой",
    quantity: "40 порций 2 мыши в подарок",
    weight: "2",
    pay: [
      "Чего сидишь? Порадуй котэ, ",
      "Головы щучьи с чесноком да свежайшая сёмгушка.",
      "Печалька, с рыбой закончился.",
    ],
  };

  const chicken = {
    title: "Нямушка",
    name: "с курой",
    quantity: "100 порций 5 мышей в подарок заказчик доволен",
    weight: "5",
    pay: [
      "Чего сидишь? Порадуй котэ, ",
      "Филе из цыплят с трюфелями в бульоне.",
      "Печалька, с курой закончился.",
    ],
  };

  useEffect(() => {}, []);
  return (
    <div className="App">
      <div className="header">Ты сегодня покормил кота?</div>
      <div className="card__gallery">
        <Card fuaGra={fuaGra} />
        <Card fuaGra={fish} />
        <Card fuaGra={chicken} />
      </div>
    </div>
  );
}

export default App;
