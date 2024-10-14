import CardItem from "./components/cardItem/CardItem";
import Item from "./components/item/Item";
import Header from "./header/Header";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#222] flex flex-col justify-center items-center w-full">
        <section>
          <Header />
        </section>

        <Item />
      </div>
    </>
  );
}

export default App;
