import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface ConnectLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const ConnectLinks: ConnectLink[] = [
  {
    label: "Email",
    href: "mailto:cristian.figueroa.crfe@gmail.com",
    icon: <FaMailBulk/>
  },
  {
    label: "Twitter",
    href: "https://twitter.com/RubenFigue513",
    icon: <FaXTwitter />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cristianruben/",
    icon: <FaLinkedin />,
  },
  {
    label: "GitHub",
    href: "https://github.com/cristian51310",
    icon: <FaGithub />,
  },
];

export default ConnectLinks;
