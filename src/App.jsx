import React, { useState, useRef, useEffect } from 'react';
import { Heart, X, Sparkles, Briefcase, MapPin, Globe, Star, Zap, ChevronRight, RotateCcw, Brain, Search, Database, CheckCircle2, ArrowLeft } from 'lucide-react';

// ============================================
// MOCK DATA
// ============================================
const MOCK_CANDIDATES = [
  {
    id: 1,
    name: 'Mateo Villanueva',
    avatar: '🧑🏻‍💻',
    bgColor: '#FFD93D',
    location: 'Baguio City, Philippines',
    timezone: 'GMT+8',
    rate: '$12/hr',
    yearsExp: 6,
    headline: 'Web Dev & Marketing Specialist',
    bio: 'Full-stack web developer with deep SEO chops. Built my own web services agency from scratch — I move fast, ship clean, and obsess over conversion.',
    skills: ['Web Development', 'SEO (Local & On-page)', 'WordPress', 'Shopify', 'GoHighLevel', 'CRO Design', 'UX/UI', 'Automation'],
    tools: ['Figma', 'Semrush', 'Ahrefs', 'Canva', 'Asana', 'Slack'],
    languages: ['English (Fluent)', 'Tagalog (Native)'],
    education: 'BS Information Technology — University of the Cordilleras',
    highlight: 'Real candidate from your database',
    isReal: true,
    workStyle: 'Async-first, deadline-driven',
  },
  {
    id: 2,
    name: 'Sofia Mendoza',
    avatar: '👩🏽‍💼',
    bgColor: '#FF8FA3',
    location: 'Manila, Philippines',
    timezone: 'GMT+8',
    rate: '$10/hr',
    yearsExp: 4,
    headline: 'Executive VA & Calendar Wizard',
    bio: 'I keep CEOs sane. Inbox zero is my love language. Specialized in calendar management, travel planning, and turning chaos into checklists.',
    skills: ['Executive Assistance', 'Calendar Management', 'Email Triage', 'Travel Planning', 'Meeting Notes'],
    tools: ['Google Workspace', 'Notion', 'Slack', 'Calendly', 'Zoom'],
    languages: ['English (Fluent)', 'Spanish (Conversational)'],
    education: 'BA Business Administration — Ateneo de Manila',
    highlight: 'Hot pick from Workable',
    isReal: false,
    workStyle: 'Highly responsive, 9-5 EST overlap',
  },
  {
    id: 3,
    name: 'Marcus Tan',
    avatar: '👨🏻‍🎨',
    bgColor: '#A8E6CF',
    location: 'Cebu City, Philippines',
    timezone: 'GMT+8',
    rate: '$15/hr',
    yearsExp: 7,
    headline: 'Creative Designer + Video Editor',
    bio: 'I make scrolls stop. Brand designer turned content machine. If your feed is feeling flat, we should talk.',
    skills: ['Graphic Design', 'Video Editing', 'Brand Identity', 'Social Media Content', 'Motion Graphics'],
    tools: ['Adobe Creative Suite', 'Figma', 'CapCut', 'After Effects', 'Canva'],
    languages: ['English (Fluent)', 'Cebuano (Native)'],
    education: 'BFA Visual Communication — University of San Carlos',
    highlight: 'Top-rated in your DB',
    isReal: false,
    workStyle: 'Creative bursts, flexible hours',
  },
  {
    id: 4,
    name: 'Priya Sharma',
    avatar: '👩🏽‍💻',
    bgColor: '#B4A7FF',
    location: 'Bangalore, India',
    timezone: 'GMT+5:30',
    rate: '$14/hr',
    yearsExp: 5,
    headline: 'Marketing Ops & Automation Nerd',
    bio: 'I build the funnels that print money. Zapier black-belt. If it can be automated, I will automate it (and probably already have).',
    skills: ['Marketing Automation', 'Zapier/Make', 'HubSpot', 'Email Marketing', 'Lead Generation'],
    tools: ['HubSpot', 'Zapier', 'Make.com', 'ActiveCampaign', 'Airtable'],
    languages: ['English (Fluent)', 'Hindi (Native)'],
    education: 'B.Tech Computer Science — IIT Madras',
    highlight: 'New on Workable',
    isReal: false,
    workStyle: 'Systems thinker, loves SOPs',
  },
  {
    id: 5,
    name: 'João Almeida',
    avatar: '🧑🏽‍🎤',
    bgColor: '#FFB4A2',
    location: 'São Paulo, Brazil',
    timezone: 'GMT-3',
    rate: '$11/hr',
    yearsExp: 3,
    headline: 'Customer Success & Bilingual Support',
    bio: 'Turning frustrated customers into raving fans since 2021. PT/EN/ES. Empathy first, solutions second, both delivered fast.',
    skills: ['Customer Success', 'Live Chat Support', 'Bilingual Support', 'CRM Management', 'Ticket Triage'],
    tools: ['Intercom', 'Zendesk', 'HubSpot', 'Slack', 'Loom'],
    languages: ['Portuguese (Native)', 'English (Fluent)', 'Spanish (Fluent)'],
    education: 'Communications — USP',
    highlight: 'Trilingual unicorn',
    isReal: false,
    workStyle: 'Warm, patient, EST/PST overlap',
  },
];

