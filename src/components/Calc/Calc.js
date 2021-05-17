// калькулятор
// введенные данные записываются в три переменные в виде строк
// 1:первое число, 2:второе число, 3:математический знак
// результат расчитывается в зависимости от мат. знака

// TODO:
// 1) обработка нажатий клавиатуры
// 2) валидация ввода
// 3) доработка UX

import { Component } from "react";
import ContentHeader from "../../main_component/ContentHeader";
import GitLink from "../../main_component/GitLink";
import "./Calc.css";

class Calc extends Component {
  // стэйт для инициализации компонента
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

  // установка\снятие прозрачного фона при монтировании\размонтировании компонента
  componentDidMount() {
    this.props.setProp(true);
  }

  componentWillUnmount() {
    this.props.setProp(false);
  }

  // обработка нажатий на символьные кнопки
  addSymbol = (e) => {
    let sbl = e.target.dataset.s;
    if (sbl === "+/-" && this.state.display[0] !== "-") {
      this.setState({ display: `-${this.state.display}` });
    } else if (sbl !== "+/-") {
      this.setState({ display: this.state.display + sbl });
    }
  };

  // обработка нажатий на операционные кнопки
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

      // обнуление введенных данных
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

  // расчет результата
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
        <ContentHeader>{"Калькулятор"}</ContentHeader>
        <div className='calc'>
          <div className='calc__lable'>
            <div className='bar_bg'>Calc 2021</div>
          </div>
          <div className='calc__display bar_bg'>
            <div className='display_1'>
              {this.state.memo} {this.state.math}
            </div>
            <div className='display_2'>{this.state.display}</div>
          </div>
          <div className='calc__symbol-bar bar_bg'>
            {this.state.symbolBtn.map((sbl, i) => (
              <div
                className='calc__btn bar_bg'
                data-s={sbl}
                onClick={this.addSymbol}
                key={i}>
                <span>{sbl}</span>
              </div>
            ))}
          </div>
          <div className='calc__operating-bar bar_bg'>
            {Object.values(this.state.operBtn).map((oper, i) => (
              <div
                className='calc__btn bar_bg'
                onClick={this.operating}
                data-o={oper}
                key={i}>
                <span>{oper}</span>
              </div>
            ))}
          </div>
        </div>
        <GitLink text={"Калькулятор"}>
          {
            "https://github.com/xamesLab/portfolio/tree/main/src/components/Calc"
          }
        </GitLink>
      </div>
    );
  }
}

export default Calc;
