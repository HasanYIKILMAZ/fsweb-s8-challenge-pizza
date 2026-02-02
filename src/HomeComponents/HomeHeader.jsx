import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function HomeHeader() {
     const history = useHistory();
    return(
    <header className="flex justify-center min-w-160  overflow-x-hidden">
        <div
          className="flex justify-center items-start text-center 
                 bg-no-repeat bg-center  
                 w-480  h-270 
                 "
        style={{ backgroundImage: "url('/images/iteration-1-images/home-banner.png')" }}
        >
          <div className="flex flex-col items-center justify-start text-start pt-24  gap-11 w-223 min-h-95 text-white">
            <h1 className="font-['Londrina_Solid'] text-[50px] font-normal">
              Teknolojik Yemekler
            </h1>

            <section className="font-['Roboto_Condensed'] font-light text-[86px] leading-23 tracking-[1.5px] uppercase text-center">
              <p><span>KOD</span> <span>ACIKTIRIR</span></p>
              <p><span>Pizza,</span> <span>DOYURUR</span></p>
            </section>

            <button
              data-cy="home-order-btn"

              className="w-48.25 h-14 bg-yellow-400 rounded-full  text-black flex justify-center items-center cursor-pointer "
              onClick={() => history.push("/order")}
            >
              ACIKTIM
            </button>
          </div>
        </div>
      </header> 
    );
}