// ============================================
// SCREENS
// ============================================

const Logo = ({ size = 'md' }) => {
  const sizes = { sm: 'text-xl', md: 'text-3xl', lg: 'text-5xl' };
  return (
    <div className="flex items-center gap-2">
      <div className={`${sizes[size]} font-black tracking-tight`} style={{ fontFamily: '"Fraunces", Georgia, serif' }}>
        VAMatch
      </div>
      <div className="bg-black text-yellow-300 px-2 py-0.5 rounded-full text-xs font-bold transform -rotate-3">
        BETA
      </div>
    </div>
  );
};

// ----- LANDING / JOB FORM -----
const JobForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    title: 'Marketing Web Developer',
    description: 'Looking for a VA who can build landing pages, run SEO, and help with marketing automation. Bonus if they know GoHighLevel and have built funnels before.',
    skills: 'WordPress, SEO, Funnel building',
    timezone: 'EST overlap preferred',
    budget: '12',
  });

  const handleSubmit = () => {
    if (!form.title.trim() || !form.description.trim()) return;
    onSubmit(form);
  };

  return (
    <div className="min-h-screen w-full px-6 py-10 flex flex-col items-center" style={{ background: 'linear-gradient(180deg, #E8F7F1 0%, #C4EBDC 100%)' }}>
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-40" style={{ background: '#7DD3C0', filter: 'blur(40px)' }} />
      <div className="absolute top-40 right-20 w-40 h-40 rounded-full opacity-40" style={{ background: '#A7D8E8', filter: 'blur(50px)' }} />

      <div className="relative w-full max-w-2xl z-10">
        <div className="flex justify-between items-center mb-8">
          <Logo size="md" />
          <div className="text-xs font-bold bg-black text-white px-3 py-1.5 rounded-full">
            🥥 Sandbox
          </div>
        </div>

        <div className="mb-10 text-center">
          <div className="inline-block mb-4 transform -rotate-2">
            <div className="bg-black text-yellow-300 px-4 py-1.5 rounded-full text-sm font-bold">
              Tinder, but for hiring VAs ✨
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-none mb-4" style={{ fontFamily: '"Fraunces", Georgia, serif' }}>
            Find your<br />
            <span className="italic relative inline-block">
              perfect match
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M2 8 Q 50 2, 100 6 T 198 8" stroke="#FF6B35" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-lg text-stone-700">Tell us about the role. Our AI scouts your DB + Workable.</p>
        </div>

        <div className="bg-white rounded-3xl border-4 border-black p-6 md:p-8 space-y-5" style={{ boxShadow: '8px 8px 0px #000' }}>
          <div>
            <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Role title</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="e.g. Marketing VA"
              className="w-full px-4 py-3 rounded-2xl border-2 border-black bg-yellow-50 font-medium focus:outline-none focus:bg-white transition"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 uppercase tracking-wide">What does this person do?</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows="4"
              placeholder="Describe the day-to-day, tools they'd use, anything that matters..."
              className="w-full px-4 py-3 rounded-2xl border-2 border-black bg-yellow-50 font-medium focus:outline-none focus:bg-white transition resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Must-have skills</label>
              <input
                type="text"
                value={form.skills}
                onChange={(e) => setForm({ ...form, skills: e.target.value })}
                placeholder="comma, separated"
                className="w-full px-4 py-3 rounded-2xl border-2 border-black bg-yellow-50 font-medium focus:outline-none focus:bg-white transition"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Timezone</label>
              <input
                type="text"
                value={form.timezone}
                onChange={(e) => setForm({ ...form, timezone: e.target.value })}
                placeholder="e.g. EST"
                className="w-full px-4 py-3 rounded-2xl border-2 border-black bg-yellow-50 font-medium focus:outline-none focus:bg-white transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Budget per hour (USD)</label>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black">$</span>
              <input
                type="number"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="flex-1 px-4 py-3 rounded-2xl border-2 border-black bg-yellow-50 font-medium focus:outline-none focus:bg-white transition"
              />
              <span className="text-stone-500 font-bold">/hr</span>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full mt-4 bg-black text-yellow-300 font-black text-lg py-4 rounded-2xl border-2 border-black hover:bg-yellow-300 hover:text-black transition-all active:scale-95 flex items-center justify-center gap-2"
            style={{ boxShadow: '4px 4px 0px #FF6B35' }}
          >
            <Sparkles size={20} />
            Find my matches
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-stone-600">
          <span className="font-bold">No login.</span> No data saved. Just a sandbox.
        </div>
      </div>
    </div>
  );
};

