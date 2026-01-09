import Link from "next/link";

export function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-gray-900 border-b border-purple-800/30">
      {/* Фон с эффектами как на основной странице */}
      <div className="absolute inset-0">
        {/* Эффект звездного неба */}
        <div className="absolute inset-0 bg-[url('/images/stars.png')] opacity-20"></div>
        
        {/* Неоновые огни города */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-purple-600/10 via-fuchsia-500/5 to-transparent blur-xl"></div>
        
        {/* Эффект сценического света слева для заголовка */}
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-600/5 via-fuchsia-600/5 to-blue-600/5 rounded-full blur-3xl"></div>
        
        {/* Эффект сценического света справа для меню */}
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-l from-purple-600/5 via-fuchsia-600/5 to-blue-600/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Эффект кинопленки сверху */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 z-20"></div>

      <nav className="relative flex items-center justify-between px-8 py-4">
        {/* Левая часть - Заголовок с эффектами при наведении */}
        <div className="relative group cursor-pointer">
          {/* Эффект неонового свечения - усиливается при наведении */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-fuchsia-500/15 to-blue-500/20 blur-lg rounded-full opacity-50 group-hover:opacity-100 group-hover:blur-xl transition-all duration-500 group-hover:scale-110"></div>
          
          {/* Вспышка света при наведении */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-pink-500/0 to-purple-500/0 rounded-full opacity-0 group-hover:opacity-30 group-hover:from-yellow-500/10 group-hover:via-pink-500/10 group-hover:to-purple-500/10 transition-all duration-700"></div>
          
          {/* Эффект бегущих огней как в неоновой вывеске */}
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 group-hover:animate-slide transition-opacity duration-300"></div>
          </div>
          
          {/* Текст вывески - белый неон с голубоватым свечением */}
    <div className="text-2xl md:text-3xl font-black tracking-[0.15em] mb-2 transform transition-all duration-500 group-hover:scale-105 group-hover:tracking-[0.18em]">
      <span className="relative">
        {/* Белое свечение текста */}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-50 to-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-700">
          БОРИС ДЖАГАЕВ
        </span>
        
        {/* Голубое подстветка для глубины */}
        <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300/40 via-blue-300/30 to-cyan-300/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          БОРИС ДЖАГАЕВ
        </span>
      </span>
    </div>
    
    {/* Подзаголовок - меньший неон */}
    <div className="relative">
      <div className="text-[10px] md:text-xs text-cyan-100/80 tracking-[0.3em] uppercase font-mono font-bold transition-all duration-500 group-hover:text-cyan-50 group-hover:tracking-[0.35em]">
        <span className="drop-shadow-[0_0_3px_rgba(173,216,230,0.5)]">
          The ripples from pebbles
        </span>
      </div>
      
      {/* Нижняя неоновая трубка */}
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-60 group-hover:opacity-90 group-hover:w-28 group-hover:h-0.5 group-hover:via-white/70 transition-all duration-500"></div>
    </div>
          
          {/* Парящие музыкальные символы - становятся активными при наведении */}
          <div className="absolute -top-1 -left-1 text-sm text-yellow-300/40 animate-pulse group-hover:text-yellow-300 group-hover:opacity-100 group-hover:scale-125 group-hover:animate-spin" style={{animationDelay: "0.2s"}}>
            ☆
          </div>
          <div className="absolute -top-1 -right-1 text-sm text-pink-300/40 animate-pulse group-hover:text-pink-300 group-hover:opacity-100 group-hover:scale-125 group-hover:animate-bounce" style={{animationDelay: "0.7s"}}>
            ★
          </div>
          <div className="absolute -bottom-1 -left-1 text-sm text-purple-300/40 opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity duration-500">
            ♪
          </div>
          <div className="absolute -bottom-1 -right-1 text-sm text-blue-300/40 opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity duration-500" style={{animationDelay: '1s'}}>
            ♫
          </div>
          
          {/* Пианино слева от заголовка - оживает при наведении
          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 opacity-20 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500">
            <div className="text-xl animate-spin-slow group-hover:animate-none group-hover:rotate-12 transition-all duration-500">🎹</div>
          </div> */}
          
          {/* Эффект звуковых волн при наведении */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-0 h-0 rounded-full border-2 border-yellow-500/30 group-hover:w-full group-hover:h-full group-hover:border-transparent transition-all duration-1000"
                  style={{animationDelay: `${i * 200}ms`}}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Правая часть - Навигация */}
        <div className="relative flex items-center gap-2">
          {/* Эффект фона для навигации */}
          <div className="absolute -inset-3 bg-gradient-to-r from-purple-600/10 via-fuchsia-500/5 to-blue-500/10 blur-lg rounded-full"></div>
          
          {/* Декоративные элементы вокруг меню */}
          <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 border border-yellow-500/30 rounded-full"></div>
          <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 border border-pink-500/30 rounded-full"></div>
          
          <div className="relative flex items-center gap-3">
            {[
              { href: "/", label: "Домой", icon: "🏠", color: "from-yellow-500/20 to-orange-500/20" },
              { href: "/events", label: "Афиша", icon: "🎭", color: "from-pink-500/20 to-rose-500/20" },
              { href: "/press", label: "Пресса", icon: "📰", color: "from-purple-500/20 to-indigo-500/20" },
              { href: "/life", label: "Жизнь", icon: "✨", color: "from-blue-500/20 to-cyan-500/20" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group/link"
              >
                {/* Эффект свечения при наведении */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-lg blur-sm opacity-0 group-hover/link:opacity-70 transition-all duration-300`}></div>
                
               {/* Контейнер ссылки - увеличенный */}
                <div className="relative flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-purple-500/20 group-hover/link:border-yellow-500/40 transition-all duration-300 group-hover/link:scale-105 group-hover/link:shadow-[0_0_15px_rgba(168,85,247,0.4)] min-w-[100px]">
                  {/* Иконка - увеличенная */}
                  {/* <span className="text-base opacity-70 group-hover/link:opacity-100 group-hover/link:animate-bounce" style={{animationDuration: '0.5s'}}>
                    {item.icon}
                  </span> */}
                  
                  {/* Текст - увеличенный */}
                  <span className="text-white/90 text-sm font-medium tracking-wider group-hover/link:text-white group-hover/link:font-bold transition-all duration-300 whitespace-nowrap">
                    {item.label}
                  </span>
                  {/* Подчеркивание при наведении */}
                  <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-pink-500 group-hover/link:w-3/4 transition-all duration-300"></div>
                </div>
                
                {/* Эффект пульсации для активной ссылки */}
                <div className="absolute -inset-1 rounded-lg border border-yellow-500/0 group-hover/link:border-yellow-500/20 group-hover/link:animate-ping-slow transition-all duration-300"></div>
              </Link>
            ))}
          </div>
          
          {/* Микрофон справа от меню */}
          <div className="relative ml-2 opacity-20 group-hover:opacity-40 transition-opacity">
            <div className="text-xl animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2s'}}>🎤</div>
          </div>
        </div>

       
        {/* Музыкальная нота в правом нижнем углу */}
        <div className="absolute right-6 bottom-2">
          <div className="text-pink-500/30 text-xs animate-pulse" style={{animationDuration: '2s'}}>♪</div>
        </div>
      </nav>
      
      {/* Эффект нижней границы */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
      
      {/* Анимированные элементы на фоне */}
      <div className="absolute top-3 left-1/4 opacity-10">
        <div className="text-sm animate-float">🎬</div>
      </div>
      <div className="absolute top-3 right-1/4 opacity-10">
        <div className="text-sm animate-float" style={{animationDelay: '2s'}}>🌟</div>
      </div>
      
      {/* Маленькие звезды на фоне */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3
            }}
          ></div>
        ))}
      </div>
    </header>
  );
}