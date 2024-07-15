"use client";
import React from "react";
import Image from "next/image";
import addToCart from "../assets/icon-add-to-cart.svg";

const Dessert = ({ name, price, category, image }) => {
  console.log(image.desktop.slice(1));
  return (
    <div className="w-fit">
      <div>
        <Image
          src={image.desktop.slice(1)}
          alt="Waffle"
          width={250}
          height={250}
          className="rounded-lg"
        />
      </div>
      <button className="flex items-center gap-2 relative -top-5 border border-Rose400 rounded-full p-2 px-6 bg-white font-semibold mx-auto text-Rose900 hover:text-Red hover:border-Red">
        <Image src={addToCart} alt="Add to cart" width={22} height={22} />
        Add to Cart
      </button>
      <div>
        <p className="text-sm text-Rose500">{category}</p>
        <h2 className="font-[500] text-Rose00">{name}</h2>
        <p className="font-[500] text-Red">${price}</p>
      </div>
    </div>
  );
};

export default Dessert;
