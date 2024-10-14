import CardItem from "../cardItem/CardItem";
import CardData from "../../mock/CardData";
const Item = () => {
  const CardDataMapped = CardData.map((item) => (
    <CardItem
      key={item.id}
      title={item.title}
      location={item.location}
      price={item.price}
      bedrooms={item.bedrooms}
      bathrooms={item.bathrooms}
      propertyType={item.propertyType}
      status={item.status}
      saleType={item.saleType}
      imageUrl={item.imageUrl}
    />
  ));
  return (
    <div className="flex max-w-[95%] sm:max-w-[80%] justify-center mx-auto my-5 mt-3">
      <div className="grid grid-cols-1 newMd:grid-cols-2 newLg:grid-cols-3 gap-3 justify-center place-items-center">
        {CardDataMapped.length > 0 ? (
          CardDataMapped
        ) : (
          <p className="text-white">No hay propiedades disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Item;
