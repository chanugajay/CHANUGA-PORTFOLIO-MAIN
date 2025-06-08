
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  vertical?: boolean;
}

const SocialLinks = ({
  className,
  iconSize = 20,
  vertical = false,
}: SocialLinksProps) => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/chanuga-jayarathne-594a72222",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/chanugajay",
      icon: Github,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/chanuga_jayarathne_?igsh=d3dsOHZmNXduY3Iw&utm_source=qr",
      icon: Instagram,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/194J5GpW5s/?mibextid=wwXIfr",
      icon: Facebook,
    },
  ];

  return (
    <div
      className={cn(
        "flex items-center space-x-4",
        vertical && "flex-col space-x-0 space-y-4",
        className
      )}
    >
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-primary transition-colors duration-300"
          aria-label={link.name}
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
