import { Component } from "react";
import "./Calc.css";

class Calc extends Component {
  componentDidMount() {
    this.props.setProp(true);
  }
  componentWillUnmount() {
    this.props.setProp(false);
  }
  render() {
    return (
      <div className='wrap-calc'>
        <div className='content-header'>
          <h2>Калькулятор</h2>
        </div>
        <div className='calc'></div>
      </div>
    );
  }
}

export default Calc;
