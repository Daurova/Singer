'use client'
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handlePhoneClick = () => {
    alert("Это демо-версия сайта. Номер телефона не действителен.");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Домой", icon: "🏠", color: "from-yellow-500/20 to-orange-500/20" },
    { href: "/events", label: "Афиша", icon: "🎭", color: "from-pink-500/20 to-rose-500/20" },
    { href: "/press", label: "Пресса", icon: "📰", color: "from-purple-500/20 to-indigo-500/20" },
    { href: "/life", label: "Жизнь", icon: "✨", color: "from-blue-500/20 to-cyan-500/20" },
  ];

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-gray-900 border-b border-purple-800/30">
      {/* Фон с эффектами как на основной странице */}
      <div className="absolute inset-0">
        {/* Эффект звездного неба */}
        <div className="absolute inset-0 bg-[url('/images/stars.png')] opacity-20"></div>
        
        {/* Неоновые огни города */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-purple-600/10 via-fuchsia-500/5 to-transparent blur-xl"></div>
        
        {/* Эффект сценического света слева для заголовка */}
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-600/5 via-fuchsia-600/5 to-blue-600/5 rounded-full blur-3xl hidden md:block"></div>
        
        {/* Эффект сценического света справа для меню */}
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-l from-purple-600/5 via-fuchsia-600/5 to-blue-600/5 rounded-full blur-3xl hidden lg:block"></div>
      </div>
      
      {/* Эффект кинопленки сверху */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 z-20"></div>

      <nav className="relative flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Левая часть - Заголовок с эффектами при наведении */}
        <div className="relative group cursor-pointer z-30">
          {/* Эффект неонового свечения - усиливается при наведении */}
          <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-600/20 via-fuchsia-500/15 to-blue-500/20 blur-lg rounded-full opacity-50 group-hover:opacity-100 group-hover:blur-xl transition-all duration-500 group-hover:scale-110 hidden sm:block"></div>
          
          {/* Вспышка света при наведении */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-pink-500/0 to-purple-500/0 rounded-full opacity-0 group-hover:opacity-30 group-hover:from-yellow-500/10 group-hover:via-pink-500/10 group-hover:to-purple-500/10 transition-all duration-700 hidden sm:block"></div>
          
          {/* Текст вывески - белый неон с голубоватым свечением */}
          <div className="text-xl sm:text-2xl lg:text-3xl font-black tracking-[0.1em] sm:tracking-[0.15em] mb-1 sm:mb-2 transform transition-all duration-500 group-hover:scale-105 group-hover:tracking-[0.12em] sm:group-hover:tracking-[0.18em]">
            <span className="relative">
              {/* Белое свечение текста */}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-50 to-white drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] sm:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] sm:group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-700">
                БОРИС ДЖАГАЕВ
              </span>
              
              {/* Голубое подсветка для глубины */}
              <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300/40 via-blue-300/30 to-cyan-300/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block">
                БОРИС ДЖАГАЕВ
              </span>
            </span>
          </div>
          
          {/* Подзаголовок - меньший неон */}
          <div className="relative">
            <div className="text-[9px] xs:text-[10px] sm:text-xs text-cyan-100/80 tracking-[0.2em] sm:tracking-[0.3em] uppercase font-mono font-bold transition-all duration-500 group-hover:text-cyan-50 group-hover:tracking-[0.25em] sm:group-hover:tracking-[0.35em]">
              <span className="drop-shadow-[0_0_2px_rgba(173,216,230,0.5)] sm:drop-shadow-[0_0_3px_rgba(173,216,230,0.5)]">
                The ripples from pebbles
              </span>
            </div>
            
            {/* Нижняя неоновая трубка */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-60 group-hover:opacity-90 group-hover:w-20 sm:group-hover:w-28 group-hover:h-0.5 group-hover:via-white/70 transition-all duration-500 hidden sm:block"></div>
          </div>
        </div>

        {/* Гамбургер меню для мобильных */}
        <button
          onClick={toggleMenu}
          className="relative z-30 lg:hidden group/hamburger"
          aria-label="Открыть меню"
        >
          {/* Эффект свечения */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur opacity-0 group-hover/hamburger:opacity-100 transition-opacity"></div>
          
          {/* Иконка гамбургера */}
          <div className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5">
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Мобильное меню (overlay) */}
        <div className={`fixed inset-0 z-20 lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {/* Затемненный фон */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500"
            onClick={toggleMenu}
          ></div>
          
          {/* Меню */}
          <div className={`absolute top-0 right-0 h-full w-3/4 max-w-sm bg-gradient-to-br from-indigo-950 via-purple-950 to-gray-900 shadow-2xl border-l border-purple-800/30 transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Закрывающая кнопка */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Закрыть меню"
            >
              <span className="text-white text-2xl">×</span>
            </button>
            
            {/* Контент меню */}
            <div className="pt-20 px-6 pb-8 h-full overflow-y-auto">
              {/* Заголовок в меню */}
              <div className="mb-8 pb-6 border-b border-purple-800/30">
                <div className="text-xl font-black tracking-wider text-white mb-2">Меню</div>
              </div>
              
              {/* Ссылки меню */}
              <div className="space-y-4 mb-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={toggleMenu}
                    className="block group/link"
                  >
                    <div className={`relative bg-gradient-to-r ${item.color} rounded-xl p-4 transform transition-all duration-300 group-hover/link:scale-[1.02] group-hover/link:shadow-lg`}>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-white font-medium text-lg">{item.label}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* Номер телефона в меню */}
              <div className="mt-8 pt-6 border-t border-purple-800/30">
                <button
                  onClick={() => {
                    toggleMenu();
                    handlePhoneClick();
                  }}
                  className="w-full group/phone"
                >
                  <div className="relative bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 transform transition-all duration-300 group-hover/phone:scale-[1.02] group-hover/phone:shadow-lg">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-2xl">📞</span>
                      <div className="text-center">
                        <div className="text-white font-medium text-lg">+7 (900) 123-45-67</div>
                        <div className="text-gray-400 text-sm mt-1">Демо-версия</div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              
              {/* Декоративные элементы меню */}
              <div className="absolute bottom-4 left-4 text-purple-500/20 text-2xl">♫</div>
              <div className="absolute top-4 left-4 text-pink-500/20 text-2xl">♪</div>
            </div>
          </div>
        </div>

        {/* Десктопная навигация */}
        <div className="hidden lg:flex items-center gap-4 relative">
          {/* Эффект фона для навигации */}
          <div className="absolute -inset-3 bg-gradient-to-r from-purple-600/10 via-fuchsia-500/5 to-blue-500/10 blur-lg rounded-full"></div>
          
          {/* Декоративные элементы вокруг меню */}
          <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 border border-yellow-500/30 rounded-full"></div>
          <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 border border-pink-500/30 rounded-full"></div>
          
          <div className="relative flex items-center gap-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group/link"
              >
                {/* Эффект свечения при наведении */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-lg blur-sm opacity-0 group-hover/link:opacity-70 transition-all duration-300`}></div>
                
                {/* Контейнер ссылки */}
                <div className="relative flex items-center justify-center gap-2 px-4 xl:px-6 py-3 rounded-xl bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-purple-500/20 group-hover/link:border-yellow-500/40 transition-all duration-300 group-hover/link:scale-105 group-hover/link:shadow-[0_0_15px_rgba(168,85,247,0.4)] min-w-[80px] xl:min-w-[100px]">
                  {/* Текст */}
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
            
            {/* Номер телефона на десктопе */}
            <button
              onClick={handlePhoneClick}
              className="relative group/phone hidden xl:block"
            >
              {/* Эффект свечения при наведении */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg blur-sm opacity-0 group-hover/phone:opacity-70 transition-all duration-300"></div>
              
              {/* Контейнер телефона */}
              <div className="relative flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-purple-500/20 group-hover/phone:border-green-500/40 transition-all duration-300 group-hover/phone:scale-105 group-hover/phone:shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                {/* Иконка телефона */}
                <span className="text-base opacity-70 group-hover/phone:opacity-100 group-hover/phone:animate-pulse" style={{animationDuration: '0.5s'}}>
                  📞
                </span>
                
                {/* Номер телефона */}
                <span className="text-white/90 text-xs font-medium tracking-wider group-hover/phone:text-white group-hover/phone:font-bold transition-all duration-300 whitespace-nowrap">
                  +7 (900) 123-45-67
                </span>
                
                {/* Подчеркивание при наведении */}
                <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 group-hover/phone:w-3/4 transition-all duration-300"></div>
              </div>
              
              {/* Эффект пульсации для телефона */}
              <div className="absolute -inset-1 rounded-lg border border-green-500/0 group-hover/phone:border-green-500/20 group-hover/phone:animate-ping-slow transition-all duration-300"></div>
              
              {/* Информация о демо-версии */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-max bg-black/80 backdrop-blur-sm text-[10px] text-gray-300 px-2 py-1 rounded opacity-0 group-hover/phone:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                Демо-версия
              </div>
            </button>
          </div>
          
          {/* Упрощенная версия телефона для tablet */}
          <button
            onClick={handlePhoneClick}
            className="relative group/phone lg:block xl:hidden"
          >
            <div className="relative flex items-center justify-center px-3 py-3 rounded-xl bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-purple-500/20 group-hover/phone:border-green-500/40 transition-all duration-300">
              <span className="text-base">📞</span>
            </div>
          </button>
        </div>
      </nav>
      
      {/* Эффект нижней границы */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
      
      {/* Анимированные элементы на фоне */}
      <div className="absolute top-3 left-1/4 opacity-10 hidden md:block">
        <div className="text-sm animate-float">🎬</div>
      </div>
      <div className="absolute top-3 right-1/4 opacity-10 hidden md:block">
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