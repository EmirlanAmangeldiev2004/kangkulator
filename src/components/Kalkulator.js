import React, { useState } from "react";
import { FiDelete } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const Kalkulator = () => {
  const [state, setState] = useState("");
  const [symbol, setSymbol] = useState("");
  console.log(state);
  return (
    <div className="back">
      <div className="block">
        <div className="list">
          <h3 className="h3">{symbol.slice(0, 20)}</h3>
          <h1 className="h1">{state.slice(0, 20)}</h1>
        </div>
        <div className="btns">
          <button className="btn btn1" onClick={() => setState(state + "(")}>
            (
          </button>
          <button className="btn btn2" onClick={() => setState(state + ")")}>
            )
          </button>
          <button
            className="btn btn3"
            onClick={() => setState("") || setSymbol("")}
          >
            C
          </button>
          <button
            onClick={() => setState(state.slice(0, state.length - 1))}
            className="btn btn4"
          >
            <FiDelete />
          </button>
          <button
            onKeyDown={(e) => (e.key === "7" ? setState(state + "7") : state)}
            className="btn btn5"
            onClick={() => setState(state + "7")}
          >
            7
          </button>
          <button className="btn btn6" onClick={() => setState(state + "8")}>
            8
          </button>
          <button className="btn btn7" onClick={() => setState(state + "9")}>
            9
          </button>
          <button className="btn btn8" onClick={() => setState(state + ")")}>
            <GrClose />
          </button>
          <button className="btn btn9" onClick={() => setState(state + "4")}>
            4
          </button>
          <button className="btn btn10" onClick={() => setState(state + "5")}>
            5
          </button>
          <button className="btn btn11" onClick={() => setState(state + "6")}>
            6
          </button>
          <button
            className="btn btn12"
            onClick={() => setSymbol(state + "/") && setState("")}
          >
            /
          </button>
          <button className="btn btn13" onClick={() => setState(state + "1")}>
            1
          </button>
          <button className="btn btn14" onClick={() => setState(state + "2")}>
            2
          </button>
          <button className="btn btn15" onClick={() => setState(state + "3")}>
            3
          </button>
          <button className="btn btn16" onClick={() => setState(state + "+")}>
            +
          </button>
          <button className="btn btn17" onClick={() => setState(state + ",")}>
            ,
          </button>
          <button className="btn btn18" onClick={() => setState(state + "0")}>
            0
          </button>
          <button className="btn btn19" onClick={() => setState(state + ")")}>
            =
          </button>
          <button className="btn btn20" onClick={() => setState(state + "-")}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Kalkulator;
