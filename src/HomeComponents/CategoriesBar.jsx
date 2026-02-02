export default function CategoriesBar({ variant = "simple" }) {
  const categories = [
    { name: "YENİ! Kore", icon: "1.svg" },
    { name: "Pizza", icon: "2.svg" },
    { name: "Burger", icon: "3.svg" },
    { name: "French Fries", icon: "4.svg" },
    { name: "Fast Food", icon: "5.svg" },
    { name: "Soft Drinks", icon: "6.svg" },
  ];

  const isPill = variant === "pill";

  return (
    <div className="max-w-480 min-w-160 min-h-20 flex justify-center">
      <div
        className={`
          max-w-250 mx-auto px-4 mb-10
          grid grid-cols-2 gap-4
          sm:flex sm:justify-around sm:items-center
        `}
      >
        {categories.map((item) => (
          <div
            key={item.name}
            className={`
              flex items-center gap-2 text-sm font-medium
              ${isPill
                ? "justify-center w-27 h-15 rounded-[50px] bg-white text-black hover:bg-black hover:text-white"
                : ""}
            `}
          >
            <img
              src={`/images/iteration-2-images/icons/${item.icon}`}
              alt={item.name}
              className="w-6 h-6"
            />
            <a href="#">
              <span>{item.name}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
