import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Trophy, Users } from 'lucide-react';
// import IMG1 from "./../resource/Compressed_Image/1.jpg"
// import IMG2 from "./../resource/Compressed_Image/2.jpg"
// import IMG3 from "./../resource/Compressed_Image/3.jpg"
// import IMG4 from "./../resource/Compressed_Image/4.jpg"
// import IMG5 from "./../resource/Compressed_Image/5.jpg"
// import IMG6 from "./../resource/Compressed_Image/6.jpg"
// import IMG7 from "./../resource/Compressed_Image/7.jpg"
// import IMG8 from "./../resource/Compressed_Image/8.jpg"
// import IMG9 from "./../resource/Compressed_Image/9.jpg"
// import IMG10 from "./../resource/Compressed_Image/10.jpg"

const PreviousEdition = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onScroll();
    setSlideCount(emblaApi.slideNodes().length);
    emblaApi.on('scroll', onScroll);
    emblaApi.on('reInit', onScroll);
    
    return () => {
      emblaApi.off('scroll', onScroll);
      emblaApi.off('reInit', onScroll);
    };
  }, [emblaApi, onScroll]);

  const previousEditionImages = [
    {
      url: "/carousel/1.jpg",
      caption: "Saraswati Vandana - Hackathon 2024"
    },
    {
      url: "/carousel/2.jpg",
      caption: "Opening Ceremony - Hackathon 2024"
    },
    {
      url: "/carousel/3.jpg",
      caption: "Coding through out the day - Hackathon 2024"
    },
    {
      url: "/carousel/4.jpg",
      caption: "Hustlers Hustling - Hackathon 2024"
    },
    {
      url: "/carousel/5.jpg",
      caption: "Judges Evaluating - Hackathon 2024"
    },
    {
      url: "/carousel/6.jpg",
      caption: "Particpants recieving tips & tricks from DEAN Acadmics to complete their Hacks  "
    },
    {
      url: "/carousel/7.jpg",
      caption: "Judges Reviewing Hacks - Hackathon 2024"
    },
    {
      url: "/carousel/8.jpg",
      caption: "Final Evaluation Round - Hackathon 2024"
    },
    {
      url: "/carousel/9.jpg",
      caption: "Category A Winner - Hackathon 2024"
    },
    {
      url: "/carousel/10.jpg",
      caption: "Category B Winner - Hackathon 2024"
    },
  ];

  const previousWinners = [
    {
      category: "Class A",
      team: "CodeCrafters",
      project: "Smart Campus Navigation System",
      members: ["Aditya Sharma", "Priya Patel", "Vikram Singh"]
    },
    {
      category: "Class B",
      team: "TechTitans",
      project: "AI-Powered Waste Management Solution",
      members: ["Rahul Verma", "Ananya Gupta", "Karan Malhotra", "Neha Singh"]
    }
  ];

  const judges = [
    "Dr. Rajesh Kumar - Professor, IIT Roorkee",
    "Ms. Priya Sharma - Senior Developer, Microsoft",
    "Mr. Vikram Mehta - Founder, TechSolutions India"
  ];

  return (
    <section id="last-edition" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center font-Krona">Previous Edition Highlights</h2>
        
        <div className="mb-16 relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {previousEditionImages.map((image, index) => (
                <div className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_70%] relative" key={index}>
                  <div className="mx-4 h-[300px] sm:h-[400px] md:h-[500px] relative rounded-xl overflow-hidden">
                    <img 
                      src={image.url} 
                      alt={image.caption} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <p className="text-white text-lg font-inter font-semibold">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm z-10"
            onClick={scrollNext}
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Progress bar */}
          <div className="mt-4 mx-auto max-w-3xl">
            <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-pamplet transition-all duration-200"
                style={{ width: `${scrollProgress}%` }}
              ></div>
            </div>
            <div className="flex justify-center mt-2 text-sm text-gray-400">
              {selectedIndex + 1} / {slideCount}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Previous Winners */}
          {/* <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Trophy className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-2xl font-semibold">Last Year's Winners</h3>
            </div>
            
            <div className="space-y-6">
              {previousWinners.map((winner, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-xl font-semibold mb-2">{winner.category}: Team {winner.team}</h4>
                  <p className="text-purple-300 mb-2">Project: {winner.project}</p>
                  <div className="text-gray-300">
                    <p className="mb-1">Team Members:</p>
                    <ul className="list-disc list-inside pl-2 text-gray-400">
                      {winner.members.map((member, idx) => (
                        <li key={idx}>{member}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          
          {/* Judges Panel */}
          {/* <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-2xl font-semibold">Distinguished Judges</h3>
            </div>
            
            <p className="text-gray-300 mb-4">
              Our previous edition featured an esteemed panel of judges from academia and industry who evaluated projects based on innovation, technical complexity, design, and practical application.
            </p>
            
            <ul className="space-y-3">
              {judges.map((judge, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-300">{judge}</span>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
        
        {/* <div className="text-center mt-12">
          <p className="text-gray-300 max-w-3xl mx-auto">
            RIT-A-THON 2024 saw over 200 participants from various departments competing in a 30-hour coding marathon. 
            The event featured workshops, mentoring sessions, and exciting challenges that pushed participants to their creative limits.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default PreviousEdition;