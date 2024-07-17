"use client";
import React from "react";
import Image from "next/image";
import iconAddToCart from "../assets/icon-add-to-cart.svg";
import iconIncrement from "../assets/icon-increment-quantity.svg";
import iconDecrement from "../assets/icon-decrement-quantity.svg";
import { useState, useEffect } from "react";

const Dessert = ({
  name,
  price,
  category,
  image,
  addToCartHandler,
  decrementQuantityHandler,
  cartItems,
  removeItemHandler,
}) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(cartItems.find((item) => item.name === name)?.quantity || 0);
  }, [cartItems]);

  return (
    <div className="w-fit select-none">
      <div>
        <Image
          src={image.desktop.slice(1)}
          alt={name}
          width={250}
          height={250}
          className="rounded-lg"
        />
      </div>
      <div
        onClick={() => {
          if (quantity === 0) {
            addToCartHandler(name, price);
          }
        }}
        className={
          " flex items-center justify-center w-44 h-11 gap-2 relative -top-5  border-Rose400 rounded-full p-2 px-6  font-semibold mx-auto text-Rose900 hover:text-Red hover:border-Red " +
          (quantity > 0
            ? " bg-Red px-3 cursor-default border-none"
            : " bg-white cursor-pointer border")
        }
      >
        {quantity === 0 ? (
          <div className="flex gap-2">
            <Image
              src={iconAddToCart}
              alt="Add to cart"
              width={22}
              height={22}
            />
            Add to Cart
          </div>
        ) : (
          <div className="flex gap-2 justify-between w-full items-center">
            <button
              onClick={() => {
                if (quantity > 0) {
                  decrementQuantityHandler(name);
                  if (quantity === 1) {
                    removeItemHandler(name);
                  }
                }
              }}
              className=" border rounded-full size-5 p-[3px]"
            >
              <Image
                src={iconDecrement}
                alt="Decrement quantity"
                width={12}
                height={12}
              />
            </button>
            <span className="text-white ">{quantity}</span>
            <button
              onClick={() => {
                addToCartHandler(name, price);
              }}
              className="border rounded-full size-5 p-[3px]"
            >
              <Image
                src={iconIncrement}
                alt="Increment quantity"
                width={12}
                height={12}
              />
            </button>
          </div>
        )}
      </div>
      <div>
        <p className="text-sm text-Rose500">{category}</p>
        <h2 className="font-[500] text-Rose00">{name}</h2>
        <p className="font-[500] text-Red">${price}</p>
      </div>
    </div>
  );
};

export default Dessert;
