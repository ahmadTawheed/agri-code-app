import { MdLibraryBooks } from "react-icons/md";
import { PiPlantFill, PiFirstAidKitFill } from "react-icons/pi";
import { RiRecycleFill } from "react-icons/ri";
import { GiDeliveryDrone } from "react-icons/gi";
import Logo from "../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-green-950 text-3xl md:text-5xl font-extrabold mb-4">
          خدماتنا الرئيسية
        </h2>
        <div className="w-24 h-1.5 bg-green-600 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cardHomeSection.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white border border-green-100 rounded-3xl p-8 flex flex-col items-center text-center gap-6 
                       transition-all duration-500 hover:shadow-[0_20px_50px_rgba(20,49,9,0.1)] hover:-translate-y-2 overflow-hidden"
          >
            {/* تأثير خلفية عند الحوم (Hover) */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 p-4 bg-green-50 rounded-2xl text-green-900 group-hover:bg-green-900 group-hover:text-white transition-colors duration-500">
              {item.icon}
            </div>

            <div className="relative z-10 flex flex-col gap-3">
              <h3 className="text-green-950 text-2xl font-bold italic-none">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {item.subTitle}
              </p>
            </div>

            <Link href={item.path} className="relative z-10 mt-auto w-full">
              <button className="w-full bg-white border-2 border-green-900 text-green-900 font-bold px-6 py-3 rounded-xl 
                                 group-hover:bg-green-900 group-hover:text-white transition-all duration-300">
                {item.buttons}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

// تحسين البيانات وإضافة المسارات (Path) لكل خدمة
const cardHomeSection = [
  {
    icon: <MdLibraryBooks className="text-5xl" />,
    title: "المكتبة الزراعية",
    subTitle: "مكتبة شاملة من المقالات والأبحاث لتعزيز معرفتك الزراعية وتطوير مهاراتك.",
    buttons: "تصفح المكتبة",
    path: "https://agriculture-community-alpha.vercel.app/", // المسار الخاص بالمكتبة
  },
  {
    icon: <PiPlantFill className="text-5xl" />,
    title: "متابعة المحاصيل",
    subTitle: "مراقبة دقيقة لصحة ونمو محاصيلك باستخدام أحدث التقنيات الرقمية.",
    buttons: "ابدأ المتابعة",
    path: "/pages/followCrops",
  },
  {
    icon: <RiRecycleFill className="text-5xl" />,
    title: "استغلال المخلفات",
    subTitle: "حلول مبتكرة لتحويل المخلفات الزراعية إلى موارد قيمة وسماد عضوي.",
    buttons: "اكتشف الحلول",
    path: "pages/recyclePlant",
  },
  {
    icon: <PiFirstAidKitFill className="text-5xl" />,
    title: "العيادة النباتية",
    subTitle: "تشخيص أمراض النبات وتقديم العلاج المناسب من خلال خبراء متخصصين.",
    buttons: "احجز استشارة",
    path: "/pages/clinicPlant",
  },
  {
    icon: <Image src={Logo} alt="AI" width={50} height={50} className="object-contain" />,
    title: "المساعد الذكي",
    subTitle: "مساعد افتراضي يقدم استشارات فورية وحلول لمشاكلك الزراعية على مدار الساعة.",
    buttons: "تحدث الآن",
    path: "/pages/aiagricode",
  },
  {
    icon: <GiDeliveryDrone className="text-5xl" />,
    title: "انترنت الأشياء",
    subTitle: "زراعة ذكية باستخدام مستشعرات لمراقبة التربة والمناخ بشكل آلي ودقيق.",
    buttons: "عرض النظام",
    path: "/pages/iot",
  },
];