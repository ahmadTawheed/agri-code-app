import { FaRegCheckCircle } from "react-icons/fa";

const InfoClinic = () => {
  const tips = [
    "التقط صوراً واضحة ومضاءة جيداً",
    "ركز على الأجزاء المصابة (الأوراق، السيقان، الجذور)",
    "التقط صوراً من زوايا مختلفة",
    "أضف صورة للنبات بالكامل إن أمكن"
  ];

  return (
    <div dir="rtl" className="p-8 bg-green-50 rounded-[2rem] border border-green-100 shadow-sm">
      <h2 className="text-green-950 text-2xl font-bold mb-6 flex items-center gap-2">
        نصائح لصور أفضل
      </h2>
      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start gap-3 text-gray-700 font-medium">
            <FaRegCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
            <p className="leading-relaxed">{tip}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfoClinic