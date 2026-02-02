
const getSizeAbbreviation = (size) => {
  const map = {
    Büyük: "L",
    Orta: "M",
    Küçük: "S",
  };
  return map[size] || size;
};

export default function OrderInfo({ order }) {
  return (
    <div className="text-center space-y-2">
      <h2 className="font-semibold text-xl mb-4">{order.name}</h2>

      <div className="flex justify-center py-5">
        <div className="w-50.5 h-38.25 flex flex-col justify-around text-left text-sm text-white px-5">
          <p>
            <strong>Boyut:</strong>{" "}
            {getSizeAbbreviation(order.size)}
          </p>

          <p>
            <strong>Hamur:</strong> {order.dough}
          </p>

          <p>
            <strong>Ek Malzemeler:</strong>{" "}
            {order.extras.length ? order.extras.join(", ") : "Yok"}
          </p>
        </div>
      </div>
    </div>
  );
}
