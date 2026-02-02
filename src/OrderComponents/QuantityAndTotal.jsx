export default function QuantityAndTotal({
  formData,
  setFormData,
  extrasTotal,
  totalPrice,
  handleOrder,
})

{
  
  return (
    <div className="flex justify-between items-start gap-4 py-5">
      <section className="flex border rounded items-center ">
        <button
          type="button"
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              quantity: Math.max(1, prev.quantity - 1),
            }))
          }
          className="px-3 bg-yellow-400 font-bold w-10 h-10"
        >
          -
        </button>

        <span className="px-4">{formData.quantity}</span>

        <button
          type="button"
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              quantity: prev.quantity + 1,
            }))
          }
          className="px-3 bg-yellow-400 font-bold w-10 h-10 "
        >
          +
        </button>
      </section>

      <section className="bg-[#FAF7F2] shadow w-68">
        <div className="flex flex-col px-6 py-6 gap-3">
          <h5 className="text-sm font-semibold">Sipariş Toplamı</h5>

          <div className="flex justify-between text-sm">
            <span>Seçimler</span>
            <span>{extrasTotal.toFixed(2)}₺</span>
          </div>

          <div className="flex justify-between text-red-600 font-bold">
            <span>Toplam</span>
            <span>{totalPrice.toFixed(2)}₺</span>
          </div>
        </div>

        <button
          type="button"
          disabled={
                !formData.size 
            ||  !formData.dough
            ||  formData.extras.length < 4
            ||  formData.extras.length > 10
            }
          onClick={handleOrder}
          className="w-full bg-yellow-400 py-3 rounded-b-lg font-bold text-black
            hover:bg-yellow-500 transition
            disabled:bg-gray-200 disabled:text-gray-400"
        >
          SİPARİŞ VER
        </button>
      </section>
    </div>
  );
}
  