import Image from "next/image";
import Logo from "../../assets/logo.png";

const Intro = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-16 lg:px-24 min-h-[90vh] overflow-hidden pt-35">
      
      {/* القسم النصي */}
      <div className="flex flex-col items-center md:items-end text-center md:text-right flex-1 gap-6 z-10">
        <h1 className="text-green-950 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          حلول زراعية رقمية شاملة <br className="hidden lg:block" />
          <span className="text-green-600">لمستقبل مستدام</span>
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed">
          نقدم تقنيات مبتكرة لتعزيز إنتاجيتك الزراعية وتحسين استدامة مزارعك من خلال أدوات ذكية مبنية لخدمة المزارع المتطور.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-4">
          <button className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-green-200 transition-all active:scale-95 duration-300">
            اكتشف خدماتنا
          </button>
          <button className="border-2 border-green-700 text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-all duration-300">
            تواصل معنا
          </button>
        </div>
      </div>

      {/* قسم الصورة */}
      <div className="flex justify-center items-center flex-1 w-full max-w-[300px] md:max-w-none">
        <div className="relative group">
          {/* تأثير خلفية للصورة لتعطي مظهر عصري */}
          <div className="absolute -inset-4 bg-green-100 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>
          
          <Image
            src={Logo}
            alt="Agri Solutions Logo"
            width={800}
            height={800}
            priority
            className="relative drop-shadow-2xl transition-transform duration-500 hover:scale-105 w-full h-auto object-contain"
          />
        </div>
      </div>
      
    </section>
  );
};

export default Intro;