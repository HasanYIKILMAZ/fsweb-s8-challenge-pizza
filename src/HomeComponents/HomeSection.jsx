import PromoBanners from "./PromoBanners";
import ProductList from "./ProductList";
import CategoriesBar from "./CategoriesBar";


export default function HomeSection() {
  return (
    <section className=" w-full min-w-160 flex flex-col justify-center items-center ">
        
        
       <CategoriesBar  />
        <div className="w-full min-w-160 flex flex-col justify-center items-center  max-w-480 bg-[#FAF7F2] gap-5 py-12">
            <PromoBanners />

            <ProductList />
        </div>
    </section>
    

  );
}
