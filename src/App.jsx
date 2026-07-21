import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import bottomBg from './assets/bottom.png';
import heroBg from './assets/hero_new.png';
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

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
    <div className="min-h-screen text-[var(--color-text-primary)] font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100svh] lg:min-h-screen flex flex-col lg:justify-center overflow-hidden bg-[var(--color-bg)] pb-12 lg:pb-0">
        {/* Background Image - Full height on all screens */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img src={heroBg} alt="Borewell Machine" className="w-full h-full object-cover object-[75%_center] lg:object-center" />
          {/* Gradient Overlay (Hidden on Mobile) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ background: 'var(--hero-overlay)' }}></div>
        </div>

        {/* Content Container */}
        <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32 relative z-10 flex-1 flex flex-col pt-32 pb-8 lg:py-0">
          <div className="w-full flex-1 grid lg:grid-cols-12 gap-6 sm:gap-8">
            <div className="lg:col-span-8 flex flex-col justify-between lg:justify-center items-start reveal lg:py-24 relative h-full">
              {/* Text Block */}
              <div className="w-full bg-white/70 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-5 sm:p-8 lg:p-0 rounded-3xl lg:rounded-none border border-white/40 lg:border-none shadow-xl shadow-black/5 lg:shadow-none mb-6 lg:mb-0">
                <div className="text-[var(--color-primary)] text-[9px] sm:text-sm font-extrabold uppercase tracking-[0.15em] mb-2 sm:mb-8 drop-shadow-sm">
                  EXPLORING AND PROTECTING OUR GROUNDWATER
                </div>

                <h1 className="text-[26px] sm:text-4xl lg:text-[45px] xl:text-[55px] font-black leading-[1.25] lg:leading-[1.1] tracking-tight mb-3 sm:mb-8 text-[var(--color-text-primary)] font-display">
                  <span className="block mb-1 lg:mb-2">India's First</span>
                  <span className="block mb-1 lg:mb-2 text-[var(--color-primary)] lg:text-white lg:drop-shadow-md">End-to-End Groundwater</span>
                  <span className="block">Solution Platform</span>
                </h1>

                <p className="text-[13px] sm:text-xl text-[var(--color-text-secondary)] mb-2 sm:mb-12 max-w-2xl leading-[1.6] sm:leading-[1.7] font-medium lg:font-normal">
                  India's Groundwater Experts at Your Fingertips. Find, connect, survey, and protect our vital resources with verified professionals.
                </p>
              </div>

              {/* Action Block */}
              <div className="w-full mt-auto lg:mt-12 pt-12 lg:pt-0">
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
                  {['FIND', 'CONNECT', 'SURVEY', 'PROTECT'].map((word, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white border border-[var(--color-border)] shadow-sm">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                        <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-primary)]" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-[var(--color-text-primary)] tracking-wider">{word}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                  <button className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-xl bg-[var(--color-primary)] text-white font-bold text-sm sm:text-base hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-2 group shadow-lg shadow-[var(--color-primary)]/20">
                    Download App Now
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-xl bg-white border border-[var(--color-border)] text-[var(--color-text-primary)] font-bold text-sm sm:text-base hover:bg-[var(--color-surface)] transition-all flex items-center justify-center gap-3 group shadow-sm">
                    How It Works
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--color-text-primary)] transition-colors">
                      <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-0.5 fill-current" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 relative h-full min-h-[400px] hidden lg:block reveal animate-fade-up-delay-2">


              {/* Floating Stats */}
              <div className="absolute bottom-12 -left-8 bg-[var(--color-surface)] p-5 rounded-2xl border border-[var(--color-border)] shadow-2xl animate-float-slow flex items-start gap-4">
                <div>
                  <div className="text-xs text-[var(--color-text-secondary)] font-medium mb-1">Scientific Surveys</div>
                  <div className="text-3xl font-bold font-display text-[var(--color-text-primary)] mb-1">100%</div>
                  <div className="text-[10px] text-[var(--color-text-secondary)]">Verified Professionals</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Services Section */}
      <section id="services" className="min-h-[auto] lg:min-h-screen py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32 w-full relative overflow-hidden bg-[var(--color-surface)] flex flex-col justify-center rounded-t-[40px] lg:rounded-t-[60px] -mt-8 lg:-mt-12 z-20 border-t border-[var(--color-border)] shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold uppercase tracking-wider mb-6 border border-[var(--color-primary)]/20">
            Sectors We Serve
          </div>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 reveal flex-grow content-start sm:content-center">
          {[
            { img: imgAgri, title: "Agriculture", desc: "Connect with experts for scientific site selection to ensure reliable irrigation and support rural development." },
            { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", title: "Residential", desc: "Book verified professionals for groundwater detection for homes, apartments, and real estate projects." },
            { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", title: "Commercial", desc: "Access top surveyors for infrastructure development, commercial complexes, hospitals, and educational institutions." },
            { img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", title: "Industrial", desc: "Comprehensive groundwater resource assessment and digital documentation for large-scale mining and industrial plants." }
          ].map((srv, i) => (
            <div key={i} className="bg-[var(--color-surface)] backdrop-blur-xl rounded-2xl sm:rounded-[32px] overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:-translate-y-2 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-[#0077B6]/15 flex flex-col h-full">
              <div className="w-full h-32 sm:h-48 md:h-64 lg:h-[220px] xl:h-[260px] relative overflow-hidden shrink-0 border-b border-[var(--color-border)]">
                <img src={srv.img} alt={srv.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-4 sm:p-6 lg:p-8 relative z-10 flex-grow flex flex-col justify-start bg-white">
                <h3 className="text-sm sm:text-2xl lg:text-2xl font-bold mb-1 sm:mb-3 text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors leading-tight">{srv.title}</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-[10px] sm:text-sm lg:text-base line-clamp-3 sm:line-clamp-none">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works For Users */}
      <section id="why-us" className="min-h-[auto] lg:min-h-screen py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32 w-full relative overflow-hidden flex flex-col justify-center">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold uppercase tracking-wider mb-6 border border-[var(--color-primary)]/20">
            For Users
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto text-[var(--color-text-primary)]">
            Find Trusted Experts<br />
            <span className="text-[var(--color-text-secondary)] font-light">in Minutes.</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-4 text-sm sm:text-lg">Everything you need for groundwater solutions - in one app.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 reveal mb-16 max-w-6xl mx-auto w-full">
          {[
            { step: '1', title: 'Download App', desc: 'Get the  from Play Store or App Store.' },
            { step: '2', title: 'Select Service', desc: 'Choose the type of groundwater survey you need.' },
            { step: '3', title: 'Connect', desc: 'Get connected with a verified expert in your area.' },
            { step: '4', title: 'Receive Report', desc: 'Get a professional survey report digitally.' }
          ].map((item, i) => (
            <div key={i} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-6 sm:p-8 text-center hover:border-[var(--color-primary)]/50 hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-[#0077B6]/10 hover:shadow-2xl hover:shadow-[#0077B6]/20">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-[var(--color-primary)] text-[var(--color-bg)] font-black flex items-center justify-center text-2xl mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-transform">{item.step}</div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)] mb-3">{item.title}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 max-w-5xl mx-auto reveal mb-16">
          {['Verified Experts', 'Accurate Reports', 'Transparent Pricing', 'Fast Service', 'Digital Reports', 'Secure & Reliable'].map((benefit, i) => (
            <div key={i} className="flex items-center justify-center sm:justify-start gap-3 p-4 sm:p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-lg hover:shadow-xl shadow-[#0077B6]/5 transition-shadow">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary)] shrink-0" />
              <span className="text-xs sm:text-base font-bold text-[var(--color-text-primary)]">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto reveal text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[var(--color-text-primary)]">Who Can Benefit?</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['Farmers', 'Home Owners', 'Industries', 'Builders', 'Institutions'].map((userType, i) => (
              <div key={i} className="px-5 py-2.5 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-sm sm:text-base font-semibold text-[var(--color-text-primary)] shadow-sm">
                {userType}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Experts Section */}
      <section id="experts" className="py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32 w-full relative overflow-hidden bg-[var(--color-surface)] border-t border-b border-[var(--color-border)]">
        <div className="text-center mb-12 sm:mb-20 reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-bold uppercase tracking-wider mb-6 border border-[var(--color-accent)]/20">
            For Professionals
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto text-[var(--color-text-primary)] leading-[1.2]">
            Join India's first groundwater experts Network<br />
            <span className="text-[var(--color-text-secondary)] font-light">Groundwater Expert Network.</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-6 text-base sm:text-xl">Grow your business. Make a bigger impact.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 max-w-6xl mx-auto items-start reveal">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Why Join Us?</h3>
            <div className="grid gap-4 sm:gap-6">
              {[
                { title: 'More Client Leads', desc: 'Get connected with verified customers across India.' },
                { title: 'Digital Profile', desc: 'Showcase your expertise, services & experience.' },
                { title: 'Secure Payments', desc: 'Receive payments digitally & securely.' },
                { title: 'Business Growth', desc: 'Expand your business with more opportunities.' }
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition-all shadow-lg hover:shadow-xl shadow-[#0077B6]/5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center shrink-0">
                    <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-accent)] rotate-180" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1 text-[var(--color-text-primary)]">{b.title}</h4>
                    <p className="text-[var(--color-text-secondary)] text-xs sm:text-sm">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
              <h3 className="text-xl sm:text-2xl font-bold mb-5 text-[var(--color-text-primary)]">Who Can Join?</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['Hydrogeologists', 'Geophysicists', 'Water Resource Consultants', 'Other Groundwater Professionals'].map((prof, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-xs sm:text-sm font-medium shadow-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" />
                    {prof}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-bg)] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 border border-[var(--color-border)] shadow-2xl shadow-[#0077B6]/15 order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-[var(--color-text-primary)]">How It Works for Experts</h3>
            <div className="space-y-4 sm:space-y-6 relative before:absolute before:inset-0 before:ml-[1.4rem] sm:before:ml-[1.9rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-border)] before:to-transparent">
              {[
                { step: 1, title: 'Create Your Profile' },
                { step: 2, title: 'Get Service Requests' },
                { step: 3, title: 'Connect & Provide Service' },
                { step: 4, title: 'Receive Secure Payments' }
              ].map((s, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full border-[4px] border-[var(--color-bg)] bg-[var(--color-accent)] text-black font-black text-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
                    {s.step}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-md text-left md:text-center">
                    <div className="font-bold text-sm sm:text-base text-[var(--color-text-primary)]">{s.title}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 h-14 sm:h-16 rounded-2xl bg-[var(--color-primary)] text-white font-bold text-base sm:text-lg hover:bg-[var(--color-primary-hover)] transition-all shadow-xl shadow-[var(--color-primary)]/20">
              Join As Expert Today
            </button>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      {false && (
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
                  <div key={i} className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-black/5 border border-[var(--color-border)] text-[var(--color-text-secondary)] font-medium text-xs sm:text-lg flex items-center gap-1.5 sm:gap-2 shadow-sm">
                    <MapPin className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[var(--color-primary)]" />
                    {area}
                  </div>
                ))}
                <div className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 text-[var(--color-primary)] font-bold text-xs sm:text-lg shadow-sm">
                  + Expanding rapidly
                </div>
              </div>
              <button className="h-12 sm:h-14 px-6 sm:px-10 rounded-full bg-black/5 text-[var(--color-text-primary)] font-bold text-sm sm:text-lg hover:bg-black/10 transition-all border border-[var(--color-border)] flex items-center justify-center lg:justify-start gap-2 sm:gap-3 shadow-sm mx-auto lg:mx-0">
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
      )}

      {/* Ecosystem Apps */}
      <section id="apps" className="min-h-[auto] lg:min-h-screen py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32 w-full relative overflow-hidden bg-[var(--color-surface)] flex flex-col justify-center border-t border-[var(--color-border)]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none"></div>

        <div className="text-center mb-8 sm:mb-16 reveal relative z-10">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-[10px] sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6 border border-[var(--color-primary)]/20">
            Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto text-[var(--color-text-primary)] leading-tight">
            One platform.<br />
            <span className="text-[var(--color-text-secondary)] font-light">Two powerful apps.</span>
          </h2>
        </div>

        <div ref={appsScrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 lg:grid lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto w-full reveal [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* User App */}
          <div className="aspect-square w-[85vw] max-w-[320px] sm:w-full sm:max-w-none snap-center shrink-0 bg-gradient-to-br from-[#0077B6] to-[#023E8A] backdrop-blur-2xl rounded-3xl lg:rounded-[40px] p-5 sm:p-10 lg:p-14 border border-[#0096C7]/30 hover:border-[#48CAE4]/50 transition-all flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-[#023E8A]/30">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-[40px] sm:blur-[80px] pointer-events-none"></div>

            <div>
              <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center mb-3 sm:mb-8 border border-white/30 shadow-lg group-hover:scale-110 transition-transform backdrop-blur-md">
                <Droplets className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 text-white leading-tight">Jaladhaara</h3>
              <p className="text-white/80 text-xs sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-10 max-w-md">For Farmers and Landowners. Book groundwater scanning and manage your borewell projects securely from your phone.</p>
            </div>

            <div className="flex flex-row flex-wrap gap-2 sm:gap-4 relative z-10 w-full mt-auto">
              <button className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-3 py-2 sm:px-6 sm:py-3.5 bg-black text-white rounded-lg sm:rounded-xl hover:bg-gray-800 transition-all font-semibold shadow-lg">
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-4 h-4 sm:w-6 sm:h-6"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="hidden sm:block text-[8px] sm:text-[10px] text-gray-400 font-medium mb-0.5">Download on the</span>
                  <span className="text-[10px] sm:text-sm font-bold">App Store</span>
                </div>
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-3 py-2 sm:px-6 sm:py-3.5 bg-white/10 border border-white/20 text-white rounded-lg sm:rounded-xl hover:bg-white/20 transition-all font-semibold shadow-lg">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4 sm:w-6 sm:h-6"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="hidden sm:block text-[8px] sm:text-[10px] text-white/70 font-medium mb-0.5">GET IT ON</span>
                  <span className="text-[10px] sm:text-sm font-bold">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          {/* Expert App */}
          <div className="aspect-square w-[85vw] max-w-[320px] sm:w-full sm:max-w-none snap-center shrink-0 bg-gradient-to-br from-[#0077B6] to-[#023E8A] backdrop-blur-2xl rounded-3xl lg:rounded-[40px] p-5 sm:p-10 lg:p-14 border border-[#0096C7]/30 hover:border-[#48CAE4]/50 transition-all flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-[#023E8A]/30">
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-[40px] sm:blur-[80px] pointer-events-none"></div>

            <div>
              <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center mb-3 sm:mb-8 border border-white/30 shadow-lg group-hover:scale-110 transition-transform backdrop-blur-md">
                <Crosshair className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 text-white leading-tight">Jaladhaara <span className="text-[#90E0EF] block sm:inline">Expert</span></h3>
              <p className="text-white/80 text-xs sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-10 max-w-md">For Geologists and Drilling Teams. Access 3D scan data, navigate to exact coordinates, and update live project status from the field.</p>
            </div>

            <div className="flex flex-row flex-wrap gap-2 sm:gap-4 relative z-10 w-full mt-auto">
              <button className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-3 py-2 sm:px-6 sm:py-3.5 bg-black text-white rounded-lg sm:rounded-xl hover:bg-gray-800 transition-all font-semibold shadow-lg">
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-4 h-4 sm:w-6 sm:h-6"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="hidden sm:block text-[8px] sm:text-[10px] text-gray-400 font-medium mb-0.5">Download on the</span>
                  <span className="text-[10px] sm:text-sm font-bold">App Store</span>
                </div>
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-3 py-2 sm:px-6 sm:py-3.5 bg-white/10 border border-white/20 text-white rounded-lg sm:rounded-xl hover:bg-white/20 transition-all font-semibold shadow-lg">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4 sm:w-6 sm:h-6"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="hidden sm:block text-[8px] sm:text-[10px] text-white/70 font-medium mb-0.5">GET IT ON</span>
                  <span className="text-[10px] sm:text-sm font-bold">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner / Reviews */}
      <section id="reviews" className="min-h-[auto] lg:min-h-screen py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32 w-full relative overflow-hidden flex flex-col justify-center reveal">
        <div className="relative w-full rounded-3xl lg:rounded-[40px] overflow-hidden bg-[var(--color-bg)] border border-[var(--color-border)] p-8 sm:p-10 lg:p-16 grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-12 items-center shadow-2xl shadow-[#0077B6]/15">
          <div className="absolute inset-0 z-0">
            <img src={heroBg} alt="Team Background" className="w-full h-full object-cover object-[75%_center] lg:object-center" />
          </div>

          <div className="relative z-10 bg-white/70 backdrop-blur-md p-5 sm:p-6 lg:p-8 rounded-3xl border border-white/50 shadow-xl shadow-black/5 max-w-sm lg:max-w-md">
            <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-extrabold mb-2 sm:mb-4 leading-tight text-[var(--color-text-primary)] drop-shadow-sm">
              Download the App <br className="hidden sm:block" /> and Get Started.
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-5 sm:mb-8 text-[13px] sm:text-base max-w-[280px] sm:max-w-xs font-medium leading-relaxed">
              Find, connect, survey, India's first groundwater surveys booking platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full">
              <button className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-xl bg-[var(--color-primary)] text-white font-bold text-sm sm:text-base hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-3 shadow-lg">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
                Google Play
              </button>
              <button className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-xl bg-black text-white font-bold text-sm sm:text-base hover:bg-gray-800 transition-all flex items-center justify-center gap-3 shadow-lg">
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                App Store
              </button>
            </div>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end pb-8 lg:pb-0">
            <div className="relative w-full lg:max-w-sm lg:aspect-square lg:rounded-full lg:bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent flex items-center justify-center border-none lg:border border-[var(--color-border)] mt-8 lg:mt-0">
              <Droplets className="w-20 h-20 lg:w-32 lg:h-32 text-[var(--color-primary)] opacity-50 hidden lg:block" />

              {/* Floating Expert Testimonial */}
              <div className="relative lg:absolute lg:-left-32 lg:-top-16 glass-panel p-5 rounded-2xl w-full max-w-[300px] lg:max-w-[280px] animate-float-slow z-20 mx-auto shadow-2xl">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[var(--color-primary)] text-[var(--color-primary)]" />)}
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-primary)]/90 font-medium mb-3 sm:mb-4 leading-snug">"As a professional, Jaladhaara has completely transformed how I get survey requests. It's seamless and highly reliable!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold leading-none">Vikram Singh</div>
                    <div className="text-[10px] sm:text-[11px] text-[var(--color-text-secondary)] mt-1">Senior Geologist, Indore</div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Request / Contact Form Section */}
      <section id="request" className="py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32 w-full relative overflow-hidden flex flex-col justify-center reveal">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold uppercase tracking-wider mb-6 border border-[var(--color-primary)]/20">
            Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto text-[var(--color-text-primary)]">
            Find help for your queries here
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-4 text-sm sm:text-lg">Fill out the form below and our team will get back to you.</p>
        </div>

        <div className="max-w-2xl mx-auto w-full bg-[var(--color-surface)] backdrop-blur-xl rounded-[32px] p-8 sm:p-12 border border-[var(--color-border)] shadow-2xl shadow-[#0077B6]/15">
          <form action="mailto:info@jaladhaaraapp.in" method="POST" encType="text/plain" className="space-y-5 sm:space-y-6">

            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-[var(--color-text-primary)]">Name <span className="text-[var(--color-primary)]">*</span></label>
              <input type="text" id="name" name="Name" required placeholder="Enter your name" className="w-full px-5 py-4 rounded-xl bg-white/60 border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all placeholder:text-gray-400 text-[var(--color-text-primary)] shadow-inner" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-[var(--color-text-primary)]">Email Address <span className="text-[var(--color-primary)]">*</span></label>
                <input type="email" id="email" name="Email" required placeholder="Enter your email" className="w-full px-5 py-4 rounded-xl bg-white/60 border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all placeholder:text-gray-400 text-[var(--color-text-primary)] shadow-inner" />
              </div>
              <div className="space-y-2">
                <label htmlFor="mobile" className="text-sm font-bold text-[var(--color-text-primary)]">Mobile Number <span className="text-[var(--color-primary)]">*</span></label>
                <input type="tel" id="mobile" name="Mobile" required placeholder="Enter your mobile number" className="w-full px-5 py-4 rounded-xl bg-white/60 border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all placeholder:text-gray-400 text-[var(--color-text-primary)] shadow-inner" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="userType" className="text-sm font-bold text-[var(--color-text-primary)]">You are a <span className="text-[var(--color-primary)]">*</span></label>
              <div className="relative">
                <select id="userType" name="UserType" required defaultValue="" className="w-full px-5 py-4 rounded-xl bg-white/60 border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all appearance-none text-[var(--color-text-primary)] cursor-pointer shadow-inner">
                  <option value="" disabled>-select-</option>
                  <option value="Customer">Customer </option>
                  <option value="Expert">Expert</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-[var(--color-text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="comment" className="text-sm font-bold text-[var(--color-text-primary)]">Comment <span className="text-[var(--color-primary)]">*</span></label>
              <textarea id="comment" name="Comment" required rows="4" placeholder="Enter your comment" className="w-full px-5 py-4 rounded-xl bg-white/60 border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all placeholder:text-gray-400 text-[var(--color-text-primary)] resize-none shadow-inner"></textarea>
            </div>

            <button type="submit" className="w-full py-4 mt-2 rounded-xl bg-[var(--color-primary)] text-white font-bold text-lg hover:bg-[var(--color-primary-hover)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              Submit
            </button>
          </form>
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
              Jaladhaara Groundwater Survey Pvt Ltd.<br />
              Exploring and protecting our groundwater through India's first digital survey platform.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"><Share2 className="w-5 h-5" /></a>
              <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"><Send className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[var(--color-text-primary)]">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">About Us</a></li>
              <li><a href="#services" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">Our Services</a></li>
              <li><a href="#experts" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">For Experts</a></li>
              <li><a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <h4 className="font-bold mb-6 text-[var(--color-text-primary)]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  2-41/13/PMR/5F, 5th Floor, MELKIORS PRIDE,<br />
                  Khanamet, Hitex road, Hyderabad, Telangana 500081
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@jaladhaaraapp.in" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-xs sm:text-sm transition-colors break-all">
                    info@jaladhaaraapp.in</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 sm:pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-text-secondary)] text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Jaladhaara Groundwater Survey Pvt Ltd. All rights reserved.
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
