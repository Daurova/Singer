'use client'
import { useState } from "react";
import { Download, Mail, Phone, FileText, Image as ImageIcon, Video, Award, Globe, Calendar, User, Building, ChevronDown, ExternalLink } from "lucide-react";

const pressKit = {
  bio: {
    short: "Борис Джагаев — певец и музыкант, специализирующийся на авторской интерпретации джазовых и фолк-композиций. Его стиль — уникальное сочетание классической школы, современной аранжировки и эмоциональной подачи.",
    full: `Борис Джагаев начал свой музыкальный путь в раннем детстве, обучаясь игре на фортепиано и вокалу. Окончил Московскую государственную консерваторию по классу вокала.

В 2015 году начал выступать с сольной программой, сочетающей джазовые стандарты и народные песни в авторской аранжировке. Его уникальный стиль быстро нашел отклик у публики и критиков.

С 2018 года активно сотрудничает с корпоративными клиентами, выступая на мероприятиях крупнейших российских и международных компаний. За это время провел более 200 выступлений в 15 городах России.

Особенность его выступлений — создание особой атмосферы, где каждая песня становится частью единого повествования. Борис мастерски адаптирует программу под специфику мероприятия, будь то камерный ужин или масштабный корпоратив.`
  },
  photos: [
    { id: 1, url: "/press/portrait.jpg", description: "Официальный портрет", size: "8.2 MB", resolution: "4000x6000" },
    { id: 2, url: "/press/performance1.jpg", description: "Выступление на корпоративе", size: "6.5 MB", resolution: "5000x3333" },
    { id: 3, url: "/press/performance2.jpg", description: "Концерт в зале", size: "7.1 MB", resolution: "4500x3000" },
    { id: 4, url: "/press/backstage.jpg", description: "За кулисами", size: "5.8 MB", resolution: "3500x5250" },
    { id: 5, url: "/press/studio.jpg", description: "В студии звукозаписи", size: "9.3 MB", resolution: "6000x4000" },
    { id: 6, url: "/press/group.jpg", description: "С музыкальным коллективом", size: "8.7 MB", resolution: "5500x3667" },
  ],
  videos: [
    { id: 1, title: "Hello Darling (Live)", duration: "3:45", description: "Джазовый стандарт в исполнении Бориса Джагаева" },
    { id: 2, title: "Folk Medley", duration: "5:20", description: "Попурри из народных песен в современной аранжировке" },
    { id: 3, title: "Interview for Jazz Magazine", duration: "8:15", description: "Интервью о современном джазе и фолк-музыке" },
    { id: 4, title: "Behind the Scenes", duration: "4:30", description: "Подготовка к корпоративному выступлению" },
  ],
  achievements: [
    { year: "2023", title: "Лучшее корпоративное выступление", organization: "Event Awards Russia" },
    { year: "2022", title: "Открытие года в джазовом вокале", organization: "Jazz People Awards" },
    { year: "2021", title: "Премия за музыкальные инновации", organization: "Music Business Awards" },
    { year: "2020", title: "Специальный приз жюри", organization: "Фестиваль 'Джаз в городе'" },
  ],
  stats: {
    performances: 200,
    cities: 15,
    years: 8,
    clients: 50
  }
};

const pressContacts = [
  { name: "Анна Смирнова", role: "PR-менеджер", email: "press@borisjagaev.com", phone: "+7 (999) 123-45-67", note: "Основные запросы, интервью" },
  { name: "Максим Волков", role: "Букинг-агент", email: "booking@borisjagaev.com", phone: "+7 (999) 765-43-21", note: "Коммерческие вопросы, выступления" },
  { name: "Дмитрий Иванов", role: "Технический директор", email: "tech@borisjagaev.com", phone: "+7 (999) 111-22-33", note: "Технические требования, оборудование" },
];

