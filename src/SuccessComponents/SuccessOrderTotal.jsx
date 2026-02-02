export default function OrderTotal({ extrasTotal, totalPrice }) {
  return (
    <div className="mt-12 border border-amber-50 text-white rounded-lg shadow w-60 py-5">
      <div className="flex flex-col px-6 py-6 gap-3">
        <h5 className="text-sm font-semibold">Sipariş Toplamı</h5>

        <div className="flex justify-between text-sm">
          <span>Seçimler</span>
          <span>{extrasTotal.toFixed(2)}₺</span>
        </div>

        <div className="flex justify-between">
          <span>Toplam</span>
          <span>{totalPrice.toFixed(2)}₺</span>
        </div>
      </div>
    </div>
  );
}
