import Footer from "../Footer";
import SuccessHeader from "../SuccessComponents/SuccessHeader";
import OrderInfo from "../SuccessComponents/SuccessOrderInfo";
import OrderTotal from "../SuccessComponents/SuccessOrderTotal";

export default function Success({ orderData }) {


  if (!orderData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#CE2829]">
        <h2 className="text-white text-2xl">
          Sipariş bilgisi bulunamadı
        </h2>
      </div>
    );
  }

  const { extrasTotal, totalPrice } = orderData;

  return (
        <div>
            <main className="w-full max-w-480 min-w-140  h-full bg-[#CE2829] overflow-x-hidden">
                <div className="flex flex-col items-center gap-5 py-15 text-white">
                  <div className="flex flex-col items-center w-full max-w-159 px-4">
                  
                  <SuccessHeader />
                  <OrderInfo order={orderData} />
                  </div>

                  <OrderTotal
                    extrasTotal={extrasTotal}
                    totalPrice={totalPrice}
                  />
                </div>
            </main>

            <div className="hidden sm:block">
            <Footer />
            </div>
        </div>

  );
}
