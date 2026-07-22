import React, { useEffect, useRef, useState } from 'react';
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
import cardAgri from './assets/Agriculture .png';
import cardRes from './assets/Residential.png';
import cardCom from './assets/Commercial.png';
import cardInd from './assets/Industrial.png';
import indiaMap from './assets/india_map.svg';
import IndiaMap from './IndiaMap';
import Navbar from './features/landing-page/components/Navbar';
import Logo from './components/ui/Logo';
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
  Play,
  X,
  ChevronDown
} from 'lucide-react';

const faqs = [
  {
    q: "What is Jaladhaara?",
    a: "Jaladhaara is India's first dedicated groundwater survey booking platform that connects customers with verified and trained experts for conducting scientific borewell surveys."
  },
  {
    q: "How do i book a groundwater survey?",
    a: "Simply download the Jaladhaara app, select your location, choose a verified expert, confirm booking."
  },
  {
    q: "Who can use Jaladhaara app?",
    a: "Jaladhaara is designed for farmers, home owners, industries, commercial real estate developers, institutions and anyone planning to drill a borewell."
  },
  {
    q: "What survey methods are available?",
    a: "Our experts conduct Geophysical Investigations using advanced scientific methods such as Electrical resistivity, PQWT, ADMT, 3D locator and other approved groundwater survey techniques depending on the site requirements."
  },
  {
    q: "Can Jaladhaara guarantee borewell success?",
    a: "No. Groundwater occurence depends on natural geological conditions. Jaladhaara only connects customers with verified experts who use geoscientific survey methods to improve borewell planning."
  },
  {
    q: "How are experts verified?",
    a: "Experts undergo a verification process based on their qualification, field experience, years of service, identity, and other documents before joining the platform."
  },
  {
    q: "How do I pay for the survey?",
    a: "Payments are made securely through the Jaladhaara app using the available online payment options."
  },
  {
    q: "Will I receive a survey report?",
    a: "Yes. The expert will provide a digital survey report through the Jaladhaara platform after completing the survey."
  },
  {
    q: "Can groundwater survey experts join Jaladhaara?",
    a: "Yes. Qualified, trained and eligible groundwater survey professionals can register through the Jaladhaara Expert app and complete the verification process."
  },
  {
    q: "Which sectors does Jaladhaara serve?",
    a: "Jaladhaara provides bookings for groundwater survey services for\n1.Agriculture\n2.Residential\n3.Industrial\n4.Commercial (including open plot ventures, gated communities, and real estate developments)"
  },
  {
    q: "Is Jaladhaara available across India?",
    a: "Jaladhaara is building a nationwide network of verified and trained groundwater survey experts to customers across India."
  },
  {
    q: "How can I contact Jaladhaara?",
    a: "You can contact us through Jaladhaara app, website, email, phone or WhatsApp for booking assistance and support."
  }
];

