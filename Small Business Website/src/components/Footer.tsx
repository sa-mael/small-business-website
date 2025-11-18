import { Github, Instagram, Send, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/cyber-oni",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/cyber_oni",
  },
  {
    name: "Pinterest",
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.92-.19-2.27 0-3.25l1.43-6.06s-.36-.73-.36-1.81c0-1.7.98-2.96 2.21-2.96 1.04 0 1.54.78 1.54 1.72 0 1.05-.67 2.62-1.01 4.07-.29 1.21.61 2.2 1.81 2.2 2.17 0 3.84-2.29 3.84-5.59 0-2.92-2.1-4.96-5.1-4.96-3.47 0-5.51 2.6-5.51 5.29 0 1.05.4 2.17.9 2.78.1.12.11.23.08.35l-.33 1.36c-.05.22-.18.27-.42.16-1.52-.71-2.47-2.93-2.47-4.71 0-3.85 2.8-7.39 8.07-7.39 4.24 0 7.54 3.02 7.54 7.05 0 4.21-2.65 7.6-6.33 7.6-1.24 0-2.4-.64-2.79-1.4l-.76 2.9c-.27 1.06-1.02 2.39-1.52 3.2A12 12 0 1 0 12 0z"/>
      </svg>
    ),
    url: "https://pinterest.com/cyber_oni",
  },
  {
    name: "Telegram",
    icon: Send,
    url: "https://t.me/cyber_oni",
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    url: "https://x.com/cyber_oni",
  },
  {
    name: "ArtStation",
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z"/>
      </svg>
    ),
    url: "https://artstation.com/cyber_oni",
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[rgba(var(--primary-rgb),0.2)] bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">CYBER-ONI</h3>
            <p className="text-gray-400 text-base">
              Futuristic 3D-printable designer lighting for the modern maker.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-[var(--primary-color)] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#assembly" className="hover:text-[var(--primary-color)] transition-colors">
                  Assembly Guide
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-[var(--primary-color)] transition-colors">
                  Downloads
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-[var(--primary-color)] transition-colors">
                  Support & FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@cyber-oni.com</li>
              <li>support@cyber-oni.com</li>
              <li>privacy@cyber-oni.com</li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-[rgba(var(--primary-rgb),0.2)] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[rgba(var(--primary-rgb),0.2)] hover:bg-[rgba(var(--primary-rgb),0.3)] flex items-center justify-center text-[var(--primary-color)] transition-colors"
                  title={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 CYBER-ONI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
