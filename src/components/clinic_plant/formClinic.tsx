import { IoSend } from "react-icons/io5";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const FormClinic = () => {
  return (
    <form dir="rtl" className="w-full bg-white p-6 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-green-900/5">
      
      <div className="mb-8">
        <h2 className="text-green-950 text-2xl font-bold mb-3">وصف المشكلة وتحميل الصور</h2>
        <p className="text-gray-500">ساعدنا في تشخيص مشكلتك بتقديم أكبر قدر ممكن من التفاصيل.</p>
      </div>

      {/* وصف المشكلة */}
      <div className="mb-8">
        <label className="block text-green-950 text-lg font-bold mb-3 text-right">وصف الأعراض:</label>
        <textarea
          rows={5}
          placeholder="صف الأعراض التي تلاحظها، متى بدأت، وأي تفاصيل أخرى..."
          className="w-full p-4 outline-none border-2 border-green-50 bg-green-50/30 rounded-2xl focus:border-green-600 focus:bg-white transition-all leading-8 text-gray-700"
        ></textarea>
      </div>

      {/* منطقة رفع الصور */}
      <div className="mb-10">
        <label className="block text-green-950 text-lg font-bold mb-3">تحميل صور النبات المصاب:</label>
        <div className="relative group flex flex-col items-center justify-center p-10 border-2 border-dashed border-green-200 bg-green-50/20 rounded-[2rem] hover:border-green-600 transition-colors cursor-pointer">
          <MdOutlineAddPhotoAlternate className="text-5xl text-green-600 mb-4 group-hover:scale-110 transition-transform" />
          <p className="text-gray-600 text-center">
            اسحب وأفلت الصور هنا أو <span className="text-green-700 font-bold underline">تصفح الملفات</span>
          </p>
          <input
            type="file"
            multiple
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
      </div>

      {/* زر الإرسال */}
      <div className="flex justify-start">
        <button className="flex flex-row-reverse items-center justify-center gap-4 bg-green-900 text-white font-bold px-10 py-4 rounded-2xl hover:bg-green-700 hover:shadow-lg hover:shadow-green-200 transition-all active:scale-95">
          إرسال التشخيص
          <IoSend className="rotate-180" />
        </button>
      </div>
      
    </form>
  )
}

export default FormClinic