function FaqItem({ faq, isOpen, onClick }) {
  const contentRef = useRef(null);
  
  return (
    <div className="border border-[var(--color-border)] bg-[var(--color-surface)] backdrop-blur-md rounded-2xl mb-4 overflow-hidden shadow-sm transition-all duration-300">
      <button 
        onClick={onClick} 
        className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/50"
      >
        <span className="font-bold text-[var(--color-text-primary)] pr-4 text-sm sm:text-base">{faq.q}</span>
        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[var(--color-bg)] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[var(--color-primary)] text-white' : 'text-[var(--color-text-secondary)]'}`}>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </button>
      <div 
        className="transition-all duration-300 ease-in-out px-5 sm:px-6"
        style={{ 
          maxHeight: isOpen ? contentRef.current?.scrollHeight + 40 + 'px' : '0px',
          opacity: isOpen ? 1 : 0,
          paddingBottom: isOpen ? '1.25rem' : '0'
        }}
        ref={contentRef}
      >
        <div className="text-[var(--color-text-secondary)] text-sm sm:text-base leading-relaxed whitespace-pre-wrap pt-2">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

function App() {
  const appsScrollRef = useRef(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

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
        {/* Gradient Background */}
        <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-br from-[#E2F2FC] via-[#F4F9FF] to-[#7FCDFF]/30">
          {/* Decorative blur blobs */}
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-[var(--color-accent)] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] bg-[var(--color-primary)] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32 relative z-10 flex-1 flex flex-col pt-32 pb-8 lg:py-0">
          <div className="w-full flex-1 grid lg:grid-cols-12 gap-6 sm:gap-8">
            <div className="lg:col-span-8 flex flex-col justify-center items-start reveal py-12 lg:py-24 relative h-full">
              {/* Text Block */}
              <div className="w-full bg-white/70 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-5 sm:p-8 lg:p-0 rounded-3xl lg:rounded-none border border-white/40 lg:border-none shadow-xl shadow-black/5 lg:shadow-none mb-6 lg:mb-0">
                <div className="text-[var(--color-primary)] text-[9px] sm:text-sm font-extrabold uppercase tracking-[0.15em] mb-2 sm:mb-8 drop-shadow-sm">
                  EXPLORING AND PROTECTING OUR GROUNDWATER
                </div>

                <h1 className="text-[26px] sm:text-4xl lg:text-[45px] xl:text-[55px] font-black leading-[1.25] lg:leading-[1.1] tracking-tight mb-3 sm:mb-8 text-[var(--color-text-primary)] font-display">
                  <span className="block mb-1 lg:mb-2">India's Trusted Platform to</span>
                  <span className="block mb-1 lg:mb-2 text-[var(--color-primary)] lg:drop-shadow-sm">Book Verified Groundwater</span>
                  <span className="block">Survey Experts</span>
                </h1>

                <p className="text-[13px] sm:text-xl text-[var(--color-text-secondary)] mb-2 sm:mb-6 max-w-2xl leading-[1.6] sm:leading-[1.7] font-medium lg:font-normal">
                  India's Groundwater Experts at Your Fingertips. Find, connect, survey, and protect our vital resources with verified professionals.
                </p>
              </div>

              {/* Action Block */}
              <div className="w-full mt-6 lg:mt-6 pt-4 lg:pt-0">
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
            { img: cardAgri, title: "Agriculture", desc: "Connect with experts for scientific site selection to ensure reliable irrigation and support rural development." },
            { img: cardRes, title: "Residential", desc: "Book verified professionals for groundwater detection for homes, apartments, and real estate projects." },
            { img: cardCom, title: "Commercial", desc: "Access top surveyors for infrastructure development, commercial complexes, hospitals, and educational institutions." },
            { img: cardInd, title: "Industrial", desc: "Comprehensive groundwater resource assessment and digital documentation for large-scale mining and industrial plants." }
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
            <span className="block mt-4 text-lg sm:text-xl lg:text-2xl text-[var(--color-text-secondary)] font-medium leading-[1.5]">Be part of India's growing community of verified hydrogeologists, geophysicists, and groundwater survey professionals.</span>
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
              <p className="text-white/80 text-xs sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-10 max-w-md">Find and book verified groundwater survey experts near  you for agricultural,  residential, industrial and commercial needs.</p>
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
              <p className="text-white/80 text-xs sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-10 max-w-md">A dedicated app for verified groundwater experts to manage bookings, conduct surveys, submit digital reports with ease and build trusted professional profile</p>
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

      {/* FAQ Section */}
      <section id="faqs" className="py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32 w-full relative overflow-hidden flex flex-col justify-center bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="text-center mb-10 sm:mb-16 reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-bold uppercase tracking-wider mb-6 border border-[var(--color-primary)]/20">
            FAQs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto text-[var(--color-text-primary)]">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto w-full reveal">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index} 
              faq={faq} 
              isOpen={openFaqIndex === index} 
              onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} 
            />
          ))}
        </div>
      </section>

      {/* Request / Contact Form Section */}
      <section id="request" className="py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32 w-full relative overflow-hidden flex flex-col justify-center reveal bg-[var(--color-bg)]">
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
            <div className="mb-4 sm:mb-6">
              <Logo />
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm mb-6 leading-relaxed">
              Jaladhaara simplifies groundwater surveys by connecting customers with verified experts through secure booking, digital reports, and scientific survey methods.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/jaladhaara_groundwatersurvey?utm_source=qr&igsh=MWVoeDQwcnZ1YzU1OA==" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[#E1306C] transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://youtube.com/@jaladhaaragroundwatersurvey?si=4AdCDECSZdqOP6Cs" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[#FF0000] transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="https://www.facebook.com/share/1Dpw3CdKWk/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[#1877F2] transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/jaladhaara-groundwater-survey-pvt-ltd-097617350?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[#0A66C2] transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="https://x.com/jaladhaara" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[#1DA1F2] transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[var(--color-text-primary)]">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" onClick={(e) => { e.preventDefault(); setIsAboutModalOpen(true); }} className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">About Us</a></li>
              <li><a href="#services" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">Our Services</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setIsTermsModalOpen(true); }} className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">Terms & Conditions</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setIsPrivacyModalOpen(true); }} className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors">Privacy Policy</a></li>
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

      {/* About Us Modal */}
      {isAboutModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsAboutModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)]">About Us</h2>
              <button 
                onClick={() => setIsAboutModalOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Modal Body */}
            <div 
              className="p-6 sm:p-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              data-lenis-prevent="true"
            >
              <div className="space-y-8 text-[var(--color-text-secondary)] leading-relaxed text-sm sm:text-base">
                
                {/* Mission & Vision */}
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="bg-[var(--color-bg)] p-6 rounded-2xl border border-[var(--color-border)]">
                    <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3 flex items-center gap-2">
                      <Crosshair className="w-5 h-5" /> Our Mission
                    </h3>
                    <p>Our mission is to become India's most trusted groundwater survey booking platform by connecting customers with verified groundwater experts through technology for informed and reliable borewell planning.</p>
                  </div>
                  <div className="bg-[var(--color-bg)] p-6 rounded-2xl border border-[var(--color-border)]">
                    <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3 flex items-center gap-2">
                      <Activity className="w-5 h-5" /> Our Vision
                    </h3>
                    <p>Our vision is to revolutionize groundwater survey services by building a trusted nationwide network of verified and trained groundwater experts and empowering every borewell decision through scientific surveys and sustainable groundwater management.</p>
                  </div>
                </div>

                {/* Why Jaladhaara */}
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">Why Jaladhaara</h3>
                  <p className="bg-blue-50/50 p-6 rounded-2xl">
                    Jaladhaara is India's first dedicated groundwater survey booking platform, connecting customers with verified and trained groundwater experts through a transparent, technology driven, and seamless booking experience. We make scientific groundwater surveys more accessible, reliable and convenient for agricultural, residential, industrial and commercial projects.
                  </p>
                </div>

                {/* Key Highlights */}
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">Key highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Verified groundwater survey experts',
                      'Scientific survey methods',
                      'Easy online booking',
                      'Transparent pricing',
                      'Secure digital payments',
                      'Digital survey reports',
                      'Pan india expert network',
                      'Dedicated customer support'
                    ].map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                        <span className="font-medium text-[var(--color-text-primary)]">{index + 1}. {highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Founder History */}
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">Founder history</h3>
                  <p className="leading-[1.8]">
                    Jaladhaara was founded by Bommala Anjaiah, a postgraduate in Geophysics, with a vision to transform how groundwater survey services are accessed in India. Through years of observing the challenges faced by farmers, homeowners, industries, and groundwater professionals, he recognized the need for a transparent, technology-driven platform that connects customers with verified groundwater survey experts. This vision led to the creation of Jaladhaara—India's first dedicated groundwater survey booking platform, committed to making scientific borewell surveys more accessible, reliable, and trustworthy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {isTermsModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsTermsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)]">Terms & Conditions</h2>
              <button 
                onClick={() => setIsTermsModalOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div 
              className="p-6 sm:p-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              data-lenis-prevent="true"
            >
              <div className="space-y-6 text-[var(--color-text-secondary)] leading-relaxed text-sm sm:text-base">
                <p><strong>Effective Date:</strong> July 22, 2026</p>
                <p>Welcome to Jaladhaara Groundwater Survey Pvt. Ltd. ("Jaladhaara", "we", "our", or "us"). These Terms & Conditions govern your access to and use of the Jaladhaara website and mobile applications. By accessing or using our platform, you agree to comply with and be bound by these Terms & Conditions.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">1. About Jaladhaara</h3>
                <p>Jaladhaara is India's dedicated groundwater survey booking platform that connects customers with verified groundwater survey experts. Jaladhaara facilitates service bookings, communication, and digital payments through its platform. Unless expressly stated, Jaladhaara does not directly perform groundwater surveys or borewell drilling services.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">2. User Eligibility</h3>
                <p>You must be legally eligible to enter into a binding agreement under applicable laws to use our platform and services.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">3. Booking Services</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Customers can book groundwater survey services through the Jaladhaara platform.</li>
                  <li>All bookings are subject to expert availability and service area coverage.</li>
                  <li>Booking confirmation is provided only after successful payment and confirmation through the platform.</li>
                </ul>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">4. Expert Verification</h3>
                <p>Jaladhaara verifies experts based on the documents and information submitted during the onboarding process. Verification is intended to improve trust and transparency; however, it should not be interpreted as a guarantee of the outcome of any survey or service.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">5. Payments</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Payments must be made using the payment methods available on the Jaladhaara platform.</li>
                  <li>Applicable charges, taxes, and service fees will be displayed before booking confirmation.</li>
                  <li>Refunds, cancellations, and rescheduling are governed by Jaladhaara's Refund and Cancellation Policy.</li>
                </ul>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">6. User Responsibilities</h3>
                <p>Users agree to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide accurate and complete booking information.</li>
                  <li>Provide the correct survey location and contact details.</li>
                  <li>Cooperate with the assigned expert during the survey.</li>
                  <li>Make payments as required.</li>
                  <li>Use the platform lawfully and responsibly.</li>
                </ul>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">7. Expert Responsibilities</h3>
                <p>Experts using the platform agree to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide professional groundwater survey services.</li>
                  <li>Maintain accurate profile information.</li>
                  <li>Follow applicable laws, professional standards, and ethical practices.</li>
                  <li>Submit survey reports through the Jaladhaara platform where applicable.</li>
                </ul>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">8. No Guarantee of Groundwater or Borewell Success</h3>
                <p>Groundwater availability depends on natural geological conditions that cannot be predicted with absolute certainty.</p>
                <p>Jaladhaara and its verified experts use scientific groundwater survey methods to assist in identifying suitable borewell locations. However, Jaladhaara does not guarantee groundwater availability, borewell success, drilling outcomes, water yield, or water quality. Final drilling decisions remain the responsibility of the customer.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">9. Platform Availability</h3>
                <p>We strive to provide uninterrupted access to our website and mobile applications. However, Jaladhaara does not guarantee continuous availability and may temporarily suspend services for maintenance, upgrades, or technical reasons.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">10. Limitation of Liability</h3>
                <p>To the maximum extent permitted by law, Jaladhaara shall not be liable for:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Groundwater availability or borewell yield.</li>
                  <li>Borewell drilling success or failure.</li>
                  <li>Geological or environmental conditions.</li>
                  <li>Decisions made by customers based on survey reports.</li>
                  <li>Services provided by third-party drilling contractors.</li>
                  <li>Delays caused by weather, natural events, or circumstances beyond our reasonable control.</li>
                </ul>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">11. Intellectual Property</h3>
                <p>All content, trademarks, logos, graphics, software, and other materials available on the Jaladhaara website and mobile applications are the property of Jaladhaara Groundwater Survey Pvt. Ltd. or their respective owners and are protected by applicable intellectual property laws.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">12. Suspension or Termination</h3>
                <p>Jaladhaara reserves the right to suspend or terminate any user or expert account that violates these Terms & Conditions, engages in fraudulent activities, or misuses the platform.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">13. Force Majeure</h3>
                <p>Jaladhaara shall not be held responsible for any delay or failure in providing services due to events beyond its reasonable control, including natural disasters, government actions, strikes, communication failures, pandemics, or other unforeseen circumstances.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">14. Changes to These Terms</h3>
                <p>Jaladhaara may update these Terms & Conditions from time to time. Any changes will be published on this page with the updated effective date. Continued use of the platform after such updates constitutes acceptance of the revised Terms.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">15. Governing Law</h3>
                <p>These Terms & Conditions shall be governed by the laws of India. Any disputes arising from the use of the Jaladhaara platform shall be subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">16. Contact Us</h3>
                <p>Jaladhaara Groundwater Survey Pvt. Ltd.<br/>
                Email: jaladhaarapvtltd@gmail.com<br/>
                Website: www.jaladhaaraapp.in</p>
                <p>For any questions regarding these Terms & Conditions, please contact us using the details above.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {isPrivacyModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsPrivacyModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)]">Privacy Policy</h2>
              <button 
                onClick={() => setIsPrivacyModalOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div 
              className="p-6 sm:p-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              data-lenis-prevent="true"
            >
              <div className="space-y-6 text-[var(--color-text-secondary)] leading-relaxed text-sm sm:text-base">
                <p><strong>Effective Date:</strong> July 22, 2026</p>
                <p>At Jaladhaara Groundwater Survey Pvt. Ltd. ("Jaladhaara", "we", "our", or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website and mobile applications.</p>
                <p>By accessing or using the Jaladhaara platform, you agree to the practices described in this Privacy Policy.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">1. Information We Collect</h3>
                <p>We may collect the following information:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Name</li>
                  <li>Mobile number</li>
                  <li>Email address</li>
                  <li>Address and survey location</li>
                  <li>Booking and transaction details</li>
                  <li>Payment information (processed securely through authorized payment service providers)</li>
                  <li>Device information, IP address, and browser details</li>
                  <li>Information shared while contacting customer support</li>
                  <li>Information submitted by experts during registration and verification</li>
                </ul>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">2. How We Use Your Information</h3>
                <p>Your information is used to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Process groundwater survey bookings</li>
                  <li>Connect customers with verified groundwater survey experts</li>
                  <li>Verify expert registrations and profiles</li>
                  <li>Facilitate secure payments and booking confirmations</li>
                  <li>Provide customer support and service updates</li>
                  <li>Improve our website, mobile applications, and user experience</li>
                  <li>Prevent fraud, misuse, and unauthorized activities</li>
                  <li>Comply with applicable legal and regulatory requirements</li>
                </ul>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">3. Information Sharing</h3>
                <p>Jaladhaara does not sell, rent, or trade your personal information.</p>
                <p>Your information may be shared only with:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Verified groundwater survey experts assigned to your booking</li>
                  <li>Trusted technology, communication, and payment service providers</li>
                  <li>Government authorities or regulatory agencies when required by applicable law</li>
                </ul>
                <p>All third-party service providers are expected to handle your information responsibly and in accordance with applicable laws.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">4. Data Security</h3>
                <p>We implement reasonable technical, administrative, and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                <p>While we strive to safeguard your information, no method of electronic transmission or storage is completely secure. Therefore, absolute security cannot be guaranteed.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">5. Cookies and Analytics</h3>
                <p>Our website may use cookies and similar technologies to enhance your browsing experience, analyze website performance, and improve our services.</p>
                <p>You may manage or disable cookies through your browser settings. However, some website features may not function properly if cookies are disabled.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">6. Third-Party Services</h3>
                <p>Our platform may contain links to third-party websites or services. Jaladhaara is not responsible for the privacy practices, policies, or content of those third-party platforms. Users are encouraged to review their respective privacy policies.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">7. Your Rights</h3>
                <p>Subject to applicable law, you may request to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Access your personal information</li>
                  <li>Update or correct inaccurate information</li>
                  <li>Request deletion of your personal information where legally permitted</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
                <p>Requests may be subject to legal, contractual, or operational requirements.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">8. Children's Privacy</h3>
                <p>Jaladhaara's services are intended for individuals who are legally eligible to use our platform. We do not knowingly collect personal information from children.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">9. Changes to This Privacy Policy</h3>
                <p>We may update this Privacy Policy from time to time to reflect changes in our services or legal requirements. The updated version will be published on this page with a revised Effective Date.</p>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">10. Contact Us</h3>
                <p>If you have any questions regarding this Privacy Policy or the handling of your personal information, please contact us:</p>
                <p>Jaladhaara Groundwater Survey Pvt. Ltd.<br/>
                Email: jaladhaarapvtltd@gmail.com<br/>
                Website: www.jaladhaaraapp.in</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
