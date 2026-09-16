import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Gift, RotateCcw, Share2, Sparkles } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import jumokePortrait from "@/assets/jumoke-cutout.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jumoke at 35 | Welcome to the 35th Floor" },
      {
        name: "description",
        content: "A joyful birthday journey celebrating 35 magnificent things about Jumoke.",
      },
      { property: "og:title", content: "Happy 35th Birthday, Jumoke!" },
      {
        property: "og:description",
        content: "Welcome to the 35th Floor, a birthday celebration made with love by Bisola.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BirthdayExperience,
});

type Floor = { word: string; kind: string; definition: string };

const floors: Floor[] = [
  { word: "Radiant", kind: "adj.", definition: "Lighting up every room she walks into without even trying. The glow is not just good skincare; it is pure heart and elegance." },
  { word: "Iconic", kind: "adj.", definition: "Never catches a bad angle. Even in pajama mode, she manages to look editorial." },
  { word: "Soft Life Ambassador", kind: "noun", definition: "Someone who fundamentally refuses stress and demands luxury, peace of mind, and chilled mocktails at all times." },
  { word: "Resilient", kind: "adj.", definition: "Made of grace and steel. Whatever life throws at her, she turns it into a masterclass in bouncing back." },
  { word: "Bougie", kind: "adj.", definition: "Only the finest vibes, the sweetest scents, and top-tier aesthetics. As she should!" },
  { word: "Ride-or-Die", kind: "noun", definition: "The friend who does not ask \"what happened?\" until after she is already in the car ready to back you up." },
  { word: "Unfiltered", kind: "adj.", definition: "Gives the realest advice with zero sugarcoating, but always delivers it wrapped in pure love." },
  { word: "Intentional", kind: "adj.", definition: "Does nothing halfway. From her goals to how deeply she loves her people, everything is deliberate and purposeful." },
  { word: "Glamorous", kind: "adj.", definition: "Serving face, confidence, and perfection effortlessly. The camera genuinely loves her." },
  { word: "Anchor", kind: "noun", definition: "The steady voice of reason when the world feels chaotic. A safe haven in human form." },
  { word: "Shero", kind: "noun", definition: "Handling business like a boss, making moves in silence, and making hard things look deceptively easy." },
  { word: "Pure Vibes", kind: "noun", definition: "Ten minutes in her company and your whole week is instantly lifted. Infectious laughter guaranteed." },
  { word: "Empress", kind: "noun", definition: "Carries herself with quiet authority and royal grace. Her crown does not tilt; it shines." },
  { word: "Loyal", kind: "adj.", definition: "Stays in your corner through every high, low, and messy in-between. Once she loves you, you are covered." },
  { word: "Unstoppable", kind: "adj.", definition: "When she sets her eyes on a dream, just clear the runway and watch her take flight." },
  { word: "Generous", kind: "adj.", definition: "Gives her heart, her time, her wisdom, and the last bite of dessert without keeping score." },
  { word: "Sassy", kind: "adj.", definition: "Quick-witted, sharp, and capable of saying an entire paragraph with just one side-eye." },
  { word: "Magnetic", kind: "adj.", definition: "Pulls good people and great opportunities straight toward her by simply being herself." },
  { word: "Brave", kind: "adj.", definition: "Stepping into new chapters boldly, even when the unknown is scary. A woman of courage." },
  { word: "Peacekeeper", kind: "noun", definition: "Brings calm into every storm. Her energy feels like a warm hug after a long rain." },
  { word: "Fashionable", kind: "adj.", definition: "Could wear a plain white tee and still look like she just stepped off a Paris runway." },
  { word: "Wise", kind: "adj.", definition: "Gives advice so deep you have to sit down and write it in your notes app immediately." },
  { word: "Authentic", kind: "adj.", definition: "Zero pretense, zero fake energy. What you see is genuine, honest gold." },
  { word: "Glow-Getter", kind: "noun", definition: "Pursues her dreams relentlessly while never letting her glow or her peace slip." },
  { word: "Sister-Friend", kind: "noun", definition: "Beyond friendship. The kind of bond that feels written into your destiny by God Himself." },
  { word: "Drama-Free", kind: "adj.", definition: "Protects her peace fiercely. Life is too short and her peace of mind is too expensive." },
  { word: "Hype-Woman", kind: "noun", definition: "Will stand in the back taking 200 photos of you screaming, \"Yes, girl! Give us body!\"" },
  { word: "Graceful", kind: "adj.", definition: "Handling both blessings and trials with poise, dignity, and calm maturity." },
  { word: "Discerning", kind: "adj.", definition: "Knows who is for her, what aligns with her spirit, and exactly where her energy belongs." },
  { word: "Nurturing", kind: "adj.", definition: "Checks in on the people she loves, remembers the small details, and cares deeply." },
  { word: "Fearless", kind: "adj.", definition: "Unafraid to take up space, speak up, and claim every blessing with her name on it." },
  { word: "Timeless", kind: "adj.", definition: "Like fine wine. Turning 35 looking like she discovered the fountain of youth." },
  { word: "Joyful", kind: "adj.", definition: "Finds reasons to smile and dance even on ordinary Tuesday afternoons." },
  { word: "Blessing", kind: "noun", definition: "A living proof that God answers prayers when He puts people in our lives." },
  { word: "Irreplaceable", kind: "adj.", definition: "One of one. No blueprint, no duplicate, no competition. Our birthday girl!" },
];

