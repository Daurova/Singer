'use client'
import { useState } from "react";
import Image from "next/image"
import { Coffee, Music, Book, Heart, Sun, Moon, Coffee as CoffeeIcon, Dumbbell, PenTool as Pen, Camera, Wine, Calendar, Clock, Home, Users, Star, Globe, Cloud } from "lucide-react";

const dailyRoutine = [
  {
    time: "07:00",
    title: "УТРО С КОФЕ",
    description: "Пробуждение, чашка свежесваренного кофе и планирование дня",
    icon: Coffee,
    color: "from-orange-500 to-amber-600",
    image: "/daily/morning.jpg"
  },
  {
    time: "08:30",
    title: "ВОКАЛЬНЫЕ РАЗМИНКИ",
    description: "Ежедневные упражнения для поддержания голоса в идеальной форме",
    icon: Music,
    color: "from-pink-500 to-rose-600",
    image: "/daily/vocal.jpg"
  },
  {
    time: "10:00",
    title: "РЕПЕТИЦИИ",
    description: "Работа над новыми аранжировками и репетиция предстоящих выступлений",
    icon: Book,
    color: "from-purple-500 to-indigo-600",
    image: "/daily/rehearsal.jpg"
  },
  {
    time: "13:00",
    title: "ТВОРЧЕСКИЙ ОБЕД",
    description: "Встречи с коллегами, обсуждение новых проектов и вдохновляющие беседы",
    icon: Users,
    color: "from-blue-500 to-cyan-600",
    image: "/daily/lunch.jpg"
  },
  {
    time: "15:00",
    title: "СТУДИЙНАЯ РАБОТА",
    description: "Запись новых треков, работа над звуком и аранжировками",
    icon: Pen,
    color: "from-green-500 to-emerald-600",
    image: "/daily/studio.jpg"
  },
  {
    time: "18:00",
    title: "ФИЗИЧЕСКАЯ АКТИВНОСТЬ",
    description: "Тренировки для поддержания формы и энергии на сцене",
    icon: Dumbbell,
    color: "from-red-500 to-orange-600",
    image: "/daily/gym.jpg"
  },
  {
    time: "20:00",
    title: "ВЫСТУПЛЕНИЯ",
    description: "Корпоративные мероприятия, концерты и живые выступления",
    icon: Star,
    color: "from-yellow-500 to-amber-600",
    image: "/daily/performance.jpg"
  },
  {
    time: "23:00",
    title: "ВЕЧЕР ВДОХНОВЕНИЯ",
    description: "Прослушивание новой музыки, чтение и время для творчества",
    icon: Moon,
    color: "from-indigo-500 to-purple-600",
    image: "/daily/evening.jpg"
  }
];

const passions = [
  {
    title: "ПУТЕШЕСТВИЯ",
    description: "Изучение новых культур и музыкальных традиций",
    icon: Globe,
    color: "from-blue-400 to-cyan-500"
  },
  {
    title: "ФОТОГРАФИЯ",
    description: "Съемка моментов жизни и творческого процесса",
    icon: Camera,
    color: "from-purple-400 to-pink-500"
  },
  {
    title: "ВИНОДЕЛИЕ",
    description: "Коллекционирование и изучение вин из разных регионов",
    icon: Wine,
    color: "from-red-400 to-rose-500"
  },
  {
    title: "ЛИТЕРАТУРА",
    description: "Чтение поэзии и классической литературы",
    icon: Book,
    color: "from-amber-400 to-orange-500"
  }
];

const lifePhilosophy = [
  "Музыка — это язык, понятный без перевода",
  "Каждый день — возможность создать что-то новое",
  "Вдохновение можно найти в самых простых вещах",
  "Искренность на сцене рождает искренность в зале",
  "Творчество — это бесконечный путь познания себя"
];

