import { IoSend } from "react-icons/io5"

const SendInputAi = () => {
  return (
    <section className="p-10 w-10/12 m-auto">
    <div className="flex flex-row-reverse items-center justify-center gap-10 w-full">
      <textarea
      name="" 
      id=""
      placeholder="... اطرح سؤالك هنا "
      typeof="text"
      className="w-11/12 p-3 outline-none border-2 border-green-950 bg-green-100 rounded leading-8 min-h-5 text-right"
      >
      </textarea>
      <button
      className="flex flex-row-reverse items-center justify-center gap-7 bg-green-900 rounded-xl text-green-50 font-bold px-5 py-3 hover:bg-green-200 hover:text-green-950 transition cursor-pointer"
      >
      إرسال
      <IoSend />
      </button>
    </div>
    <div className="flex flex-row-reverse items-center justify-center gap-7 mt-10">
           {
            dbSearch.map((item, index) => (
                <button key={index}
                className="bg-green-900 text-sm rounded-xl text-green-50 font-bold px-5 py-3 hover:bg-green-200 hover:text-green-950 transition cursor-pointer">
                    {item}
                </button>
            ))
           }
      </div>
    </section>
  )
}

export default SendInputAi


const dbSearch = [
    "نصائح للري الذكي",
    "أعراض نقص المغذيات في النباتات",
    "كيفية زراعة القمح",
    "أفضل أنواع الأسمدة العضوية",
];