import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import PizzaDetails from "../OrderComponents/PizzaDetails";
import Footer from "../Footer";
import OrderHeader from "../OrderComponents/OrderHeader";
import OrderForm from "../OrderComponents/OrderForm";
import axios from "axios";

export default function Order({ setOrderData }) {
  const [formData, setFormData] = useState({
    name: "Position Absolute Acı Pizza",
    size: "",
    dough: "",
    extras: [],
    note: "",
    quantity: 1,
  });
  const [error, setError] = useState("");

  const history = useHistory();

  const extraOptions = [
    "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan",
    "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak",
    "Ananas", "Biber", "Kabak", "Mantar"
  ];

  const BASE_PRICE = 49.99;
  const extrasTotal = formData.extras.length * 5;
  const totalPrice = (BASE_PRICE + extrasTotal) * formData.quantity;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleExtraChange = (item) => {
    setFormData((prev) => {
      if (prev.extras.includes(item)) {
        return { ...prev, extras: prev.extras.filter((i) => i !== item) };
      }
      if (prev.extras.length < 10) {
        return { ...prev, extras: [...prev.extras, item] };
      }
      return prev;
    });
  };

 const handleOrder = async () => {
    try {
      setError(""); 
      const res = await axios.post(
        "https://reqres.in/api/pizza",
        formData,
        { headers: { "x-api-key": "reqres-free-v1" } }
      );

      const order = { ...res.data, totalPrice, extrasTotal };
      setOrderData(order);

      history.push("/success");
    } catch (err) {
     
      setError(`Sipariş gönderilemedi. Lütfen tekrar deneyin. Hata: ${err}`);
    }
  };



  return (
    <div className="w-full mx-auto min-w-140 overflow-x-hidden">
          <OrderHeader />

          <PizzaDetails BASE_PRICE={BASE_PRICE} />

          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 border border-red-300 rounded">
              {error}
            </div>
          )}
          <OrderForm
            formData={formData}
            handleChange={handleChange}
            extraOptions={extraOptions}
            handleExtraChange={handleExtraChange}
            setFormData={setFormData}
            extrasTotal={extrasTotal}
            totalPrice={totalPrice}
            handleOrder={handleOrder}
          />

          <div className="hidden sm:block">
            <Footer />
          </div>
    </div>
  );
}
