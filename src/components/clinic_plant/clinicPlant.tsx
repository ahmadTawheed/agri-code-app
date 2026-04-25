import React from 'react'
import InfoClinic from './infoClinic'
import FormClinic from './formClinic'

const FormClinicPlant = () => {
  return (
    // pt-24 تضمن مسافة آمنة تحت الـ Navbar
    <section className="min-h-screen pt-35 pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* رأس الصفحة */}
        <div className="text-center mb-12">
          <h1 className="text-green-950 text-3xl md:text-5xl font-black mb-6 leading-tight">
            العيادة النباتية: <span className="text-green-700">تشخيص وعلاج</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            ارفع صور نباتاتك ووصف المشكلة للحصول على تشخيص دقيق ونصائح علاجية من خبرائنا.
          </p>
        </div>

        {/* الحاوية المتجاوبة للمعلومات والنموذج */}
        <div className="flex flex-col lg:flex-row-reverse items-start justify-center gap-8 md:gap-12">
          <div className="w-full lg:w-1/3 sticky top-28">
            <InfoClinic />
          </div>
          <div className="w-full lg:w-2/3">
            <FormClinic />
          </div>
        </div>

      </div>
    </section>
  )
}

export default FormClinicPlant