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
     * Добавление новой записи
     */
    addItem() {
        this.setState({
            ...this.state,
            list: [...this.state.list, {code: this.state.list.length + 1, title: 'Новая запись', price: 0}]
        })
    };

    /**
     * Добавление товара в корзину
     * @param item
     */
    addToCart(item) {
        if (!(this.state?.cart.find(el => el.code === item.code))) {
            this.setState({
                ...this.state,
                cart: [...this.state.cart, {...item, quantity: 1,}]
            })
        } else {
            const newCart = this.state.cart.map(el => {

                if (el.code === item.code) {

                    return {...item, quantity: ++el.quantity, price: item.price + el.price}
                }

                return el

            })
            this.setState({
                ...this.state,
                cart: newCart
            })
        }

    };

    /**
     * Удаление товара шз корзины
     * @param code
     */
    onDeleteChat(code) {

        const del = this.state.cart.filter((item) => item.code !== code);
        this.setState({
            ...this.state,
            cart: [...del]

        });
        console.log(this.state.cart)
    }
    onVisible() {
        this.setState({
            ...this.state,
            visible: true

        });
    }
    inVisible() {
        this.setState({
            ...this.state,
            visible: false

        });
    }
}





export default Store;
