const shoppingCart = (function () {

    let cart = [];
    const storageKey = 'topka_shopping_cart';

    function CartItem(id, name, price, count) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.count = count;
    }
    
    function initCart() {
        cart = JSON.parse(localStorage.getItem(storageKey));
    }

    if (localStorage.getItem(storageKey) != null) {
        initCart();
    }

    function _saveCart() {
       localStorage.setItem(storageKey, JSON.stringify(cart));
    }

    return {
        addItemToCart(id, name, price) {
            for (const item of cart) {
                if (item.id === id) {
                    item.count++;
                    _saveCart();
                    return;
                }
            }
            const cartItem = new CartItem(id, name, price, 1);
            cart.push(cartItem);
            _saveCart();
        },

        removeItemFromCart(id) {
            for (const item of cart) {
                if (item.id === id) {
                    item.count--;
                    if (item.count === 0) {
                        cart.splice(cart.indexOf(item), 1);
                    }
                    break;
                }
            }
            _saveCart();
        },

        totalCount() {
            let totalCount = 0;
            cart.forEach((item) => {
                totalCount += item.count;
            })
            return totalCount;
        },

        totalCart() {
            let totalCart = 0;
            cart.forEach((item) => {
                totalCart += item.price * item.count;
            });
            return totalCart.toFixed(2);
        },

        getCart() {
            return JSON.parse(localStorage.getItem(storageKey));
        },

        clearCart() {
            cart = [];
            _saveCart();
        }
    };

})();

export default shoppingCart;
