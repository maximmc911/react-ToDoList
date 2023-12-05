/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавить элемент в корзину
   */

  addItemToCart(code) {
    const exists = this.state.cartItems.find(item => item.code === code) !== undefined;

    if (exists) {
      this.setState({
        ...this.state,
        cartItems: this.state.cartItems.map(item => {
          if (item.code === code) {
            item.quantity++;
          }

          return {...item};
        })
      })
    } else {
      const item = this.state.list.find(item => item.code === code);

      this.setState({
        ...this.state,
        cartItems: [...this.state.cartItems, {...item, quantity: 1}]
      })
    }
  }

  /**
   * Удалить элемент из корзины
   */

  deleteItemFromCart(code) {
    this.setState({
      ...this.state,
      cartItems: this.state.cartItems.filter(item => item.code !== code)
    })
  }

  /**
   * Открыть корзину
   */

  openCart() {
    this.setState({
      ...this.state,
      openCart: true,
    })
  };

  /**
   * Закрыть корзину
   */

  closeCart() {
    this.setState({
      ...this.state,
      openCart: false,
    })
  };
}

export default Store;
