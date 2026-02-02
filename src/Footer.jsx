
export default function Footer() {
  
  const hotMenu = [
  "Terminal Pizza",
  "5 Kişilik Hackathlon Pizza",
  "useEffect Tavuklu Pizza",
  "Beyaz Console Frosty",
  "Testler Geçti Mutlu Burger",
  "Position Absolute Acı Burger",
  ];

  const instagramImages = [
    "li-0.png",
    "li-1.png",
    "li-2.png",
    "li-3.png",
    "li-4.png",
    "li-5.png",
  ];
  return (

    <footer className=" w-full  max-w-480 min-w-160   mx-auto " >
      <div className=" bg-[#1A1A1A] text-white flex flex-col justify-center items-center font-sans font-normal text-base leading-8">
   
      <div className="flex flex-col md:flex-row w-[90%] md:w-4/5 mx-auto p-8 border-b border-gray-400 gap-8">
        
        <div className="flex flex-col flex-1 gap-2">
          <section>
             <h1 className="font-bold text-4xl font-['Londrina_Solid']">Teknolojik</h1>
             <h2 className="font-bold text-4xl font-['Londrina_Solid']">Yemekler</h2>
          </section>
         
          <section>
              <ul className="flex flex-col gap-2 mt-4">
            <li className="flex items-start gap-3">
              <img src="./images\iteration-2-images\footer\icons\icon-1.png" alt="Konum" className="h-7 min-h-4 min-w-4" />
              <span className="flex flex-col">
                <span>341 Londonderry Road,</span>
                <span>Istanbul Türkiye</span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <img src="./images\iteration-2-images\footer\icons\icon-2.png" alt="e-posta" className="h-7" />
              <span>aciktim@teknolojikyemekler.com</span>
            </li>
            <li className="flex items-center gap-3">
              <img src="./images\iteration-2-images\footer\icons\icon-1.png" alt="Telefon" className="h-7" />
              <span>+90 216 123 45 67</span>
            </li>
          </ul>
          </section>
          
        </div>

        
        <div className="flex-1 p-4">
          <p className="font-medium text-lg mb-4">Hot Menu</p>
          <ul className="flex flex-col gap-2 pt-5">
            {hotMenu.map((item) => (
             <li key={item}>
              <a href="#" className="text-white hover:underline">
                {item}
              </a>
              </li>
            ))}
          </ul>
        </div>

     
        <div className="flex flex-col flex-1 p-4 gap-6">
          <p className="text-lg font-medium">Instagram</p>

          <div className="flex flex-wrap gap-2 min-w-60 min-h-40">
            {instagramImages.map((img, index) => (
                <img
                  key={img}
                  src={`/images/iteration-2-images/footer/insta/${img}`}
                  alt={`Instagram-resim ${index + 1}`}
                  className="w-1/4 aspect-square rounded-sm"
                />
              ))}
          </div>
        </div>

      </div>

      <div className="w-[80%] md:w-4/5 mx-auto flex justify-between items-center py-6 text-sm">
        <p>© 2023 Teknolojik Yemekler.</p>
        <a href="https://www.twitter.com/Yemekler"><img className="fa-brands fa-twitter w-6 h-6" src="images\iteration-2-images\footer\twitter.png" alt="twitter-logo" /> </a>
        
      </div>
    </div>
    </footer>
  );
}