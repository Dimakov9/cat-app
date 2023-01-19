import "./card.css";
import { useState } from "react";
import { useEffect } from "react";

function Card(props) {
  const [state, setState] = useState(0);
  const [catText, setCatText] = useState(false);

  const styleColor = [
    {
      backgroundColor: "#1698d9",
    },
    {
      backgroundColor: "#d91667",
    },
    { backgroundColor: "#B3B3B3 " },
  ];

  const payArr = props.fuaGra.pay;
  const fuaGra = props.fuaGra;

  const selectionClick = () => {
    state >= 2 ? setState(0) : setState(state + 1);
    setCatText(false);
  };

  return (
    <>
      <div
        className="card "
        onMouseEnter={() => {
          setCatText((catText) => !catText);
        }}
        onMouseLeave={() => {
          setCatText((catText) => !catText);
        }}
      >
        <div
          className={`card__wrapper ${state === 2 ? "card__disabled" : ""} `}
          style={styleColor[state]}
        >
          <div
            className="card__wrapper-content"
            onClick={() => {
              selectionClick();
            }}
          >
            <div className="card__description">
              <div className="card__title-before">
                {catText && state === 1
                  ? "Котэ не одобряет?"
                  : "Сказочное заморское яство"}
              </div>
              <div className="card__title">{!fuaGra ? "" : fuaGra.title}</div>
              <div className="card__subtitle">{!fuaGra ? "" : fuaGra.name}</div>
              <div className="card__content">
                {!fuaGra ? "" : fuaGra.quantity}
              </div>
            </div>
            <div className="card__weight">
              <div className="card__weight-wrapper" style={styleColor[state]}>
                <div className="card__weight-content">
                  {!fuaGra ? "" : fuaGra.weight}{" "}
                </div>
                <div className="card__weight-text">кг</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`card__buy ${state === 2 ? "card__disabled-buy" : ""} `}
        >
          {!payArr ? "" : payArr[state]}

          {state === 0 ? (
            <a
              href="#"
              onClick={() => {
                selectionClick();
              }}
            >
              купи.
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
