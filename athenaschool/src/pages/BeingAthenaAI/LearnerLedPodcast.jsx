import React from "react";
import { Play, Headphones } from "lucide-react";

const LearnerLedPodcast = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <div className="container mx-auto mt-10 px-6 pt-12 max-w-7xl">
        <nav className="text-[10px] mb-8 flex items-center gap-2 font-bold tracking-[0.2em] uppercase text-gray-400">
          <span className="hover:text-[#074D8D] cursor-pointer transition-colors">
            Home
          </span>
          <span className="text-gray-300 font-light"> &gt; </span>
          <span className="hover:text-[#074D8D] cursor-pointer transition-colors">
            Being Athena AI
          </span>
          <span className="text-gray-300 font-light"> &gt;</span>
          <span className="text-[#074D8D]">Learner-Led Podcast</span>
        </nav>
      </div>

      <div className="container mx-auto px-6 mb-20 max-w-7xl">
        <div className="bg-[#074D8D] rounded-4xl overflow-hidden relative min-h-80 flex items-center shadow-xl">
          <div className="grid md:grid-cols-12 gap-8 p-10 md:p-16 relative z-10 items-center w-full">
            <div className="md:col-span-8">
              <p className="text-[#FFC107] font-extrabold text-[1.2rem] uppercase tracking-[0.4em] mb-2">
                A Podcast
              </p>
              <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-2">
                FOR THE <span className="text-[#FFC107]">STUDENTS</span>
              </h1>
              <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-2">
                BY THE <span className="text-[#FFC107]">STUDENTS</span>
              </h1>
              <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                OF THE STUDENTS
              </h1>
            </div>
            <div className="md:col-span-4 hidden md:flex justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#FFC107]/20 blur-3xl rounded-full animate-pulse" />
                <Headphones
                  size={200}
                  className="text-white/20 relative z-10 rotate-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mb-24 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-[#074D8D] text-3xl font-black mb-6 leading-tight">
              The Echo of Athena AI
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              It's a learner-led podcast, conceptualized, coordinated, and
              conducted by the Students of Athena AI School.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=1000"
              className="w-full h-87.5 object-cover rounded-4xl shadow-lg"
              alt="Student Voice"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-24 mb-24">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h3 className="text-[#074D8D] text-xl font-black mb-10 uppercase tracking-[0.3em]">
            Tune in to the latest episodes here:
          </h3>

          <div className="flex justify-center items-center gap-12 mb-16">
            <img
              src="https://cdn.simpleicons.org/spotify/1DB954"
              className="h-10 opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
              alt="Spotify"
            />

            <img
              src="https://cdn.simpleicons.org/youtube/FF0000"
              className="h-8 opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
              alt="YouTube"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Google_Podcasts_icon.svg/960px-Google_Podcasts_icon.svg.png?20200715145219"
              className="h-10 opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
              alt="Google Podcasts"
            />

            <img
              src="https://img.icons8.com/ios_filled/512/FAB005/amazon-music.png"
              className="h-10 opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
              alt="Amazon Music"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 p-2">
              <div className="relative aspect-video bg-[#41101E] rounded-xl flex flex-col items-center justify-center p-6 text-center text-white">
                <p className="text-[10px] font-bold tracking-[0.3em] opacity-70 mb-2">
                  SEASON 2:
                </p>
                <h5 className="text-2xl font-black mb-1">Episode 1:</h5>
                <p className="text-sm font-bold tracking-wider mb-6">
                  BUSTING MYTHS ABOUT ONLINE SCHOOLING
                </p>
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <Play fill="white" size={20} className="ml-1" />
                </div>
              </div>
            </div>

            <div className="bg-[#191414] rounded-2xl p-8 flex flex-col justify-between border border-gray-800">
              <div>
                <p className="text-green-500 font-bold text-[10px] tracking-widest mb-1">
                  EPISODE 2
                </p>
                <h5 className="text-white font-black text-lg">
                  Behind-The-Scenes With The Co-Founders
                </h5>
                <p className="text-gray-400 text-xs mt-1">
                  The Echo of Athena AI
                </p>
              </div>
              <div className="mt-12 bg-white/10 rounded-lg p-3 flex items-center gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Play fill="black" size={12} className="ml-0.5" />
                </div>
                <div className="flex-1 h-1 bg-gray-600 rounded-full relative">
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-green-500 rounded-full" />
                </div>
                <span className="text-white text-[10px] font-mono">54:23</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mb-32 max-w-7xl">
        <h3 className="text-[#074D8D] text-2xl font-black mb-10 text-center uppercase tracking-tight">
          Learn more about Athena AI School
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1E3A8A] p-12 rounded-2xl text-center group cursor-pointer hover:bg-[#1e40af] transition-all">
            <button className="bg-white text-[#1E3A8A] px-12 py-4 rounded-xl font-black text-[12px] uppercase tracking-[0.2em] group-hover:bg-[#FFC107]transition-all group-hover:scale-105 shadow-lg">
              Indian Curriculum
            </button>
          </div>

          <div className="bg-[#4C1D95] p-12 rounded-2xl text-center group cursor-pointer hover:bg-[#5b21b6] transition-all">
            <button className="bg-white text-[#4C1D95] px-12 py-4 rounded-xl font-black text-[12px] uppercase tracking-[0.2em] group-hover:bg-[#FFC107] group-hover:scale-105 transition-all shadow-lg">
              British Curriculum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerLedPodcast;
