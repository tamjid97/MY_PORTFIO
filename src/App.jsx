import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <Router>
      {/* এখানে text-black দিয়ে লাইট মোডে সব লেখা কুচকুচে কালো করা হয়েছে।
        আর dark:text-slate-100 দিয়ে ডার্ক মোডে লেখাগুলো ক্রিস্প ও গ্লোয়িং রাখা হয়েছে।
      */}
      <div className="min-h-screen text-black dark:text-slate-100 transition-colors duration-300 relative">
        
        {/* মেইন ব্যাকগ্রাউন্ড লেয়ার */}
        <AnimatedBackground />

        {/* নেভিগেশন বার */}
        <Navbar />
        
        {/* রাউটিং কন্টেন্ট */}
        <main className="pt-16 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;