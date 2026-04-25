import { FaEye, FaArrowTrendUp } from "react-icons/fa6";
import { MdAnalytics } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";

const ChooseWhy = () => {
  return (
    <section className="py-20 px-4 flex justify-center bg-white">
      <div className="w-full max-w-7xl bg-green-50 rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-green-900/5 border border-green-100">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-green-950 text-3xl md:text-4xl font-black mb-4">
            لماذا تختار حلول إنترنت الأشياء لدينا؟
          </h2>
          <div className="w-20 h-1.5 bg-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Grid Container */}
        <div 
          dir="rtl" 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {db.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center p-8 bg-white rounded-[2rem] border border-transparent hover:border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-green-100 text-green-700 text-4xl mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-green-950 text-xl font-bold mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseWhy;

const db = [
  {
    icon: <FaEye />,
    title: "مراقبة في الوقت الفعلي",
    desc: "راقب مزرعتك من أي مكان وفي أي وقت باستخدام أجهزتنا الذكية وتطبيقاتنا المتطورة."
  },
  {
    icon: <MdAnalytics />,
    title: "قرارات مدفوعة بالبيانات",
    desc: "استفد من البيانات الدقيقة والتحليلات اللحظية لاتخاذ قرارات مستنيرة تضمن نجاح محصولك."
  },
  {
    icon: <AiOutlineProduct />,
    title: "تحسين استهلاك الموارد",
    desc: "وفر الماء والطاقة والأسمدة من خلال الاستخدام الأمثل للموارد بناءً على احتياج النبات الفعلي."
  },
  {
    icon: <FaArrowTrendUp />,
    title: "زيادة الإنتاجية",
    desc: "حقق أقصى إنتاجية من مزرعتك بجهد أقل وتكلفة تشغيلية منخفضة باستخدام تقنياتنا."
  },
];