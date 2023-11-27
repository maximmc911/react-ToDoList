import React, { useState } from "react";
import { createElement } from "./utils.js";
import "./styles.css";
import {
  creatItems,
  HandleSelectItem,
  HandleCount,
  ControllerSelectItem,
} from "./makeItems.js";
/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  // constants
  const [titleList, setTitleList] = useState(``);
  const list = store.getState().list;
  const [ask, setAsk] = useState([`Выделили`, `раз`]);

  // function

  // Работа в выделением по клику Item , счетчик кликов
  const writeForm = (e) => {
    setTitleList(e.target.value);
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
        <button
          onClick={() => (creatItems(titleList, list, store), setTitleList(``))}
        >
          Добавить
        </button>
      </div>
      <div className="App-center">
        <div className="List">
          {list.map((item) => (
            <div key={item.code} className="List-item">
              <div
                className={"Item" + (item.selected ? " Item_selected" : "")}
                onClick={() => (
                  HandleSelectItem(item.code, list, store),
                  ControllerSelectItem(true)
                )}
              >
                <div className="Item-code">{item.code}</div>
                <div className="Item-title">
                  {item.title}{" "}
                  {item.click == 0 ? (
                    ""
                  ) : (
                    <span>
                      | {HandleCount(list, ask)} : {item.click} {item.once}
                    </span>
                  )}
                </div>

                <div className="Item-actions">
                  <button
                    onClick={() => (
                      store.deleteItem(item.code), ControllerSelectItem(false)
                    )}
                  >
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
