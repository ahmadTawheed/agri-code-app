import { FaCheckCircle } from "react-icons/fa";

const OurPrice = () => {
  return (
    <section dir="rtl" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 flex flex-col items-center gap-16 pt-35">
      {/* الرأس (Header) */}
      <div className="text-center max-w-3xl">
        <h2 className="text-green-950 text-3xl md:text-5xl font-extrabold leading-tight">
          اختر الباقة المناسبة لاحتياجات مزرعتك
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mt-6">
          تم تصميم خطط سعرية مرنة تناسب الجميع، من المزارع الصغير إلى الشركات الزراعية الكبرى. ابدأ اليوم وحقق أقصى استفادة من محصولك.
        </p>
      </div>

      {/* حاوية الكروت (Cards Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        
        {/* الباقة الأساسية */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl flex flex-col items-center justify-between gap-8 hover:-translate-y-2 transition-transform duration-300">
          <div className="text-center">
            <h3 className="text-green-900 text-2xl font-bold">الباقة الأساسية</h3>
            <p className="text-gray-500 mt-2">للمزارعين الجدد والهواة</p>
          </div>
          <div className="text-green-950 text-5xl font-black italic">مجانية</div>
          <ul className="w-full space-y-4">
            <FeatureItem text="وصول كامل لمركز المعرفة الزراعي" />
            <FeatureItem text="استخدام أساسي للمساعد الذكي" />
            <FeatureItem text="إمكانية عرض المخلفات للبيع" />
          </ul>
          <button className="w-full py-4 rounded-2xl border-2 border-green-700 text-green-700 font-bold hover:bg-green-700 hover:text-white transition-colors">
            ابدأ مجاناً
          </button>
        </div>

        {/* باقة المحترفين - المميزة */}
        <div className="bg-green-900 p-8 rounded-3xl shadow-2xl flex flex-col items-center justify-between gap-8 scale-105 relative border-4 border-green-400 hover:-translate-y-2 transition-transform duration-300">
          <div className="absolute top-0 -translate-y-1/2 bg-green-400 text-green-950 px-4 py-1 rounded-full font-bold text-sm">
            الأكثر شيوعاً
          </div>
          <div className="text-center">
            <h3 className="text-white text-2xl font-bold">باقة المحترفين</h3>
            <p className="text-green-100 mt-2">للمزارعين الصغار والمتوسطين</p>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-white text-5xl font-black">499</span>
            <span className="text-green-200 text-sm">ج.م/شهرياً</span>
          </div>
          <ul className="w-full space-y-4">
            <FeatureItem text="متابعة محصول مع مهندس زراعي" light />
            <FeatureItem text="استخدام غير محدود للمساعد الذكي" light />
            <FeatureItem text="5 استشارات في العيادة النباتية" light />
            <FeatureItem text="دعم تسويقي لبيع المخلفات" light />
            <FeatureItem text="خصم خاص على الدورات" light />
          </ul>
          <button className="w-full py-4 rounded-2xl bg-green-400 text-green-950 font-bold hover:bg-white transition-colors shadow-lg">
            اشترك الآن
          </button>
        </div>

        {/* باقة الشركات */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl flex flex-col items-center justify-between gap-8 hover:-translate-y-2 transition-transform duration-300">
          <div className="text-center">
            <h3 className="text-green-900 text-2xl font-bold">باقة الشركات</h3>
            <p className="text-gray-500 mt-2">للمزارع الكبيرة والمشاريع</p>
          </div>
          <div className="text-green-950 text-4xl font-black">تواصل معنا</div>
          <ul className="w-full space-y-4">
            <FeatureItem text="متابعة شاملة لمساحات شاسعة" />
            <FeatureItem text="حلول إنترنت الأشياء (IoT)" />
            <FeatureItem text="تقارير أداء متقدمة للبيانات" />
            <FeatureItem text="دعم فني على مدار الساعة" />
            <FeatureItem text="استشارات تطوير الأعمال" />
          </ul>
          <button className="w-full py-4 rounded-2xl border-2 border-green-700 text-green-700 font-bold hover:bg-green-700 hover:text-white transition-colors">
            اطلب عرض سعر
          </button>
        </div>

      </div>

      {/* التذييل (Footer CTA) */}
      <div className="bg-green-100 p-8 md:p-12 rounded-[2rem] text-center max-w-5xl border border-green-200">
        <h3 className="text-green-950 text-xl md:text-2xl font-bold">
          هل لديك احتياجات فريدة لمشروعك؟
        </h3>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          نقدم حلولاً مخصصة للمزارع والمشاريع ذات المتطلبات الخاصة. تواصل مع خبراء المبيعات لدينا لمناقشة أهدافك.
        </p>
        <button className="mt-8 bg-green-800 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-green-900 transition-all active:scale-95">
          تواصل مع فريق المبيعات
        </button>
      </div>
    </section>
  );
};

// مكون فرعي للأيقونة والنص لتقليل تكرار الكود
const FeatureItem = ({ text, light = false }: { text: string; light?: boolean }) => (
  <li className={`flex items-center gap-3 ${light ? 'text-green-50' : 'text-gray-700'} text-sm md:text-base justify-start w-full`}>
    <FaCheckCircle className={light ? 'text-green-400' : 'text-green-600'} />
    <span>{text}</span>
  </li>
);

export default OurPrice;