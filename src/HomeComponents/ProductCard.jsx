export default function ProductCard({ name, img, price, rating, reviewCount }) {
    
   
  return (
    <div className=" flex flex-col justify-center bg-white rounded-xl p-4 text-center shadow-sm
                w-full max-w-62.5 mx-auto">
      <img 
        src={`/images/iteration-2-images/pictures/${img}`}
        alt={name}
        className=" w-67.5 h-66.25 object-contain mb-4"
      />
      <h4 className="font-medium flex">{name}</h4>
      
      <section className="flex justify-between  font-[Barlow] text-[16px]">
        
        <span>{rating}</span>
        <section className="flex gap-15">
             <span>{reviewCount}</span>
        <span className="text-gray-500 mt-1">{price}</span>
        </section>
       
      </section>
    </div>
  );
}
