import Image from "next/image";
import SocialNetworks from "./components/Networks";
import Spotify from "./components/Spotify";
import Youtube from "./components/Youtube";
import UpcomingShows from "./components/UpcomingShows";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Imagen destacada */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/rafa.jpeg" // Reemplaza con la ruta a tu imagen destacada
          alt="Imagen destacada de la banda"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* <div className="flex-1 flex items-start justify-left text-white p-8">
        <h1 className="text-4xl font-bold"></h1>
      </div> */}

      {/* Footer con redes sociales */}
      <footer className="mt-auto bg-transparent py-4 flex items-start px-40 ">
        <SocialNetworks />
      </footer>
    </div>
    // <div>
    //   <SocialNetworks />
    //   <div className="w-6/12">
    //     <Spotify />
    //   </div>
    //   <div className="w-6/12">
    //     <Youtube />
    //   </div>
    //   <div className="w-6/12">
    //     <UpcomingShows />
    //   </div>
    // </div>
  );
}
