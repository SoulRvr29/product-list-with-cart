import React from "react";
import Image from "next/image";
import iconConfirmed from "../assets/icon-order-confirmed.svg";

const Confirm = ({ cartItems, setShowConfirm, setCartItems }) => {
  return (
    <div className="absolute top-0 left-0 w-screen  min-h-full bg-black bg-opacity-50 z-50 ">
      <div className="bg-white p-8 mt-28 rounded-xl flex flex-col gap-4 w-screen max-w-[36rem] mx-auto">
        <Image src={iconConfirmed} alt="confirmed" width={46} height={46} />
        <h2 className="text-4xl font-bold">Order Confirmed</h2>
        <p className="text-Rose500 text-sm">We hope you enjoy your food!</p>
        <div className="bg-Rose50 rounded-lg px-4 my-4">
          {cartItems.map((item) => (
            <div key={item.name} className="flex">
              <div className="flex justify-between items-center py-4 w-full gap-4 border-b border-Rose100">
                <Image
                  className="rounded-md"
                  src={item.thumbnail}
                  alt={item.name}
                  width={44}
                  height={44}
                />
                <div className="flex justify-between w-full">
                  <div>
                    <h3 className="text-xs font-semibold">{item.name}</h3>
                    <p className="text-xs text-Rose500 flex gap-4">
                      <span className="text-Red font-semibold">
                        {item.quantity}x{" "}
                      </span>{" "}
                      @ {item.price}
                    </p>
                  </div>
                  <div className="font-semibold text-sm">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center py-6 text-xs">
            <div>Order Total</div>
            <div className="text-2xl font-bold">
              $
              {cartItems
                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                .toFixed(2)}
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setShowConfirm(false);
            setCartItems([]);
          }}
          className="flex justify-center w-full bg-Red hover:bg-[hsl(14,86%,30%,var(--tw-bg-opacity))] rounded-full font-semibold text-Rose100 p-3"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default Confirm;
