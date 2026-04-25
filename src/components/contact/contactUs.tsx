"use client";
import React from "react";
import { FiSend, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactUs = () => {
  // Logic: دالة بسيطة للتعامل مع الإرسال (يمكنك ربطها بـ API لاحقاً)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("تم إرسال الرسالة بنجاح");
  };

  return (
    <section className="min-h-screen py-16 px-6 md:px-12 lg:px-24 bg-white flex flex-col items-center pt-35">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-green-950 text-4xl md:text-6xl font-black mb-6">تواصل معنا</h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          لديك سؤال أو تحتاج إلى مساعدة؟ املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة.
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Info Box: إضافة معلومات التواصل تعطي ثقة أكبر للمستخدم */}
        <div dir="rtl" className="lg:col-span-1 flex flex-col gap-8 bg-green-900 p-10 rounded-[2.5rem] text-white shadow-2xl">
          <h2 className="text-2xl font-bold mb-4">معلومات الاتصال</h2>
          
          <div className="flex items-center gap-5">
            <div className="bg-green-800 p-3 rounded-xl"><FiPhone className="text-2xl text-green-400" /></div>
            <div>
              <p className="text-green-200 text-sm">اتصل بنا</p>
              <p className="font-bold">+20 123 456 7890</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="bg-green-800 p-3 rounded-xl"><FiMail className="text-2xl text-green-400" /></div>
            <div>
              <p className="text-green-200 text-sm">البريد الإلكتروني</p>
              <p className="font-bold">support@agricode.com</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="bg-green-800 p-3 rounded-xl"><FiMapPin className="text-2xl text-green-400" /></div>
            <div>
              <p className="text-green-200 text-sm">المقر الرئيسي</p>
              <p className="font-bold">القاهرة، مصر</p>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div dir="rtl" className="lg:col-span-2">
          <form 
            onSubmit={handleSubmit}
            className="bg-green-50 p-8 md:p-12 rounded-[2.5rem] border border-green-100 shadow-sm flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* الاسم */}
              <div className="flex flex-col gap-2">
                <label className="text-green-950 font-bold mr-2">الاسم بالكامل</label>
                <input 
                  required
                  type="text" 
                  placeholder="أدخل اسمك بالكامل"
                  className="w-full p-4 bg-white border border-green-200 rounded-2xl outline-none focus:ring-2 focus:ring-green-500 transition-all"
                />
              </div>

              {/* البريد الإلكتروني */}
              <div className="flex flex-col gap-2">
                <label className="text-green-950 font-bold mr-2">البريد الإلكتروني</label>
                <input 
                  required
                  type="email" 
                  placeholder="example@mail.com"
                  className="w-full p-4 bg-white border border-green-200 rounded-2xl outline-none focus:ring-2 focus:ring-green-500 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* رقم الهاتف */}
              <div className="flex flex-col gap-2">
                <label className="text-green-950 font-bold mr-2">رقم الهاتف</label>
                <input 
                  type="tel" 
                  placeholder="01xxxxxxxxx"
                  className="w-full p-4 bg-white border border-green-200 rounded-2xl outline-none focus:ring-2 focus:ring-green-500 transition-all"
                />
              </div>

              {/* الموضوع */}
              <div className="flex flex-col gap-2">
                <label className="text-green-950 font-bold mr-2">الموضوع</label>
                <select className="w-full p-4 bg-white border border-green-200 rounded-2xl outline-none focus:ring-2 focus:ring-green-500 transition-all appearance-none">
                  <option>استفسار عام</option>
                  <option>دعم فني</option>
                  <option>طلب شراكة</option>
                  <option>أخرى</option>
                </select>
              </div>
            </div>

            {/* الرسالة */}
            <div className="flex flex-col gap-2">
              <label className="text-green-950 font-bold mr-2">الرسالة</label>
              <textarea 
                required
                rows={5}
                placeholder="كيف يمكننا مساعدتك؟"
                className="w-full p-4 bg-white border border-green-200 rounded-2xl outline-none focus:ring-2 focus:ring-green-500 transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="flex items-center justify-center gap-3 bg-green-700 text-white font-bold py-4 rounded-2xl hover:bg-green-800 transition-all shadow-lg shadow-green-200 active:scale-95"
            >
              <FiSend className="rotate-180" />
              إرسال الرسالة
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;