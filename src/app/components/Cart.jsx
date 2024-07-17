import React from "react";
import Image from "next/image";
import iconCarbonNeutral from "../assets/icon-carbon-neutral.svg";
import iconEmptyCart from "../assets/illustration-empty-cart.svg";

const CartLi = ({ item, removeItemHandler }) => {
  return (
    <div>
      <div className="flex justify-between items-center py-3">
        <div>
          <p className="text-sm text-rose900 font-semibold mb-1">{item.name}</p>
          <div className="flex gap-2 text-Rose500">
            <span className="font-semibold text-Red pr-2">
              {item.quantity}x
            </span>{" "}
            <span>@ {item.price}</span>
            <span className="font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        </div>
        <button
          onClick={() => {
            removeItemHandler(item.name);
          }}
          className="grid place-content-center border border-Rose300 rounded-full size-[18px] p-[1px] text-Rose300 hover:text-Rose900 hover:border-Rose900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="currentColor"
            viewBox="0 0 10 10"
          >
            <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
          </svg>
        </button>
      </div>
      <hr className="border-rose " />
    </div>
  );
};

const Cart = ({ cartItems, removeItemHandler, setShowConfirm }) => {
  return (
    <div className="bg-white rounded-lg p-5 min-w-96 h-fit max-[900px]:min-w-full ">
      <div className="text-Red font-bold text-2xl flex gap-2 mb-4">
        <h2>Your Cart</h2>
        <div>
          (
          {cartItems.reduce((sum, item) => {
            return sum + item.quantity;
          }, 0)}
          )
        </div>
      </div>
      {cartItems.length === 0 ? (
        <div
          className="flex flex-col items-center
      gap-2 py-4"
        >
          <Image
            src={iconEmptyCart}
            alt="Empty cart"
            width={120}
            height={120}
          />
          <p className="text-Rose500 font-semibold text-sm">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartLi
              item={item}
              removeItemHandler={removeItemHandler}
              key={item.name}
            />
          ))}
          <div className="flex justify-between text-Rose500 py-6 text-sm font-semibold">
            <div>Order Total</div>
            <div className="text-2xl text-Rose900 font-bold">
              $
              {cartItems
                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                .toFixed(2)}{" "}
            </div>
          </div>
          <div className="flex justify-center gap-2 bg-Rose50 p-4 rounded-lg">
            <Image
              alt="carbon neutral"
              src={iconCarbonNeutral}
              width={22}
              height={22}
            />
            <p className="text-sm">
              This is a <b>carbon-neutral</b> delivery
            </p>
          </div>
          <button
            onClick={() => setShowConfirm(true)}
            className="text-Rose50 bg-Red p-4 w-full rounded-full mt-6 hover:bg-[hsl(14,86%,30%,var(--tw-bg-opacity))]"
          >
            {" "}
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