export default function DailyLifePage() {
  const [activeTime, setActiveTime] = useState<string | null>(null);
  const [currentDayPart, setCurrentDayPart] = useState<'morning' | 'day' | 'evening' | 'night'>('day');

  const getCurrentTime = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 17) return 'day';
    if (hour >= 17 && hour < 22) return 'evening';
    return 'night';
  };

  return (
    <div className="min-h-screen overflow-y-scroll bg-gradient-to-br from-indigo-950 via-purple-950 to-gray-900 overflow-hidden">
      {/* Динамический фон в зависимости от времени суток */}
      <div className="absolute inset-0 pointer-events-none">
        {currentDayPart === 'morning' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-yellow-400/5 to-transparent"></div>
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-amber-500/20 to-transparent blur-3xl"></div>
          </>
        )}
        {currentDayPart === 'day' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-cyan-400/5 to-transparent"></div>
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl"></div>
          </>
        )}
        {currentDayPart === 'evening' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-pink-400/5 to-transparent"></div>
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-purple-500/20 to-transparent blur-3xl"></div>
            <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-orange-500/20 to-transparent blur-3xl"></div>
          </>
        )}
        {currentDayPart === 'night' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-purple-900/10 to-black"></div>
            <div className="absolute inset-0 bg-[url('/images/stars.png')] opacity-40"></div>
            <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-blue-900/20 to-transparent blur-3xl"></div>
          </>
        )}
        
        {/* Плавающие элементы */}
        <div className="absolute top-20 right-20 opacity-10 animate-float-slow">
          <Music className="w-12 h-12 text-white" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-10 animate-float-slow" style={{ animationDelay: "2s" }}>
          <CoffeeIcon className="w-12 h-12 text-white" />
        </div>
        <div className="absolute top-1/3 left-1/4 opacity-10 animate-float-slow" style={{ animationDelay: "1s" }}>
          <Star className="w-10 h-10 text-yellow-400" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 opacity-10 animate-float-slow" style={{ animationDelay: "3s" }}>
          <Heart className="w-10 h-10 text-pink-400" />
        </div>
      </div>

      {/* Основной контент */}
      <div className="relative container mx-auto px-4 py-8 sm:py-12">
        {/* Заголовок */}
        <div className="text-center mb-8 sm:mb-16 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
          
          <h1 className="text-3xl sm:text-5xl font-black tracking-[0.2em] sm:tracking-[0.3em] mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              ПОВСЕДНЕВНОСТЬ
            </span>
          </h1>
          
          <div className="relative inline-block">
            <p className="text-sm sm:text-lg text-cyan-100/80 tracking-[0.15em] uppercase font-mono font-bold mb-2">
              Жизнь между выступлениями
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-pink-500/50 to-purple-500/50"></div>
          </div>
        </div>

        {/* Интро */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-xl opacity-30"></div>
            <div className="relative">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light">
                За кулисами сцены — обычная жизнь, наполненная ритуалами, творчеством и моментами тишины. 
                Каждый день — это баланс между искусством и реальностью.
              </p>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Текущее время: {getCurrentTime() === 'morning' ? '☀️ Утро' : 
                                       getCurrentTime() === 'day' ? '🌞 День' : 
                                       getCurrentTime() === 'evening' ? '🌇 Вечер' : '🌙 Ночь'}</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Home className="w-4 h-4" />
                  <span>Москва → Мир</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Основная сетка распорядка дня */}
        <div className="max-w-6xl mx-auto mb-16 sm:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Левая колонка - утро и день */}
            <div className="space-y-6">
              {dailyRoutine.slice(0, 4).map((item) => (
                <div 
                  key={item.time}
                  onMouseEnter={() => setActiveTime(item.time)}
                  onMouseLeave={() => setActiveTime(null)}
                  className="relative group cursor-pointer"
                >
                  <div className={`absolute -inset-4 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                  
                  <div className="relative bg-gray-900/70 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <div className={`absolute -inset-3 bg-gradient-to-r ${item.color} rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                        <div className={`relative p-3 rounded-lg bg-gradient-to-br ${item.color} border border-white/20`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-lg font-bold text-white">{item.title}</div>
                          <div className="text-sm font-mono text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                            {item.time}
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-4">{item.description}</p>
                        
                        <div className="h-32 rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10">
                          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center">
                            <div className="text-gray-400 text-sm">
                              Фото: {item.title.toLowerCase()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Правая колонка - вечер и ночь */}
            <div className="space-y-6">
              {dailyRoutine.slice(4).map((item) => (
                <div 
                  key={item.time}
                  onMouseEnter={() => setActiveTime(item.time)}
                  onMouseLeave={() => setActiveTime(null)}
                  className="relative group cursor-pointer"
                >
                  <div className={`absolute -inset-4 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                  
                  <div className="relative bg-gray-900/70 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <div className={`absolute -inset-3 bg-gradient-to-r ${item.color} rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                        <div className={`relative p-3 rounded-lg bg-gradient-to-br ${item.color} border border-white/20`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-lg font-bold text-white">{item.title}</div>
                          <div className="text-sm font-mono text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                            {item.time}
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-4">{item.description}</p>
                        
                        <div className="h-32 rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10">
                          <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-cyan-900/20 flex items-center justify-center">
                            <div className="text-gray-400 text-sm">
                              Фото: {item.title.toLowerCase()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Увлечения и хобби */}
        <div className="max-w-5xl mx-auto mb-16 sm:mb-24">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-300">
                ВНЕ СЦЕНЫ
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Творчество не заканчивается с последней нотой. Вот что вдохновляет и наполняет жизнь вне выступлений
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {passions.map((passion, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-2 bg-gradient-to-r ${passion.color} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-lg border border-white/10 p-6 group-hover:border-white/20 transition-all duration-300">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${passion.color} inline-block mb-4`}>
                    <passion.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{passion.title}</h3>
                  <p className="text-sm text-gray-300">{passion.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="text-xs text-gray-400">
                      Любимые моменты:
                      <div className="mt-1 space-y-1">
                        {passion.title === "ПУТЕШЕСТВИЯ" && (
                          <>
                            <div className="text-gray-300">✈️ Нью-Орлеан, джазовая колыбель</div>
                            <div className="text-gray-300">🎻 Вена, классическая музыка</div>
                          </>
                        )}
                        {passion.title === "ФОТОГРАФИЯ" && (
                          <>
                            <div className="text-gray-300">📷 Пленочная фотография</div>
                            <div className="text-gray-300">🌃 Ночная съемка городов</div>
                          </>
                        )}
                        {passion.title === "ВИНОДЕЛИЕ" && (
                          <>
                            <div className="text-gray-300">🍷 Бордоские вина</div>
                            <div className="text-gray-300">🍇 Вина Тосканы</div>
                          </>
                        )}
                        {passion.title === "ЛИТЕРАТУРА" && (
                          <>
                            <div className="text-gray-300">📖 Русская поэзия Серебряного века</div>
                            <div className="text-gray-300">✍️ Французские экзистенциалисты</div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Философия жизни */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-24">
          <div className="relative group">
            <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-3xl blur-2xl opacity-20"></div>
            
            <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-white/10 p-8 sm:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  ФИЛОСОФИЯ ЖИЗНИ
                </h2>
                <p className="text-gray-400">
                  Принципы, которые направляют каждый день
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lifePhilosophy.map((principle, index) => (
                  <div key={index} className="relative group/principle">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover/principle:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-white/10 p-4 group-hover/principle:border-pink-500/30 transition-all duration-300">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-pink-900/30 to-purple-900/30 border border-pink-500/20 flex-shrink-0">
                          <div className="text-pink-300 font-bold">{index + 1}</div>
                        </div>
                        <p className="text-gray-300 font-light leading-relaxed">
                          {principle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10 text-center">
                <p className="text-gray-400 italic max-w-2xl mx-auto">
                  "Музыкант — не профессия, а состояние души. Это способ видеть мир через призму гармонии, 
                  где каждый звук, каждый момент имеет свое место в великой симфонии жизни."
                </p>
                <div className="mt-4 text-sm text-gray-500">— Борис Джагаев</div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Футер страницы */}
        <div className="mt-16 sm:mt-24 text-center">
          <div className="inline-block relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-full blur"></div>
            <div className="relative">
              <div className="text-sm text-gray-400 font-mono tracking-widest uppercase mb-2">
                ИСКУССТВО ЖИТЬ ТВОРЧЕСТВОМ
              </div>
              <div className="text-xs text-gray-500 font-mono">
                Каждый день — новая нота в мелодии жизни
              </div>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <div className="text-xs text-gray-600">
                  Обновлено: {new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-700"></div>
                <div className="text-xs text-gray-600">
                  Следующее выступление: 15 декабря
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
