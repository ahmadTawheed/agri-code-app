"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchProductIot = () => {
  const [activeFilter, setActiveFilter] = useState("الكل");

  return (
    <section className="w-full flex flex-col items-center justify-center gap-8 py-10 px-4">
      
      {/* Search Bar Container */}
      <div className="relative w-full max-w-3xl group">
        <div dir="rtl" className="flex items-center bg-white border-2 border-green-100 rounded-[2rem] shadow-sm hover:shadow-md hover:border-green-600 transition-all duration-300 overflow-hidden p-1">
          
          {/* Input Field */}
          <input 
            type="search"
            placeholder="ابحث عن منتجك الذكي (مثلاً: مستشعر رطوبة)..." 
            className="flex-grow bg-transparent px-6 py-3 text-lg text-green-950 outline-none placeholder:text-gray-400"
          />
          
          {/* Search Button */}
          <button
            className="flex items-center gap-3 bg-green-900 text-white font-bold px-8 py-3 rounded-[1.8rem] hover:bg-green-700 transition-colors duration-300 shadow-lg shadow-green-900/10 active:scale-95"
          >
            <span className="hidden md:inline">بحث</span>
            <FaSearch className="text-xl" />
          </button>
        </div>
      </div>

      {/* Filter Chips: تحسين التجاوب لجعلها قابلة للتمرير في الموبايل */}
      <div 
        dir="rtl" 
        className="flex items-center justify-start md:justify-center gap-3 w-full overflow-x-auto pb-4 md:pb-0 no-scrollbar flex-nowrap md:flex-wrap"
      >
        {dbSearch.map((item, index) => (
          <button 
            key={index}
            onClick={() => setActiveFilter(item)}
            className={`whitespace-nowrap px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 border-2 active:scale-90
              ${activeFilter === item 
                ? "bg-green-900 text-white border-green-900 shadow-md" 
                : "bg-white text-green-900 border-green-100 hover:border-green-600 hover:bg-green-50"
              }`}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SearchProductIot;

const dbSearch = [
  "الكل",
  "أجهزة استشعار التربة",
  "أنظمة الري الذكية",
  "إدارة الثروة الحيوانية",
  "أجهزة استشعار الطقس",
  "أجهزة تحليل البيانات"
];