import Card from "@/app/components/bento/CardTemplate";
import clsx from "clsx";
import { Sparkles } from "lucide-react";
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Gumroad() {
  const links = [
    {
      href: "https://wa.me/+523330632525",
      icon: <FaWhatsapp />,
      styles: "bg-[#25D366] "
    },
    {
      href: "mailto:cristian.figueroa.crfe@gmail.com",
      icon: <IoMail />,
      styles: "bg-white text-black"
    },
    {
      href: "https://twitter.com/RubenFigue513",
      icon: <FaTwitter />,
      styles: "bg-[#1DA1F2] "
    },
    {
      href: "https://www.linkedin.com/in/cristianruben/",
      icon: <FaLinkedin />,
      styles: "bg-[#0A66C2]"
    }
  ]

  return (
    <Card className="flex aspect-square flex-col gap-1.5">
      <div className="hidden md:flex gap-2 aspect-square size-8 items-center justify-center rounded-lg bg-[#f86cd9] py-1.5">
        <Sparkles size={18} className="text-primary" />
      </div>

      <p className="text-secondary hidden md:block">Contacto</p>

      <div className="animated-list grid w-full grid-cols-2 grid-rows-2 gap-3 h-full">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href} target="_blank" rel="noopener noreferrer" 
            className={clsx(
              "relative col-span-1 row-span-1 overflow-hidden rounded-lg border border-secondary flex justify-center items-center hover:rotate-6 transform hover:scale-105 transition-transform duration-300 ease-in-out",
              link.styles
            )}
          >
            <div className="text-lg md:text-2xl">
              {link.icon}
            </div>
          </a>
        ))}
      </div>
    </Card>
  );
}
