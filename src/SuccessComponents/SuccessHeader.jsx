export default function SuccessHeader() {
  return (
    <>
      <h1 className="text-5xl font-bold mb-2 font-['Londrina_Solid'] ">
        Teknolojik Yemekler
      </h1>

      <section className="flex flex-col items-center justify-center font-light leading-23 tracking-[1.5px] ">
        <p className="font-['Satisfy'] text-[32px] text-amber-400 hidden lg:block">
          lezzetin yolda
        </p>

        <p className=" flex flex-col
            sm:flex-row
           
            gap-0 sm:gap-4
            text-[48px] md:text-[48px]
            font-['Roboto_Condensed']
            items-center
            text-center">
            
            <span>SİPARİŞ</span>
            <span>ALINDI</span>
        </p>

        <hr className="my-6 border-white w-full" />
      </section>
    </>
  );
}
