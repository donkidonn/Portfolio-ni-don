export default function Interests({ 
  title = "Interests",
  titleSize = "text-4xl md:text-5xl lg:text-6xl",
  containerSpacing = "space-y-6",
  interests = [
    {
      title: "Full Stack Development",
      description: "I enjoy building web systems that improve efficiency, from inventory tracking to queue management.",
      size: "max-w-3xl",
      alignment: "justify-end",
      padding: "px-12 py-10",
      titleSize: "text-xl md:text-2xl",
      descriptionSize: "text-base md:text-lg",
      containerAlignment: "justify-end",
      textAlign: "text-right"
    },
    {
      title: "Game Development", 
      description: "I enjoy experimenting with gameplay mechanics and developing games.",
      size: "max-w-4xl",
      alignment: "justify-center",
      padding: "px-14 py-12",
      titleSize: "text-xl md:text-2xl",
      descriptionSize: "text-base md:text-lg",
      containerAlignment: "justify-center",
      textAlign: "text-center"
    },
    {
      title: "Creative Hobbies",
      description: "Outside of coding, I enjoy sketching or socializing through online games and watching movies/anime.",
      size: "max-w-2xl", 
      alignment: "justify-start",
      padding: "px-12 py-10",
      titleSize: "text-xl md:text-2xl",
      descriptionSize: "text-base md:text-lg",
      containerAlignment: "justify-start",
      textAlign: "text-left"
    }
  ]
}) {
  return (
    <div className="pt-8 md:pt-16 px-4 md:px-8 pr-8 md:pr-16 lg:pr-24 flex flex-col items-end">
      <h2 className={`${titleSize} font-neauebold text-white mb-8 text-right`}>{title}</h2>
      
      <div className={`${containerSpacing} w-full flex flex-col`}>
        {interests.map((interest, index) => (
          <div key={index} className={`flex w-full ${interest.containerAlignment}`}>
            <div className={`border-2 border-white rounded-full ${interest.padding} ${interest.size} bg-transparent transition-all duration-300 hover:border-orange-400 hover:shadow-xl hover:scale-105 transform ${interest.textAlign}`}>
              <h4 className={`${interest.titleSize} font-neaubold text-white mb-3`}>
                {interest.title}
              </h4>
              <p className={`${interest.descriptionSize} font-neauereg text-white opacity-90 leading-relaxed`}>
                {interest.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Flowing Line 3 - Completing the journey */}
      <div className="relative w-full mt-8 md:mt-12 mb-6 md:mb-8">
        <div className="h-0.5 bg-gradient-to-r from-white via-orange-300 to-transparent w-full"></div>
        <div className="absolute right-0 top-0 w-6 h-6 border-2 border-white rounded-full transform translate-y-[-12px] bg-orange-500"></div>
        <div className="absolute right-8 top-0 w-3 h-3 bg-white rounded-full transform translate-y-[-6px]"></div>
        <div className="absolute right-16 top-0 w-1 h-1 bg-orange-300 rounded-full transform translate-y-[-2px]"></div>
      </div>
    </div>
  );
}