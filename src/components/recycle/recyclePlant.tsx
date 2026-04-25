"use client";
import React from "react";
import { LuUser, LuMail, LuPhone, LuRecycle, LuMessageSquare, LuSend } from "react-icons/lu";

const FormRecyclePlants = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Recycle Request Submitted");
  };

  return (
    <section className="min-h-screen py-16 px-4 md:px-12 bg-white pt-35">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-green-950 text-4xl md:text-5xl font-black mb-6 leading-tight">
          ابدأ باستغلال مخلفات محاصيلك الآن
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          حول مخلفات مزرعتك إلى قيمة مضافة. املأ النموذج أدناه وسيقوم خبراؤنا بمساعدتك في اختيار أفضل طرق إعادة التدوير.
        </p>
      </div>

      {/* Form Container */}
      <div dir="rtl" className="max-w-4xl mx-auto">
        <div className="bg-green-50/50 rounded-[3rem] p-8 md:p-14 border border-green-100 shadow-sm relative overflow-hidden">
          
          {/* لمسة ديكورية بسيطة في الخلفية */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200/30 rounded-full blur-3xl"></div>

          <h2 className="text-green-950 text-2xl md:text-3xl font-bold mb-10 border-r-8 border-green-600 pr-4">
            تفاصيل مخلفات المزرعة
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            
            {/* الحقول الأساسية في شبكة (Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* الاسم */}
              <RecycleFormField 
                label="الاسم بالكامل" 
                icon={<LuUser />} 
                placeholder="أدخل اسمك كما في الهوية" 
                type="text" 
              />

              {/* البريد */}
              <RecycleFormField 
                label="البريد الإلكتروني" 
                icon={<LuMail />} 
                placeholder="example@mail.com" 
                type="email" 
              />

              {/* الهاتف */}
              <RecycleFormField 
                label="رقم الهاتف" 
                icon={<LuPhone />} 
                placeholder="01xxxxxxxxx" 
                type="tel" 
              />

              {/* نوع المخلفات */}
              <div className="flex flex-col gap-2">
                <label className="text-green-900 font-bold mr-2">نوع المخلفات</label>
                <div className="relative">
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-700 text-xl">
                    <LuRecycle />
                  </span>
                  <select className="w-full pr-12 pl-4 py-4 bg-white border border-green-100 rounded-2xl outline-none focus:ring-2 focus:ring-green-600 appearance-none transition-all cursor-pointer">
                    <option value="">اختر نوع المخلفات</option>
                    <option value="crop">مخلفات محاصيل (قش، حطب، إلخ)</option>
                    <option value="animal">مخلفات حيوانية</option>
                    <option value="organic">مخلفات عضوية أخرى</option>
                  </select>
                </div>
              </div>

            </div>

            {/* تفاصيل الرسالة */}
            <div className="flex flex-col gap-2">
              <label className="text-green-900 font-bold mr-2 flex items-center gap-2">
                <LuMessageSquare className="text-green-700" />
                تفاصيل أخرى أو أسئلة
              </label>
              <textarea 
                rows={5}
                placeholder="صف باختصار كمية المخلفات واحتياجاتك..."
                className="w-full p-5 bg-white border border-green-100 rounded-2xl outline-none focus:ring-2 focus:ring-green-600 transition-all resize-none shadow-inner"
              ></textarea>
            </div>

            {/* زر الإرسال */}
            <button 
              type="submit" 
              className="w-full md:w-max px-12 bg-green-900 hover:bg-green-800 text-white font-bold py-5 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-3 active:scale-95 text-lg"
            >
              <LuSend className="rotate-180" />
              إرسال الطلب الآن
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

// مكون فرعي للحقول (Sub-component)
const RecycleFormField = ({ label, icon, placeholder, type }: { label: string, icon: React.ReactNode, placeholder: string, type: string }) => (
  <div className="flex flex-col gap-2">
    <label className="text-green-900 font-bold mr-2">{label}</label>
    <div className="relative">
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-700 text-xl">
        {icon}
      </span>
      <input 
        required
        type={type} 
        placeholder={placeholder}
        className="w-full pr-12 pl-4 py-4 bg-white border border-green-100 rounded-2xl outline-none focus:ring-2 focus:ring-green-600 transition-all shadow-inner"
      />
    </div>
  </div>
);

export default FormRecyclePlants;