import { animate, motion, useInView, useMotionValue } from 'framer-motion';
import { ArrowRight, Award, Megaphone, Play, Target } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

// Counter Component with suffix support - Fixed version
const Counter = ({ value, className = "" }: { value: string; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState("0");
  
  // Helper: parse number and suffix
  const parseValue = (val: string) => {
    const match = val.match(/(\d+)(.*)/);
    return {
      number: parseInt(match?.[1] || "0"),
      suffix: match?.[2] || "",
    };
  };

  const { number, suffix } = parseValue(value);
  const count = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, number, {
        duration: 6,
        ease: "easeOut",
        onUpdate: (latest) => {
          const rounded = Math.round(latest);
          setDisplay(`${rounded}${suffix}`);
        }
      });
      
      return () => controls.stop();
    }
  }, [isInView, number, suffix, count]);

  return (
    <motion.span
      ref={ref}
      className={className}
    >
      {display}
    </motion.span>
  );
};

export function Hero() {
  return (
    <section className="relative pt-10 pb-12 md:pt-16 md:pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50">
      
      {/* Animated Background Elements - Reduced on mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 w-12 h-12 md:top-20 md:left-10 md:w-20 md:h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-20 right-6 w-16 h-16 md:top-40 md:right-20 md:w-32 md:h-32 bg-orange-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 md:bottom-40 md:left-1/4 md:w-16 md:h-16 bg-green-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        
        {/* Top Section */}
        <div className="text-center mb-10 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-xs md:text-sm font-semibold mb-6 md:mb-8 shadow-lg animate-bounce-in animate-fade-in">
            <Award className="w-3 h-3 md:w-4 md:h-4" />
            Bihar's Leading Advertising Agency
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 md:mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            From <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">idea</span> to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">iconic</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 md:mb-12 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            We transform your brand vision into powerful advertising campaigns that 
            <span className="font-semibold text-blue-600"> captivate audiences</span> and 
            <span className="font-semibold text-orange-500"> drive results</span> across Bihar's dynamic market.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 md:mb-16">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 sm:px-8 sm:py-5 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: '0.6s' }}
              >
                <Megaphone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:mr-3 md:h-6 md:w-6" />
                Start Your Campaign
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:ml-3 md:h-6 md:w-6" />
              </Button>
            </Link>
            
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 px-6 py-4 sm:px-8 sm:py-5 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: '0.8s' }}
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:mr-3 md:h-6 md:w-6" />
                Watch Our Story
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Creative Workspace */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Central Workspace Image */}
          <div className="relative bg-gradient-to-br from-orange-100 via-orange-50 to-blue-100 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl overflow-hidden animate-fade-in" style={{ animationDelay: '1s' }}>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" 
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                   }}>
              </div>
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              
              {/* Left: Creative Person */}
              <div className="relative animate-fade-in" style={{ animationDelay: '1.2s' }}>
                <ImageWithFallback
                  src="assets/hero.png"
                  alt="Creative professional at work"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-xl md:rounded-2xl shadow-2xl"
                />
                
                {/* Floating Creative Elements - Hidden on mobile */}
                <div className="hidden sm:block absolute -top-4 -right-4 w-12 h-12 md:-top-6 md:-right-6 md:w-20 md:h-20 bg-white rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center animate-float">
                  <span className="text-xl md:text-3xl">🎨</span>
                </div>
                
                <div className="hidden sm:block absolute -bottom-4 -left-4 w-12 h-12 md:-bottom-6 md:-left-6 md:w-20 md:h-20 bg-white rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-xl md:text-3xl">📈</span>
                </div>
              </div>

              {/* Right: Services Showcase */}
              <div className="space-y-6 md:space-y-8">
                
                {/* Billboard Card */}
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in" style={{ animationDelay: '1.4s' }}>
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
                      <Target className="w-5 h-5 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">OOH Advertising</h3>
                      <p className="text-sm md:text-base text-gray-600">Billboard & outdoor campaigns</p>
                    </div>
                  </div>
                  <ImageWithFallback
                    src="assets/ooh.png"
                    alt="Billboard advertising"
                    className="w-full h-24 md:h-32 object-cover rounded-lg"
                  />
                </div>

                {/* Mall Branding Card */}
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl lg:ml-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in" style={{ animationDelay: '1.6s' }}>
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
                      <Megaphone className="w-5 h-5 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">Mall Branding</h3>
                      <p className="text-sm md:text-base text-gray-600">Retail space activation</p>
                    </div>
                  </div>
                  <ImageWithFallback
                    src="assets/mall.png"
                    alt="Mall branding"
                    className="w-full h-24 md:h-32 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Stats Cards - Hidden on mobile, shown on desktop */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden lg:block animate-fade-in" style={{ animationDelay: '1.8s' }}>
            <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-6 border border-gray-100 animate-float">
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 mb-1 md:mb-2">
                  <Counter value="500+" className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600" />
                </div>
                <div className="text-xs md:text-sm text-gray-600">Successful Campaigns</div>
              </div>
            </div>
          </div>
          
          <div className="absolute -right-4 top-1/4 hidden lg:block animate-fade-in" style={{ animationDelay: '2s' }}>
            <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-6 border border-gray-100 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-600 mb-1 md:mb-2">
                  <Counter value="15+" className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-600" />
                </div>
                <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-1/4 hidden lg:block animate-fade-in" style={{ animationDelay: '2.2s' }}>
            <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-6 border border-gray-100 animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-green-600 mb-1 md:mb-2">
                  <Counter value="98%" className="text-xl md:text-2xl lg:text-3xl font-bold text-green-600" />
                </div>
                <div className="text-xs md:text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Stats for Mobile */}
          <div className="lg:hidden grid grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 text-center">
              <div className="text-xl font-bold text-blue-600 mb-1">
                <Counter value="500+" className="text-xl font-bold text-blue-600" />
              </div>
              <div className="text-xs text-gray-600">Campaigns</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 text-center">
              <div className="text-xl font-bold text-orange-600 mb-1">
                <Counter value="15+" className="text-xl font-bold text-orange-600" />
              </div>
              <div className="text-xs text-gray-600">Years</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 text-center">
              <div className="text-xl font-bold text-green-600 mb-1">
                <Counter value="98%" className="text-xl font-bold text-green-600" />
              </div>
              <div className="text-xs text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 animate-fade-in" style={{ animationDelay: '2.4s' }}>
              Why brands choose Bihar Media Advertisement
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: '🎯',
                title: 'Strategic Planning',
                description: 'Data-driven campaigns tailored for Bihar market'
              },
              {
                icon: '⚡',
                title: 'Fast Execution',
                description: 'Quick turnaround times for all advertising needs'
              },
              {
                icon: '🏆',
                title: 'Proven Results',
                description: 'Award-winning campaigns with measurable ROI'
              }
            ].map((feature, index) => (
              <div key={feature.title} className="text-center group hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: `${2.6 + index * 0.2}s` }}>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-3 md:mb-4 mx-auto group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-base md:text-lg group-hover:text-xl font-semibold text-gray-900 mb-1 md:mb-2 transition-all duration-300">{feature.title}</h4>
                <p className="text-sm md:text-base text-gray-600 group-hover:text-lg transition-all duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Us Section */}
        <div className="mt-16 md:mt-20 lg:mt-24 text-center animate-fade-in" style={{ animationDelay: '3.2s' }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-10">
            We are a full-service advertising agency in Bihar, helping businesses connect with their audience through outdoor, transit, airport, and print media campaigns. With a strong presence in Patna, Gaya, Muzaffarpur, Bhagalpur, Darbhanga, and other major cities, we have successfully executed impactful campaigns for brands across retail, real estate, healthcare, education, politics, and corporate sectors. Our mission is to deliver powerful advertising solutions that maximize reach and deliver real results.
          </p>
          <Link to="/about">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              LEARN MORE
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>

        {/* Our Services Section */}
        <div className="mt-16 md:mt-20 lg:mt-24 text-center animate-fade-in" style={{ animationDelay: '3.6s' }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-10">
            We offer comprehensive advertising solutions in Bihar, including high-visibility hoardings and billboards across major cities, transit and railway ads on trains, buses, and airports, premium airport and in-flight branding, impactful print media placements in leading newspapers and magazines, as well as local market advertising through shop branding, posters, wall paintings, and rural campaigns.
          </p>
          <Link to="/services">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              EXPLORE SERVICES
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>

        {/* Bihar Map Section with Infographic Statistics */}
        <div className="relative max-w-6xl mx-auto mt-12 md:mt-16 lg:mt-20">
          <div className="relative bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 xl:p-12 shadow-xl animate-fade-in" style={{ animationDelay: '4.4s' }}>
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 animate-fade-in" style={{ animationDelay: '4.6s' }}>
                Our Reach Across Bihar
              </h2>
              <p className="text-gray-600 mt-2 animate-fade-in" style={{ animationDelay: '4.8s' }}>
                Comprehensive coverage with proven results
              </p>
            </div>
            
            {/* Map Container */}
            <div className="relative flex justify-center items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px]">
              <ImageWithFallback
                src="/assets/bihar-map.png"
                alt="Map of Bihar"
                className="w-full max-w-2xl mx-auto h-auto object-contain z-10 relative animate-fade-in"
                style={{ animationDelay: '5s' }}
              />
              
              {/* Improved Animated Connections */}
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none z-5"
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Top Left to Center */}
                <path 
                  d="M100,80 Q250,120 400,300" 
                  stroke="rgba(59, 130, 246, 0.4)" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeDasharray="6,6" 
                  className="animate-dash"
                  style={{ animationDelay: '5.2s' }}
                />
                
                {/* Top Right to Center */}
                <path 
                  d="M700,80 Q550,120 400,300" 
                  stroke="rgba(249, 115, 22, 0.4)" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeDasharray="6,6" 
                  className="animate-dash"
                  style={{ animationDelay: '5.4s' }}
                />
                
                {/* Bottom Left to Center */}
                <path 
                  d="M100,520 Q250,480 400,300" 
                  stroke="rgba(16, 185, 129, 0.4)" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeDasharray="6,6" 
                  className="animate-dash"
                  style={{ animationDelay: '5.6s' }}
                />
                
                {/* Bottom Right to Center */}
                <path 
                  d="M700,520 Q550,480 400,300" 
                  stroke="rgba(139, 92, 246, 0.4)" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeDasharray="6,6" 
                  className="animate-dash"
                  style={{ animationDelay: '5.8s' }}
                />
              </svg>
              
              {/* Infographic Statistics - Responsive positioning */}
              
              {/* Top Left - Brands Served */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 xl:top-12 xl:left-12 bg-white rounded-xl md:rounded-2xl p-2 md:p-3 lg:p-4 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300 z-20 animate-fade-in hidden sm:block" style={{ animationDelay: '5.2s' }}>
                <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-600">
                  <Counter value="500+" className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-600" />
                </div>
                <div className="text-xs md:text-sm font-semibold text-gray-600">Brands Served</div>
              </div>
              
              {/* Top Right - Campaigns Run */}
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 xl:top-12 xl:right-12 bg-white rounded-xl md:rounded-2xl p-2 md:p-3 lg:p-4 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300 z-20 animate-fade-in hidden sm:block" style={{ animationDelay: '5.4s' }}>
                <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-orange-500">
                  <Counter value="1000+" className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-orange-500" />
                </div>
                <div className="text-xs md:text-sm font-semibold text-gray-600">Campaigns Run</div>
              </div>
              
              {/* Bottom Left - Cities Covered */}
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 xl:bottom-12 xl:left-12 bg-white rounded-xl md:rounded-2xl p-2 md:p-3 lg:p-4 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300 z-20 animate-fade-in hidden sm:block" style={{ animationDelay: '5.6s' }}>
                <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-green-500">
                  <Counter value="25+" className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-green-500" />
                </div>
                <div className="text-xs md:text-sm font-semibold text-gray-600">Cities Covered</div>
              </div>
              
              {/* Bottom Right - Client Satisfaction */}
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 xl:bottom-12 xl:right-12 bg-white rounded-xl md:rounded-2xl p-2 md:p-3 lg:p-4 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300 z-20 animate-fade-in hidden sm:block" style={{ animationDelay: '5.8s' }}>
                <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-purple-600">
                  <Counter value="98%" className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-purple-600" />
                </div>
                <div className="text-xs md:text-sm font-semibold text-gray-600">Client Satisfaction</div>
              </div>
              
              {/* Left Center - Major City 1 */}
              <div className="absolute left-1 sm:left-2 md:left-4 top-1/3 bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-1 md:p-2 lg:p-3 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300 z-20 animate-fade-in hidden sm:flex" style={{ animationDelay: '6s' }}>
                <div className="flex items-center">
                  <div className="w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-blue-500 rounded-full mr-1 md:mr-2"></div>
                  <span className="text-xs md:text-sm font-semibold">Patna</span>
                </div>
              </div>
              
              {/* Right Center - Major City 2 */}
              <div className="absolute right-1 sm:right-2 md:right-4 top-1/2 bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-1 md:p-2 lg:p-3 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300 z-20 animate-fade-in hidden sm:flex" style={{ animationDelay: '6.2s' }}>
                <div className="flex items-center">
                  <div className="w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-orange-500 rounded-full mr-1 md:mr-2"></div>
                  <span className="text-xs md:text-sm font-semibold">Gaya</span>
                </div>
              </div>
              
              {/* Top Center - Major City 3 */}
              <div className="absolute top-4 sm:top-6 md:top-8 lg:top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-1 md:p-2 lg:p-3 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300 z-20 animate-fade-in hidden sm:flex" style={{ animationDelay: '6.4s' }}>
                <div className="flex items-center">
                  <div className="w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full mr-1 md:mr-2"></div>
                  <span className="text-xs md:text-sm font-semibold">Bhagalpur</span>
                </div>
              </div>
              
              {/* Bottom Center - Major City 4 */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 left-1/3 transform -translate-x-1/2 bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-1 md:p-2 lg:p-3 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300 z-20 animate-fade-in hidden sm:flex" style={{ animationDelay: '6.6s' }}>
                <div className="flex items-center">
                  <div className="w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-purple-500 rounded-full mr-1 md:mr-2"></div>
                  <span className="text-xs md:text-sm font-semibold">Muzaffarpur</span>
                </div>
              </div>
            </div>

            {/* Mobile Stats Grid (replaces absolute positioned stats on mobile) */}
            <div className="sm:hidden grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center">
                <div className="text-xl font-bold text-blue-600 mb-1">
                  <Counter value="500+" className="text-xl font-bold text-blue-600" />
                </div>
                <div className="text-xs text-gray-600">Brands Served</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center">
                <div className="text-xl font-bold text-orange-500 mb-1">
                  <Counter value="1000+" className="text-xl font-bold text-orange-500" />
                </div>
                <div className="text-xs text-gray-600">Campaigns Run</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center">
                <div className="text-xl font-bold text-green-500 mb-1">
                  <Counter value="25+" className="text-xl font-bold text-green-500" />
                </div>
                <div className="text-xs text-gray-600">Cities Covered</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center">
                <div className="text-xl font-bold text-purple-600 mb-1">
                  <Counter value="98%" className="text-xl font-bold text-purple-600" />
                </div>
                <div className="text-xs text-gray-600">Client Satisfaction</div>
              </div>
            </div>

            {/* Mobile Cities List (replaces absolute positioned cities on mobile) */}
            <div className="sm:hidden mt-6">
              <h4 className="text-center font-semibold text-gray-700 mb-3">Major Cities We Cover</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga', 'Purnia'].map((city) => (
                  <div key={city} className="bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100 text-sm font-medium">
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

       {/* Social Proof */}
<div className="mt-10 md:mt-12 lg:mt-16 text-center">
  <p className="text-gray-500 mb-6 md:mb-8 text-base md:text-lg animate-fade-in" style={{ animationDelay: '4s' }}>
    Trusted by 500+ brands across Bihar
  </p>
  <div className="relative w-full overflow-hidden whitespace-nowrap py-2 md:py-4 lg:py-6">
    <div className="inline-block animate-scroll-rtl">
      <div className="flex items-center gap-8 md:gap-12 lg:gap-16">
        {['Patna Mall', 'City Center', 'P&M Mall', 'Aditya Mall', 'Kargil Chowk'].map((brand) => (
          <div key={brand} className="transition-transform transform hover:scale-110">
            <span className="text-sm md:text-base lg:text-xl font-bold text-gray-500 mx-4 hover:text-gray-900 transition-colors">
              {brand}
            </span>
          </div>
        ))}
        {/* Duplicate the list for continuous scroll effect */}
        {['Patna Mall', 'City Center', 'P&M Mall', 'Aditya Mall', 'Kargil Chowk'].map((brand) => (
          <div key={brand + '-duplicate'} className="transition-transform transform hover:scale-110">
            <span className="text-sm md:text-base lg:text-xl font-bold text-gray-500 mx-4 hover:text-gray-900 transition-colors">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-8 md:h-12 lg:h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120L80,110C160,100,320,80,480,70C640,60,800,60,960,65C1120,70,1280,80,1360,85L1440,90L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Custom CSS */}
      <style>{`
        @keyframes dash {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -24;
          }
        }
        .animate-dash {
          animation: dash 2s linear infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes bounce-in {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out forwards;
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          opacity: 0;
          animation: fade-in 0.8s ease-out forwards;
        }
        .group:hover .group-hover\\:shadow-lg {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        @media (max-width: 360px) {
          .absolute.top-2.left-2,
          .absolute.top-2.right-2,
          .absolute.bottom-2.left-2,
          .absolute.bottom-2.right-2 {
            transform: scale(0.9);
            padding: 0.5rem;
          }
        }
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-rtl {
          animation: scroll-rtl 25s linear infinite;
        }
      `}</style>
    </section>
  );
}