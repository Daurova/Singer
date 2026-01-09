export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-indigo-950 via-purple-950 to-gray-900 text-white py-6 px-8 border-t border-purple-800/30">
      {/* Верхняя неоновая полоса */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500"></div>
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex gap-6">
          <span className="text-sm text-gray-300 tracking-wider font-light hover:text-yellow-300 transition-colors duration-300 cursor-pointer">
            Instagram
          </span>
          <span className="text-sm text-gray-300 tracking-wider font-light hover:text-pink-300 transition-colors duration-300 cursor-pointer">
            Telegram
          </span>
        </div>
        <p className="text-sm text-gray-400 tracking-wider font-light">
          <span className="text-yellow-500/60">©</span> 2026
        </p>
      </div>
      
      {/* Нижняя неоновая полоса */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-yellow-500"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute left-4 bottom-4 text-yellow-300/20 text-xs">♪</div>
      <div className="absolute right-4 bottom-4 text-pink-300/20 text-xs">♫</div>
    </footer>
  );
}