import Dessert from "./components/Dessert";
import Cart from "./components/Cart";
import data from "./data.json";
import Footer from "./components/Footer";

export default function Home() {
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
              />
            ))}
          </div>
        </div>
        <Cart />
      </main>
      <Footer />
    </>
  );
}
