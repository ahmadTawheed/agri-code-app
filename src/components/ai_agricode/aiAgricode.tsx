"use client";
import Logo from "../../assets/logo.png";
import { useState, useRef, useEffect } from 'react';
import { IoSend, IoMic, IoStopCircle } from 'react-icons/io5';
import { marked } from 'marked';
import Image from 'next/image';

// --- تحسين التعريفات البرمجية لتجنب any ---

interface SpeechRecognitionEvent extends Event {
  results: {
    [key: number]: {
      [key: number]: {
        transcript: string;
      };
    };
  };
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface SpeechRecognitionInterface extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
  onend: () => void;
  start: () => void;
  stop: () => void;
}

declare global {
  interface Window {
    webkitSpeechRecognition: {
      new (): SpeechRecognitionInterface;
    };
    SpeechRecognition: {
      new (): SpeechRecognitionInterface;
    };
  }
}

const AiAgricodeChat = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const responseDivRef = useRef<HTMLDivElement>(null);

  // استخدام الواجهة المعرفة بدلاً من any
  const recognitionRef = useRef<SpeechRecognitionInterface | null>(null);

  useEffect(() => {
    const SpeechRecognition = typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);
    
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      const rec = recognitionRef.current;

      rec.continuous = false;
      rec.interimResults = false;

      rec.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setUserInput(transcript);
        setIsRecording(false);
      };

      rec.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error('Speech recognition error', event);
        setIsRecording(false);
        
        const errorMessages: Record<string, string> = {
          'not-allowed': 'تم رفض الوصول إلى الميكروفون. الرجاء السماح بالوصول من إعدادات المتصفح.',
          'no-speech': 'لم يتم اكتشاف صوت. الرجاء التحدث بوضوح.',
          'network': 'مشكلة في الاتصال. الرجاء التحقق من اتصال الإنترنت.',
        };

        setResponse(errorMessages[event.error] || `حدث خطأ في التعرف على الصوت: ${event.error}`);
      };

      rec.onend = () => {
        setIsRecording(false);
      };
    } else {
      console.warn('Speech Recognition API not supported in this browser.');
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const startRecording = () => {
    if (recognitionRef.current) {
      setIsRecording(true);
      setUserInput('');
      setResponse('');
      try {
        recognitionRef.current.start();
      } catch (error) {
        console.error("Error starting speech recognition:", error);
        setIsRecording(false);
        setResponse('لا يمكن بدء التسجيل. قد تحتاج إلى منح إذن الميكروفون.');
      }
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current && isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) {
      setResponse('الرجاء إدخال رسالة.');
      return;
    }

    setIsLoading(true);
    setResponse('');

    try {
      const apiResponse = await fetch(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer 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',
            'HTTP-Referer': 'https://www.sitename.com',
            'X-Title': 'SiteName',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'deepseek/deepseek-r1:free',
            messages: [{ role: 'user', content: userInput }],
          }),
        }
      );

      const data = await apiResponse.json();
      const markdownText = data.choices?.[0]?.message?.content || 'لم يتم استلام أي رد.';
      
      // marked.parse الآن ترجع string أو Promise حسب الإعدادات
      const parsedHtml = await marked.parse(markdownText);
      setResponse(parsedHtml);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'حدث خطأ غير متوقع';
      setResponse(`خطأ: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  const dbSearch = [
    'نصائح للري الذكي',
    'أعراض نقص المغذيات في النباتات',
    'كيفية زراعة القمح',
    'أفضل أنواع الأسمدة العضوية',
  ];

  return (

        <section className='min-h-screen pt-10 bg-white overflow-hidden'>
      <div className='text-center mt-20'>
        <h1 className='text-green-950 text-3xl font-bold mb-5'>
          المساعد الذكي : دليلك الزراعي الشخصي
        </h1>
        <p className='text-gray-700 text-xl'>
          اطرح أسئلتك واحصل على إجابات فورية ونصائح مخصصة لمزرعتك
        </p>
      </div>

      <div className='w-full h-auto mt-20'>
        <section 
        dir="rtl"
        className='w-10/12 p-10 leading-8 bg-green-200 rounded-xl m-auto min-h-[200px] shadow-xl flex items-center justify-center relative text-green-950'>
          {isLoading ? (
            <div className="flex justify-center items-center h-full absolute">
              <Image
                src={Logo}
                alt="Loading spinner"
                width={50}
                height={50}
                className="animate-spin"
              />
            </div>
          ) : (
            <div
              ref={responseDivRef}
              className='prose w-full'
              dangerouslySetInnerHTML={{ __html: response }}
            ></div>
          )}
        </section>
      </div>
      <div className='w-full h-auto mt-20 mb-20'>
        <section className='p-10 w-10/12 m-auto'>
          <div className='flex flex-row-reverse items-center justify-center gap-4 w-full'>
            <textarea
              name='userInput'
              id='userInput'
              placeholder='... اطرح سؤالك هنا '
              className='flex-grow p-3 outline-none border-2 border-green-950 bg-green-100 rounded leading-8 min-h-5 text-right'
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              rows={3}
              disabled={isRecording}
            ></textarea>

            <div className="flex flex-col gap-3 items-center justify-center">
              <button
                onClick={handleSendMessage}
                disabled={isLoading || isRecording}
                className='flex flex-row-reverse items-center justify-center gap-4 bg-green-900 rounded-xl text-green-50 font-bold px-5 py-3 hover:bg-green-200 hover:text-green-950 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]'
              >
                إرسال
                <IoSend />
              </button>

              <button
                onClick={isRecording ? stopRecording : startRecording}
                disabled={isLoading || !recognitionRef.current}
                className={`flex items-center justify-center rounded-xl text-white font-bold px-5 py-3 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]
                  ${isRecording ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                {isRecording ? (
                  <>
                    إيقاف
                    <IoStopCircle className="ml-2 text-xl animate-pulse" />
                  </>
                ) : (
                  <>
                    تسجيل
                    <IoMic className="ml-2 text-xl" />
                  </>
                )}
              </button>
            </div>
          </div>
          <div className='flex flex-row-reverse items-center justify-center gap-7 mt-10 flex-wrap'>
            {dbSearch.map((item, index) => (
              <button
                key={index}
                onClick={() => setUserInput(item)}
                className='bg-green-900 text-sm rounded-xl text-green-50 font-bold px-5 py-3 hover:bg-green-200 hover:text-green-950 transition cursor-pointer'
              >
                {item}
              </button>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default AiAgricodeChat;