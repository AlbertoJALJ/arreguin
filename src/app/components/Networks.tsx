// src/app/components/SocialNetworks.jsx
import {
  FaTwitter,
  FaFacebookF,
  FaPatreon,
  FaSpotify,
  FaYoutube,
  FaSoundcloud,
  FaBandcamp,
  FaInstagram,
} from "react-icons/fa";

export default function SocialNetworks() {
  const socialLinks = [
    { icon: <FaTwitter />, href: "https://twitter.com/" },
    { icon: <FaFacebookF />, href: "https://facebook.com/" },
    { icon: <FaPatreon />, href: "https://patreon.com/" },
    { icon: <FaSpotify />, href: "https://spotify.com/" },
    { icon: <FaYoutube />, href: "https://youtube.com/" },
    { icon: <FaSoundcloud />, href: "https://soundcloud.com/" },
    { icon: <FaBandcamp />, href: "https://bandcamp.com/" },
    { icon: <FaInstagram />, href: "https://instagram.com/" },
  ];

  return (
    <div className="flex space-x-4 justify-center bg-transparent py-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-4xl hover:text-gray-300"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
