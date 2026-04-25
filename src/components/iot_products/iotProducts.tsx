import Image from 'next/image'
import one from "@/assets/for.jpeg";
import two from "@/assets/fiv.jpeg";
import three from "@/assets/six.jpeg";
import ChooseWhy from './chooseWhy';
import SearchProductIot from './searchProductIot';

const IotProducts = () => {
  return (
    // pt-28 تضمن أن المحتوى لن يختفي تحت الـ Navbar الثابت
    <section className="min-h-screen pt-35 pb-16 bg-white overflow-hidden">
      
      {/* Header Section */}
      <div className="text-center px-4 mb-16">
        <h1 className="text-green-950 text-3xl md:text-5xl font-black mb-6 leading-tight">
          حلول إنترنت الأشياء <span className="text-green-600">والمنتجات الذكية</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          اكتشف مجموعتنا من الأجهزة الذكية التي تساعدك على مراقبة مزرعتك وتحسين إنتاجيتك بأحدث التقنيات العالمية.
        </p>
      </div>

      {/* Search Section */}
      <div className="w-full max-w-6xl mx-auto px-4 mb-20">
        <SearchProductIot />
      </div>

      {/* Products Grid */}
      <div className="w-full bg-gray-50/50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-green-950 text-3xl md:text-4xl font-bold mb-16 relative inline-block w-full">
            منتجاتنا الذكية
            <span className="block w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full"></span>
          </h2>

          <div dir="rtl" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {dbIOTCards.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={item.img}
                    alt={item.title}
                    placeholder="blur" // اختيار ممتاز إذا كانت الصور محلية
                    width={500}
                    height={350}
                  />
                  {/* Badge السعر */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full shadow-sm text-green-900 font-bold text-sm">
                    {item.price}
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col p-8 flex-grow">
                  <h3 className="text-green-950 text-xl font-black mb-4 group-hover:text-green-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-7 mb-6 flex-grow">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                    <button className="w-full bg-green-900 text-white font-bold py-4 rounded-2xl hover:bg-green-700 transition-all active:scale-95 shadow-lg shadow-green-900/10">
                      اعرف المزيد
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-20">
        <ChooseWhy />
      </div>

    </section>
  )
}

export default IotProducts

const dbIOTCards = [
    {
        img : three,
        title: "مستشعر التربة الذكي",
        desc : "يراقب رطوبة التربة ودرجة الحرارة ومستويات المغذيات بدقة متناهية لضمان نمو مثالي للمحاصيل.",
        price: "100$"
    },
    {
        img : two,
        title: "نظام الري الآلي",
        desc : "يحسن استخدام المياه بناءً على بيانات حية، مما يوفر الموارد ويزيد من كفاءة الإنتاج بشكل كبير.",
        price: "200$"
    },
    {
        img : one,
        title: "طائرة بدون طيار (Drone)",
        desc : "توفر رؤى حيوية وتحليلاً صحياً للمحاصيل من الجو، مما يساعد في الكشف المبكر عن الأمراض والآفات.",
        price: "300$"
    },
];