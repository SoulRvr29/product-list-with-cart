import React from "react";
import Image from "next/image";
import removeItem from "../assets/icon-remove-item.svg";
import emptyCart from "../assets/illustration-empty-cart.svg";

const Cart = () => {
  return (
    <div className="bg-white rounded-lg p-5 min-w-96 h-fit max-[900px]:min-w-full ">
      <div className="text-Red font-bold text-2xl flex gap-2 mb-4">
        <h2>Your Cart</h2>
        <div>(0)</div>
      </div>
      <div
        className="flex flex-col items-center
      gap-2 py-4"
      >
        <Image src={emptyCart} alt="Empty cart" width={120} height={120} />
        <p className="text-Rose500 font-semibold text-sm">
          Your added items will appear here
        </p>
        {/* <div className="flex justify-between">
        <div>
          <p className="text-sm text-rose900 font-semibold">Classic Tramisu</p>
          <div className="flex gap-2 text-Rose500">
            <span className="font-semibold text-Red pr-2">1x</span>{" "}
            <span>@ $5.50</span>
            <span className="font-semibold">$5.50</span>
          </div>
        </div>
        <button>
          <Image
            src={removeItem}
            alt="Remove item"
            width={15}
            height={15}
            className="border-2 border-Rose300 rounded-full size-[18px] p-[1px]"
          />
        </button>
        <hr className="border-rose" />
      </div> */}
      </div>
    </div>
  );
};

export default Cart;