export default function PressPage() {
  const [expandedBio, setExpandedBio] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [downloads, setDownloads] = useState({
    pressKit: false,
    photos: false,
    mediaKit: false
  });

  const handleDownload = (type: keyof typeof downloads) => {
    setDownloads(prev => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setDownloads(prev => ({ ...prev, [type]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen overflow-y-scroll bg-gradient-to-br from-indigo-950 via-purple-950 to-gray-900 overflow-hidden">
      {/* Фоновые эффекты */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/stars.png')] opacity-30"></div>
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-yellow-500/5 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-purple-500/5 to-transparent"></div>
        
        {/* Плавающие элементы */}
        <div className="absolute top-32 left-20 opacity-5 animate-float-slow">
          <div className="text-3xl">📰</div>
        </div>
        <div className="absolute bottom-40 right-20 opacity-5 animate-float-slow" style={{ animationDelay: "1.5s" }}>
          <div className="text-3xl">🎤</div>
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-5 animate-float-slow" style={{ animationDelay: "2.5s" }}>
          <div className="text-3xl">📸</div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="relative container mx-auto px-4 py-8 sm:py-12">
        {/* Заголовок */}
        <div className="text-center mb-8 sm:mb-16 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          
          <h1 className="text-3xl sm:text-5xl font-black tracking-[0.2em] sm:tracking-[0.3em] mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              ПРЕСС-КИТ
            </span>
          </h1>
          
          <div className="relative inline-block">
            <p className="text-sm sm:text-lg text-cyan-100/80 tracking-[0.15em] uppercase font-mono font-bold mb-2">
              Официальная информация для СМИ
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-blue-500/50 to-cyan-500/50"></div>
          </div>
        </div>

        {/* Основная информация в карточках */}
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          {/* Карточка с биографией */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-700"></div>
            
            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl border border-white/10 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-white/10">
                    <User className="w-6 h-6 text-blue-300" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">БИОГРАФИЯ</h2>
                </div>
                
                <button
                  onClick={() => setExpandedBio(!expandedBio)}
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <span>{expandedBio ? "Скрыть" : "Читать полностью"}</span>
                  <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${expandedBio ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">{pressKit.bio.short}</p>
                
                {expandedBio && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    {pressKit.bio.full.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-300 leading-relaxed mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Статистика */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{pressKit.stats.performances}+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Выступлений</div>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{pressKit.stats.cities}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Городов</div>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-cyan-900/20 to-green-900/20 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{pressKit.stats.years}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Лет на сцене</div>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{pressKit.stats.clients}+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Клиентов</div>
                </div>
              </div>
            </div>
          </div>

          {/* Награды и достижения */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-700"></div>
            
            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl border border-white/10 p-6 sm:p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-900/30 to-orange-900/20 border border-white/10">
                  <Award className="w-6 h-6 text-yellow-300" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">НАГРАДЫ И ДОСТИЖЕНИЯ</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pressKit.achievements.map((achievement, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-yellow-500/30 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-900/30 to-orange-900/20 border border-yellow-500/20 flex-shrink-0">
                        <Award className="w-5 h-5 text-yellow-300" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-white mb-1">{achievement.title}</div>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="text-yellow-400 font-mono">{achievement.year}</span>
                          <span className="text-gray-400">{achievement.organization}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Фотографии для прессы */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-700"></div>
            
            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl border border-white/10 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-white/10">
                    <ImageIcon className="w-6 h-6 text-pink-300" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">ФОТОГРАФИИ ДЛЯ ПРЕССЫ</h2>
                </div>
                
                <button
                  onClick={() => handleDownload('photos')}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/90 to-pink-600/90 text-white text-sm font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                >
                  {downloads.photos ? (
                    <>
                      <Download className="w-4 h-4 animate-bounce" />
                      <span>Скачивается...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Все фото (ZIP)</span>
                    </>
                  )}
                </button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {pressKit.photos.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setSelectedPhoto(photo.id)}
                    className="relative aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-purple-500/50 transition-all duration-300 cursor-pointer group/photo"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300">
                      <div className="text-white text-sm font-semibold bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg">
                        Просмотр
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="text-xs text-white truncate">{photo.description}</div>
                      <div className="text-[10px] text-gray-400">{photo.resolution}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-sm text-gray-400 mt-4 text-center">
                Все фотографии предоставляются в высоком разрешении для публикации в СМИ
              </p>
            </div>
          </div>

          {/* Видеоматериалы */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-green-500/10 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-700"></div>
            
            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl border border-white/10 p-6 sm:p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-white/10">
                  <Video className="w-6 h-6 text-cyan-300" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">ВИДЕОМАТЕРИАЛЫ</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pressKit.videos.map((video) => (
                  <div key={video.id} className="p-4 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-cyan-500/20 flex-shrink-0">
                        <Video className="w-5 h-5 text-cyan-300" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-lg font-semibold text-white">{video.title}</div>
                          <span className="text-sm text-gray-400 font-mono">{video.duration}</span>
                        </div>
                        <p className="text-sm text-gray-300 mb-3">{video.description}</p>
                        <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center space-x-1">
                          <ExternalLink className="w-3 h-3" />
                          <span>Смотреть на YouTube</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Контакты для прессы */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-700"></div>
            
            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl border border-white/10 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-white/10">
                    <Building className="w-6 h-6 text-green-300" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">КОНТАКТЫ ДЛЯ ПРЕССЫ</h2>
                </div>
                
                <button
                  onClick={() => handleDownload('pressKit')}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600/90 to-cyan-600/90 text-white text-sm font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
                >
                  {downloads.pressKit ? (
                    <>
                      <FileText className="w-4 h-4 animate-bounce" />
                      <span>Скачивается...</span>
                    </>
                  ) : (
                    <>
                      <FileText className="w-4 h-4" />
                      <span>Полный пресс-кит (PDF)</span>
                    </>
                  )}
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pressContacts.map((contact, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-green-500/30 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-500/20">
                        <User className="w-4 h-4 text-green-300" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{contact.name}</div>
                        <div className="text-sm text-gray-400">{contact.role}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-3 h-3 text-gray-400" />
                        <a 
                          href={`mailto:${contact.email}`}
                          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                        >
                          {contact.email}
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Phone className="w-3 h-3 text-gray-400" />
                        <a 
                          href={`tel:${contact.phone}`}
                          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                        >
                          {contact.phone}
                        </a>
                      </div>
                      
                      <div className="text-xs text-gray-400 mt-2 pt-2 border-t border-white/10">
                        {contact.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">СОЦИАЛЬНЫЕ СЕТИ</h3>
                    <div className="space-y-2">
                      <a href="#" className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors duration-300">
                        <Globe className="w-4 h-4" />
                        <span>Официальный сайт</span>
                      </a>
                      <a href="#" className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors duration-300">
                        <div className="w-4 h-4 rounded bg-gradient-to-r from-purple-600 to-pink-600"></div>
                        <span>Instagram</span>
                      </a>
                      <a href="#" className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors duration-300">
                        <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-600 to-cyan-600"></div>
                        <span>YouTube</span>
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ</h3>
                    <p className="text-sm text-gray-400 mb-2">
                      Все материалы предоставляются для публикации в СМИ с обязательным указанием авторства фотографий и видео.
                    </p>
                    <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300">
                      Скачать медиа-кит с логотипами →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Эксклюзивные материалы */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-violet-500/10 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-700"></div>
            
            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl border border-white/10 p-6 sm:p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-900/30 to-violet-900/20 border border-white/10">
                  <FileText className="w-6 h-6 text-indigo-300" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">ЭКСКЛЮЗИВНЫЕ МАТЕРИАЛЫ</h2>
                  <p className="text-sm text-gray-400">Доступно по запросу для авторизованных СМИ</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
                  <h3 className="text-lg font-semibold text-white mb-2">Интервью</h3>
                  <p className="text-sm text-gray-300 mb-3">Эксклюзивные интервью с Борисом Джагаевым</p>
                  <button className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
                    Запросить интервью →
                  </button>
                </div>
                
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
                  <h3 className="text-lg font-semibold text-white mb-2">Эксклюзивные фотосессии</h3>
                  <p className="text-sm text-gray-300 mb-3">Фотосеты для обложек журналов</p>
                  <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    Запросить фотосессию →
                  </button>
                </div>
                
                <div className="p-4 rounded-lg bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/20">
                  <h3 className="text-lg font-semibold text-white mb-2">Закулисный доступ</h3>
                  <p className="text-sm text-gray-300 mb-3">Съемка за кулисами и в студии</p>
                  <button className="text-sm text-pink-400 hover:text-pink-300 transition-colors duration-300">
                    Запросить доступ →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Информационный футер */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-block relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur"></div>
            <div className="relative">
              <div className="text-sm text-gray-400 font-mono tracking-widest uppercase mb-2">
                ДЛЯ ЗАПРОСОВ ИЗ СМИ
              </div>
              <div className="text-xs text-gray-500 font-mono">
                Ответ в течение 24 часов в рабочее время
              </div>
              <div className="mt-4 text-xs text-gray-600 font-mono">
                © {new Date().getFullYear()} Борис Джагаев. Все права защищены.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}