const doodles = ["crown", "glasses", "hearts", "flowers", "stars", "toast", "party"] as const;

const floorHeadlines = [
  "Radiant from head to toe",
  "An icon in every frame",
  "Soft life looks good on her",
  "Grace built on resilience",
  "They call her Bougie",
  "The friend who always shows up",
  "Truth, served with love",
  "Every move has meaning",
  "Glamour comes naturally",
  "Steady through every season",
  "Meet the everyday Shero",
  "Floor 12: Pure Vibes",
  "Our Empress at a glance",
  "Loyalty with a heartbeat",
  "Nothing can stop her now",
  "A heart that keeps giving",
  "The side-eye says it all",
  "35 shades of Magnetic",
  "Courage wears her smile",
  "Where calm finds a home",
  "The runway follows her",
  "Wisdom worth writing down",
  "Beautifully, boldly herself",
  "She gets it and glows",
  "More sister than friend",
  "Peace is her luxury",
  "Your loudest cheerleader",
  "Poise in every chapter",
  "She knows what belongs",
  "Love lives in the details",
  "Fearless looks like this",
  "Some beauty is Timeless",
  "Joy follows wherever she goes",
  "A blessing in human form",
  "There is only one Jumoke",
] as const;

function BirthdayExperience() {
  const [screen, setScreen] = useState<"lobby" | "floors" | "letter">("lobby");
  const [floor, setFloor] = useState(0);
  const [celebrating, setCelebrating] = useState(false);
  const [shared, setShared] = useState(false);
  const touchStart = useRef<number | null>(null);

  const next = useCallback(() => {
    if (screen !== "floors") return;
    if (floor === floors.length - 1) {
      setCelebrating(true);
      window.setTimeout(() => setScreen("letter"), 550);
      window.setTimeout(() => setCelebrating(false), 1500);
    } else setFloor((current) => current + 1);
  }, [floor, screen]);

  const back = useCallback(() => {
    if (screen === "letter") setScreen("floors");
    else if (screen === "floors" && floor > 0) setFloor((current) => current - 1);
    else if (screen === "floors") setScreen("lobby");
  }, [floor, screen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") back();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [back, next]);

  const openGift = () => {
    setCelebrating(true);
    window.setTimeout(() => setScreen("floors"), 700);
    window.setTimeout(() => setCelebrating(false), 1800);
  };

  const restart = () => {
    setFloor(0);
    setScreen("lobby");
    setShared(false);
  };

  const share = async () => {
    const shareData = {
      title: "Happy 35th Birthday, Jumoke!",
      text: "Happy Birthday Jumoke! Welcome to the 35th Floor. 35 years of radiance, grace, joy, and unforgettable magic.",
      url: window.location.href,
    };
    try {
      if (navigator.share) await navigator.share(shareData);
      else await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
      setShared(true);
      window.setTimeout(() => setShared(false), 2500);
    } catch {
      setShared(false);
    }
  };

  const currentFloor = floors[floor];

  if (!currentFloor) return null;

  return (
    <main className="birthday-shell">
      <SparkleField />
      {celebrating && <Confetti />}

      {screen === "lobby" && <Lobby onOpen={openGift} />}
      {screen === "floors" && (
        <FloorCard
          index={floor}
          floor={currentFloor}
          onBack={back}
          onNext={next}
          onTouchStart={(x) => { touchStart.current = x; }}
          onTouchEnd={(x) => {
            if (touchStart.current === null) return;
            const distance = x - touchStart.current;
            if (distance < -55) next();
            if (distance > 55) back();
            touchStart.current = null;
          }}
        />
      )}
      {screen === "letter" && <FinalLetter onBack={back} onRestart={restart} onShare={share} shared={shared} />}
    </main>
  );
}

function Lobby({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="lobby-view" aria-labelledby="birthday-title">
      <div className="lobby-kicker"><span>✦</span> The Lobby <span>✦</span></div>
      <p className="floor-mark">35</p>
      <h1 id="birthday-title">Happy Birthday<br /><em>Jumoke!</em></h1>
      <p className="welcome-line">Welcome to the 35th Floor</p>
      <div className="lobby-portrait-wrap">
        <div className="lobby-portrait-ring">
          <img src={jumokePortrait} alt="Jumoke, the birthday queen" />
        </div>
        <span>Birthday Queen</span>
      </div>
      <button className="gift" onClick={onOpen} aria-label="Open Jumoke's birthday gift">
        <span className="gift-glow" />
        <span className="gift-side" />
        <span className="gift-lid"><span className="gift-bow gift-bow-left" /><span className="gift-bow gift-bow-right" /><span className="gift-knot" /></span>
        <span className="gift-box"><span className="gift-ribbon" /></span>
      </button>
      <Button onClick={onOpen} size="lg" className="open-button">
        <Gift aria-hidden="true" /> Open Me
      </Button>
      <p className="tiny-note">A little journey through 35 reasons you are deeply loved</p>
    </section>
  );
}

function FloorCard({ index, floor, onBack, onNext, onTouchStart, onTouchEnd }: {
  index: number;
  floor: Floor;
  onBack: () => void;
  onNext: () => void;
  onTouchStart: (x: number) => void;
  onTouchEnd: (x: number) => void;
}) {
  const doodle = doodles[index % doodles.length] ?? "stars";
  return (
    <section
      className="floor-view"
      onTouchStart={(event) => {
        const touch = event.changedTouches.item(0);
        if (touch) onTouchStart(touch.clientX);
      }}
      onTouchEnd={(event) => {
        const touch = event.changedTouches.item(0);
        if (touch) onTouchEnd(touch.clientX);
      }}
      aria-live="polite"
    >
      <header className="journey-header">
        <span className="mini-monogram">J35</span>
        <div className="progress-copy">
          <span>Floor {index + 1} of 35</span>
          <div className="progress-track"><span style={{ width: `${((index + 1) / 35) * 100}%` }} /></div>
        </div>
        <Sparkles aria-hidden="true" />
      </header>

      <article className={`tribute-card ${index % 2 === 0 ? "portrait-right" : "portrait-left"}`} key={index}>
        <div className="photo-panel">
          <div className="portrait-glow" aria-hidden="true" />
          <img src={jumokePortrait} alt="Jumoke smiling in an elegant white dress" draggable={false} />
          <Doodle type={doodle} />
          <span className="photo-number">{String(index + 1).padStart(2, "0")}</span>
          <span className="photo-caption">Thirty five looks good on you</span>
        </div>
        <div className="word-panel">
          <p className="floor-label">Floor {String(index + 1).padStart(2, "0")}</p>
          <p className="card-headline">{floorHeadlines[index]}</p>
          <h2 className={floor.word.length > 14 ? "word-extra-long" : floor.word.length > 10 ? "word-long" : undefined}>
            {floor.word === "Soft Life Ambassador" ? <><span>Soft Life</span><span>Ambassador</span></> : floor.word}
          </h2>
          <span className="gold-rule" />
          <p className="definition">{floor.definition}</p>
          <p className="signature">This is so you, Jumoke ♡</p>
        </div>
      </article>

      <nav className="floor-nav" aria-label="Birthday floors">
        <Button variant="outline" size="lg" onClick={onBack} aria-label="Previous floor">
          <ArrowLeft aria-hidden="true" /> Back
        </Button>
        <Button size="lg" onClick={onNext} className="next-button">
          {index === 34 ? "Open letter" : "Next floor"} <ArrowRight aria-hidden="true" />
        </Button>
      </nav>
      <p className="swipe-note">Swipe or use arrow keys to explore</p>
    </section>
  );
}

function Doodle({ type }: { type: (typeof doodles)[number] }) {
  const content = useMemo(() => {
    if (type === "crown") return <><span className="doodle crown">♛</span><span className="doodle twinkle">✦</span></>;
    if (type === "glasses") return <><span className="doodle glasses">♡ ♡</span><span className="doodle mini-heart">♥</span></>;
    if (type === "hearts") return <><span className="doodle heart-one">♥</span><span className="doodle heart-two">♡</span><span className="doodle heart-three">♥</span></>;
    if (type === "flowers") return <><span className="doodle flower-one">❀</span><span className="doodle flower-two">✿</span></>;
    if (type === "stars") return <><span className="doodle star-one">✦</span><span className="doodle star-two">✧</span><span className="doodle star-three">⋆</span></>;
    if (type === "toast") return <><span className="doodle glass">♕</span><span className="doodle bubbles">° · °</span></>;
    return <><span className="doodle party-hat">△</span><span className="doodle party-lines">✧ ✦</span></>;
  }, [type]);
  return <div className={`doodles doodles-${type}`} aria-hidden="true">{content}</div>;
}

function FinalLetter({ onBack, onRestart, onShare, shared }: {
  onBack: () => void;
  onRestart: () => void;
  onShare: () => void;
  shared: boolean;
}) {
  return (
    <section className="finale-view">
      <div className="finale-heading">
        <span>✦ Floor 35 unlocked ✦</span>
        <h1>A Special Prayer<br /><em>&amp; Letter</em></h1>
      </div>
      <article className="letter-paper">
        <div className="letter-seal">J</div>
        <p className="salutation">Dearest Jumoke,</p>
        <p>Happy 35th Birthday, my sister and dearest friend!</p>
        <p>Welcome to the 35th floor! Looking back over the years, my heart is filled with so much gratitude to God for the gift of you. Thank you for being a friend who has stood by me through thick and thin, through every season, victory, and quiet struggle. You have been a rock, a cheerleader, a confidante, and a sister in every sense of the word. Having someone as supportive, loyal, and loving as you in my corner is one of the greatest blessings of my life.</p>
        <p>As you step into this milestone year, my prayer for you is deep and intentional:</p>
        <blockquote>May the 35th year be your most glorious, rewarding, and peaceful year yet. I pray for long life in vibrant health, overflowing vitality, and sound mind. May doors of uncommon favor swing wide open before you, and may God plant your feet in rooms where your gifts and beauty are celebrated.</blockquote>
        <p>I pray for prosperity that knows no bounds - abundance in your finances, sweetness in your relationships, and immense joy in your spirit. May God protect you from every harm and quiet every storm before it reaches your door. May you never lose your contagious smile, your boldness, or that radiant glow that makes you so unique.</p>
        <p>Thank you for being you - beautiful, kind, funny, and deeply faithful. I wish you only the absolute best, because you deserve nothing less.</p>
        <p>Cheers to 35 years of magnificence, and to a lifetime more together!</p>
        <p className="signoff">With all my love and prayers always,<br /><strong>Bisola</strong></p>
      </article>
      <div className="final-actions">
        <Button variant="outline" size="lg" onClick={onBack}><ArrowLeft aria-hidden="true" /> Floor 35</Button>
        <Button size="lg" onClick={onShare} className="share-button"><Share2 aria-hidden="true" /> {shared ? "Copied with love!" : "Share the love"}</Button>
        <Button variant="ghost" size="lg" onClick={onRestart}><RotateCcw aria-hidden="true" /> Start again</Button>
      </div>
    </section>
  );
}

function SparkleField() {
  return <div className="sparkle-field" aria-hidden="true">{Array.from({ length: 14 }, (_, index) => <i key={index}>✦</i>)}</div>;
}

function Confetti() {
  const colors = ["var(--rose)", "var(--gold)", "var(--berry)", "var(--blush-deep)"];
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: 44 }, (_, index) => (
        <i key={index} style={{ "--x": `${(index * 37) % 100}vw`, "--delay": `${(index % 9) * 0.04}s`, "--spin": `${index % 2 ? 540 : -540}deg`, background: colors[index % colors.length] } as React.CSSProperties} />
      ))}
    </div>
  );
}