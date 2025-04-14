// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const API_KEY = "AIzaSyDjWcD6uWa1JenO8JOApijwo8NkDnLaQoM";
// const CHANNEL_ID = "UCd6MoB9NC6uYN2grvUNT-Zg";
// const MAX_RESULTS = 10;

// export default function YouTubeCarousel() {
//   const [videos, setVideos] = useState<any[]>([]);
//   const carouselRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const res = await axios.get(
//           `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
//         );
//         setVideos(res.data.items);
//       } catch (err) {
//         console.error("Failed to fetch YouTube videos", err);
//       }
//     };
//     fetchVideos();
//   }, []);

//   const scroll = (direction: "left" | "right") => {
//     if (carouselRef.current) {
//       const { scrollLeft, clientWidth } = carouselRef.current;
//       const scrollAmount = clientWidth * 0.8;
//       const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
//       carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="bg-[#0b0c1a] py-12 px-4">
//       <h2 className="text-white text-3xl font-bold text-center mb-8">Latest AWS YouTube Videos</h2>

//       <div className="relative w-full max-w-[1300px] mx-auto">
//         {/* Arrows */}
//         <button
//           onClick={() => scroll("left")}
//           className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full"
//         >
//           <ChevronLeft size={28} />
//         </button>

//         <button
//           onClick={() => scroll("right")}
//           className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full"
//         >
//           <ChevronRight size={28} />
//         </button>

//         {/* Scrollable container */}
//         <div
//           ref={carouselRef}
//           className="flex overflow-x-scroll no-scrollbar gap-6 scroll-smooth snap-x snap-mandatory"
//         >
//           {videos.map((video) => (
//             <div
//               key={video.id.videoId}
//               className="bg-[#1e1f2f] rounded-xl w-[330px] shrink-0 snap-start hover:shadow-xl transition-shadow"
//             >
//               <iframe
//                 src={`https://www.youtube.com/embed/${video.id.videoId}`}
//                 className="w-full h-[190px] rounded-t-xl"
//                 allowFullScreen
//               />
//               <div className="p-4 text-white">
//                 <p className="text-sm font-semibold line-clamp-2">
//                   {video.snippet.title}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

const API_KEY = "AIzaSyCMAfY-zAJcK1LmQVkTX78zdILkiKkSZ0Q";
const MAX_RESULTS = 10;

type VideoItem = {
  id: { videoId: string };
  snippet: { title: string };
};

function YouTubeCarousel({
  title,
  query,
  safeSearch = "strict",
}: {
  title: string;
  query: string;
  safeSearch?: "none" | "moderate" | "strict";
}) {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const searchParams = new URLSearchParams({
          key: API_KEY,
          part: "snippet,id",
          maxResults: MAX_RESULTS.toString(),
          q: query,
          relevanceLanguage: selectedLanguage,
          type: "video",
          safeSearch,
        });

        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?${searchParams.toString()}`
        );
        setVideos(res.data.items || []);
      } catch (err) {
        console.error("Failed to fetch YouTube videos", err);
      }
    };
    fetchVideos();
  }, [query, selectedLanguage, safeSearch]);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo =
        direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-10 px-4">
      <div className="flex items-center justify-between mb-4 max-w-[1300px] mx-auto">
        <h2 className="text-white text-xl md:text-3xl font-bold">{title}</h2>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="p-2 rounded bg-[#1e1f2f] text-white text-sm border border-white/10"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="ta">Tamil</option>
          <option value="te">Telugu</option>
          <option value="ml">Malayalam</option>
          <option value="es">Spanish</option>
        </select>
      </div>

      <div className="relative w-full max-w-[1300px] mx-auto">
        <button
          onClick={() => scroll("left")}
          className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full"
        >
          <ChevronRight size={28} />
        </button>

        <div
          ref={carouselRef}
          className="flex overflow-x-scroll no-scrollbar gap-6 scroll-smooth snap-x snap-mandatory py-2"
        >
          {videos.map((video) => (
            <div
              key={video.id.videoId}
              className="bg-[#1e1f2f] rounded-xl w-[320px] shrink-0 snap-start hover:shadow-2xl transition-shadow"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                className="w-full h-[190px] rounded-t-xl"
                allowFullScreen
              />
              <div className="p-3 text-white">
                <p className="text-sm font-semibold line-clamp-2">
                  {video.snippet.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function OTTStyleVideoLayout() {
  return (
    <div className="max-w-[full] pt-22 md:pt-22 lg:pt-20"> {/* Padding added from top */}
      <YouTubeCarousel title="🔥 Action Blockbusters" query="action movie scenes" />
      <YouTubeCarousel title="🎮 Tech & Gaming" query="tech gadgets gameplay trailers" />
      <YouTubeCarousel title="😂 Stand-up Comedy" query="clean stand up comedy" />
      <YouTubeCarousel title="👻 Scary Stories" query="horror thriller ghost stories" />
    </div>
  );
}

