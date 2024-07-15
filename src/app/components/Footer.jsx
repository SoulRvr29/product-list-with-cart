const Footer = () => {
  return (
    <footer className="absolute mx-auto w-full left-0 bottom-0 text-center font-bold text-base text-Rose500 p-4 max-lg:p-4 max-lg:text-xs  border-t-2 border-Rose100">
      Challenge by
      <a
        className="text-Red ml-1 hover:text-Green hover:underline"
        href="https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a
        className="text-Red hover:text-Green ml-1 hover:text-Light-red-(work) hover:underline"
        href="https://www.frontendmentor.io/profile/SoulRvr29"
        target="_blank"
      >
        Paweł Chudecki
      </a>
      .
    </footer>
  );
};

export default Footer;
