"use client";
import Dessert from "./components/Dessert";
import Cart from "./components/Cart";
import Confirm from "./components/Confirm";
import data from "./data.json";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);

  const addToCartHandler = (name, price) => {
    if (cartItems.some((item) => item.name === name)) {
      setCartItems(
        cartItems.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const thumbnail = data
        .find((item) => item.name === name)
        .image.thumbnail.slice(1);
      setCartItems([
        ...cartItems,
        { name: name, price: price, quantity: 1, thumbnail },
      ]);
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
    <div className="flex justify-center z-0">
      {showConfirm && (
        <div className="z-10 w-screen h-full fixed top-0 left-0 bg-black bg-opacity-50 fade-in"></div>
      )}
      <main className="flex justify-center gap-2 py-20 max-[900px]:flex-col max-[900px]:pt-0 max-w-[1440px] fade-in">
        {" "}
        <div className="relative">
          <h1 className="font-bold text-[40px] mb-8 max-sm:mb-4">Desserts</h1>
          <div className="flex max-w-[850px] max-[900px]:flex-col flex-wrap gap-6  max-[900px]:items-center">
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
        <Cart
          cartItems={cartItems}
          removeItemHandler={removeItemHandler}
          setShowConfirm={setShowConfirm}
        />
      </main>
      {showConfirm && (
        <Confirm
          cartItems={cartItems}
          setShowConfirm={setShowConfirm}
          setCartItems={setCartItems}
        />
      )}
      <Footer />
    </div>
  );
}
