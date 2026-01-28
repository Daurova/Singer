'use client'
import { useState } from "react";
import { CalendarDays, Clock, MapPin, Music, Star, Users } from "lucide-react";

const events = [
  {
    id: 1,
    date: "15 ДЕКАБРЯ 2024",
    day: "ВОСКРЕСЕНЬЕ",
    time: "19:30",
    venue: "GRAND BALLROOM",
    location: "МОСКВА, УЛ. ТВЕРСКАЯ, 15",
    description: "Новогодний корпоратив крупнейшей IT-компании с участием Бориса Джагаева. Программа включает джазовые и фолк-композиции в авторском исполнении.",
    genre: "JAZZ & FOLK MIX",
    capacity: "300+ ГОСТЕЙ",
    price: "ПРЕМИУМ",
    color: "from-purple-600 to-pink-500",
    status: "UPCOMING"
  },
  {
    id: 2,
    date: "22 ДЕКАБРЯ 2024",
    day: "ВОСКРЕСЕНЬЕ",
    time: "20:00",
    venue: "CRYSTAL HALL",
    location: "САНКТ-ПЕТЕРБУРГ, НЕВСКИЙ ПР., 45",
    description: "Корпоративное мероприятие финансового холдинга. Акустическое выступление с элементами импровизации.",
    genre: "ACOUSTIC FOLK",
    capacity: "200 ГОСТЕЙ",
    price: "ЭКСКЛЮЗИВ",
    color: "from-blue-500 to-cyan-400",
    status: "UPCOMING"
  },
  {
    id: 3,
    date: "28 ДЕКАБРЯ 2024",
    day: "СУББОТА",
    time: "21:00",
    venue: "SKY LOUNGE",
    location: "МОСКВА, МОСКВА-СИТИ",
    description: "Премиальный новогодний банкет. Выступление в сопровождении джазового трио. Особые условия для VIP-гостей.",
    genre: "JAZZ ENSEMBLE",
    capacity: "150 ГОСТЕЙ",
    price: "VIP",
    color: "from-yellow-500 to-orange-500",
    status: "UPCOMING"
  },
  {
    id: 4,
    date: "7 ЯНВАРЯ 2025",
    day: "ВТОРНИК",
    time: "18:00",
    venue: "IMPERIAL PALACE",
    location: "СОЧИ, КУРОРТНЫЙ ПР.",
    description: "Рождественский корпоратив международной компании. Специальная программа с русскими фолк-композициями.",
    genre: "FOLK TRADITIONAL",
    capacity: "250 ГОСТЕЙ",
    price: "ПРЕМИУМ",
    color: "from-indigo-500 to-purple-500",
    status: "UPCOMING"
  },
  {
    id: 5,
    date: "14 ЯНВАРЯ 2025",
    day: "ВТОРНИК",
    time: "19:00",
    venue: "METROPOLITAN",
    location: "КАЗАНЬ, КРЕМЛЕВСКАЯ УЛ., 1",
    description: "Корпоратив производственного предприятия. Программа с национальными мотивами и современными аранжировками.",
    genre: "FOLK FUSION",
    capacity: "400 ГОСТЕЙ",
    price: "СТАНДАРТ+",
    color: "from-pink-500 to-rose-500",
    status: "UPCOMING"
  },
  {
    id: 6,
    date: "25 ЯНВАРЯ 2025",
    day: "СУББОТА",
    time: "20:30",
    venue: "GOLDEN HALL",
    location: "ЕКАТЕРИНБУРГ, ПР. ЛЕНИНА, 50",
    description: "Юбилейный корпоратив горнодобывающей компании. Гала-ужин с музыкальным сопровождением.",
    genre: "JAZZ STANDARDS",
    capacity: "350 ГОСТЕЙ",
    price: "ЭКСКЛЮЗИВ",
    color: "from-cyan-400 to-blue-400",
    status: "UPCOMING"
  }
];

