import { PiLightbulbFilamentFill } from "react-icons/pi";
import { RiPlantFill } from "react-icons/ri";
import { MdHandshake } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";
import { JSX } from "react";

// تعريف نوع البيانات للقيم الأساسية
interface ValueItem {
  icon: JSX.Element;
  title: string;
  desc: string;
}

const AboutUs = () => {
  return (
    <section dir="rtl" className="py-16 px-6 md:px-12 lg:px-24 bg-white flex flex-col items-center gap-16 pt-35">
      
      {/* رأس الصفحة */}
      <div className="text-center max-w-2xl">
        <h1 className="text-green-950 text-4xl md:text-6xl font-black mb-6">من نحن؟</h1>
        <p className="text-green-700 text-lg md:text-xl font-medium">قصتنا، رؤيتنا، وقيمنا في تمكين الزراعة الذكية</p>
      </div>

      {/* قسم الرؤية والمهمة - تصميم عصري بمساحات مريحة */}
      <div className="w-full max-w-5xl bg-green-50 rounded-[2rem] p-8 md:p-12 border border-green-100 shadow-sm">
        <div className="flex flex-col gap-6 text-center md:text-right">
          <h2 className="text-green-900 text-3xl font-bold border-r-4 border-green-600 pr-4">رؤيتنا ومهمتنا</h2>
          <p className="text-gray-700 text-lg leading-relaxed md:text-xl">
            نحن نؤمن بأن مستقبل الزراعة يكمن في **الابتكار والاستدامة**. مهمتنا هي تزويد المزارعين بأحدث الحلول الرقمية وتقنيات إنترنت الأشياء (IoT) لتمكينهم من تحقيق أقصى إنتاجية بأقل الموارد، مع الحفاظ على البيئة. نطمح لأن نكون الشريك الموثوق به لكل مزارع في رحلته نحو مستقبل أكثر ذكاءً وكفاءة.
          </p>
        </div>
      </div>

      {/* قسم القيم الأساسية */}
      <div className="w-full max-w-7xl flex flex-col items-center gap-12">
        <h2 className="text-green-950 text-3xl md:text-4xl font-bold">قيمنا الأساسية</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {valuesData.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-3xl shadow-lg border border-gray-50 flex flex-col items-center text-center gap-5 
                         transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-green-900"
            >
              <div className="text-green-600 text-5xl group-hover:text-green-400 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-green-950 text-xl font-bold group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-7 group-hover:text-green-50 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AboutUs;

const valuesData: ValueItem[] = [
  {
    icon: <PiLightbulbFilamentFill />,
    title: "الابتكار",
    desc: "نسعى باستمرار لتطوير حلول جديدة ومبتكرة تلبي احتياجات المزارعين المتغيرة في عصر التكنولوجيا.",
  },
  {
    icon: <RiPlantFill />,
    title: "الاستدامة",
    desc: "نلتزم بتقديم تقنيات تدعم الممارسات الزراعية المستدامة وتحافظ على الموارد الطبيعية والبيئة.",
  },
  {
    icon: <MdHandshake />,
    title: "التمكين",
    desc: "نعمل على تمكين المزارعين من خلال تزويدهم بالأدوات والمعرفة اللازمة لتحقيق النجاح والاستقلالية.",
  },
  {
    icon: <HiBadgeCheck />,
    title: "الجودة",
    desc: "نضمن أعلى معايير الجودة في جميع منتجاتنا وخدماتنا لضمان رضا عملائنا وتحقيق نتائج ملموسة.",
  },
];