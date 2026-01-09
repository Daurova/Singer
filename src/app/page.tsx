import Image from "next/image";

const videos = [
  { 
    id: 1, 
    src: "/videos/video1.mp4", 
    title: "FOLK",
    scene: "НАЗВАНИЕ ПЕСНИ",
    origin: "Исполнитель оригинала",
    letters: "ИО",
    color: "from-blue-500 to-purple-600"
  },
  { 
    id: 2, 
    src: "/videos/video2.mp4", 
    title: "JAZZ",
    scene: "HELLO DARLING",
    origin: "Луи Армстронг",
    letters: "ЛА",
    color: "from-yellow-500 to-orange-600"
  },
];

export default function Home() {
  return (
    <div className="h-full min-h-0 overflow-hidden flex bg-gradient-to-br from-indigo-950 via-purple-950 to-gray-900">
      {/* Левая часть с видео */}
      <div className="w-3/5 h-full overflow-y-auto hide-scrollbar bg-gradient-to-b from-gray-900/30 via-purple-950/20 to-indigo-950/30 backdrop-blur-sm relative">
        {/* Эффект неба Лос-Анджелеса на закате */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-orange-500/10 via-pink-500/5 to-transparent blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-indigo-500/10 via-purple-500/5 to-transparent blur-2xl"></div>

        <div className="grid grid-cols-2 gap-8 p-8">
          {videos.map((video) => (
            <div key={video.id} className="relative group">
              {/* Эффект неоновой вывески */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${video.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700`}></div>
              
              {/* Рамка в стиле кинопленки */}
              <div className="absolute -inset-1 bg-gray-900 rounded-xl">
                <div className="absolute -top-1 left-0 right-0 h-2 bg-gray-800 flex justify-between px-1">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-1 h-full bg-gray-700"></div>
                  ))}
                </div>
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gray-800 flex justify-between px-1">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-1 h-full bg-gray-700"></div>
                  ))}
                </div>
              </div>
              
              {/* Контейнер для видео */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden shadow-2xl border border-gray-800/50 backdrop-blur-sm">
                {/* Верхняя полоса */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 z-30"></div>
                
                {/* Эффект проектора */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_60%,rgba(0,0,0,0.8)_100%)] z-0"></div>
                
                <video 
                  className="w-full aspect-6/8 object-contain relative z-10 group-hover:scale-[1.01] transition-transform duration-500"
                  controls
                  playsInline
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Бейдж с названием песни */}
                <div className="absolute top-4 right-4 z-40">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full blur opacity-60 group-hover:opacity-80"></div>
                    <div className="relative bg-gradient-to-r from-yellow-600/90 to-orange-600/90 text-white text-xs font-bold px-4 py-2 rounded-full tracking-wider uppercase border border-yellow-400/30 backdrop-blur-sm shadow-[0_0_10px_rgba(234,179,8,0.3)] font-mono">
                      <span className="flex items-center gap-2">
                        <span className="text-yellow-200">♫</span> 
                        {video.title}
                        <span className="text-yellow-200">♫</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Информация об исполнителе */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 z-30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                        <span className="text-xs">{video.letters}</span>
                      </div>
                      <div className="text-xs text-gray-300">{video.origin}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-gray-300">Борис Джагаев</div>
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                        <span className="text-xs">БД</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Название песни */}
                <div className="absolute top-4 left-4 z-40">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 border border-yellow-500/30">
                    <div className="text-xs text-yellow-300 font-light italic">{video.scene}</div>
                  </div>
                </div>
                
                {/* Угловые элементы */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-yellow-500/50"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-pink-500/50"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-blue-500/50"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-purple-500/50"></div>
              </div>
              
              {/* Парящие звезды */}
              <div className="absolute -top-2 -right-2 text-lg text-yellow-300/40 animate-pulse" style={{animationDelay: "0.2s"}}>☆</div>
              <div className="absolute -bottom-2 -left-2 text-lg text-pink-300/40 animate-pulse" style={{animationDelay: "0.8s"}}>★</div>
            </div>
          ))}
        </div>
        
        {/* Декоративные элементы */}
        <div className="absolute top-1/4 left-8 opacity-20 group">
          <div className="relative">
            <div className="w-1 h-16 bg-gradient-to-b from-yellow-300 to-transparent ml-2"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-300/20 blur-sm"></div>
          </div>
        </div>
        
        <div className="absolute top-20 right-20 opacity-5 animate-float-slow">
          <div className="text-4xl">☁️</div>
        </div>
        <div className="absolute bottom-40 left-40 opacity-5 animate-float-slow" style={{animationDelay: "2s"}}>
          <div className="text-4xl">☁️</div>
        </div>
      </div>

      {/* Правая часть с портретом */}
      <div className="w-2/5 h-full flex-shrink-0 relative overflow-hidden">
        {/* Фон */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-indigo-900 to-gray-900">
          <div className="absolute inset-0 bg-[url('/images/stars.png')] opacity-40"></div>
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
        </div>
        
        {/* Основной контейнер с выравниванием */}
        <div className="relative h-full w-full flex flex-col items-center justify-center p-8">
          {/* Контейнер для изображения */}
          <div className="relative w-full h-2/3 max-h-[600px] mb-8 group">
            {/* Эффект звездного неба */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-black rounded-2xl overflow-hidden">
              {/* Проекция звезд */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Рамка */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10 rounded-3xl backdrop-blur-sm border border-white/10"></div>
            
            {/* Внутренний контейнер изображения */}
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-white/10">
              <Image
                src="/images/portrait.jpg"
                alt="Борис Джагаев"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-1000"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Цветовые оверлеи */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-blue-900/30 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-pink-500/10 mix-blend-soft-light"></div>
            </div>
            
            {/* Плавающие планеты */}
            <div className="absolute -top-3 left-8 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/10 animate-float-slow"></div>
            <div className="absolute top-12 right-6 w-5 h-5 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-500/10 animate-float-slow" style={{animationDelay: "1s"}}></div>
            <div className="absolute bottom-16 left-12 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-500/10 animate-float-slow" style={{animationDelay: "2s"}}></div>
          </div>

          {/* Контейнер для текста (неоновая вывеска) */}
          <div className="relative w-full max-w-md group">
            {/* Эффект неонового свечения */}
            <div className="absolute -inset-6 bg-gradient-to-r from-purple-600/20 via-fuchsia-500/15 to-blue-500/20 blur-lg rounded-full opacity-50 group-hover:opacity-100 group-hover:blur-xl transition-all duration-500"></div>
            
            {/* Основной текст */}
            <div className="relative text-center p-4">
              <div className="text-3xl md:text-4xl font-black tracking-[0.15em] mb-3 transform transition-all duration-500 group-hover:scale-105 group-hover:tracking-[0.18em]">
                <span className="relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-50 to-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-700">
                    БОРИС ДЖАГАЕВ
                  </span>
                  
                  <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300/40 via-blue-300/30 to-cyan-300/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    БОРИС ДЖАГАЕВ
                  </span>
                </span>
              </div>
              
              {/* Подзаголовок */}
              <div className="relative">
                <div className="text-sm text-cyan-100/80 tracking-[0.3em] uppercase font-mono font-bold transition-all duration-500 group-hover:text-cyan-50 group-hover:tracking-[0.35em] mb-4">
                  <span className="drop-shadow-[0_0_3px_rgba(173,216,230,0.5)]">
                    The ripples from pebbles
                  </span>
                </div>
                
                {/* Нижняя неоновая трубка */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-60 group-hover:opacity-90 group-hover:w-40 group-hover:h-0.5 group-hover:via-white/70 transition-all duration-500"></div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}