import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function PromoBanners() {

  const history = useHistory();
  return (
    <div className="w-full flex justify-center px-4">
      

      <div className="sm:w-200 sm:h-100 w-75 h-140 min-h-90 flex flex-col sm:flex-row gap-2 ">

        <div
          className="flex-1 rounded-xl bg-cover bg-center flex flex-col justify-start mt-10  gap-5 px-4 text-white"
          style={{ backgroundImage: "url('/images/iteration-2-images/cta/kart-1.png')" }}
        >
          <h2 className="flex flex-col text-[40px] font-bold font-[Quattrocento]">
            <span>Özel</span>  
            <span>Lezzetus</span> 
          </h2>
          <p>Position: Absolute Acı Burger</p>
          <button 
          onClick={() => history.push("/order")}
          className="w-21 h-6 bg-white text-red-500 rounded-full text-xs font-semibold mt-1 cursor-pointer">
            Sipariş Ver
          </button>
        </div>

        <div className="flex-1 flex flex-col gap-1">
          <div
            className="flex-1 rounded-xl bg-cover bg-center flex flex-col justify-center gap-6  px-2 text-white"
            style={{ backgroundImage: "url('/images/iteration-2-images/cta/kart-2.png')" }}
          >
            <h3 className="text-[24px] gap-2 font-semibold">
              Hackathlon <br /> Burger Menü
            </h3>
            <button 
            onClick={() => history.push("/order")}
            className="w-21  h-6 bg-white text-red-500 rounded-full text-xs mt-1 cursor-pointer">
              Sipariş Ver
            </button>
          </div>

          <div
            className="flex-1 rounded-xl bg-cover bg-center flex flex-col justify-around px-2  text-white "
            style={{ backgroundImage: "url('/images/iteration-2-images/cta/kart-3.png')" }}
          >
            <h3 className="text-[24px] font-semibold text-black">
              <span className="text-red-500">Çooook</span> hızlı <br /> npm gibi kurye
            </h3>
            <button 
            
            onClick={() => history.push("/order")}
            className="w-21  h-6 bg-white text-red-400 rounded-full text-xs mt-1 cursor-pointer">
              Sipariş Ver
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