const pastEvents = [
  {
    id: 7,
    date: "25 НОЯБРЯ 2024",
    day: "ПОНЕДЕЛЬНИК",
    time: "20:00",
    venue: "RENAISSANCE HALL",
    location: "МОСКВА, ЦВЕТНОЙ Б-Р",
    description: "Корпоратив рекламного агентства. Интерактивное выступление с участием гостей.",
    genre: "INTERACTIVE JAZZ",
    capacity: "180 ГОСТЕЙ",
    price: "ПРЕМИУМ",
    color: "from-gray-600 to-gray-400",
    status: "PAST"
  },
  {
    id: 8,
    date: "15 НОЯБРЯ 2024",
    day: "ПЯТНИЦА",
    time: "21:00",
    venue: "SAPPHIRE LOUNGE",
    location: "МОСКВА, ПАТРИАРШИЕ ПРУДЫ",
    description: "Закрытое мероприятие для топ-менеджеров. Камерное акустическое выступление.",
    genre: "ACOUSTIC SESSION",
    capacity: "80 ГОСТЕЙ",
    price: "VIP",
    color: "from-gray-600 to-gray-400",
    status: "PAST"
  }
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  return (
    <div className="min-h-screen overflow-y-scroll bg-gradient-to-br from-indigo-950 via-purple-950 to-gray-900 overflow-hidden">
      {/* Фоновые эффекты */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/stars.png')] opacity-30"></div>
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-purple-500/10 to-transparent"></div>
        
        {/* Плавающие элементы */}
        <div className="absolute top-20 right-20 opacity-5 animate-float-slow">
          <div className="text-4xl">✨</div>
        </div>
        <div className="absolute bottom-40 left-20 opacity-5 animate-float-slow" style={{ animationDelay: "2s" }}>
          <div className="text-4xl">🎵</div>
        </div>
        <div className="absolute top-1/3 left-10 opacity-5 animate-float-slow" style={{ animationDelay: "1s" }}>
          <div className="text-4xl">🎺</div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="relative container mx-auto px-4 py-8 sm:py-12">


        

        {/* Сетка событий */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {(activeTab === 'upcoming' ? events : pastEvents).map((event) => (
            <div key={event.id} className="relative group">
              {/* Эффект свечения */}
              <div className={`absolute -inset-2 sm:-inset-4 bg-gradient-to-r ${event.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-700`}></div>
              
              {/* Основная карточка */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 backdrop-blur-sm">
                {/* Верхняя цветная полоса */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500"></div>
                
                {/* Статус */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="relative">
                    <div className={`absolute -inset-2 bg-gradient-to-r ${event.color} rounded-full blur opacity-40`}></div>
                    <div className={`relative ${
                      event.status === 'UPCOMING' 
                        ? 'bg-gradient-to-r from-green-600/90 to-emerald-500/90' 
                        : 'bg-gradient-to-r from-gray-700/90 to-gray-600/90'
                    } text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase border border-white/10 backdrop-blur-sm`}>
                      {event.status === 'UPCOMING' ? 'СКОРО' : 'ЗАВЕРШЕНО'}
                    </div>
                  </div>
                </div>

                {/* Содержимое */}
                <div className="p-6 sm:p-8">
                  {/* Дата и время */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-white/10">
                        <CalendarDays className="w-5 h-5 text-yellow-300" />
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-black text-white">{event.date}</div>
                        <div className="text-sm text-gray-400 font-mono">{event.day}</div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Clock className="w-4 h-4 text-yellow-400" />
                        <span className="text-lg font-bold text-white">{event.time}</span>
                      </div>
                      <div className="text-sm text-gray-400 font-mono">ПО МОСКВЕ</div>
                    </div>
                  </div>

                  {/* Место проведения */}
                  <div className="mb-6">
                    <div className="flex items-start space-x-3 mb-3">
                      <MapPin className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-lg sm:text-xl font-bold text-white mb-1">{event.venue}</div>
                        <div className="text-sm text-gray-300 font-mono">{event.location}</div>
                      </div>
                    </div>
                  </div>

                  {/* Описание */}
                  <div className="mb-6">
                    <p className="text-gray-300 leading-relaxed">{event.description}</p>
                  </div>

                  {/* Детали */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-white/10">
                        <Music className="w-4 h-4 text-cyan-300" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">СТИЛЬ</div>
                        <div className="text-sm font-semibold text-white">{event.genre}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-white/10">
                        <Users className="w-4 h-4 text-pink-300" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">ГОСТЕЙ</div>
                        <div className="text-sm font-semibold text-white">{event.capacity}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-900/30 to-orange-900/20 border border-white/10">
                        <Star className="w-4 h-4 text-yellow-300" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">ФОРМАТ</div>
                        <div className="text-sm font-semibold text-white">{event.price}</div>
                      </div>
                    </div>
                  </div>

                  {/* Кнопка */}
                  {event.status === 'UPCOMING' && (
                    <div className="mt-8">
                      <div className="relative group/btn">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/30 to-pink-500/30 rounded-lg blur opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>

                      </div>
                      <p className="text-xs text-gray-400 text-center mt-2">
                        Ограниченное количество выступлений в месяц
                      </p>
                    </div>
                  )}

                  {/* Угловые украшения */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-yellow-500/50"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-pink-500/50"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-blue-500/50"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-500/50"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Информационный блок */}
        <div className="mt-12 sm:mt-20 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10 rounded-2xl blur-lg"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/10 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
                О КОРПОРАТИВНЫХ ВЫСТУПЛЕНИЯХ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-white/10 flex-shrink-0">
                      <Star className="w-5 h-5 text-yellow-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">ЭКСКЛЮЗИВНОСТЬ</h3>
                      <p className="text-gray-300 text-sm">
                        Каждое выступление адаптируется под специфику компании и формат мероприятия
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-white/10 flex-shrink-0">
                      <Music className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">ГИБКИЙ РЕПЕРТУАР</h3>
                      <p className="text-gray-300 text-sm">
                        Возможность выбора из более чем 50 композиций различных стилей и направлений
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-900/30 to-orange-900/20 border border-white/10 flex-shrink-0">
                      <Users className="w-5 h-5 text-orange-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">ИНТЕРАКТИВ</h3>
                      <p className="text-gray-300 text-sm">
                        Вовлечение гостей в музыкальный процесс, создание уникальной атмосферы мероприятия
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-white/10 flex-shrink-0">
                      <Clock className="w-5 h-5 text-emerald-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">ГИБКИЙ ГРАФИК</h3>
                      <p className="text-gray-300 text-sm">
                        Возможность проведения выступлений в любое время суток по предварительной договорённости
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="relative group/cta">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/15 to-blue-600/20 rounded-2xl blur-lg opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative text-center">
                    <h3 className="text-lg font-bold text-white mb-2">ЗАИНТЕРЕСОВАНЫ В СОТРУДНИЧЕСТВЕ?</h3>
                    <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
                      Свяжитесь с нашим менеджером для обсуждения деталей вашего мероприятия
                    </p>
                    <button className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 px-8 rounded-lg tracking-wider uppercase border border-white/20 hover:from-purple-500 hover:to-pink-400 transition-all duration-300 shadow-lg">
                      ОСТАВИТЬ ЗАЯВКУ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-block relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/5 via-transparent to-purple-500/5 rounded-full blur"></div>
            <div className="relative">
              <div className="text-sm text-gray-400 font-mono tracking-widest uppercase">
                THE RIPPLE EFFECT OF MUSIC
              </div>
              <div className="text-xs text-gray-500 mt-2 font-mono">
                Каждое выступление — уникальная история
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}