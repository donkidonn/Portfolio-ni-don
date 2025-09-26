export default function MyInfo() {
  const skills = [
    { name: "React.js", proficiency: 40 }, // ~40% based on your image
    { name: "Express.JS", proficiency: 60 }, // ~60%
    { name: "Lua", proficiency: 30 }, // ~30%
    { name: "C++", proficiency: 35 }, // ~35%
    { name: "MySQL", proficiency: 60 }, // ~60%
    { name: "TailwindCSS", proficiency: 10 } // ~10%
  ];

  return (
  <div className="pt-8 md:pt-16 px-4 md:px-8 pr-8 md:pr-16 lg:pr-24 relative">
    <h2 className="text-3xl md:text-7xl lg:text-9xl font-sifonn text-right mb-8 md:mb-12">
      Know More<br />
      about me
    </h2>
    
    {/* Skills Section */}
    <div className="max-w-6xl">
      <h3 className="text-3xl md:text-5xl font-neauebold text-white mb-6">Skills</h3>
      
      <div className="space-y-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-6">
            {/* Logo Placeholder */}
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">
                {skill.name.charAt(0)}
              </span>
            </div>
            
            {/* Skill Name */}
            <div className="w-40 flex-shrink-0">
              <span className="text-white font-neauereg text-lg md:text-xl">
                {skill.name}
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="flex-1 h-7 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Flowing Line 2 - Continuing the journey */}
      <div className="relative w-full mt-8 md:mt-12 mb-6 md:mb-8">
        <div className="h-0.5 bg-gradient-to-l from-transparent via-orange-400 to-white w-full"></div>
        <div className="absolute left-0 top-0 w-2 h-2 bg-white rounded-full transform translate-y-[-4px]"></div>
        <div className="absolute left-8 top-0 w-4 h-4 border-2 border-orange-400 rounded-full transform translate-y-[-8px] bg-transparent"></div>
      </div>
    </div>
  </div>
  );
}
