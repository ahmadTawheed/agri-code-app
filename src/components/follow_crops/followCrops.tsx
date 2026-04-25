"use client";
import React from "react";
import { FiMapPin, FiUser, FiPhone, FiMail, FiMaximize } from "react-icons/fi";
import { RiPlantLine } from "react-icons/ri";

const FormFollowCrops = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا يتم ربط اللوجيك الخاص بإرسال البيانات
    console.log("Form Submitted");
  };

  return (
    <section className="min-h-screen py-16 px-6 md:px-12 bg-gray-50 pt-35">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-green-950 text-4xl md:text-5xl font-black mb-6">
          ابدأ متابعة محاصيلك الآن
        </h1>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          املأ النموذج أدناه لتهيئة نظام متابعة المحاصيل الذكي الخاص بمزرعتك، وسيقوم فريقنا التقني بالتواصل معك.
        </p>
      </div>

      {/* Form Container */}
      <div dir="rtl" className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-green-900/5 overflow-hidden border border-green-100">
          
          <div className="bg-green-900 p-8 text-white text-center">
            <h2 className="text-2xl font-bold">تفاصيل المزرعة والمحاصيل</h2>
            <p className="text-green-200 mt-2 text-sm">يرجى إدخال البيانات بدقة لضمان أفضل جودة للمراقبة</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            
            {/* قسم بيانات المزرعة */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="اسم المزرعة" icon={<RiPlantLine />} placeholder="مزرعة السلام" type="text" />
              <FormField label="موقع المزرعة" icon={<FiMapPin />} placeholder="المدينة / المنطقة" type="text" />
              <FormField label="نوع المحصول الرئيسي" icon={<RiPlantLine />} placeholder="مثلاً: قمح، بصل، موالح" type="text" />
              <FormField label="المساحة (بالفدان)" icon={<FiMaximize />} placeholder="0" type="number" />
            </div>

            <hr className="border-gray-100" />

            {/* قسم بيانات التواصل */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="اسم جهة الاتصال" icon={<FiUser />} placeholder="الاسم الثنائي" type="text" />
              <FormField label="البريد الإلكتروني" icon={<FiMail />} placeholder="example@mail.com" type="email" />
              <div className="md:col-span-2">
                <FormField label="رقم هاتف جهة الاتصال" icon={<FiPhone />} placeholder="01xxxxxxxxx" type="tel" />
              </div>
            </div>

            {/* ملاحظات إضافية */}
            <div className="flex flex-col gap-2">
              <label className="text-green-950 font-bold mr-2 text-sm md:text-base">احتياجات المراقبة المحددة (اختياري)</label>
              <textarea 
                rows={4}
                placeholder="اذكر أي احتياجات أو ملاحظات خاصة بمراقبة التربة أو الري..."
                className="w-full p-4 bg-green-50/50 border border-green-100 rounded-2xl outline-none focus:ring-2 focus:ring-green-500 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-5 rounded-2xl transition-all shadow-lg shadow-green-200 active:scale-[0.98] text-lg"
            >
              بدء المتابعة الذكية
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// مكون فرعي للحقول لتقليل تكرار الكود
const FormField = ({ label, icon, placeholder, type }: { label: string, icon: React.ReactNode, placeholder: string, type: string }) => (
  <div className="flex flex-col gap-2">
    <label className="text-green-950 font-bold mr-2 text-sm md:text-base">{label}</label>
    <div className="relative">
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-700 text-xl">
        {icon}
      </span>
      <input 
        required
        type={type} 
        placeholder={placeholder}
        className="w-full pr-12 pl-4 py-4 bg-green-50/50 border border-green-100 rounded-2xl outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all text-gray-800"
      />
    </div>
  </div>
);

export default FormFollowCrops;