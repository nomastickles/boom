import React from "react";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import shortid from "shortid";
import * as Spinners from "react-spinners";
import { fetchAndSetCard } from "./actions";

const allSpinnerNames = Object.keys(Spinners).filter(
  (name) => ["BeatLoader", "PacmanLoader", "ClockLoader", "GridLoader", "ScaleLoader", "ScaleLoader", "SquareLoader"].includes(name)
);

function Card({ bgColor }) {
  const dispatchRedux = useDispatch();
  const [id] = React.useState(shortid.generate());

  const randomIndex = Math.floor(Math.random() * allSpinnerNames.length);
  const content = useSelector((appState) => appState.card.contentById[id]);
  const [spinnerName] = React.useState(allSpinnerNames[randomIndex]);

  const Spinner = React.useRef(Spinners[spinnerName]);

  const onClickHandler = () => {
    dispatchRedux({ type: "CARD_SELECTED", payload: id });
    if (!content) dispatchRedux(fetchAndSetCard({ id }));
  };

  return (
    <div className={classnames("col-lg-4 col-md-6 col-12 animated fadeIn")}>
      <div className={`card mb-3 ${bgColor}`} onClick={onClickHandler}>
        <div className="card-header d-flex justify-content-center">{id}</div>
        <div className="card-body d-flex justify-content-center align-items-center">
          {!content && (
            <div
              className="pt-3"
              style={{ maxWidth: "60px", minHeight: "100px" }}
            >
              <Spinner.current color={"#fff"} />
            </div>
          )}
          {content && <img className={"animated fadeIn"} src={content} />}
        </div>
      </div>
    </div>
  );
}

export default Card;
