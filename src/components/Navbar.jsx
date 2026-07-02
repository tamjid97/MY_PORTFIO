import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeMenu, setActiveMenu] = useState('Skills');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const menuItems = [
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certification', href: '#certification' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // রাউটিং এবং স্মুথ স্ক্রলিংয়ের জন্য কাস্টম ফাংশন
  const handleNavigation = (e, href, name) => {
    e.preventDefault();
    setActiveMenu(name);
    setIsOpen(false);

    const targetId = href.replace('#', '');

    // যদি ইউজার অন্য পেজে থাকে (যেমন: Project Details)
    if (location.pathname !== '/') {
      navigate('/' + href);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      // ইউজার হোম পেজেই থাকলে সরাসরি স্ক্রল হবে
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', '/' + href);
      }
    }
  };

  const handleLogoClick = () => {
    setActiveMenu('');
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-500 rounded-full border ${
      isScrolled 
        ? 'bg-white/90 dark:bg-[#090d16]/70 backdrop-blur-xl border-black/10 dark:border-white/[0.1] shadow-lg py-2' 
        : 'bg-white/60 dark:bg-[#090d16]/30 backdrop-blur-md border-black/5 dark:border-white/[0.04] py-3'
    }`}>
      <div className="w-full px-6 sm:px-8">
        <div className="flex items-center justify-between h-11">
          
          {/* লোগো: লাইট মোডে কুচকুচে কালো (text-black font-black) এবং ডার্ক মোডে সেই প্রিমিয়াম বেগুনি */}
          <div 
            onClick={handleLogoClick}
            className="text-[19px] font-black text-black dark:text-violet-500 tracking-wide cursor-pointer select-none"
          >
            Epick.Dev
          </div>

          {/* ডেস্কটপ মেনু */}
          <div className="hidden lg:flex items-center space-x-0.5 text-[13px]">
            {menuItems.map((item) => {
              const isActive = activeMenu === item.name;
              return (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href, item.name)}
                  className={`relative px-3 py-1.5 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'text-black dark:text-white font-bold' 
                      : 'text-black/70 hover:text-black dark:text-gray-300 dark:hover:text-white font-medium'
                  }`}
                >
                  {/* একটিভ বাটন ইফেক্ট: লাইট মোডে কালো বর্ডার-শ্যাডো, ডার্ক মোডে পার্পল গ্লো */}
                  {isActive && (
                    <span className="absolute inset-0 bg-black/5 dark:bg-violet-600/25 rounded-full border border-black/10 dark:border-violet-500/30 shadow-[0_2px_10px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(124,58,237,0.4)] z-[-1]" />
                  )}
                  {item.name}
                </a>
              );
            })}

            {/* ডার্ক মোড টগল বাটন: লাইট মোডে সলিড ব্ল্যাক আইকন ও বর্ডার */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-full border border-black/20 dark:border-violet-500/40 text-black dark:text-violet-400 hover:bg-black/5 dark:hover:bg-violet-500/10 transition-all ml-3 cursor-pointer"
            >
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>

          {/* মোবাইল মেনু বাটন */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-full text-black dark:text-violet-400"
            >
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-black dark:text-gray-300 hover:text-black dark:hover:text-violet-400">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full lg:hidden bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-2xl px-5 pt-3 pb-6 space-y-1 text-[14px] border border-black/10 dark:border-white/[0.08] rounded-3xl shadow-2xl">
          {menuItems.map((item) => {
            const isActive = activeMenu === item.name;
            return (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleNavigation(e, item.href, item.name)}
                className={`block px-4 py-2 rounded-full transition-colors ${
                  isActive 
                    ? 'bg-black/10 dark:bg-violet-600/20 text-black dark:text-white font-bold text-center' 
                    : 'text-black/80 dark:text-gray-300 hover:text-black dark:hover:text-white text-center font-medium'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}

export default Navbar;