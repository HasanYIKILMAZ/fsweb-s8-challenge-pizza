  export default function Extras({ formData, extraOptions, handleExtraChange }) {
    return (
      <div className="py-5">
        <h4 className="font-semibold">Ek Malzemeler</h4>
        <p className="text-xs text-gray-500 mb-2">
         
          En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺
        </p>

        <div className="grid grid-cols-2 gap-2 text-sm">
          {extraOptions.map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 cursor-pointer select-none"
                    >
              <input
                type="checkbox"
                checked={formData.extras.includes(item)}
                onChange={() => handleExtraChange(item)}
                className="peer hidden"
              />

                <span 
                  className="
                    w-9 h-9
                    border border-gray-300
                    rounded
                    bg-[#FAF7F2]
                    flex items-center justify-center
                    transition
                    peer-checked:bg-yellow-400
                    peer-checked:border-yellow-400

                    after:content-['✓']
                    after:text-black
                    after:text-sm
                    after:font-bold
                    after:opacity-0
                    peer-checked:after:opacity-100
                  "
                  />

              <span className="text-sm text-gray-700">{item}</span>
            </label>

          ))}
        </div>
      </div>
        );
  }
