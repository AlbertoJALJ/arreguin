// src/app/components/Navbar.jsx
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className=" py-1 px-2 h-[130px] flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center h-full">
        <Image
          className="h-full w-auto"
          src="/images/logo.png" // Reemplaza con la ruta a tu logo
          alt="Fox & Bones Logo"
          width={100} // Ajusta según tus necesidades
          height={50} // Ajusta según tus necesidades
        />
      </div>

      {/* Links de Navegación */}
      <div className="flex space-x-6">
        {["HOME", "MUSIC", "SHOWS", "STORE", "VIDEO", "BIO", "CONTACT"].map(
          (item) => (
            <Link
              href={`/${item.toLowerCase()}`}
              key={item}
              className="text-white font-black hover:text-gray-200 text-3xl"
            >
              {item}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
