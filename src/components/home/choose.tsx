import { GrGrow } from "react-icons/gr";
import { IoMdAnalytics } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";

const Choose = () => {
  return (
    <section className="py-20 px-6 sm:px-12">
      {/* الحاوية الرئيسية مع خلفية ناعمة وشكل عصري */}
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-green-50 to-emerald-100 rounded-[2.5rem] p-8 md:p-16 shadow-inner relative overflow-hidden">
        
        {/* لمسة ديكور خلفية */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/50 rounded-full blur-3xl -mr-10 -mt-10"></div>

        <div className="flex flex-col items-center relative z-10">
          <h2 className="text-green-950 text-3xl md:text-5xl font-extrabold mb-12 text-center">
            لماذا تختار <span className="text-green-700">AgriCode</span>؟
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {db.map((item, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-white hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                {/* دائرة الأيقونة */}
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-green-900 text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-200">
                  {item.icon}
                </div>

                <h3 className="text-green-950 text-xl font-bold mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;

const db = [
  {
    icon: <GrGrow />,
    title: "زراعة مستدامة",
    desc: "نلتزم بتقديم حلول صديقة للبيئة تضمن استدامة مواردك الطبيعية لأجيال قادمة.",
  },
  {
    icon: <IoMdAnalytics />,
    title: "تحليلات دقيقة",
    desc: "بيانات وتحليلات مفصلة مدعومة بالذكاء الاصطناعي لاتخاذ قرارات زراعية مستنيرة.",
  },
  {
    icon: <BiSupport />,
    title: "دعم فني متواصل",
    desc: "فريق من المهندسين والخبراء جاهز لتقديم الدعم والمشورة التقنية على مدار الساعة.",
  },
  {
    icon: <MdOutlineSecurity />,
    title: "أمان البيانات",
    desc: "نطبق بروتوكولات تشفير متقدمة لضمان حماية بياناتك ومعلوماتك الزراعية الحساسة.",
  },
];