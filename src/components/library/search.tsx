import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <section className="px-6 flex flex-col items-center gap-8 w-full max-w-5xl mx-auto">
      {/* حقل البحث */}
      <div className="relative w-full group">
        <input 
          dir="rtl"
          type="search"
          placeholder="ابحث عن مقالات أو مواضيع..." 
          className="w-full pr-14 pl-6 py-4 md:py-5 text-lg rounded-2xl border-2 border-green-100 bg-white shadow-sm outline-none focus:border-green-600 focus:ring-4 focus:ring-green-50/50 transition-all"
        />
        <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-green-800 text-xl group-focus-within:text-green-600 transition-colors" />
      </div>

      {/* التصنيفات - متجاوبة مع التمرير الأفقي */}
      <div className="w-full overflow-x-auto pb-2 flex flex-row-reverse items-center justify-start md:justify-center gap-3 no-scrollbar">
        {dbSearch.map((item, index) => (
          <button 
            key={index}
            className={`whitespace-nowrap px-6 py-2 rounded-full font-bold transition-all duration-300 shadow-sm
              ${index === 0 ? 'bg-green-900 text-white' : 'bg-white text-green-900 border border-green-100 hover:bg-green-50'}`}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SearchBox

const dbSearch = ["الكل", "إدارة المحاصيل", "مكافحة الآفات", "صحة التربة", "الري الحديث", "الزراعة الرقمية"];