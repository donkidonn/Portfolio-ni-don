// Import contact logos
import githubLogo from '../assets/images/github.png';
import fbLogo from '../assets/images/fb.png';
import gmailLogo from '../assets/images/gmail.png';
import contactsLogo from '../assets/images/contacts.png';

export default function Footer() {
  const contactInfo = [
    {
      type: "GitHub",
      url: "https://github.com/donkidonn",
      display: "@donkidonn",
      logo: githubLogo
    },
    {
      type: "Facebook", 
      url: "https://www.facebook.com/donaldleeeee/",
      display: "Donald Lee",
      logo: fbLogo
    },
    {
      type: "Gmail",
      url: "mailto:donleenovo@gmail.com",
      display: "donleenovo@gmail.com", 
      logo: gmailLogo
    },
    {
      type: "Phone",
      url: "tel:+639936927371",
      display: "+63 993 692 7371",
      logo: contactsLogo
    }
  ];

  return (
    <footer className="pt-16 md:pt-24 px-4 md:px-8 pb-8 md:pb-12">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-sifonn text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl font-neauereg text-white opacity-80">
            Ready to collaborate? Reach out through any of these channels!
          </p>
        </div>

        {/* Contact Cards - REDESIGNED! */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <a 
              key={index}
              href={contact.url}
              target={contact.type !== "Phone" ? "_blank" : "_self"}
              rel={contact.type !== "Phone" ? "noopener noreferrer" : ""}
              className="group relative overflow-hidden"
            >
              {/* Floating Logo Circle */}
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-orange-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 p-4">
                  <img 
                    src={contact.logo} 
                    alt={`${contact.type} logo`}
                    className={`w-full h-full object-contain transition-all duration-300 ${
                      contact.type === "GitHub"
                        ? "filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                        : "group-hover:scale-110"
                    }`}
                  />
                  
                  {/* Glowing Ring Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-20 animate-pulse"></div>
                </div>
                
                {/* Floating Particles */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-orange-300 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-all duration-300 delay-100"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-all duration-300 delay-200"></div>
              </div>
              
              {/* Info Card that slides up */}
              <div className="absolute top-24 left-1/2 transform -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <div className="bg-black bg-opacity-80 backdrop-blur-md border border-orange-400/30 rounded-lg px-4 py-3 text-center min-w-max shadow-xl">
                  <h3 className="text-orange-400 font-neaubold text-sm mb-1">
                    {contact.type}
                  </h3>
                  <p className="text-white font-neauereg text-xs opacity-90 whitespace-nowrap">
                    {contact.display}
                  </p>
                  
                  {/* Arrow pointer */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-orange-400/30"></div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white border-opacity-20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm font-neauereg text-white opacity-60">
              © 2025 Donald Lee O. Novo. All rights reserved.
            </p>
            
            {/* Made with love */}
            <p className="text-sm font-neauereg text-white opacity-60 flex items-center gap-2">
              Made with <span className="text-orange-400 animate-pulse">♥</span> in the Philippines
            </p>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="relative w-full mt-8">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent w-full"></div>
          <div className="absolute left-1/2 top-0 w-2 h-2 bg-orange-400 rounded-full transform translate-x-[-50%] translate-y-[-4px]"></div>
        </div>
      </div>
    </footer>
  );
}
