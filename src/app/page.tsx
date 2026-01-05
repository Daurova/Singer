import Image from "next/image";

const videos = [
  { id: 1, src: "/video1.mp4" },
  { id: 2, src: "/video2.mp4" },
  { id: 3, src: "/video3.mp4" },
  { id: 4, src: "/video4.mp4" },
  { id: 5, src: "/video5.mp4" },
];

export default function Home() {
  return (
    <div className="h-full min-h-0 overflow-hidden flex ">
      <div className="w-3/5 h-full overflow-y-auto hide-scrollbar bg-gray-200">
        <div className="flex flex-col gap-6 p-8">
          {videos.map((video) => (
            <video key={video.id} className="w-full aspect-video" controls>
              <source src={video.src} type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          ))}
        </div>
      </div>

      <div className="w-2/5 h-full flex-shrink-0">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/images/dog.webp"
            alt="Портрет артиста"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
