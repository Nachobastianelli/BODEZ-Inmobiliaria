import useApi from "../../hooks/useApi";
import CardItem from "../cardItem/CardItem";

const Item = () => {
  const { data, loading, error } = useApi("Property");

  const CardDataMapped = data.map((item) => (
    <CardItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      value={item.value}
      bedrooms={item.bedrooms}
      bathrooms={item.bathrooms}
      rooms={item.rooms}
      m2={item.m2}
      country={item.country}
      regionState={item.regionState}
      city={item.city}
      address={item.address}
      type={item.type}
      status={item.status}
      imagePaths={item.imagePaths}
      linkMap={item.linkMap}
      builtIn={item.builtIn}
      garage={item.garage}
      listedAt={item.listedAt}
      lastUpdatedAt={item.lastUpdatedAt}
      isAvailable={item.isAvailable}
      floor={item.floor}
      numberFloor={item.numberFloors}
    />
  ));
  return (
    <div className="flex max-w-[95%] sm:max-w-[80%] justify-center mx-auto my-5 mt-3">
      <div className="grid grid-cols-1 newMd:grid-cols-2  gap-10 justify-center place-items-center">
        {" "}
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
