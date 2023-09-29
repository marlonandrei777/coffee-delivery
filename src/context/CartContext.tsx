import { ReactNode, useState, createContext, useEffect } from "react";
import { produce } from "immer";
import { api } from "../lib/axios";

export type Coffee = {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

type CartContextType = {
  coffeeData: Coffee[];
  cartItem: Coffee[];
  cartQuantity: number;
  cartItemsTotal: number;
  removeCartItem: (cartItemId: number) => void;
  addCoffeeToCart: (coffee: Coffee) => void;
  changeCartItemQuantity: (
    cartItemId: number, type: "increase" | "decrease"
  ) => void;
  cleanCart: () => void;
}

type CartProviderProps = {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [coffeeData, setcoffeeData] = useState<Coffee[]>([]);
  const [cartItem, setCartItem] = useState<Coffee[]>(() => {
    const storedCartItems = localStorage.getItem('@coffeeDelivery:cartItems')

    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }

    return []
  });

  const cartQuantity = cartItem.reduce(
    (total, cartItems) =>
      total + cartItems.quantity, 0
  );

  const cartItemsTotal = cartItem.reduce(
    (total, cartItems) =>
      total + cartItems.price * cartItems.quantity, 0
  );

  // adicionando elementos no array
  function addCoffeeToCart(coffee: Coffee) {
    const coffeeAlreadyExistsInCart = cartItem.findIndex(
      cartItem => cartItem.id === coffee.id
    );

    const newCart = produce(cartItem, draft => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItem(newCart)
  }

  // mudando a quantidade por id
  function changeCartItemQuantity(cartItemId: number, type: 'increase' | 'decrease') {
    const newCart = produce(cartItem, draft => {
      const coffeeAlreadyExistsInCart = cartItem.findIndex(
        cartItem => cartItem.id === cartItemId
      )

      if (coffeeAlreadyExistsInCart >= 0) {
        const item = draft[coffeeAlreadyExistsInCart];
        draft[coffeeAlreadyExistsInCart].quantity =
          type === 'increase' ?
            item.quantity + 1 :
            item.quantity - 1;
      }
    })

    setCartItem(newCart)
  }

  //remove item do item do carrinho
  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItem, draft => {
      const coffeeAlreadyExistsInCart = cartItem.findIndex(
        cartItem => cartItem.id === cartItemId
      );

      if (coffeeAlreadyExistsInCart >= 0) {
        draft.splice(coffeeAlreadyExistsInCart, 1)
      }
    })

    setCartItem(newCart)
  }

  // limpando elementos de dentro do carrinho quando efetuarmos a compra completa
  function cleanCart() {
    setCartItem([])
  }

  /* call API */
  useEffect(() => {
    async function loadCoffee() {
      const response = await api.get('coffee')

      setcoffeeData(response.data);
    }

    loadCoffee();
  }, []);

  // armazenando no local storage
  useEffect(() => {
    localStorage.setItem('@coffeeDelivery:cartItems', JSON.stringify(cartItem))
  }, [cartItem])

  return (
    <CartContext.Provider value={{
      cartItem,
      cleanCart,
      coffeeData,
      cartQuantity,
      cartItemsTotal,
      removeCartItem,
      addCoffeeToCart,
      changeCartItemQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
}

