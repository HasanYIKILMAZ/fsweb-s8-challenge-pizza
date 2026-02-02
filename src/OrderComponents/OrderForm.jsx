import SizeAndDough from "../OrderComponents/SizeAndDough";
import Extras from "../OrderComponents/Extras";
import Note from "../OrderComponents/Note";
import QuantityAndTotal from "../OrderComponents/QuantityAndTotal";

export default function OrderForm({
  formData,
  handleChange,
  extraOptions,
  handleExtraChange,
  setFormData,
  extrasTotal,
  totalPrice,
  handleOrder,
}) {
  return (
    <div className="bg-white flex items-center justify-center w-full">
      <div className="w-120 max-w-full space-y-6">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white rounded-lg shadow p-6 space-y-6"
        >
          <SizeAndDough
            formData={formData}
            handleChange={handleChange}
          />

          <Extras
            formData={formData}
            extraOptions={extraOptions}
            handleExtraChange={handleExtraChange}
          />

          <Note
            formData={formData}
            handleChange={handleChange}
          />

          <QuantityAndTotal
            formData={formData}
            setFormData={setFormData}
            extrasTotal={extrasTotal}
            totalPrice={totalPrice}
            handleOrder={handleOrder}
          />
        </form>
      </div>
    </div>
  );
}
