"use client";
import Dessert from "./components/Dessert";
import Cart from "./components/Cart";
import data from "./data.json";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);

  const addToCartHandler = (name, price) => {
    if (cartItems.some((item) => item.name === name)) {
      setCartItems(
        cartItems.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { name: name, price: price, quantity: 1 }]);
    }
  };

  const decrementQuantityHandler = (name) => {
    setCartItems(
      cartItems.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeItemHandler = (name) => {
    setCartItems(cartItems.filter((item) => item.name !== name));
  };

  return (
    <>
      <main className="flex gap-2 py-20 max-[900px]:flex-col max-[900px]:pt-4">
        {" "}
        <div>
          <h1 className="font-bold text-[40px] mb-8">Desserts</h1>
          <div className="flex max-[900px]:flex-col flex-wrap gap-6  max-[900px]:items-center">
            {data.map((item) => (
              <Dessert
                key={item.name}
                name={item.name}
                price={item.price.toFixed(2)}
                category={item.category}
                image={item.image}
                addToCartHandler={addToCartHandler}
                decrementQuantityHandler={decrementQuantityHandler}
                removeItemHandler={removeItemHandler}
                cartItems={cartItems}
              />
            ))}
          </div>
        </div>
        <Cart cartItems={cartItems} removeItemHandler={removeItemHandler} />
      </main>
      <Footer />
    </>
  );
}
