import togaInventoryImage from '../assets/images/togainventory.jpg';
import mujerWebsiteImage from '../assets/images/mujer-website.jpg';
import runeblastImage from '../assets/images/runeblast.jpg';
import githubIcon from '../assets/images/github.png';

export default function Works() {
  return (
    <div className="px-4 md:px-8 py-8 md:py-16">
      <h2 className="text-3xl md:text-7xl lg:text-9xl font-sifonn text-left mb-8 md:mb-50">Works & Projects</h2>
      
      {/* Toga Inventory System */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 md:mb-24">
        {/* Left Side - Text Content */}
        <div className="flex-1">
          <div className="text-6xl md:text-8xl lg:text-9xl font-neauebold text-white opacity-20 mb-4">01</div>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-neauebold text-white mb-4">
            Toga Inventory System<br />
            for Ateneo de<br />
            Zamboanga University
          </h3>
          
          <div className="space-y-4 text-sm md:text-base lg:text-lg font-neaureg text-white">
            <div className="flex items-start">
              <span className="text-white mr-2 font-neauereg">•</span>
              <span>Built with React.JS (frontend), Express.JS (backend) and MySQL (database)</span>
            </div>
            <div className="flex items-start">
              <span className="text-white mr-2 font-neauereg">•</span>
              <span>Designed to track and manage the toga inventory of Ateneo de Zamboanga University, ensuring accurate monitoring of availability and status.</span>
            </div>
          </div>
          
          {/* GitHub Link */}
          <a 
            href="https://github.com/Qhaleed/toga-inv-system" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center mt-6 px-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-all duration-300 group"
          >
            <img src={githubIcon} alt="GitHub" className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            <span className="text-black font-neauereg text-sm font-medium">View on GitHub</span>
          </a>
        </div>
        
        {/* Right Side - Images */}
        <div className="flex-1">
          <div className="relative h-64 md:h-80 lg:h-105">
            {/* Image */}
            <img 
              src={togaInventoryImage} 
              alt="Toga Inventory System Screenshot" 
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Fading overlay borders*/}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#191411] from-0% to-transparent to-10% pointer-events-none"></div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-l from-[#191411] from-0% to-transparent to-10% pointer-events-none"></div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#191411] from-0% to-transparent to-10% pointer-events-none"></div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#191411] from-0% to-transparent to-10% pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Fancy Animated Divider */}
      <div className="flex items-center w-full mb-16 md:mb-24 relative">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white to-yellow-500 animate-pulse"></div>
        <div className="px-6 relative">
          <div className="w-3 h-3 bg-white rounded-full animate-ping absolute"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white to-yellow-500 animate-pulse"></div>
      </div>

      {/* Website for Mujer - LGBT+ Organizations */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 md:mb-24">
        {/* Left Side - Text Content */}
        <div className="flex-1">
          <div className="text-6xl md:text-8xl lg:text-9xl font-neauebold text-white opacity-20 mb-4">02</div>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-neauebold text-white mb-4">
            Website for Mujer -<br />
            LGBT+ Organizations
          </h3>
          
          <div className="space-y-4 text-sm md:text-base lg:text-lg font-neaureg text-white">
            <div className="flex items-start">
              <span className="text-white mr-2 font-neauereg">•</span>
              <span>Built with HTML, JavaScript, and CSS as a frontend-only site.</span>
            </div>
            <div className="flex items-start">
              <span className="text-white mr-2 font-neauereg">•</span>
              <span>Showcases information about the Mujer LGTBQ+ Organization in Zamboanga City.</span>
            </div>
          </div>
          
          {/* Website Link */}
          <a 
            href="https://mujer-lgbt-zc.vercel.app/pages/events-page/events.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center mt-6 px-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-all duration-300 group"
          >
            <div className="w-5 h-5 mr-2 bg-white rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-black text-xs font-bold">🌐</span>
            </div>
            <span className="text-black font-neauereg text-sm font-medium">Visit Website</span>
          </a>
        </div>
        
        {/* Right Side - Images */}
        <div className="flex-1">
          <div className="relative h-64 md:h-80 lg:h-96">
            {/* Image */}
            <img 
              src={mujerWebsiteImage} 
              alt="Mujer Website Screenshot" 
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Fading overlay borders*/}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#191411] from-0% to-transparent to-10% pointer-events-none"></div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-l from-[#191411] from-0% to-transparent to-10% pointer-events-none"></div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#191411] from-0% to-transparent to-10% pointer-events-none"></div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#191411] from-0% to-transparent to-10% pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Fancy Animated Divider */}
      <div className="flex items-center w-full mb-16 md:mb-24 relative">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white to-orange-500 animate-pulse"></div>
        <div className="px-6 relative">
          <div className="w-3 h-3 bg-white rounded-full animate-ping absolute"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white to-orange-500 animate-pulse"></div>
      </div>

      {/* RuneBlast */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 md:mb-24">
        {/* Left Side - Text Content */}
        <div className="flex-1">
          <div className="text-6xl md:text-8xl lg:text-9xl font-neauebold text-white opacity-20 mb-4">03</div>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-neauebold text-white mb-4">
            RuneBlast
          </h3>
          
          <div className="space-y-4 text-sm md:text-base lg:text-lg font-neaureg text-white">
            <div className="flex items-start">
              <span className="text-white mr-2 font-neauereg">•</span>
              <span>Created with C++ and the Raylib framework.</span>
            </div>
            <div className="flex items-start">
              <span className="text-white mr-2 font-neauereg">•</span>
              <span>A 2D top-down dungeon crawler where players place towers strategically to stop waves of enemies.</span>
            </div>
          </div>
          
          {/* GitHub Link */}
          <a 
            href="https://github.com/donkidonn/Runeblast" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center mt-6 px-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-all duration-300 group"
          >
            <img src={githubIcon} alt="GitHub" className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            <span className="text-black font-neauereg text-sm font-medium">View on GitHub</span>
          </a>
        </div>
        
        {/* Right Side - Images */}
        <div className="flex-1">
          <div className="relative h-64 md:h-80 lg:h-96">
            {/* Image */}
            <img 
              src={runeblastImage} 
              alt="RuneBlast Screenshot" 
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Fading overlay borders*/}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#191411] from-0% to-transparent to-10% pointer-events-none"></div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-l from-[#191411] from-0% to-transparent to-10% pointer-events-none"></div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#191411] from-0% to-transparent to-10% pointer-events-none"></div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#191411] from-0% to-transparent to-10% pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
    

    
  );
}
