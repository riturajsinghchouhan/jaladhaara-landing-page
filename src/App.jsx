import React, { useEffect, useRef } from 'react';
import bottomBg from './assets/bottom.png';
import heroBg from './assets/hero.png';
import probImg1 from './assets/water_scarcity.png';
import probImg2 from './assets/wrong_guesswork.png';
import probImg3 from './assets/financial_loss.png';
import bentoScan from './assets/bento_scanning.png';
import bentoWater from './assets/bento_water_success.png';
import imgAgri from './assets/service_agriculture.png';
import indiaMap from './assets/india_map.svg';
import IndiaMap from './IndiaMap';
import Navbar from './features/landing-page/components/Navbar';
import {
  MapPin,
  Droplets,
  Search,
  CheckCircle,
  TrendingDown,
  ShieldAlert,
  Frown,
  Activity,
  Layers,
  Crosshair,
  Headset,
  PhoneCall,
  ArrowRight,
  Star,
  MessageCircle,
  Share2,
  Globe,
  Send,
  Play
} from 'lucide-react';

function App() {
  const appsScrollRef = useRef(null);

  // Auto-slide logic for the apps carousel on mobile
  useEffect(() => {
    let intervalId;
    
    const startAutoSlide = () => {
      intervalId = setInterval(() => {
        if (appsScrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = appsScrollRef.current;
          // Only slide if scrollable (mobile view)
          if (scrollWidth > clientWidth) {
            if (scrollLeft + clientWidth >= scrollWidth - 10) {
              appsScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
              appsScrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
            }
          }
        }
      }, 3500); // Auto slide every 3.5 seconds
    };

    startAutoSlide();
    
    return () => clearInterval(intervalId);
  }, []);

  // Intersection Observer for fade-up animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100svh] lg:min-h-screen flex items-center pt-32 pb-16 sm:py-24 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Borewell Machine" className="w-full h-full object-cover object-[75%_center] lg:object-center" />
          <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }}></div>
        </div>

        <div className="w-full grid lg:grid-cols-12 gap-6 sm:gap-8 relative z-10 mt-4 sm:mt-10">
          <div className="lg:col-span-8 flex flex-col items-start reveal">
            <div className="text-[var(--color-accent)] text-[10px] sm:text-sm font-extrabold uppercase tracking-[0.15em] mb-3 sm:mb-8 drop-shadow-sm">
              WATER IS PRECIOUS. LET'S FIND IT TOGETHER.
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[90px] xl:text-[100px] font-black leading-[1.1] tracking-tight mb-4 sm:mb-8 text-[var(--color-text-primary)] font-display">
              Find Borewell <br className="hidden lg:block" />
              <span className="text-[var(--color-primary)] drop-shadow-[0_2px_10px_rgba(0,208,132,0.2)]">Where Water</span> <br className="hidden lg:block" />
              Still Exists.
            </h1>

            <p className="text-sm sm:text-xl text-[var(--color-text-secondary)] mb-6 sm:mb-12 max-w-2xl leading-[1.6] sm:leading-[1.7] font-normal">
              We help you find the perfect borewell point even in water-scarce areas using advanced technology and local expertise.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[var(--color-surface)]/80 border border-[var(--color-border)] backdrop-blur-sm">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center">
                  <Droplets className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-primary)]" />
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-[var(--color-text-primary)]/90">Find Water in<br />Tough Areas</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[var(--color-surface)]/80 border border-[var(--color-border)] backdrop-blur-sm">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center">
                  <Crosshair className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-primary)]" />
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-[var(--color-text-primary)]/90">Advanced<br />Detection</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[var(--color-surface)]/80 border border-[var(--color-border)] backdrop-blur-sm">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center">
                  <ShieldAlert className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-primary)]" />
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-[var(--color-text-primary)]/90">Trusted by<br />1000+ Farmers</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-xl bg-[var(--color-accent)] text-black font-bold text-sm sm:text-base hover:bg-[#E5BE42] transition-all flex items-center justify-center gap-2 group">
                Find Borewell Now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-xl bg-transparent border border-gray-400 text-[var(--color-text-primary)] font-semibold text-sm sm:text-base hover:bg-white/5 transition-all flex items-center justify-center gap-3 group">
                How It Works
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-400 flex items-center justify-center group-hover:border-white transition-colors">
                  <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-0.5" />
                </div>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 relative h-full min-h-[400px] hidden lg:block reveal animate-fade-up-delay-2">
            {/* Floating Every Drop Counts */}
            <div className="absolute right-8 top-0 glass-panel w-40 h-40 rounded-full flex flex-col items-center justify-center animate-float border-[var(--color-border)]">
              <Droplets className="w-6 h-6 text-[var(--color-text-primary)] mb-2" />
              <div className="text-[var(--color-text-primary)] font-bold text-center leading-tight">Every Drop<br />Counts</div>
              <div className="text-[8px] text-[var(--color-text-secondary)] mt-2">1200+ Farmers Served</div>
            </div>

            {/* Floating Stats */}
            <div className="absolute bottom-12 -left-8 bg-[var(--color-surface)] p-5 rounded-2xl border border-[var(--color-border)] shadow-2xl animate-float-slow flex items-start gap-4">
              <div>
                <div className="text-xs text-[var(--color-text-secondary)] font-medium mb-1">Successful Borewells</div>
                <div className="text-3xl font-bold font-display text-[var(--color-text-primary)] mb-1">1200+</div>
                <div className="text-[10px] text-[var(--color-text-secondary)]">Across 8+ Districts</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center mt-1">
                <TrendingDown className="w-5 h-5 text-[var(--color-bg)] transform rotate-180" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Services Section */}
      <section id="services" className="min-h-[auto] lg:min-h-screen py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32 w-full relative overflow-hidden bg-[var(--color-surface)] flex flex-col justify-center">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold uppercase tracking-wider mb-6 border border-[var(--color-primary)]/20">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto text-[var(--color-text-primary)]">
            Solutions for every need.<br/>
            <span className="text-[var(--color-text-secondary)] font-light">From farms to factories.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 reveal flex-grow content-start sm:content-center">
          {[
            { img: imgAgri, title: "Agriculture", desc: "High-yield borewell points for farms to ensure reliable irrigation and crop security year-round." },
            { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", title: "Household", desc: "Clean and safe groundwater detection for residential homes, apartments, and societies." },
            { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", title: "Commercial", desc: "High-capacity water sourcing for commercial complexes, hospitals, and business parks." },
            { img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", title: "Industrial", desc: "Heavy-duty industrial water detection ensuring uninterrupted supply for manufacturing." }
          ].map((srv, i) => (
            <div key={i} className="bg-[var(--color-surface)] rounded-2xl sm:rounded-[32px] overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:-translate-y-2 transition-all duration-300 group shadow-lg flex flex-col h-full">
              <div className="w-full h-24 sm:h-56 md:h-72 lg:h-[350px] xl:h-[420px] relative overflow-hidden">
                <img src={srv.img} alt={srv.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/40 to-transparent opacity-100"></div>
              </div>
              <div className="p-3 sm:p-8 lg:p-10 pt-0 relative z-10 -mt-4 sm:-mt-12 flex-grow flex flex-col justify-end">
                <h3 className="text-sm sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-4 text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors leading-tight">{srv.title}</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-[10px] sm:text-base lg:text-lg line-clamp-3 sm:line-clamp-none">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="min-h-[auto] lg:min-h-screen py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32 w-full relative overflow-hidden flex flex-col justify-center">
        <div className="text-left mb-16 reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold uppercase tracking-wider mb-6 border border-[var(--color-primary)]/20">
            Why Choose Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto text-[var(--color-text-primary)]">
            Unmatched precision.<br/>
            <span className="text-[var(--color-text-secondary)] font-light">Guaranteed results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 reveal">
          {/* Bento Box 1: Large with Image */}
          <div className="col-span-2 rounded-2xl sm:rounded-[32px] overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all flex flex-col justify-end relative group min-h-[160px] sm:min-h-[360px]">
            <img src={bentoScan} alt="3D Ground Scanning" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/90 via-[var(--color-bg)]/50 to-transparent"></div>
            
            <div className="relative z-10 p-5 sm:p-8 lg:p-12">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[var(--color-primary)]/20 flex items-center justify-center mb-3 sm:mb-6 border border-[var(--color-primary)]/30 backdrop-blur-sm">
                <Crosshair className="w-5 h-5 sm:w-7 sm:h-7 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-3 text-[var(--color-text-primary)] leading-tight">Advanced 3D Ground Scanning</h3>
              <p className="text-[var(--color-text-secondary)] text-xs sm:text-lg leading-relaxed max-w-md line-clamp-2 sm:line-clamp-none">We use military-grade geological scanners to map underground water veins with 98% accuracy before a single drop of diesel is burned.</p>
            </div>
          </div>

          {/* Bento Box 2: Tall with Image */}
          <div className="col-span-1 rounded-2xl sm:rounded-[32px] overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all flex flex-col justify-end relative group min-h-[160px] sm:min-h-[360px]">
            <img src={bentoWater} alt="Water Success" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/95 via-[var(--color-bg)]/60 to-transparent"></div>
            
            <div className="relative z-10 p-4 sm:p-8 lg:p-10">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center mb-3 sm:mb-6 border border-[var(--color-border-hover)] backdrop-blur-sm group-hover:scale-110 transition-transform">
                <ShieldAlert className="w-4 h-4 sm:w-6 sm:h-6 text-[var(--color-text-primary)]" />
              </div>
              <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 text-[var(--color-text-primary)] leading-tight">No Dry Runs</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-[10px] sm:text-sm line-clamp-2 sm:line-clamp-none">Our promise is simple: we find the water first, or you don't pay for empty holes.</p>
            </div>
          </div>

          {/* Bento Box 3: Small */}
          <div className="col-span-1 bg-gradient-to-br from-[var(--card-grad-3-from)] to-[var(--card-grad-3-to)] rounded-2xl sm:rounded-[32px] p-4 sm:p-8 lg:p-10 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all flex flex-col justify-between relative overflow-hidden group min-h-[160px] sm:min-h-[auto]">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-4 sm:mb-8 border border-[var(--color-accent)]/20 relative z-10 group-hover:rotate-12 transition-transform">
              <TrendingDown className="w-5 h-5 sm:w-7 sm:h-7 text-[var(--color-accent)] transform rotate-180" />
            </div>
            <div className="relative z-10">
              <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-3 text-[var(--color-text-primary)] leading-tight">Cost Effective</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-[10px] sm:text-base line-clamp-2 sm:line-clamp-none">By eliminating guesswork, we save you lakhs in wasted drilling machinery and labor.</p>
            </div>
          </div>

          {/* Bento Box 4: Wide */}
          <div className="col-span-2 bg-gradient-to-br from-[var(--card-grad-2-from)] to-[var(--card-grad-2-to)] rounded-2xl sm:rounded-[32px] p-5 sm:p-8 lg:p-12 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8 relative overflow-hidden group">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
             <div className="relative z-10">
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 text-[var(--color-text-primary)] leading-tight">Join 1000+ Happy Farmers</h3>
                <p className="text-[var(--color-text-secondary)] text-xs sm:text-lg leading-relaxed max-w-md">We have successfully restored water security for hundreds of families across drought-prone districts.</p>
             </div>
             <div className="relative z-10 flex -space-x-3 sm:-space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 sm:w-14 sm:h-14 rounded-full border border-[#121A2F] sm:border-2 bg-gray-600 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Farmer" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full border border-[#121A2F] sm:border-2 bg-[var(--color-primary)] flex items-center justify-center text-[10px] sm:text-sm font-bold text-[#031312] z-10">
                  +1k
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32 w-full relative z-10 -mt-16 sm:-mt-24">
        <div className="text-center mb-8 sm:mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight text-[var(--color-text-primary)] drop-shadow-md">
            Smart Technology.<br />
            <span className="text-[var(--color-text-secondary)] font-light">Local Expertise. Better Results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-20 reveal animate-fade-up-delay-1">
          {[
            { icon: Search, title: "Geological Survey", desc: "Advanced scanners to map underground water streams accurately." },
            { icon: Activity, title: "Expert Analysis", desc: "Data processed by seasoned geologists to pinpoint the best spot." },
            { icon: Crosshair, title: "Accurate Drilling", desc: "State-of-the-art rigs operated by precision-focused teams." },
            { icon: Headset, title: "Post Drilling Support", desc: "Complete installation and maintenance support after finding water." }
          ].map((item, i) => (
            <div key={i} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl sm:rounded-[24px] p-4 sm:p-8 hover:bg-white/5 hover:border-[var(--color-border)] transition-all duration-300 group flex flex-col justify-between">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center mb-3 sm:mb-6 group-hover:scale-110 group-hover:bg-[var(--color-primary)]/20 transition-all">
                <item.icon className="w-4 h-4 sm:w-6 sm:h-6 text-[var(--color-primary)]" />
              </div>
              <div>
                <h3 className="text-[13px] sm:text-lg font-bold mb-1.5 sm:mb-3 leading-tight text-[var(--color-text-primary)]">{item.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-[10px] sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 reveal animate-fade-up-delay-2">
          {[
            { value: "1200+", label: "Projects Completed" },
            { value: "8+", label: "Districts Covered" },
            { value: "98%", label: "Success Rate" },
            { value: "1000+", label: "Happy Farmers" }
          ].map((stat, i) => (
            <div key={i} className="glass-panel rounded-[16px] sm:rounded-[24px] p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-[var(--color-primary)] mb-1">{stat.value}</div>
              <div className="text-[9px] sm:text-xs text-[var(--color-text-secondary)] uppercase font-semibold tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="areas" className="min-h-[auto] lg:min-h-screen py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32 w-full relative overflow-hidden bg-[var(--color-bg)] border-t border-[var(--color-border)] flex flex-col justify-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center relative z-10">
          <div className="max-w-xl reveal text-center lg:text-left mt-8 lg:mt-0">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6 border border-[var(--color-primary)]/20">
              Service Areas
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-extrabold tracking-tight text-[var(--color-text-primary)] mb-4 sm:mb-8 leading-[1.1]">
              Wherever you are,<br className="hidden sm:block" />
              <span className="text-[var(--color-text-secondary)] font-light block sm:inline">we find water.</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm sm:text-xl lg:text-2xl leading-relaxed mb-8 sm:mb-12 max-w-xl sm:pr-4">Currently operating across major agricultural and industrial belts in Central India, bringing cutting-edge groundwater detection right to your doorstep.</p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 lg:gap-5 mb-8 sm:mb-14 max-w-2xl">
              {['Indore', 'Ujjain', 'Dewas', 'Bhopal', 'Dhar', 'Khargone'].map((area, i) => (
                <div key={i} className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/5 border border-[var(--color-border)] text-gray-200 font-medium text-xs sm:text-lg flex items-center gap-1.5 sm:gap-2 shadow-sm">
                  <MapPin className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[var(--color-primary)]" />
                  {area}
                </div>
              ))}
              <div className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 text-[var(--color-primary)] font-bold text-xs sm:text-lg shadow-sm">
                + Expanding rapidly
              </div>
            </div>
            <button className="h-12 sm:h-14 px-6 sm:px-10 rounded-full bg-white/5 text-[var(--color-text-primary)] font-bold text-sm sm:text-lg hover:bg-white/10 transition-all border border-[var(--color-border)] flex items-center justify-center lg:justify-start gap-2 sm:gap-3 shadow-sm mx-auto lg:mx-0">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-primary)]" />
              Request in your area
            </button>
          </div>

          {/* Map Visualization */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center reveal overflow-visible">
            
            <style>
              {`
                @keyframes dashTrace {
                  to { stroke-dashoffset: -2000; }
                }
                .map-base path {
                  fill: rgba(0, 208, 132, 0.1) !important;
                  stroke: rgba(255, 255, 255, 0.05) !important;
                  stroke-width: 1px !important;
                }
                .map-trace path {
                  fill: transparent !important;
                  stroke: var(--color-primary) !important;
                  stroke-width: 3px !important;
                  stroke-dasharray: 200 2500;
                  stroke-linecap: round;
                  animation: dashTrace 8s linear infinite;
                  filter: drop-shadow(0 0 8px rgba(0,208,132,1));
                }
                .map-trace path:nth-child(even) {
                  animation-duration: 10s;
                  animation-direction: reverse;
                }
              `}
            </style>
            
            {/* India Map Graphic (Solid Base) */}
            <IndiaMap className="map-base absolute w-[105%] h-[105%] object-contain" />

            {/* India Map Graphic (SVG Tracing Border) */}
            <IndiaMap className="map-trace absolute w-[105%] h-[105%] object-contain opacity-90 pointer-events-none" />

            {/* Scanning Radar Effect centered on MP locations */}
            <div className="absolute w-[80%] h-[80%] md:w-[400px] md:h-[400px] rounded-full border border-[var(--color-primary)]/20 shadow-[0_0_50px_rgba(0,208,132,0.1)] overflow-hidden flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-0" style={{ top: '52%', left: '39%' }}>
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_70%,rgba(0,208,132,0.2)_100%)] animate-spin" style={{ animationDuration: '4s' }}></div>
              <div className="absolute w-1/2 h-1/2 rounded-full border border-[var(--color-primary)]/20"></div>
              <div className="absolute w-[5px] h-[5px] bg-[var(--color-primary)] rounded-full shadow-[0_0_10px_rgba(0,208,132,1)]"></div>
            </div>


            {/* Glowing Locations (Adjusted for MP roughly on the scaled map) */}
            {[
              { name: 'Indore', top: '53%', left: '38%' },
              { name: 'Ujjain', top: '49%', left: '38%' },
              { name: 'Dewas', top: '51%', left: '40%' },
              { name: 'Bhopal', top: '50%', left: '44%' },
              { name: 'Dhar', top: '54%', left: '35%' },
              { name: 'Khargone', top: '58%', left: '37%' },
            ].map((loc, i) => (
              <div key={i} className="absolute group cursor-pointer" style={{ top: loc.top, left: loc.left }}>
                {/* Ping Animation */}
                <div className="absolute inset-0 w-3 h-3 bg-[var(--color-primary)] rounded-full animate-ping opacity-75 -translate-x-1/2 -translate-y-1/2"></div>
                {/* Core Dot */}
                <div className="absolute w-3 h-3 bg-[var(--color-primary)] rounded-full shadow-[0_0_15px_rgba(0,208,132,0.8)] -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-150"></div>
                {/* Label */}
                <div className="absolute top-3 left-3 bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-primary)]/30 text-[var(--color-text-primary)] text-xs font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                  {loc.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Apps */}
      <section id="apps" className="min-h-[auto] lg:min-h-screen py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32 w-full relative overflow-hidden bg-[var(--color-surface)] flex flex-col justify-center border-t border-[var(--color-border)]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none"></div>

        <div className="text-center mb-8 sm:mb-16 reveal relative z-10">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-[10px] sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6 border border-[var(--color-primary)]/20">
            Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto text-[var(--color-text-primary)] leading-tight">
            One platform.<br/>
            <span className="text-[var(--color-text-secondary)] font-light">Two powerful apps.</span>
          </h2>
        </div>

        <div ref={appsScrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 lg:grid lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto w-full reveal [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* User App */}
          <div className="aspect-square w-[85vw] max-w-[320px] sm:w-full sm:max-w-none snap-center shrink-0 bg-gradient-to-br from-[var(--card-grad-1-from)] to-[var(--card-grad-1-to)] rounded-3xl lg:rounded-[40px] p-5 sm:p-10 lg:p-14 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all flex flex-col justify-between relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-[var(--color-primary)]/5 rounded-full blur-[40px] sm:blur-[80px] pointer-events-none"></div>
            
            <div>
              <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-3 sm:mb-8 border border-[var(--color-primary)]/20 shadow-lg group-hover:scale-110 transition-transform">
                <Droplets className="w-5 h-5 sm:w-8 sm:h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 text-[var(--color-text-primary)] leading-tight">Jaladhaara App</h3>
              <p className="text-[var(--color-text-secondary)] text-xs sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-10 max-w-md">For Farmers and Landowners. Book groundwater scanning, track rig location, and manage your borewell projects securely from your phone.</p>
            </div>

            <div className="flex flex-row flex-wrap gap-2 sm:gap-4 relative z-10 w-full mt-auto">
              <button className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-3 py-2 sm:px-6 sm:py-3.5 bg-white text-black rounded-lg sm:rounded-xl hover:bg-gray-100 transition-all font-semibold shadow-lg">
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-4 h-4 sm:w-6 sm:h-6"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="hidden sm:block text-[8px] sm:text-[10px] text-gray-600 font-medium mb-0.5">Download on the</span>
                  <span className="text-[10px] sm:text-sm font-bold">App Store</span>
                </div>
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-3 py-2 sm:px-6 sm:py-3.5 bg-white/5 border border-[var(--color-border)] text-[var(--color-text-primary)] rounded-lg sm:rounded-xl hover:bg-white/10 transition-all font-semibold shadow-lg">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4 sm:w-6 sm:h-6"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="hidden sm:block text-[8px] sm:text-[10px] text-[var(--color-text-secondary)] font-medium mb-0.5">GET IT ON</span>
                  <span className="text-[10px] sm:text-sm font-bold">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          {/* Expert App */}
          <div className="aspect-square w-[85vw] max-w-[320px] sm:w-full sm:max-w-none snap-center shrink-0 bg-gradient-to-br from-[var(--card-grad-2-from)] to-[var(--card-grad-2-to)] rounded-3xl lg:rounded-[40px] p-5 sm:p-10 lg:p-14 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all flex flex-col justify-between relative overflow-hidden group shadow-2xl">
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-[var(--color-accent)]/5 rounded-full blur-[40px] sm:blur-[80px] pointer-events-none"></div>
            
            <div>
              <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-3 sm:mb-8 border border-[var(--color-accent)]/20 shadow-lg group-hover:scale-110 transition-transform">
                <Crosshair className="w-5 h-5 sm:w-8 sm:h-8 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 text-[var(--color-text-primary)] leading-tight">Jaladhaara <span className="text-[var(--color-accent)] block sm:inline">Expert</span></h3>
              <p className="text-[var(--color-text-secondary)] text-xs sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-10 max-w-md">For Geologists and Drilling Teams. Access 3D scan data, navigate to exact coordinates, and update live project status from the field.</p>
            </div>

            <div className="flex flex-row flex-wrap gap-2 sm:gap-4 relative z-10 w-full mt-auto">
              <button className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-3 py-2 sm:px-6 sm:py-3.5 bg-white text-black rounded-lg sm:rounded-xl hover:bg-gray-100 transition-all font-semibold shadow-lg">
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-4 h-4 sm:w-6 sm:h-6"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="hidden sm:block text-[8px] sm:text-[10px] text-gray-600 font-medium mb-0.5">Download on the</span>
                  <span className="text-[10px] sm:text-sm font-bold">App Store</span>
                </div>
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-3 py-2 sm:px-6 sm:py-3.5 bg-white/5 border border-[var(--color-border)] text-[var(--color-text-primary)] rounded-lg sm:rounded-xl hover:bg-white/10 transition-all font-semibold shadow-lg">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4 sm:w-6 sm:h-6"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="hidden sm:block text-[8px] sm:text-[10px] text-[var(--color-text-secondary)] font-medium mb-0.5">GET IT ON</span>
                  <span className="text-[10px] sm:text-sm font-bold">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner / Reviews */}
      <section id="reviews" className="px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32 w-full pt-12 sm:pt-0 mb-8 sm:mb-24 reveal">
        <div className="relative rounded-3xl lg:rounded-[40px] overflow-hidden bg-[var(--color-bg)] border border-[var(--color-border)] p-8 sm:p-10 lg:p-16 grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-12 items-center shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img src={bottomBg} alt="Background" className="w-full h-full object-cover object-center lg:object-right" />
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[var(--color-bg)] from-40% lg:from-30% via-[var(--color-bg)]/80 lg:via-transparent to-transparent lg:to-70%"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-6 leading-tight">
              Let's find water <br className="hidden sm:block" /> where it matters.
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-6 sm:mb-10 text-sm sm:text-lg max-w-md">
              Don't leave your water security to chance. Partner with Jaladhaara for data-driven borewell drilling.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
              <button className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-[var(--color-primary)] text-[var(--color-bg)] font-bold text-sm sm:text-base hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-2">
                Request Borewell
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-white text-[var(--color-bg)] font-bold text-sm sm:text-base hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                Call Now
              </button>
            </div>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end pb-8 lg:pb-0">
            <div className="relative w-full max-w-[250px] sm:max-w-xs lg:max-w-sm aspect-square rounded-full bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent flex items-center justify-center border border-[var(--color-border)]">
              <Droplets className="w-20 h-20 lg:w-32 lg:h-32 text-[var(--color-primary)] opacity-50" />

              {/* Floating Testimonial */}
              <div className="absolute -left-2 sm:-left-8 lg:-left-24 -bottom-6 sm:bottom-4 lg:bottom-12 glass-panel p-3 sm:p-5 rounded-2xl w-[90%] sm:max-w-[280px] animate-float">
                <div className="flex gap-1 mb-1.5 sm:mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />)}
                </div>
                <p className="text-[10px] sm:text-sm text-[var(--color-text-primary)]/90 font-medium mb-2 sm:mb-3 leading-snug">"Jaladhaara found water where two previous attempts failed. Incredible technology!"</p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-500"></div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-bold leading-none">Ramesh Patel</div>
                    <div className="text-[9px] sm:text-[10px] text-[var(--color-text-secondary)] mt-0.5">Farmer, Gujarat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] pt-12 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32 w-full">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 sm:mb-16">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Droplets className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-primary)]" />
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tight">Jaladhaara</span>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm mb-6 leading-relaxed">
              Bringing cutting-edge technology and geological expertise to solve water scarcity for agriculture and industries.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"><Share2 className="w-5 h-5" /></a>
              <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"><Send className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">Press</a></li>
              <li><a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">Our Services</a></li>
              <li><a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">Service Areas</a></li>
              <li><a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">Technology</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 sm:pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-text-secondary)] text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Jaladhaara Borewell Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
            Designed with <Droplets className="w-4 h-4 text-[var(--color-primary)]" /> for the future.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
