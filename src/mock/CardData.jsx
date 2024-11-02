const CardData = [
  {
    id: 1,
    title: "Venta - Los Pasos Condominios",
    location: "Ing. Leon Migilerini 600, Santa Fe, Argentina",
    price: "$78.000",
    bedrooms: 2,
    bathrooms: 1,
    propertyType: "Departamento",
    status: "DESTACADO",
    saleType: "VENTA",
    imageUrl:
      "https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/large_jpg/_FI.jpg?1563747560",
    description:
      "Acogedor departamento de dos dormitorios ubicado en una zona tranquila de Santa Fe. Con acabados modernos y amplios ventanales, este espacio ofrece una vista panorámica de la ciudad. Perfecto para parejas o familias pequeñas, cuenta con una sala de estar abierta que conecta con una cocina funcional y equipada. Además, su proximidad a parques y servicios lo convierten en una excelente opción para quienes buscan comodidad y tranquilidad.",
  },
  {
    id: 2,
    title: "Alquiler - Residencia Torre Norte",
    location: "Av. Urquiza 1234, Rosario, Argentina",
    price: "$120.000",
    bedrooms: 3,
    bathrooms: 2,
    propertyType: "Casa",
    status: "DESTACADO",
    saleType: "ALQUILER",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/022/903/424/non_2x/ai-generative-3d-modern-luxury-real-estate-house-for-sale-and-rent-luxury-property-concept-ai-generated-artwork-photo.jpg",
    description:
      "Elegante residencia en Torre Norte, con amplios espacios diseñados para el confort y la tranquilidad. Esta casa cuenta con tres dormitorios bien distribuidos, una cocina de estilo contemporáneo y una sala de estar que se abre a una terraza privada. Ubicada en una zona privilegiada, esta propiedad es ideal para familias que buscan un hogar cómodo cerca de centros comerciales y servicios.",
  },
  {
    id: 3,
    title: "Venta - Penthouse Cielo Azul",
    location: "Calle 8 N° 451, Buenos Aires, Argentina",
    price: "$450.000",
    bedrooms: 4,
    bathrooms: 3,
    propertyType: "Penthouse",
    status: "NUEVO",
    saleType: "VENTA",
    imageUrl:
      "https://www.build-review.com/wp-content/uploads/2020/07/luxury-real-estate.jpg",
    description:
      "Exclusivo penthouse en el corazón de Buenos Aires con vistas panorámicas a la ciudad. Este lujoso espacio de cuatro dormitorios cuenta con acabados de alta calidad, una cocina gourmet y un salón amplio ideal para el entretenimiento. La propiedad ofrece acceso a una terraza privada con jacuzzi y zonas verdes. Una joya en pleno centro, perfecta para quienes buscan lujo y exclusividad.",
  },
  {
    id: 4,
    title: "Venta - Casa Moderna en Zona Norte",
    location: "Bv. Rondeau 8000, Rosario, Argentina",
    price: "$300.000",
    bedrooms: 4,
    bathrooms: 3,
    propertyType: "Casa",
    status: "DESTACADO",
    saleType: "VENTA",
    imageUrl:
      "https://imgix.cosentino.com/es/wp-content/uploads/2023/07/Lumire-70-Facade-MtWaverley-vic-1.jpg?auto=format%2Ccompress&ixlib=php-3.3.0",
    description:
      "Moderna casa de cuatro dormitorios en una de las zonas más exclusivas de Rosario. Con un diseño minimalista, esta propiedad ofrece amplios espacios y techos altos que proporcionan luz natural durante todo el día. El patio cuenta con una piscina y una zona de barbacoa, ideal para reuniones sociales. Esta es una opción perfecta para familias que buscan lujo y comodidad en un entorno seguro.",
  },
  {
    id: 5,
    title: "Alquiler - Departamento Plaza Francia",
    location: "Av. del Libertador 1000, Buenos Aires, Argentina",
    price: "$200.000",
    bedrooms: 2,
    bathrooms: 2,
    propertyType: "Departamento",
    status: "NUEVO",
    saleType: "ALQUILER",
    imageUrl: "https://i.ytimg.com/vi/4ZGbxcBo9mk/maxresdefault.jpg",
    description:
      "Departamento moderno ubicado frente a Plaza Francia, ideal para quienes buscan comodidad y estilo en una zona céntrica de Buenos Aires. Con dos dormitorios y acabados de lujo, esta propiedad ofrece una sala de estar con grandes ventanales que dejan entrar la luz natural. Ideal para ejecutivos o familias pequeñas, está a pocos minutos de cafeterías, restaurantes y centros comerciales.",
  },
  {
    id: 6,
    title: "Venta - Casa Estilo Colonial",
    location: "Ruta 9, Km 78, Córdoba, Argentina",
    price: "$95.000",
    bedrooms: 3,
    bathrooms: 2,
    propertyType: "Casa",
    status: "DESTACADO",
    saleType: "VENTA",
    imageUrl:
      "https://www.hola.com/horizon/landscape/8089ccffb14b-modelos-casas-prefabricadas-01t-t.jpg",
    description:
      "Encantadora casa estilo colonial ubicada en las afueras de Córdoba. Con tres dormitorios y dos baños, esta propiedad combina lo rústico con lo moderno, ofreciendo un ambiente acogedor y lleno de historia. El amplio jardín y la terraza invitan a disfrutar de la naturaleza y la tranquilidad. Una excelente opción para quienes buscan un retiro de fin de semana o una residencia permanente en un entorno natural.",
  },
  {
    id: 7,
    title: "Venta - Residencia El Bosque",
    location: "Calle 13 N° 259, La Plata, Argentina",
    price: "$350.000",
    bedrooms: 5,
    bathrooms: 4,
    propertyType: "Casa",
    status: "DESTACADO",
    saleType: "VENTA",
    imageUrl:
      "https://planosdecasas.shop/wp-content/uploads/2023/08/Diseno-de-casas-sencillas.webp",
    description:
      "Imponente residencia en La Plata rodeada de vegetación, perfecta para grandes familias. Con cinco dormitorios y un diseño espacioso, esta casa cuenta con un gran salón, cocina gourmet y un jardín privado con zona de juegos. Ubicada en una zona tranquila, esta propiedad ofrece la combinación ideal entre privacidad y cercanía a servicios esenciales.",
  },
  {
    id: 8,
    title: "Venta - Duplex Belgrano",
    location: "Av. Cabildo 2000, Buenos Aires, Argentina",
    price: "$600.000",
    bedrooms: 3,
    bathrooms: 2,
    propertyType: "Duplex",
    status: "DESTACADO",
    saleType: "VENTA",
    imageUrl:
      "https://imgix.cosentino.com/es/wp-content/uploads/2023/07/Lumire-70-Facade-MtWaverley-vic-1.jpg?auto=format%2Ccompress&ixlib=php-3.3.0",
    description:
      "Elegante duplex en Belgrano, con un diseño moderno y sofisticado. La propiedad cuenta con tres dormitorios, dos baños y una amplia terraza con vistas impresionantes. Situado en una zona exclusiva de Buenos Aires, este dúplex es ideal para aquellos que buscan un hogar espacioso en una ubicación privilegiada, cerca de restaurantes, tiendas y transporte público.",
  },
  {
    id: 9,
    title: "Alquiler - Loft Parque Norte",
    location:
      "Av. Figueroa Alcorta 3300, Buenos Aires, Argentina. Orientacion este",
    price: "$150.000",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Loft",
    status: "NUEVO",
    saleType: "ALQUILER",
    imageUrl:
      "https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/large_jpg/_FI.jpg?1563747560",
    description:
      "Moderno loft con orientación este en el exclusivo Parque Norte. Este espacio abierto ofrece una cocina equipada y una sala de estar amplia con luz natural. Ideal para jóvenes profesionales o estudiantes, su ubicación brinda fácil acceso a áreas de esparcimiento y zonas comerciales, haciendo de este loft una excelente opción para vivir en la ciudad.",
  },
  {
    id: 10,
    title: "Alquiler - Residencia Torre Norte",
    location: "Av. Urquiza 1234, Rosario, Argentina",
    price: "$120.000",
    bedrooms: 3,
    bathrooms: 2,
    propertyType: "Casa",
    status: "DESTACADO",
    saleType: "ALQUILER",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/022/903/424/non_2x/ai-generative-3d-modern-luxury-real-estate-house-for-sale-and-rent-luxury-property-concept-ai-generated-artwork-photo.jpg",
    description:
      "Residencia en Torre Norte con un diseño espacioso y moderno. Cuenta con tres dormitorios, una cocina completamente equipada y un salón principal que se abre a una terraza privada. Ubicada en un área segura, esta casa es perfecta para familias que desean un ambiente cómodo y bien conectado en Rosario.",
  },
];

export default CardData;
