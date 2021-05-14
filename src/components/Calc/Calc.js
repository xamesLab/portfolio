import { Component } from "react";
import "./Calc.css";

class Calc extends Component {
  state = {
    afterRes: false,
    display: "",
    memo: "",
    math: "",
    symbolBtn: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+/-", "0", "."],
    operBtn: {
      1: "CE",
      2: "C/AC",
      3: "x",
      4: "/",
      5: "-",
      6: "%",
      7: "+",
      8: "=",
    },
  };

  componentDidMount() {
    this.props.setProp(true);
  }

  componentWillUnmount() {
    this.props.setProp(false);
  }

  addSymbol = (e) => {
    let sbl = e.target.dataset.s;
    if (sbl === "+/-" && this.state.display[0] !== "-") {
      this.setState({ display: `-${this.state.display}` });
    } else if (sbl !== "+/-") {
      this.setState({ display: this.state.display + sbl });
    }
  };

  operating = (e) => {
    let val = e.target.dataset.o;
    switch (val) {
      case "x":
      case "/":
      case "-":
      case "+":
      case "%":
        this.setState({ memo: this.state.display, math: val });
        this.setState({ display: "" });
        break;
      case "=":
        this.result();
        break;
      case "C/AC":
        this.setState({ display: "", memo: "", math: "" });
        break;
      case "CE":
        this.setState({ display: "" });
        break;
      default:
        break;
    }
  };

  result = () => {
    let res;

    if (this.state.memo && this.state.display) {
      let display = this.state.display;
      let memo = this.state.memo;
      let math = this.state.math;

      switch (math) {
        case "%":
          res = +memo % +display;
          break;
        case "/":
          res = +memo / +display;
          break;
        case "x":
          res = +memo * +display;
          break;
        case "-":
          res = +memo - +display;
          break;
        case "+":
          res = +memo + +display;
          break;

        default:
          break;
      }
      this.setState({ display: res, memo: "", math: "" });
    }
  };

  render() {
    return (
      <div className='wrap-calc'>
        <div className='content-header'>
          <h2 className='content-header__title'>Калькулятор</h2>
        </div>
        <div className='calc'>
          <div className='calc__display'>
            <div className='display_1'>
              {this.state.memo} {this.state.math}
            </div>
            <div className='display_2'>{this.state.display}</div>
          </div>
          <div className='calc__symbol-bar'>
            {this.state.symbolBtn.map((sbl, i) => (
              <div
                className='calc__btn'
                data-s={sbl}
                onClick={this.addSymbol}
                key={i}>
                {sbl}
              </div>
            ))}
          </div>
          <div className='calc__operating-bar'>
            {Object.values(this.state.operBtn).map((oper, i) => (
              <div
                className='calc__btn'
                onClick={this.operating}
                data-o={oper}
                key={i}>
                {oper}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;