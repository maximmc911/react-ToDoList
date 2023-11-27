import Store from "./store";

let first = true;
export function ControllerSelectItem(e) {
  first = e;
}

// Добавление новых Item
export function creatItems(titleList, list, store) {
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
}

// Выделение Item
export function HandleSelectItem(e, list, store) {
  if (first) {
    for (let index = 0; index < list.length; index++) {
      if (list[index].selected) {
        list[index].selected = false;
      }
    }
    store.selectItem(e);
    first = true;
  }
}

// Выведение и склонение слов из полученного аргумента

export function HandleCount(list, ask) {
  const onse = ask[1];
  for (let index = 0; index < list.length; index++) {
    if (
      list[index].click % 10 == 2 ||
      list[index].click % 10 == 3 ||
      list[index].click % 10 == 4
    ) {
      if (list[index].click > 10 && list[index].click < 21) {
        list[index].once = onse;
      } else {
        list[index].once = onse + `a`;
      }
    } else {
      list[index].once = onse;
    }
  }
  return ask[0];
}
