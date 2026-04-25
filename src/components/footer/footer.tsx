import Image from "next/image";
import Logo from "../../assets/logo.png";
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white pt-16 pb-8">
      {/* Container الرئيسي */}
      <div 
        dir="rtl" 
        className="max-w-[1400px] w-[92%] mx-auto bg-green-50 rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-green-900/5 border border-green-100/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 text-right">
          
          {/* القسم الأول: اللوجو والوصف */}
          <div className="flex flex-col items-start md:items-start gap-6 max-w-sm">
            <div className="flex items-center gap-3">
              <Image src={Logo} alt="AgriCode Logo" width={40} height={40} />
              <h2 className="text-green-950 text-2xl font-black tracking-tight">AGRICODE</h2>
            </div>
            <p className="text-gray-600 leading-8 text-base">
              نقدم حلولاً زراعية رقمية متكاملة لتمكين المزارعين وتحقيق أقصى استفادة من أراضيهم باستخدام أحدث تقنيات الذكاء الاصطناعي.
            </p>
          </div>

          {/* القسم الثاني: روابط سريعة */}
          <div className="flex flex-col gap-6 lg:mr-auto">
            <h3 className="text-green-950 text-xl font-bold">روابط سريعة</h3>
            <nav className="flex flex-col gap-4">
              {[
                { name: "الرئيسية", path: "/" },
                { name: "خدماتنا", path: "/#services" },
                { name: "خطط الأسعار", path: "/pages/price" },
                { name: "العيادة النباتية", path: "/clinic" }
              ].map((link) => (
                <Link key={link.name} href={link.path}>
                  <span className="text-gray-500 hover:text-green-700 hover:translate-x-[-8px] transition-all duration-300 cursor-pointer flex items-center gap-2 text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-green-300 rounded-full"></span>
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* القسم الثالث: التواصل والشبكات الاجتماعية */}
          <div className="flex flex-col gap-6 lg:mr-auto">
            <h3 className="text-green-950 text-xl font-bold">تواصل معنا</h3>
            <div className="flex flex-col gap-4">
              <a href="mailto:agricode@gmail.com" className="text-gray-500 hover:text-green-950 transition-colors text-sm">
                <span className="font-bold text-green-800">البريد:</span> agricode@gmail.com
              </a>
              <a href="tel:+201501021670" className="text-gray-500 hover:text-green-950 transition-colors text-sm">
                <span className="font-bold text-green-800">الهاتف:</span> +20 1501021670
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-2">
              <a href="#" className="p-3 bg-white rounded-xl shadow-sm text-blue-700 hover:bg-blue-700 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <FaFacebookSquare size={22} />
              </a>
              <a href="#" className="p-3 bg-white rounded-xl shadow-sm text-sky-700 hover:bg-sky-700 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <FaLinkedin size={22} />
              </a>
              <a href="#" className="p-3 bg-white rounded-xl shadow-sm text-red-600 hover:bg-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <FaYoutube size={22} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Copyrights */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 text-xs md:text-sm tracking-widest uppercase">
          &copy; {currentYear} <span className="text-green-800 font-bold mx-1 text-sm leading-none inline-block align-middle pb-1">AgriCode</span> جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
};

export default Footer;