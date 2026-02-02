import CategoriesBar from "./CategoriesBar";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const products = [            
    { name: "Terminal Pizza", img: "food-1.png", price: "60₺", rating: "4.9", reviewCount:"200" },
    { name: "Position Absolute Pizza", img: "food-2.png", price: "60₺", rating: "4.9", reviewCount:"200" },
    { name: "useEffect Tavuklu Burger", img: "food-3.png", price: "60₺",rating: "4.9", reviewCount:"200" },
  ];

  return (
     <div className="flex justify-center px-4">
      <div className="max-w-300 flex flex-col justify-center mx-auto gap-8">

        <h3 className="text-center text-[32px] font-[Satisfy] text-[#CE2829]">
          en çok paketlenen menüler
        </h3> 

        <h3 className="text-center text-[42px] font-semibold font-[Barlow]">
          Acıktıran Kodlara Doyuran Lezzetler
        </h3>

        <CategoriesBar variant="pill" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center">
          {products.map((item, i) => (
            <ProductCard key={i} {...item} />
          ))}
        </div>

      </div>
    </div>
  );
}