// ----- AI ANALYSIS LOADING -----
const SCAN_NAMES = [
  'Mateo V.', 'Sofia M.', 'Marcus T.', 'Priya S.', 'João A.',
  'Aiko N.', 'Liam O.', 'Carla V.', 'Rohan B.', 'Mei L.', 'Diego R.',
  'Hana K.', 'Amelia W.', 'Jin H.', 'Tania F.', 'Noah P.', 'Bea L.',
  'Ravi K.', 'Lucas G.', 'Zara M.', 'Owen S.', 'Ines T.', 'Kai R.',
];

const AIAnalysis = ({ onComplete, jobData }) => {
  const [step, setStep] = useState(0);
  const [scanned, setScanned] = useState(0);
  const [shortlisted, setShortlisted] = useState(0);
  const [scanningName, setScanningName] = useState(SCAN_NAMES[0]);
  const [feed, setFeed] = useState([]);
  const [revealMatch, setRevealMatch] = useState(false);

  const steps = [
    { icon: Brain, label: 'Reading job spec', color: '#B4A7FF', detail: jobData?.title || 'role' },
    { icon: Database, label: 'Scanning your candidate DB', color: '#FFD93D', detail: '2,847 profiles' },
    { icon: Search, label: 'Pulling fresh from Workable', color: '#A8E6CF', detail: 'live API' },
    { icon: Sparkles, label: 'Cross-matching skills & vibes', color: '#FF8FA3', detail: 'semantic search' },
    { icon: CheckCircle2, label: 'Ranking your top matches', color: '#FFB4A2', detail: 'scoring…' },
  ];

  // Step progression
  useEffect(() => {
    if (step >= steps.length) {
      const t1 = setTimeout(() => setRevealMatch(true), 200);
      const t2 = setTimeout(onComplete, 1800);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
    const t = setTimeout(() => setStep(step + 1), 1100);
    return () => clearTimeout(t);
  }, [step]);

  // Counter ticking up — accelerates to feel "alive"
  useEffect(() => {
    if (step >= steps.length) return;
    const interval = setInterval(() => {
      setScanned((s) => {
        const target = 2847;
        const remaining = target - s;
        if (remaining <= 0) return s;
        const inc = Math.max(7, Math.ceil(remaining / 18));
        return Math.min(target, s + inc);
      });
    }, 40);
    return () => clearInterval(interval);
  }, [step, steps.length]);

  // Shortlist counter — more relaxed
  useEffect(() => {
    if (step < 2 || step >= steps.length) return;
    const interval = setInterval(() => {
      setShortlisted((s) => (s < 5 ? s + 1 : s));
    }, 700);
    return () => clearInterval(interval);
  }, [step, steps.length]);

  // Rolling profile names + scoring feed
  useEffect(() => {
    if (step >= steps.length) return;
    let i = 0;
    const interval = setInterval(() => {
      const name = SCAN_NAMES[i % SCAN_NAMES.length];
      setScanningName(name);
      // Drop scoring lines onto a live feed
      const score = 40 + Math.floor(Math.random() * 60);
      setFeed((f) => [{ id: Date.now() + i, name, score }, ...f].slice(0, 4));
      i++;
    }, 180);
    return () => clearInterval(interval);
  }, [step, steps.length]);

  const pct = Math.min(100, Math.round((scanned / 2847) * 100));

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 py-10" style={{ background: 'linear-gradient(180deg, #E8F7F1 0%, #C4EBDC 100%)' }}>
      <div className="w-full max-w-md">
        {!revealMatch ? (
          <>
            <div className="text-center mb-6">
              <div className="inline-block animate-spin-slow mb-4">
                <div className="text-6xl">🔎</div>
              </div>
              <h2 className="text-3xl font-black mb-2" style={{ fontFamily: '"Fraunces", Georgia, serif' }}>
                Hunting your perfect VA...
              </h2>
              <p className="text-stone-600 text-sm">
                Scanning <span className="font-black">{scanned.toLocaleString()}</span> profiles in real time
              </p>
            </div>

            {/* Live scan panel */}
            <div className="bg-black border-4 border-black rounded-3xl p-4 mb-4 text-white font-mono" style={{ boxShadow: '6px 6px 0px #FF6B35' }}>
              <div className="flex items-center justify-between text-[10px] mb-2 opacity-70">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  LIVE SCAN
                </span>
                <span>{pct}%</span>
              </div>
              {/* Progress bar */}
              <div className="h-2 bg-stone-800 rounded-full overflow-hidden mb-3">
                <div
                  className="h-full bg-gradient-to-r from-yellow-300 to-orange-400 transition-all duration-150"
                  style={{ width: `${pct}%` }}
                />
              </div>
              {/* Currently scanning */}
              <div className="text-xs mb-3 flex items-center gap-2">
                <span className="opacity-60">→ scanning:</span>
                <span className="text-yellow-300 font-bold truncate">{scanningName}</span>
              </div>
              {/* Score feed */}
              <div className="space-y-1 min-h-[80px]">
                {feed.map((row, i) => (
                  <div
                    key={row.id}
                    className="flex items-center justify-between text-[11px] transition-all"
                    style={{ opacity: 1 - i * 0.22 }}
                  >
                    <span className="truncate opacity-80">{row.name}</span>
                    <span className={`font-bold ${row.score >= 75 ? 'text-green-400' : row.score >= 55 ? 'text-yellow-300' : 'text-stone-400'}`}>
                      {row.score}% match
                    </span>
                  </div>
                ))}
              </div>
              {/* Stats footer */}
              <div className="flex justify-between mt-3 pt-3 border-t border-stone-800 text-[10px] opacity-70">
                <span>shortlisted: <span className="text-yellow-300 font-bold">{shortlisted}</span></span>
                <span>analyzed: <span className="text-yellow-300 font-bold">{scanned.toLocaleString()}</span></span>
              </div>
            </div>

            {/* Step list */}
            <div className="bg-white border-4 border-black rounded-3xl p-4 space-y-2" style={{ boxShadow: '6px 6px 0px #000' }}>
              {steps.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === step;
                const isDone = i < step;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-3 p-2.5 rounded-2xl border-2 transition-all duration-500 ${
                      isActive ? 'border-black scale-[1.02]' : isDone ? 'border-black opacity-60' : 'border-stone-200 opacity-40'
                    }`}
                    style={{ background: isActive || isDone ? s.color : 'white' }}
                  >
                    <div className={`${isActive ? 'animate-bounce' : ''}`}>
                      {isDone ? <CheckCircle2 size={20} strokeWidth={2.5} /> : <Icon size={20} strokeWidth={2.5} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-sm truncate">{s.label}</div>
                      <div className="text-[10px] font-bold opacity-60 truncate">{s.detail}</div>
                    </div>
                    {isActive && (
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                        <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          // Final reveal — "MATCH FOUND"
          <div className="text-center animate-pop-in">
            <div className="inline-block bg-yellow-300 border-4 border-black rounded-full px-5 py-1.5 mb-4 transform -rotate-3" style={{ boxShadow: '4px 4px 0px #FF6B35' }}>
              <span className="font-black text-sm" style={{ fontFamily: '"Fraunces", Georgia, serif' }}>
                🎯 TOP MATCH LOCKED IN
              </span>
            </div>
            <h2 className="text-4xl font-black mb-3 leading-tight" style={{ fontFamily: '"Fraunces", Georgia, serif' }}>
              Found your<br />
              <span className="italic">perfect candidate</span>
            </h2>
            <div className="bg-white border-4 border-black rounded-3xl p-5 my-5" style={{ boxShadow: '6px 6px 0px #000' }}>
              <div className="text-xs font-black uppercase tracking-wider text-stone-500 mb-2">Top result</div>
              <div className="flex items-center gap-3">
                <div className="text-5xl">🧑🏻‍💻</div>
                <div className="flex-1 text-left">
                  <div className="font-black text-lg" style={{ fontFamily: '"Fraunces", Georgia, serif' }}>
                    Mateo Villanueva
                  </div>
                  <div className="text-xs text-stone-600">Web Dev & Marketing Specialist</div>
                </div>
                <div className="bg-black text-yellow-300 rounded-full w-14 h-14 flex flex-col items-center justify-center transform rotate-6">
                  <div className="text-lg font-black leading-none">94%</div>
                  <div className="text-[7px] font-bold uppercase tracking-wider">Match</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-stone-700 font-bold">+ 4 other strong candidates ready to swipe →</p>
          </div>
        )}
      </div>
    </div>
  );
};

// ----- CANDIDATE CARD -----
const CandidateCard = ({ candidate, matchScore, onSwipe, isTop, offset = 0, swipeDirection }) => {
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const cardRef = useRef(null);

  const handleStart = (clientX) => {
    if (!isTop) return;
    setDragging(true);
    startX.current = clientX;
  };

  const handleMove = (clientX) => {
    if (!dragging || !isTop) return;
    setDragX(clientX - startX.current);
  };

  const handleEnd = () => {
    if (!dragging || !isTop) return;
    setDragging(false);
    if (Math.abs(dragX) > 120) {
      onSwipe(dragX > 0 ? 'right' : 'left');
    } else {
      setDragX(0);
    }
  };

  // Apply animated swipe-out direction
  const effectiveX = swipeDirection ? (swipeDirection === 'right' ? 600 : -600) : dragX;
  const rotation = effectiveX * 0.08;
  const opacity = swipeDirection ? 0 : 1 - Math.min(Math.abs(dragX) / 400, 0.5);

  const transform = isTop
    ? `translateX(${effectiveX}px) rotate(${rotation}deg)`
    : `scale(${1 - offset * 0.04}) translateY(${offset * 12}px)`;

  return (
    <div
      ref={cardRef}
      className={`absolute inset-0 ${isTop ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'}`}
      style={{
        transform,
        opacity,
        transition: dragging ? 'none' : 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s',
        zIndex: 10 - offset,
      }}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      <div
        className="relative w-full h-full bg-white rounded-3xl border-4 border-black overflow-hidden flex flex-col"
        style={{ boxShadow: '8px 8px 0px #000' }}
      >
        {/* NOPE / LIKE stamps */}
        {dragX > 50 && (
          <div className="absolute top-8 left-8 z-30 transform -rotate-12 border-4 border-green-500 text-green-500 px-4 py-2 rounded-xl font-black text-2xl bg-white">
            HIRE!
          </div>
        )}
        {dragX < -50 && (
          <div className="absolute top-8 right-8 z-30 transform rotate-12 border-4 border-red-500 text-red-500 px-4 py-2 rounded-xl font-black text-2xl bg-white">
            PASS
          </div>
        )}

        {/* Header with avatar */}
        <div
          className="relative h-48 flex items-center justify-center border-b-4 border-black"
          style={{ background: candidate.bgColor }}
        >
          {/* Decorative dots */}
          <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-black opacity-20" />
          <div className="absolute top-8 right-12 w-2 h-2 rounded-full bg-black opacity-30" />
          <div className="absolute bottom-6 left-12 w-4 h-4 rounded-full bg-white opacity-40" />
          <div className="absolute top-12 right-4 w-2 h-2 rounded-full bg-white opacity-50" />

          <div className="text-8xl">{candidate.avatar}</div>

          {/* Match score badge */}
          <div
            className="absolute -bottom-6 right-6 bg-black text-yellow-300 rounded-full w-20 h-20 flex flex-col items-center justify-center border-4 border-white transform rotate-6"
            style={{ boxShadow: '4px 4px 0px #FF6B35' }}
          >
            <div className="text-2xl font-black leading-none">{matchScore}%</div>
            <div className="text-[8px] font-bold uppercase tracking-wider">Match</div>
          </div>

          {/* Real candidate badge */}
          {candidate.isReal && (
            <div className="absolute top-3 left-3 bg-white border-2 border-black rounded-full px-2 py-1 text-[10px] font-black flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              YOUR DB
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-5 flex-1 overflow-y-auto">
          <div className="mb-3">
            <h3 className="text-2xl font-black leading-tight" style={{ fontFamily: '"Fraunces", Georgia, serif' }}>
              {candidate.name}
            </h3>
            <p className="text-sm font-bold text-stone-600 mt-0.5">{candidate.headline}</p>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-3 text-xs">
            <span className="bg-stone-100 border border-stone-300 rounded-full px-2 py-1 flex items-center gap-1 font-medium">
              <MapPin size={11} /> {candidate.location.split(',')[0]}
            </span>
            <span className="bg-stone-100 border border-stone-300 rounded-full px-2 py-1 flex items-center gap-1 font-medium">
              <Globe size={11} /> {candidate.timezone}
            </span>
            <span className="bg-yellow-100 border border-black rounded-full px-2 py-1 font-black">
              {candidate.rate}
            </span>
            <span className="bg-stone-100 border border-stone-300 rounded-full px-2 py-1 flex items-center gap-1 font-medium">
              <Briefcase size={11} /> {candidate.yearsExp}y
            </span>
          </div>

          <p className="text-sm text-stone-700 mb-4 leading-snug italic">
            "{candidate.bio}"
          </p>

          <div className="mb-3">
            <div className="text-[10px] font-black uppercase tracking-wider text-stone-500 mb-1.5">Top skills</div>
            <div className="flex flex-wrap gap-1.5">
              {candidate.skills.slice(0, 5).map((s) => (
                <span key={s} className="text-xs bg-black text-white rounded-full px-2 py-0.5 font-bold">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-black rounded-2xl p-3 flex items-start gap-2">
            <Zap size={16} className="text-orange-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
            <div className="text-xs">
              <span className="font-black">Why this match: </span>
              <span className="text-stone-700">{candidate.highlight}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----- SWIPE DECK -----
const SwipeDeck = ({ jobData, onFinish }) => {
  const [index, setIndex] = useState(0);
  const [matches, setMatches] = useState([]);
  const [passes, setPasses] = useState([]);
  const [swipingDirection, setSwipingDirection] = useState(null);
  const [showMatchPopup, setShowMatchPopup] = useState(null);

  // Generate match scores once based on job
  const scoredCandidates = useRef(
    MOCK_CANDIDATES
      .map((c) => {
        // Mateo gets a high score because the form mentions web dev/SEO/marketing
        let score;
        if (c.id === 1) score = 94;
        else if (c.id === 4) score = 87; // marketing automation
        else if (c.id === 3) score = 76;
        else if (c.id === 2) score = 71;
        else score = 64;
        return { ...c, matchScore: score };
      })
      .sort((a, b) => b.matchScore - a.matchScore)
  ).current;

  const handleSwipe = (direction) => {
    setSwipingDirection(direction);
    const current = scoredCandidates[index];

    setTimeout(() => {
      if (direction === 'right') {
        setMatches((m) => [...m, current]);
        if (current.matchScore >= 85) {
          setShowMatchPopup(current);
        }
      } else {
        setPasses((p) => [...p, current]);
      }
      setSwipingDirection(null);
      setIndex((i) => i + 1);
    }, 350);
  };

  const dismissMatchPopup = () => setShowMatchPopup(null);

  if (index >= scoredCandidates.length) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center px-6" style={{ background: 'linear-gradient(180deg, #E8F7F1 0%, #C4EBDC 100%)' }}>
        <div className="text-center max-w-md">
          <div className="text-7xl mb-4">🎉</div>
          <h2 className="text-4xl font-black mb-3" style={{ fontFamily: '"Fraunces", Georgia, serif' }}>
            That's the deck!
          </h2>
          <p className="text-stone-700 mb-8">
            You shortlisted <span className="font-black">{matches.length}</span> candidate{matches.length === 1 ? '' : 's'} for <span className="italic">{jobData.title}</span>.
          </p>

          {matches.length > 0 && (
            <div className="bg-white border-4 border-black rounded-3xl p-5 mb-6 text-left" style={{ boxShadow: '6px 6px 0px #000' }}>
              <div className="text-xs font-black uppercase tracking-wider mb-3">Your shortlist</div>
              <div className="space-y-2">
                {matches.map((m) => (
                  <div key={m.id} className="flex items-center gap-3 p-2 rounded-xl bg-yellow-50 border border-black">
                    <div className="text-3xl">{m.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-black text-sm truncate">{m.name}</div>
                      <div className="text-xs text-stone-600 truncate">{m.headline}</div>
                    </div>
                    <div className="bg-black text-yellow-300 rounded-full px-2 py-1 text-xs font-black">
                      {m.matchScore}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={onFinish}
            className="bg-black text-yellow-300 font-black px-6 py-3 rounded-2xl border-2 border-black hover:bg-yellow-300 hover:text-black transition flex items-center gap-2 mx-auto"
            style={{ boxShadow: '4px 4px 0px #FF6B35' }}
          >
            <RotateCcw size={18} />
            Try another role
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col px-4 py-6" style={{ background: 'linear-gradient(180deg, #E8F7F1 0%, #C4EBDC 100%)' }}>
      {/* Header */}
      <div className="max-w-md w-full mx-auto flex items-center justify-between mb-4">
        <button onClick={onFinish} className="bg-white border-2 border-black rounded-full p-2 hover:bg-yellow-300 transition">
          <ArrowLeft size={18} strokeWidth={2.5} />
        </button>
        <Logo size="sm" />
        <div className="bg-black text-white rounded-full px-3 py-1.5 text-xs font-black">
          {index + 1}/{scoredCandidates.length}
        </div>
      </div>

      {/* Job context pill */}
      <div className="max-w-md w-full mx-auto mb-4">
        <div className="bg-white border-2 border-black rounded-2xl px-4 py-2.5 flex items-center gap-2">
          <Briefcase size={16} strokeWidth={2.5} />
          <div className="text-sm font-bold flex-1 truncate">{jobData.title}</div>
          <div className="text-xs text-stone-500">${jobData.budget}/hr</div>
        </div>
      </div>

      {/* Card stack */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-md" style={{ height: '600px' }}>
          {scoredCandidates.slice(index, index + 3).map((c, i) => (
            <CandidateCard
              key={c.id}
              candidate={c}
              matchScore={c.matchScore}
              isTop={i === 0}
              offset={i}
              onSwipe={handleSwipe}
              swipeDirection={i === 0 ? swipingDirection : null}
            />
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="max-w-md w-full mx-auto flex items-center justify-center gap-6 mt-4">
        <button
          onClick={() => handleSwipe('left')}
          className="bg-white border-4 border-black rounded-full w-16 h-16 flex items-center justify-center hover:bg-red-100 active:scale-90 transition"
          style={{ boxShadow: '4px 4px 0px #000' }}
        >
          <X size={28} strokeWidth={3} className="text-red-500" />
        </button>
        <div className="text-xs text-stone-500 font-bold uppercase tracking-wider">Swipe or tap</div>
        <button
          onClick={() => handleSwipe('right')}
          className="bg-white border-4 border-black rounded-full w-16 h-16 flex items-center justify-center hover:bg-green-100 active:scale-90 transition"
          style={{ boxShadow: '4px 4px 0px #000' }}
        >
          <Heart size={28} strokeWidth={3} className="text-green-600 fill-green-600" />
        </button>
      </div>

      {/* MATCH popup */}
      {showMatchPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6 animate-fade-in" style={{ background: 'rgba(0,0,0,0.7)' }}>
          <div className="relative max-w-sm w-full bg-white border-4 border-black rounded-3xl p-8 text-center transform animate-pop-in" style={{ boxShadow: '8px 8px 0px #FF6B35' }}>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-300 border-4 border-black rounded-full px-6 py-2">
              <div className="font-black text-xl" style={{ fontFamily: '"Fraunces", Georgia, serif' }}>
                IT'S A MATCH!
              </div>
            </div>
            <div className="text-7xl mb-3 mt-4">{showMatchPopup.avatar}</div>
            <div className="text-2xl font-black mb-1" style={{ fontFamily: '"Fraunces", Georgia, serif' }}>
              {showMatchPopup.name}
            </div>
            <div className="text-sm text-stone-600 mb-5">{showMatchPopup.headline}</div>
            <div className="flex items-center justify-center gap-1 mb-5">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />)}
            </div>
            <button
              onClick={dismissMatchPopup}
              className="w-full bg-black text-yellow-300 font-black py-3 rounded-2xl hover:bg-yellow-300 hover:text-black transition"
            >
              Keep swiping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================
// MAIN APP
// ============================================
export default function App() {
  const [screen, setScreen] = useState('form'); // 'form' | 'analyzing' | 'swipe'
  const [jobData, setJobData] = useState(null);

  const handleJobSubmit = (data) => {
    setJobData(data);
    setScreen('analyzing');
  };

  const handleAnalysisComplete = () => {
    setScreen('swipe');
  };

  const handleFinish = () => {
    setScreen('form');
  };

  return (
    <div className="w-full min-h-screen relative" style={{ fontFamily: '"Nunito", -apple-system, sans-serif' }}>
      {/* Google fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700..900;1,9..144,700..900&family=Nunito:wght@500;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        @keyframes pop-in {
          0% { transform: scale(0.5) rotate(-5deg); opacity: 0; }
          70% { transform: scale(1.05) rotate(2deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .animate-pop-in {
          animation: pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        body {
          font-family: "Nunito", -apple-system, sans-serif;
        }
      `}</style>

      {screen === 'form' && <JobForm onSubmit={handleJobSubmit} />}
      {screen === 'analyzing' && <AIAnalysis onComplete={handleAnalysisComplete} jobData={jobData} />}
      {screen === 'swipe' && <SwipeDeck jobData={jobData} onFinish={handleFinish} />}
    </div>
  );
}
