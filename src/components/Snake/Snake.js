// классическая змейка
// на каждой итерации игрового цикла у тела змейки
// удаляется последний элемент и дорисовывается первый
// в зависимости от установленного направления
// при совпадении координат "головы" и "еды"
//в "хвост" добавляется один пустой элемент

import React, { Component } from "react";
import ContentHeader from "../../main_component/ContentHeader";
import GitLink from "../../main_component/GitLink";
import ModalInfo from "./ModalInfo";
import "./Snake.css";
import SnakeBar from "./SnakeBar";
import SnakeBody from "./SnakeBody";
import SnakeFood from "./SnakeFood";

// состояние игрового цикла
let gameLoop = null;

// инициирующее состояние
const initState = {
  fieldSize: [20, 20],
  fieldXY: [20, 20],
  direction: "RIGHT",
  speed: 200,
  food: [4, 4],
  snakeCells: [
    [1, 1],
    [1, 2],
  ],
  activeModal: false, // состояние модального окна
};

class Snake extends Component {
  state = initState;

  // отслеживание нажатий на кнопки клавиатуры
  componentDidMount() {
    document.onkeydown = this.onKD;
  }

  // отслеживание положения внутри поля/столкновений с собой/сбора еды
  componentDidUpdate() {
    this.checkLeave();
    this.selfCollision();
    this.checkEat();
  }

  // обработка нажатий
  onKD = (e) => {
    e = e || window.event;
    if (!this.state.activeModal) {
      switch (e.keyCode) {
        // старт/стоп
        case 32:
          !gameLoop ? this.gameStart() : this.gameOver();
          break;
        // обновление направления
        case 38:
          this.setState({ direction: "UP" });
          break;
        case 40:
          this.setState({ direction: "DOWN" });
          break;
        case 37:
          this.setState({ direction: "LEFT" });
          break;
        case 39:
          this.setState({ direction: "RIGHT" });
          break;
        default:
          break;
      }
    }
  };

  // движение в цикле
  moveSnake = () => {
    let cells = [...this.state.snakeCells];
    let head = cells[cells.length - 1];

    switch (this.state.direction) {
      case "RIGHT":
        head = [head[0], head[1] + 1];
        break;

      case "LEFT":
        head = [head[0], head[1] - 1];
        break;

      case "DOWN":
        head = [head[0] + 1, head[1]];
        break;

      case "UP":
        head = [head[0] - 1, head[1]];
        break;

      default:
        break;
    }

    cells.push(head);
    cells.shift();

    this.setState({
      snakeCells: cells,
    });
  };

  // обработка столкновений с собой
  selfCollision = () => {
    let head = this.state.snakeCells[this.state.snakeCells.length - 1];
    let snake = [...this.state.snakeCells];
    snake.pop();
    snake.forEach((cell) => {
      if (head[0] === cell[0] && head[1] === cell[1]) {
        this.gameOver();
      }
    });
  };

  // обработка выхода за пределы поля
  checkLeave = () => {
    let width = this.state.fieldSize[0];
    let height = this.state.fieldSize[1];
    let head = this.state.snakeCells[this.state.snakeCells.length - 1];
    if (
      head[0] < 0 ||
      head[1] < 0 ||
      head[0] > height - 1 ||
      head[1] > width - 1
    ) {
      this.gameOver();
    }
  };

  // создание "еды" в случайном месте
  getRandomFood = () => {
    let min = 0;
    let maxX = this.state.fieldXY[0] - 1;
    let maxY = this.state.fieldXY[1] - 1;
    let y = Math.floor((Math.random() * (maxX - min + 1) + min) / 2) * 2;
    let x = Math.floor((Math.random() * (maxY - min + 1) + min) / 2) * 2;
    return [x, y];
  };

  // обработка сбора "еды"
  checkEat = () => {
    let head = this.state.snakeCells[this.state.snakeCells.length - 1];
    let food = this.state.food;

    if (head[0] === food[0] && head[1] === food[1]) {
      this.setState({
        food: this.getRandomFood(),
      });
      this.extendSnake();
    }
  };

  // увеличение "тела"
  extendSnake = () => {
    let newSnake = [...this.state.snakeCells];
    newSnake.unshift([]);
    this.setState({
      snakeCells: newSnake,
    });
  };

  // запуск игрового цикла
  gameStart = () => {
    if (!gameLoop) {
      this.setState({ fieldSize: this.state.fieldXY });
      gameLoop = setInterval(this.moveSnake, this.state.speed);
    }
  };

  // стоп игрового цикла и возврат к исходному состоянию
  gameOver = () => {
    clearInterval(gameLoop);
    gameLoop = null;
    this.setState(initState);
  };

  // изменение состояния модального окна
  setModal = (e) => {
    e.target.blur();
    if (!this.state.activeModal) {
      this.setState({ activeModal: true });
    } else {
      this.setState({ activeModal: false });
    }
  };

  // установка размеров поля по Х
  setFieldX = (e) => {
    let update = !isNaN(e.target.value) ? +e.target.value : 15;
    if (update >= 30) {
      update = 30;
    }
    this.setState({ fieldXY: [update, this.state.fieldXY[1]] });
  };

  // установка размеров поля по Y
  setFieldY = (e) => {
    let update = !isNaN(e.target.value) ? +e.target.value : 15;
    if (update >= 30) {
      update = 30;
    }
    this.setState({ fieldXY: [this.state.fieldXY[0], update] });
  };

  render() {
    return (
      <div className='wrap-snake'>
        <ContentHeader>{"Змейка"}</ContentHeader>
        <SnakeBar
          fieldXY={this.state.fieldXY}
          setFieldX={this.setFieldX}
          setFieldY={this.setFieldY}
          start={this.gameStart}
          stop={this.gameOver}
          modal={this.setModal}
        />
        <div
          className='field'
          style={{
            width: `${this.state.fieldSize[0]}rem`,
            height: `${this.state.fieldSize[1]}rem`,
          }}>
          <SnakeBody snakeCells={this.state.snakeCells} />
          <SnakeFood food={this.state.food} />
        </div>
        <ModalInfo active={this.state.activeModal} setActive={this.setModal}>
          <div className='modal-info__item'>
            <p>Старт/Стоп - 'space'</p>
            <img src={"images/main/button.svg"} alt={"space button"} />
          </div>
          <div className='modal-info__item'>
            <p>Влево/Вправо/Вверх/Вниз</p>
            <img src={"images/main/keyboard.svg"} alt={"arrow button"} />
          </div>
          <div className='modal-info__item'>
            <p>Перед стартом вы можете указать размер поля (широна\высота)</p>
            <img src={"images/main/input.png"} alt={"input"} />
          </div>
        </ModalInfo>
        <GitLink text={"Змейка"}>
          {
            "https://github.com/xamesLab/portfolio/tree/main/src/components/Snake"
          }
        </GitLink>
      </div>
    );
  }
}

export default Snake;
