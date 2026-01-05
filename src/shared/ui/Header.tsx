import Link from "next/link";

export function Header() {
  return (
    <header>
      <nav className="flex items-center px-8 py-4">
        <div className="flex gap-8 text-black">
          <Link href="/" className="hover:text-gray-600">
            Домой
          </Link>
          <Link href="/events" className="hover:text-gray-600">
            Афиша
          </Link>
          <Link href="/press" className="hover:text-gray-600">
            Пресса
          </Link>
          <Link href="/life" className="hover:text-gray-600">
            Жизнь
          </Link>
        </div>
      </nav>
    </header>
  );
}
