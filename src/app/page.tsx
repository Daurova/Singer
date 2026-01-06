import Image from "next/image";

const videos = [
  { 
    id: 1, 
    src: "/videos/video1.mp4", 
    title: "City of Stars",
    scene: "Seb playing piano at the pier",
    color: "from-blue-500 to-purple-600"
  },
  { 
    id: 2, 
    src: "/videos/video2.mp4", 
    title: "Another Day of Sun",
    scene: "Freeway dance sequence",
    color: "from-yellow-500 to-orange-600"
  },
];

export default function Home() {
  return (
    <div className="h-full min-h-0 overflow-hidden flex bg-gradient-to-br from-indigo-950 via-purple-950 to-gray-900">
      {/* Левая часть с видео - Лиф-апартаменты Мии и Себа */}
      <div className="w-3/5 h-full overflow-y-auto hide-scrollbar bg-gradient-to-b from-gray-900/30 via-purple-950/20 to-indigo-950/30 backdrop-blur-sm relative">
        {/* Текстура киноэкрана */}
        <div className="absolute inset-0 bg-[url('/images/film-grain.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        
        {/* Эффект неба Лос-Анджелеса на закате */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-orange-500/10 via-pink-500/5 to-transparent blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-indigo-500/10 via-purple-500/5 to-transparent blur-2xl"></div>
        
        {/* Заголовок в стиле открывающих титров */}
        <div className="relative pt-8 pb-6 text-center">
          <div className="inline-block">
            <div className="text-5xl font-bold tracking-[0.3em] mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400">БОРИС ДЖАГАЕВ</span>
            </div>
            <div className="text-sm text-gray-400 tracking-[0.5em] uppercase font-light">
              A Damien Chazelle Picture
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 p-8">
          {videos.map((video) => (
            <div key={video.id} className="relative group">
              {/* Эффект неоновой вывески Лос-Анджелеса */}
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
                {/* Верхняя полоса как в титрах */}
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
                
                {/* Бейдж с названием песни в стиле фильма */}
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
                
                {/* Информация о сцене */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 z-30">
                  <div className="mb-2">
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Scene</div>
                    <div className="text-white text-sm font-light">{video.scene}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                        <span className="text-xs">M</span>
                      </div>
                      <div className="text-xs text-gray-300">Emma Stone</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-gray-300">Ryan Gosling</div>
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                        <span className="text-xs">S</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Элемент "Fools who dream" */}
                <div className="absolute top-4 left-4 z-40">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 border border-yellow-500/30">
                    <div className="text-xs text-yellow-300 font-light italic">&quot;The fools who dream&quot;</div>
                  </div>
                </div>
                
                {/* Угловые элементы в стиле кинопленки */}
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
        
        {/* Элементы фильма: уличный фонарь */}
        <div className="absolute top-1/4 left-8 opacity-20 group">
          <div className="relative">
            <div className="w-1 h-16 bg-gradient-to-b from-yellow-300 to-transparent ml-2"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-300/20 blur-sm"></div>
          </div>
        </div>
        
        {/* Плавающие облака как в заставке */}
        <div className="absolute top-20 right-20 opacity-5 animate-float-slow">
          <div className="text-4xl">☁️</div>
        </div>
        <div className="absolute bottom-40 left-40 opacity-5 animate-float-slow" style={{animationDelay: "2s"}}>
          <div className="text-4xl">☁️</div>
        </div>
      </div>

      {/* Правая часть - Планетарий Гриффита и сцена танца */}
      <div className="w-2/5 h-full flex-shrink-0 relative overflow-hidden">
        {/* Фон ночного неба Лос-Анджелеса */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-indigo-900 to-gray-900">
          <div className="absolute inset-0 bg-[url('/images/stars.png')] opacity-40"></div>
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
        </div>
        
        {/* Танцующие силуэты Мии и Себа */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex items-center gap-2">
            <div className="w-12 h-24 bg-gradient-to-t from-pink-500/20 to-transparent rounded-full animate-dance-female"></div>
            <div className="w-12 h-24 bg-gradient-to-t from-blue-500/20 to-transparent rounded-full animate-dance-male" style={{animationDelay: "0.5s"}}></div>
          </div>
        </div>
        
        {/* Основной контейнер портрета - сцена в планетарии */}
        <div className="relative h-full w-full flex items-center justify-center p-12">
          <div className="relative w-full h-4/5 group">
            {/* Эффект звездного неба внутри планетария */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-black rounded-2xl overflow-hidden">
              {/* Проекция звезд */}
              <div className="absolute inset-0">
                {[...Array(30)].map((_, i) => (
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
              
              {/* Лунный свет */}
              <div className="absolute top-8 right-12 w-16 h-16 bg-gradient-to-br from-yellow-200/10 to-white/5 rounded-full blur-sm"></div>
            </div>
            
            {/* Рамка в стиле небесной сферы */}
            <div className="absolute -inset-6 bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10 rounded-3xl backdrop-blur-sm border border-white/10">
              {/* Зодиакальные символы по углам */}
              <div className="absolute top-4 left-4 text-yellow-300/30 text-xl">♈</div>
              <div className="absolute top-4 right-4 text-yellow-300/30 text-xl">♌</div>
              <div className="absolute bottom-4 left-4 text-yellow-300/30 text-xl">♋</div>
              <div className="absolute bottom-4 right-4 text-yellow-300/30 text-xl">♎</div>
            </div>
            
            {/* Внутренний контейнер изображения - танец в планетарии */}
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-white/10">
              <Image
                src="/images/portrait.jpg"
                alt="Mia & Sebastian dancing at Griffith Observatory"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-1000"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Цветовые оверлеи как в фильме */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-blue-900/30 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-pink-500/10 mix-blend-soft-light"></div>
              
              {/* Эффект парения */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            </div>
            
            {/* Плавающие планеты как в сцене планетария */}
            <div className="absolute -top-4 left-10 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/10 animate-float-slow"></div>
            <div className="absolute top-16 right-8 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-500/10 animate-float-slow" style={{animationDelay: "1s"}}></div>
            <div className="absolute bottom-20 left-16 w-10 h-10 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-500/10 animate-float-slow" style={{animationDelay: "2s"}}></div>
            
            {/* Табличка "Griffith Observatory" */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-40">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 text-xs font-light tracking-widest px-6 py-3 rounded-lg border border-gray-700/50 backdrop-blur-sm shadow-lg">
                GRIFFITH OBSERVATORY
              </div>
            </div>
          </div>
        </div>
        
        {/* Пианино Себа */}
        <div className="absolute bottom-48 right-16 opacity-80 group">
          <div className="relative">
            <div className="text-5xl">🎹</div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-xs text-yellow-300 bg-black/50 px-2 py-1 rounded">
                Sebastian&apos;s Piano
              </div>
            </div>
            {/* Клавиши пианино (анимированные) */}
            <div className="absolute -bottom-2 left-0 right-0 flex justify-center gap-[1px]">
              {['C', 'D', 'E', 'F', 'G', 'A', 'B'].map((note, i) => (
                <div 
                  key={note}
                  className="w-3 h-4 bg-white group-hover:animate-piano-key"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    boxShadow: 'inset 0 -1px 2px rgba(0,0,0,0.5)'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Магнитофон с кассетой */}
        <div className="absolute top-24 left-20 opacity-70 group">
          <div className="relative">
            <div className="text-4xl">📼</div>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-xs text-pink-300 bg-black/50 px-2 py-1 rounded whitespace-nowrap">
                John Legend Tape
              </div>
            </div>
          </div>
        </div>
        
        {/* Виниловая пластинка */}
        <div className="absolute top-40 right-32 opacity-70 animate-spin-slow group">
          <div className="relative">
            <div className="text-4xl">💿</div>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-xs text-cyan-300 bg-black/50 px-2 py-1 rounded">
                Jazz Records
              </div>
            </div>
          </div>
        </div>
        
        {/* Основная надпись с названием фильма */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-40">
          <div className="relative">
            {/* Эффект неоновой вывески */}
            <div className="absolute -inset-8 bg-gradient-to-r from-yellow-500/20 via-pink-500/20 to-purple-500/20 blur-2xl rounded-full"></div>
            
            {/* Главный текст */}
            <div className="relative">
              <div className="text-4xl font-bold tracking-[0.2em] mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">
                  БОРИС ДЖАГАЕВ
                </span>
              </div>
              
              {/* Подзаголовок */}
              <div className="text-sm text-gray-300 tracking-[0.3em] uppercase font-light mb-6">
                Here&apos;s to the ones who dream
              </div>
              
              {/* Кнопка-цитата */}
              <div className="bg-gradient-to-r from-yellow-600/20 to-pink-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 max-w-xs mx-auto">
                <div className="text-yellow-200 text-sm font-light italic text-center">
                  &quot;This is the dream! It&apos;s conflict and it&apos;s compromise, and it&apos;s very, very exciting!&quot;
                </div>
                <div className="text-gray-400 text-xs text-center mt-2">- Sebastian</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Анимированные элементы внизу */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-8">
          {/* Автомобиль (символ пробок на фривее) */}
          <div className="text-xl animate-bounce" style={{animationDelay: "0s"}}>🚗</div>
          {/* Стул кастинга */}
          <div className="text-xl animate-bounce" style={{animationDelay: "0.2s"}}>💺</div>
          {/* Сценарий */}
          <div className="text-xl animate-bounce" style={{animationDelay: "0.4s"}}>📝</div>
          {/* Фотоаппарат */}
          <div className="text-xl animate-bounce" style={{animationDelay: "0.6s"}}>🎥</div>
          {/* Оскар */}
          <div className="text-xl animate-bounce" style={{animationDelay: "0.8s"}}>🏆</div>
        </div>
        
        {/* Год и награды */}
        <div className="absolute top-12 left-12">
          <div className="text-yellow-500/50 text-lg font-mono">2016</div>
          <div className="text-xs text-gray-500 mt-1">6 Academy Awards</div>
        </div>
        
        {/* Композитор */}
        <div className="absolute top-12 right-12 text-right">
          <div className="text-cyan-500/70 text-sm">Justin Hurwitz</div>
          <div className="text-xs text-gray-500 mt-1">Composer</div>
        </div>
      </div>
    </div>
  );
}