export default function Note({ formData, handleChange }) {
  return (
    <div >
      <h4 className="font-semibold mb-1">Sipariş Notu</h4>
      <textarea
        name="note"
        value={formData.note}
        onChange={handleChange}
        className="w-full rounded p-2 text-sm resize-none bg-[#FAF7F2] focus:outline-none focus:ring-1 focus:ring-yellow-400"
        placeholder="Siparişine eklemek istediğin bir not var mı?"
        onFocus={(e) => e.target.scrollIntoView({ behavior: "smooth", block: "nearest" })}
      />
    </div>
  );
}
