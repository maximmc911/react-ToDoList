import React, { useState } from "react";
import { createElement } from "./utils.js";
import "./styles.css";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const [titleList, setTitleList] = useState(``);
  const list = store.getState().list;

  // Работа в выделением по клику Item , счетчик кликов
  const writeForm = (e) => {
    setTitleList(e.target.value);
  };
  for (let index = 0; index < list.length; index++) {
    if (
      list[index].click % 10 == 2 ||
      list[index].click % 10 == 3 ||
      list[index].click % 10 == 4
    ) {
      if (list[index].click > 10 && list[index].click < 21) {
        list[index].once = `раз`;
      } else {
        list[index].once = `раза`;
      }
    } else {
      list[index].once = `раз`;
    }
  }
  const HandleSelectItem = (e) => {
    let condition = true;
    for (let index = 0; index < list.length; index++) {
      if (list[index].selected) {
        condition = false;
      }
      if (list[index].code == e) {
        if (list[index].selected == true) {
          store.selectItem(e);
        }
      }
    }
    if (condition) {
      store.selectItem(e);
    }
  };

  // Добавление новых Item
  const creatItems = () => {
    const random = () => {
      let randID = Math.floor(Math.random() * 9999);
      for (let index = 0; index < list.length; index++) {
        if (randID == list[index].code) {
          random();
        }
      }
      return randID;
    };
    let randID = random();
    store.addItem(randID, titleList);
    setTitleList(``);
  };

  return (
    <div className="App">
      <div className="App-head">
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className="App-controls">
        <input
          className="Form__input"
          type="text"
          id="search"
          role="search"
          placeholder="Введите название задачи"
          value={titleList}
          onChange={(e) => writeForm(e)}
        />
        <button onClick={() => creatItems()}>Добавить</button>
      </div>
      <div className="App-center">
        <div className="List">
          {list.map((item) => (
            <div key={item.code} className="List-item">
              <div
                className={"Item" + (item.selected ? " Item_selected" : "")}
                onClick={() => HandleSelectItem(item.code)}
              >
                <div className="Item-code">{item.code}</div>
                <div className="Item-title">
                  {item.title}{" "}
                  {item.click == 0 ? (
                    ""
                  ) : (
                    <span>
                      | Выделяли: {item.click} {item.once}
                    </span>
                  )}
                </div>

                <div className="Item-actions">
                  <button onClick={() => store.deleteItem(item.code)}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
