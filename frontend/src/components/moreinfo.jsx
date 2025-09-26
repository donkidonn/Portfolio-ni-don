export default function MyInfo() {
  return (
  <div className="pt-8 md:pt-16 px-4 md:px-8 pr-8 md:pr-16 lg:pr-24 relative">
    <h2 className="text-3xl md:text-7xl lg:text-9xl font-sifonn text-right mb-4 md:mb-2">
      Know More<br />
      about me
    </h2>
    
    {/* Circle 1 */}
    <div className="absolute w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-yellow-600 via-yellow-800 to-transparent opacity-80 blur-sm top-10 left-10"></div>
    
    {/* Circle 2 */}
    <div className="absolute w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-orange-600 via-red-800 to-transparent opacity-70 blur-sm bottom-20 right-20"></div>
    
    {/* Circle 3 */}
    <div className="absolute w-28 h-28 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-amber-600 via-amber-900 to-transparent opacity-75 blur-sm top-1/2 left-1/4"></div>
  </div>
  );
}
