"use client";
import React from "react";
import Image from "next/image";
import iconAddToCart from "../assets/icon-add-to-cart.svg";
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
  const [imageSrc, setImageSrc] = useState(image.desktop);

  useEffect(() => {
    setQuantity(cartItems.find((item) => item.name === name)?.quantity || 0);
  }, [cartItems]);

  const updateImageSrc = () => {
    if (window.innerWidth <= 500) {
      setImageSrc(image.mobile);
    } else if (window.innerWidth > 500 && window.innerWidth <= 768) {
      setImageSrc(image.tablet);
    } else if (window.innerWidth >= 768) {
      setImageSrc(image.desktop);
    }
  };

  useEffect(() => {
    updateImageSrc();

    window.addEventListener("resize", updateImageSrc);

    return () => {
      window.removeEventListener("resize", updateImageSrc);
    };
  }, []);

  return (
    <div className="w-fit select-none">
      <div>
        <Image
          src={imageSrc.slice(1)}
          alt={name}
          width={250}
          height={250}
          className={
            "max-sm:w-full rounded-lg border-Red " + (quantity && "border-2")
          }
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
              className=" border rounded-full size-5 p-[3px] text-Rose50 hover:text-Red hover:bg-Rose50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                viewBox="0 0 10 2"
              >
                <path d="M0 .375h10v1.25H0V.375Z" />
              </svg>
            </button>
            <span className="text-white ">{quantity}</span>
            <button
              onClick={() => {
                addToCartHandler(name, price);
              }}
              className="border rounded-full size-5 p-[3px] text-Rose50 hover:text-Red hover:bg-Rose50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                viewBox="0 0 10 10"
              >
                <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
              </svg>
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
