import React, { useState } from "react";
import mdi_close from "./mdi_close.svg";
import { Link } from "react-router-dom";
export default function Bet(props) {
  let bet = props.match.params.bet;
  const [bet_n, setbet_n] = useState(10.0);
  const handleChange = (e) => {
    setbet_n(e.target.value);
  };
  const [check, setCheck] = useState(false);
  return (
    <div>
      <p className="bet-t">Bet</p>
      <div className="bet-card">
        <Link to="/" className="close">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png"
            alt="close"
          />
        </Link>
        <div className="bet-card-logo">
          <img
            src="https://static.legalcdn.org/46/17/5c5ac1e2770e2_1549451746.png"
            alt="bet"
          />
        </div>
        {!check ? (
          <div>
            <div className="bet-body">
              <div className="left">
                <p className="team-bet">Unique{" " + bet}</p>
                <p className="map">Map Winer</p>
                <p className="teams">Unique - Viking.gg</p>
              </div>
              <div className="right">
                <div className="input-box">
                  <input value={bet_n} onChange={handleChange} />
                  <p className="dol">$</p>
                </div>
                <p className="possible">Possible payout:</p>
                <p className="possible-n">
                  {parseInt((bet_n * bet - bet_n) * 100) / 100 + "$"}
                </p>
              </div>
            </div>
            <div className="btn_box">
              <div className="btn_" onClick={() => setCheck(true)}>
                <p>PLACE BET {bet_n} $</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mess">
            <p className="message">
              Congratulations! Your bet is accepted successfully{" "}
            </p>
            <Link to="/">
              <div className="btn_ok">
                <p>OK</p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
