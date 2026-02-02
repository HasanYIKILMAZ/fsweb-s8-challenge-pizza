import { Link } from "react-router-dom";

export default function PizzaDetails({ BASE_PRICE }) {
  return (
    <section className="w-1/1   bg-[#FAF7F2] flex justify-center items-center">
      <div className="w-120 px-6 pt-0 pb-10 ">

        
        <div className="flex justify-center items-start">
          <img
              src="images/iteration-2-images/pictures/form-banner.png"
            alt="Position Absolute Acı Pizza"
            className="w-120 object-contain"
          />
        </div>

      
       <div className="px-2 py-10">
          <p className="text-sm text-gray-400 text-left">
            <Link
              to="/"
              className="text-black"
            >
              Anasayfa
            </Link>
            <span className="mx-1">-</span>
           
             <Link
              to="/order"
              className="text-[#CE2829]"
            >
              Sipariş Oluştur
            </Link>
          </p>
        </div>

        
        <h1 className=" font-bold text-left px-2 py-1">
          Position Absolute Acı Pizza
        </h1>

        
        <div className="flex justify-between items-center px-2 py-5">
          <p className="text-2xl font-bold">
            {BASE_PRICE}₺
          </p>

          <div className="flex items-center text-sm text-black gap-15">
            <span>4.9</span>
            <span>(200)</span>
          </div>
        </div>

      
        <p className="text-sm text-gray-500 leading-relaxed px-2 py-7 text-left">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza
          tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
          malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
          fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir.
        </p>

      </div>
    </section>
  );
}
