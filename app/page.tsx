'use client';

import { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: 'AI Chat Assistant',
    description: 'A real-time chat application powered by GPT-4 with custom training data',
    tech: ['React', 'Node.js', 'OpenAI'],
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 2,
    title: 'Task Manager Pro',
    description: 'Full-stack productivity app with drag-and-drop, real-time sync, and analytics',
    tech: ['Next.js', 'PostgreSQL', 'Prisma'],
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 3,
    title: 'Code Snippet Library',
    description: 'Developer tool for organizing and sharing code snippets with syntax highlighting',
    tech: ['TypeScript', 'MongoDB', 'Express'],
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Beautiful weather visualization with forecasts, maps, and historical data',
    tech: ['Vue.js', 'D3.js', 'Weather API'],
    color: 'from-orange-400 to-red-500',
  },
  {
    id: 5,
    title: 'E-commerce Platform',
    description: 'Modern shopping experience with cart, payments, and inventory management',
    tech: ['React', 'Stripe', 'Firebase'],
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 6,
    title: 'Portfolio Generator',
    description: 'No-code tool for developers to create stunning portfolio websites',
    tech: ['Next.js', 'Tailwind', 'Vercel'],
    color: 'from-indigo-400 to-purple-500',
  },
];

export default function Home() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  // Update clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#008080] relative overflow-hidden">
      {/* Retro grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-white"></div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Header - Windows 98 style */}
        <div className="mb-8 win98-window">
          <div className="win98-title-bar">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-600 border border-white/30"></div>
              <span className="font-bold text-white">Portfolio.exe</span>
            </div>
            <div className="flex gap-1">
              <button className="win98-button-small">_</button>
              <button className="win98-button-small">□</button>
              <button className="win98-button-small">×</button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-yellow-300 border-2 border-black mb-4 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-mono text-sm">👋 HELLO_WORLD.txt</span>
                </div>
                <h1 className="text-5xl font-bold mb-2 text-gray-900 font-mono">
                  Your Name
                </h1>
                <p className="text-xl text-gray-700 mb-4 font-mono">
                  {'>'} Full Stack Developer & Tech Enthusiast
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-400 border-2 border-black font-mono text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    React.js
                  </span>
                  <span className="px-3 py-1 bg-blue-400 border-2 border-black font-mono text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-purple-400 border-2 border-black font-mono text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-pink-400 border-2 border-black font-mono text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    Python
                  </span>
                </div>
                <p className="text-gray-700 font-mono text-sm leading-relaxed">
                  Building cool stuff on the internet since 2015. Passionate about creating 
                  delightful user experiences and solving complex problems with elegant code.
                </p>
              </div>
              
              {/* Terminal-style info box */}
              <div className="w-full md:w-80 bg-black border-4 border-gray-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
                <div className="bg-gray-300 px-3 py-1 border-b-2 border-gray-400 font-mono text-xs">
                  C:\WINDOWS\system32\cmd.exe
                </div>
                <div className="p-4 font-mono text-green-400 text-sm">
                  <div className="mb-2">Microsoft Windows [Version 98.0]</div>
                  <div className="mb-2">(c) 2025 Your Portfolio Corp.</div>
                  <div className="mb-4">C:\Projects&gt; dir</div>
                  <div className="space-y-1 text-xs">
                    <div>📧 email@example.com</div>
                    <div>🐙 github.com/yourusername</div>
                    <div>💼 linkedin.com/in/yourname</div>
                    <div>🐦 @yourhandle</div>
                    <div className="mt-4 text-yellow-400">System Status: [ONLINE]</div>
                    <div className="text-cyan-400">Coffee Level: [████████░░] 80%</div>
                  </div>
                  <div className="mt-4 animate-pulse">_</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mb-8">
          <div className="win98-window">
            <div className="win98-title-bar">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-600 border border-white/30"></div>
                <span className="font-bold text-white">My Projects - Explorer</span>
              </div>
              <div className="flex gap-1">
                <button className="win98-button-small">_</button>
                <button className="win98-button-small">□</button>
                <button className="win98-button-small">×</button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="project-card group cursor-pointer"
                    onClick={() => setActiveWindow(activeWindow === project.title ? null : project.title)}
                  >
                    <div className={`aspect-square bg-gradient-to-br ${project.color} border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group-hover:scale-105 group-hover:animate-shake flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                      <div className="text-center z-10 p-4">
                        <div className="text-6xl mb-2">💻</div>
                        <div className="font-mono font-bold text-white text-lg drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                          {project.title}
                        </div>
                      </div>
                      
                      {/* Retro scanlines effect */}
                      <div className="absolute inset-0 opacity-10 pointer-events-none">
                        {[...Array(20)].map((_, i) => (
                          <div key={i} className="h-[5%] border-b border-black"></div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-3 bg-gray-200 border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <p className="text-sm text-gray-800 mb-2 font-mono">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-white border border-gray-400 text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Windows 98 Taskbar */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#c0c0c0] border-t-2 border-white shadow-[0_-2px_4px_rgba(0,0,0,0.3)] z-50">
          <div className="flex items-center justify-between px-2 py-1">
            <button className="win98-button px-4 py-1 flex items-center gap-2 font-bold">
              <span className="text-xl">🪟</span>
              <span className="font-mono">Start</span>
            </button>
            
            <div className="flex-1 flex gap-2 mx-2">
              <div className="win98-button-pressed px-3 py-1 font-mono text-sm flex items-center gap-2">
                <span>📁</span>
                <span className="hidden sm:inline">Portfolio.exe</span>
              </div>
            </div>
            
            <div className="win98-button-pressed px-3 py-1 flex items-center gap-2">
              <span className="text-sm">🔊</span>
              <span className="text-sm">🌐</span>
              <span className="font-mono text-sm">{time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating icons for extra retro feel */}
      <div className="fixed top-4 left-4 space-y-4 hidden lg:block">
        <div className="flex flex-col items-center gap-1 cursor-pointer hover:bg-blue-500/30 p-2 rounded transition-colors">
          <div className="text-4xl">💾</div>
          <span className="text-white text-xs font-mono drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
            My Computer
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer hover:bg-blue-500/30 p-2 rounded transition-colors">
          <div className="text-4xl">🗑️</div>
          <span className="text-white text-xs font-mono drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
            Recycle Bin
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer hover:bg-blue-500/30 p-2 rounded transition-colors">
          <div className="text-4xl">📁</div>
          <span className="text-white text-xs font-mono drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
            Projects
          </span>
        </div>
      </div>
    </div>
  );
}
