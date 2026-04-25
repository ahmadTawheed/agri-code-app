import Image from "next/image";
import one from "@/assets/one.jpeg";
import two from "@/assets/two.jpeg";
import three from "@/assets/three.jpeg";

const LibraryCards = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dbLibraryCards.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col border border-green-50"
          >
            {/* Image Container */}
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div
              className="p-6 flex flex-col flex-grow gap-4 text-right"
              dir="rtl"
            >
              <h2 className="text-green-950 text-xl font-black leading-tight group-hover:text-green-700 transition-colors">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow">
                {item.desc}
              </p>
              <button className="w-full mt-4 py-3 rounded-xl bg-green-50 text-green-900 font-bold hover:bg-green-900 hover:text-white transition-all duration-300">
                اقرأ المزيد
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LibraryCards;

const dbLibraryCards = [
  {
    img: one,
    title: "أفضل ممارسات إدارة المحاصيل العضوية",
    desc: "تعرف على الأسباب الفعالة لزراعة المحاصيل العضوية وزيادة إنتاجيتها",
  },
  {
    img: two,
    title: "دليل كامل لزراعة القمح",
    desc: "تعرف على زراعة القمح وأهم الأصناف المنزرعة والظروف الملائمة للزراعة",
  },
  {
    img: three,
    title: "تقنيات الري الذكي لتقليل استهلاك المياه",
    desc: "تعرف على أحدث أنظمة الري التى توفر المياه وتحسن كفاءة الزراعة",
  },
];
