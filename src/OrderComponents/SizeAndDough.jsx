
export default function SizeAndDough({ formData, handleChange }) {

  const sizes = [
    { label: "S", value: "Küçük" },
    { label: "M", value: "Orta" },
    { label: "L", value: "Büyük" },
  ];

  return (
    <div className="flex gap-6">
    
      <section className="flex-1">
        <h4 className="font-semibold mb-3">
          Boyut Seç <span className="text-red-500">*</span>
        </h4>

        <div className="flex gap-3">
          {sizes.map((size) => (
            <label key={size.value} className="cursor-pointer">
              <input
                type="radio"
                name="size"
                value={size.value}
                checked={formData.size === size.value}
                onChange={handleChange}
                className="peer hidden"
              />

              <span
                className="
                  w-10 h-10
                  rounded-full
                  flex items-center justify-center
                  text-sm font-medium
                  bg-[#FAF7F2]
                  text-gray-600
                  transition

                  peer-checked:bg-yellow-200
                  peer-checked:text-black
                "
              >
                {size.label}
              </span>
            </label>
          ))}
        </div>
      </section>


      <section className="flex-1">
        <h4 className="font-semibold mb-3">
          Hamur Seç <span className="text-red-500">*</span>
        </h4>

        <select
          name="dough"
          value={formData.dough}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 bg-white"
        >
          <option value="" disabled>
            — Hamur Kalınlığı Seç —
          </option>
          <option value="İnce">İnce</option>
          <option value="Orta">Orta</option>
          <option value="Kalın">Kalın</option>
        </select>
      </section>
    </div>
  );
}
