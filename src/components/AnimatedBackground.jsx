import { Atom, Hexagon, Database, Wind, Terminal, Code2, Layers, Cpu, GitBranch } from 'lucide-react';

export default function AnimatedBackground() {
  // মোবাইলের জন্য পজিশন এবং সাইজ রেসপন্সিভ করা হয়েছে
  const skills = [
    { 
      Icon: Atom, size: 'w-6 h-6 md:w-[26px] md:h-[26px]', top: '22%', left: '4%', anim: 'animate-float-1',
      glowClass: 'text-sky-500 dark:text-sky-400 bg-white/90 dark:bg-sky-950/20 border-sky-200 dark:border-sky-500/30 shadow-[0_8px_25px_rgba(56,189,248,0.15)] dark:shadow-[0_0_30px_rgba(56,189,248,0.4)]' 
    }, // React
    { 
      Icon: Hexagon, size: 'w-6 h-6 md:w-[26px] md:h-[26px]', top: '28%', left: '84%', anim: 'animate-float-2',
      glowClass: 'text-emerald-600 dark:text-emerald-400 bg-white/90 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-500/30 shadow-[0_8px_25px_rgba(16,185,129,0.15)] dark:shadow-[0_0_30px_rgba(16,185,129,0.4)]' 
    }, // Node.js
    { 
      Icon: Database, size: 'w-5 h-5 md:w-[24px] md:h-[24px]', top: '65%', left: '5%', anim: 'animate-float-3',
      glowClass: 'text-blue-600 dark:text-blue-400 bg-white/90 dark:bg-blue-950/20 border-blue-200 dark:border-blue-500/30 shadow-[0_8px_25px_rgba(59,130,246,0.15)] dark:shadow-[0_0_30px_rgba(59,130,246,0.4)]' 
    }, // Postgres / Prisma
    { 
      Icon: Wind, size: 'w-5 h-5 md:w-[24px] md:h-[24px]', top: '48%', left: '86%', anim: 'animate-float-1',
      glowClass: 'text-teal-500 bg-white/90 dark:bg-teal-950/20 border-teal-200 dark:border-teal-500/30 shadow-[0_8px_25px_rgba(20,184,166,0.15)] dark:shadow-[0_0_30px_rgba(20,184,166,0.4)]' 
    }, // Tailwind CSS
    { 
      Icon: Code2, size: 'w-5 h-5 md:w-[24px] md:h-[24px]', top: '78%', left: '80%', anim: 'animate-float-2',
      glowClass: 'text-indigo-600 dark:text-indigo-400 bg-white/90 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-500/30 shadow-[0_8px_25px_rgba(99,102,241,0.15)] dark:shadow-[0_0_30px_rgba(99,102,241,0.4)]' 
    }, // TypeScript
    { 
      Icon: Terminal, size: 'w-5 h-5 md:w-[22px] md:h-[22px]', top: '16%', left: '48%', anim: 'animate-float-3',
      glowClass: 'text-amber-600 dark:text-amber-500 bg-white/90 dark:bg-amber-950/20 border-amber-200 dark:border-amber-500/30 shadow-[0_8px_25px_rgba(245,158,11,0.15)] dark:shadow-[0_0_30px_rgba(245,158,11,0.4)]' 
    }, // JavaScript
    { 
      Icon: Layers, size: 'w-5 h-5 md:w-[24px] md:h-[24px]', top: '88%', left: '25%', anim: 'animate-float-1',
      glowClass: 'text-purple-600 dark:text-purple-400 bg-white/90 dark:bg-purple-950/20 border-purple-200 dark:border-purple-500/30 shadow-[0_8px_25px_rgba(168,85,247,0.15)] dark:shadow-[0_0_30px_rgba(168,85,247,0.4)]' 
    }, // Next.js
    { 
      Icon: Cpu, size: 'w-5 h-5 md:w-[24px] md:h-[24px]', top: '42%', left: '6%', anim: 'animate-float-2',
      glowClass: 'text-rose-500 bg-white/90 dark:bg-rose-950/20 border-rose-200 dark:border-rose-500/30 shadow-[0_8px_25px_rgba(244,63,94,0.15)] dark:shadow-[0_0_30px_rgba(244,63,94,0.4)]' 
    }, // AI / Express
    { 
      Icon: GitBranch, size: 'w-5 h-5 md:w-[22px] md:h-[22px]', top: '72%', left: '46%', anim: 'animate-float-1',
      glowClass: 'text-orange-600 dark:text-orange-500 bg-white/90 dark:bg-orange-950/20 border-orange-200 dark:border-orange-500/30 shadow-[0_8px_25px_rgba(249,115,22,0.15)] dark:shadow-[0_0_30px_rgba(249,115,22,0.4)]' 
    }, // Git
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none bg-[#f8fafc] dark:bg-[#090d16] transition-colors duration-300">
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(18px) rotate(-5deg); }
        }
        .animate-float-1 { animation: float-slow 7s ease-in-out infinite; }
        .animate-float-2 { animation: float-reverse 9s ease-in-out infinite; }
        .animate-float-3 { animation: float-slow 11s ease-in-out infinite; }
      `}</style>

      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-violet-600/10 dark:bg-violet-600/5 blur-[100px] md:blur-[130px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-600/10 dark:bg-blue-600/5 blur-[100px] md:blur-[130px]" />

      {/* গোল গ্লোয়িং লোগো গ্রিড (hidden md:block সরিয়ে দেওয়া হয়েছে যেন মোবাইলেও দেখায়) */}
      {skills.map((skill, index) => {
        const { Icon, size, top, left, anim, glowClass } = skill;
        return (
          <div
            key={index}
            className={`absolute ${anim} transition-all duration-1000`}
            style={{ top, left }}
          >
            {/* মোবাইল ডিভাইসে w-9 h-9 এবং পিসিতে w-12 h-12 হবে */}
            <div className={`w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-full border backdrop-blur-[4px] transition-all duration-300 ${glowClass}`}>
              <Icon className={size} strokeWidth={1.8} />
            </div>
          </div>
        );
      })}
    </div>
  );
}