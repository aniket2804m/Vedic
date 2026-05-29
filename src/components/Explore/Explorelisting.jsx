import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import EditListing from "../Explore/EditListing";
import DeleteListing from "../Explore/DeleteListing";
import API from '../../config/api';

const ExploreListing = ({ search }) => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Vedic", "Tarot", "Numerology", "Vastu", "Palmistry", "Kundali"];

  const fetchListings = useCallback(async () => {
    try {
      setLoading(true);
      const params = {};
      if (search) params.search = search;
      if (category && category !== "All") params.category = category;
      const res = await API.get(`/listings`, { params });
      setListings(res.data);
    } catch (err) {
      console.log("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  }, [search, category]);

  useEffect(() => { fetchListings(); }, [fetchListings]);

  const handleReset = () => {
    setCategory("");
    setActiveCategory("All");
  };

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setCategory(cat === "All" ? "" : cat);
  };

  const categoryColors = {
    "Vedic":      { bg: "rgba(251,191,36,.12)", color: "#f59e0b", dot: "#fbbf24" },
    "Tarot":      { bg: "rgba(167,139,250,.15)", color: "#a78bfa", dot: "#8b5cf6" },
    "Numerology": { bg: "rgba(52,211,153,.12)", color: "#34d399", dot: "#10b981" },
    "Vastu":      { bg: "rgba(251,113,133,.12)", color: "#fb7185", dot: "#f43f5e" },
    "Palmistry":  { bg: "rgba(96,165,250,.12)", color: "#60a5fa", dot: "#3b82f6" },
    "Kundali":    { bg: "rgba(249,115,22,.12)", color: "#fb923c", dot: "#f97316" },
  };

  const getColor = (cat) => categoryColors[cat] || { bg: "rgba(148,163,184,.12)", color: "#94a3b8", dot: "#64748b" };

  const zodiacSymbols = ["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,700;1,300;1,500&family=Outfit:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .al-page {
          min-height: 100vh;
          background: #050508;
          font-family: 'Outfit', sans-serif;
          color: #e2deff;
          overflow-x: hidden;
        }

        /* ═══ Stars Background ═══ */
        .al-stars {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 25% 40%, rgba(255,255,255,.5) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 40% 10%, rgba(255,255,255,.8) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 60%, rgba(255,255,255,.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 25%, rgba(255,255,255,.6) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 82% 70%, rgba(255,255,255,.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 90% 15%, rgba(255,255,255,.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 5% 75%, rgba(255,255,255,.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 60% 85%, rgba(255,255,255,.4) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 33% 90%, rgba(255,255,255,.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 75% 45%, rgba(255,255,255,.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 18% 55%, rgba(255,255,255,.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 48% 30%, rgba(255,255,255,.4) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 92% 85%, rgba(255,255,255,.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 63% 50%, rgba(255,255,255,.3) 0%, transparent 100%);
        }
        .al-nebula {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(ellipse 80% 50% at 20% 20%, rgba(109,40,217,.08) 0%, transparent 60%),
            radial-gradient(ellipse 60% 70% at 80% 80%, rgba(124,58,237,.06) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 50% 50%, rgba(139,92,246,.04) 0%, transparent 60%);
        }

        /* ═══ Hero ═══ */
        .al-hero {
          position: relative; z-index: 1;
          padding: 100px 24px 90px;
          text-align: center;
        }
        .al-hero::after {
          content: '';
          position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
          width: 600px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,.4), transparent);
        }

        .al-zodiac-ring {
          position: absolute; top: 20px; left: 50%; transform: translateX(-50%);
          width: 500px; height: 500px; pointer-events: none;
          animation: ring-spin 60s linear infinite;
        }
        @keyframes ring-spin { from{transform:translateX(-50%) rotate(0deg)} to{transform:translateX(-50%) rotate(360deg)} }

        .al-zodiac-sym {
          position: absolute; top: 50%; left: 50%;
          font-size: 18px; opacity: .15; color: #a78bfa;
          animation: sym-pulse 3s ease-in-out infinite;
        }
        @keyframes sym-pulse { 0%,100%{opacity:.1} 50%{opacity:.25} }

        .al-hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(139,92,246,.1); border: 1px solid rgba(139,92,246,.25);
          border-radius: 100px; padding: 6px 18px;
          font-size: 11px; font-weight: 500; color: #a78bfa;
          letter-spacing: .2em; text-transform: uppercase;
          margin-bottom: 28px; position: relative;
          animation: fade-down .7s ease both;
        }
        .al-hero-tag-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #a78bfa;
          box-shadow: 0 0 8px #8b5cf6;
          animation: dot-blink 2s ease-in-out infinite;
        }
        @keyframes dot-blink { 0%,100%{opacity:1} 50%{opacity:.3} }

        .al-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(42px, 7vw, 82px);
          font-weight: 300;
          color: #f1eeff;
          line-height: 1.05;
          margin-bottom: 8px;
          letter-spacing: -.01em;
          position: relative;
          animation: fade-up .8s ease .1s both;
        }
        .al-hero-title strong {
          font-weight: 700;
          background: linear-gradient(135deg, #c4b5fd, #8b5cf6, #fbbf24);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .al-hero-title em {
          font-style: italic; font-weight: 300; color: #fbbf24;
          -webkit-text-fill-color: #fbbf24;
        }
        .al-hero-sub {
          font-size: 16px; color: rgba(196,181,253,.5); max-width: 480px;
          margin: 16px auto 44px; font-weight: 300; line-height: 1.8;
          position: relative; animation: fade-up .8s ease .2s both;
        }

        .al-hero-stats {
          display: flex; justify-content: center; align-items: center;
          gap: 0; position: relative; animation: fade-up .8s ease .3s both;
        }
        .al-stat {
          padding: 0 36px; text-align: center;
        }
        .al-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 34px; font-weight: 500; color: #f1eeff;
          line-height: 1;
        }
        .al-stat-label {
          font-size: 10px; color: rgba(196,181,253,.4);
          text-transform: uppercase; letter-spacing: .15em; margin-top: 4px;
        }
        .al-stat-div {
          width: 1px; height: 40px;
          background: linear-gradient(180deg, transparent, rgba(139,92,246,.3), transparent);
        }

        @keyframes fade-up { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fade-down { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }

        /* ═══ Category Pills ═══ */
        .al-categories {
          max-width: 860px; margin: 48px auto 0; padding: 0 24px;
          display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;
          position: relative; z-index: 1;
          animation: fade-up .8s ease .35s both;
        }
        .al-cat-pill {
          padding: 9px 22px; border-radius: 100px;
          border: 1px solid rgba(139,92,246,.2);
          background: rgba(139,92,246,.06);
          font-size: 13px; font-weight: 400; color: rgba(196,181,253,.6);
          cursor: pointer; font-family: 'Outfit', sans-serif;
          transition: all .2s ease; letter-spacing: .02em;
        }
        .al-cat-pill:hover {
          border-color: rgba(139,92,246,.45);
          color: #c4b5fd;
          background: rgba(139,92,246,.12);
        }
        .al-cat-pill.active {
          background: rgba(139,92,246,.2);
          border-color: #7c3aed;
          color: #ddd6fe;
          box-shadow: 0 0 16px rgba(124,58,237,.2);
        }

        /* ═══ Divider ═══ */
        .al-divider {
          max-width: 860px; margin: 40px auto 0; padding: 0 24px;
          display: flex; align-items: center; gap: 12px;
          position: relative; z-index: 1;
        }
        .al-divider-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,.2), transparent);
        }
        .al-divider-sym { font-size: 18px; color: rgba(139,92,246,.4); }
        .al-count { font-size: 13px; color: rgba(196,181,253,.35); font-weight: 300; }
        .al-count strong { color: rgba(196,181,253,.7); font-weight: 500; }

        /* ═══ Skeleton ═══ */
        .al-skeleton {
          max-width: 860px; margin: 32px auto 0; padding: 0 24px;
          display: grid; grid-template-columns: repeat(auto-fill,minmax(260px,1fr)); gap: 20px;
          position: relative; z-index: 1;
        }
        .al-skel-card {
          border-radius: 20px; height: 360px;
          background: rgba(139,92,246,.05);
          border: 1px solid rgba(139,92,246,.1);
          position: relative; overflow: hidden;
        }
        .al-skel-card::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(139,92,246,.08) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: skel-shimmer 1.6s infinite;
        }
        @keyframes skel-shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }

        /* ═══ Cards Grid ═══ */
        .al-grid {
          max-width: 860px; margin: 32px auto 0; padding: 0 24px 80px;
          display: grid; grid-template-columns: repeat(auto-fill,minmax(260px,1fr)); gap: 20px;
          position: relative; z-index: 1;
        }

        /* ═══ Card ═══ */
        .al-card {
          background: rgba(15,10,30,.8);
          border-radius: 20px; overflow: hidden;
          border: 1px solid rgba(139,92,246,.15);
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
          animation: card-rise .5s ease both;
          display: flex; flex-direction: column;
          backdrop-filter: blur(10px);
          position: relative;
        }
        .al-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(167,139,250,.4), transparent);
          opacity: 0; transition: opacity .3s;
        }
        .al-card:hover::before { opacity: 1; }
        @keyframes card-rise { from{opacity:0;transform:translateY(24px) scale(.98)} to{opacity:1;transform:translateY(0) scale(1)} }
        .al-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(109,40,217,.2), 0 0 0 1px rgba(139,92,246,.25);
          border-color: rgba(139,92,246,.3);
        }

        .al-card-img { width: 100%; height: 180px; object-fit: cover; display: block; }
        .al-card-no-img {
          height: 180px;
          background: linear-gradient(135deg, #0d0920 0%, #1a0a3d 50%, #0d0920 100%);
          display: flex; align-items: center; justify-content: center;
          font-size: 52px; position: relative; overflow: hidden;
        }
        .al-card-no-img::after {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(139,92,246,.15) 0%, transparent 70%);
        }

        .al-card-body { padding: 20px; flex: 1; display: flex; flex-direction: column; }
        .al-card-top {
          display: flex; align-items: flex-start; justify-content: space-between;
          gap: 8px; margin-bottom: 12px;
        }
        .al-card-badge {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 10px; border-radius: 100px;
          font-size: 11px; font-weight: 500; letter-spacing: .06em;
          border: 1px solid transparent;
        }
        .al-badge-dot { width: 5px; height: 5px; border-radius: 50%; }
        .al-card-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px; font-weight: 500; color: #fbbf24; white-space: nowrap;
        }
        .al-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 19px; font-weight: 500; color: #ede9fe; line-height: 1.3;
          margin-bottom: 8px;
        }
        .al-card-desc {
          font-size: 13px; color: rgba(196,181,253,.45); line-height: 1.7; font-weight: 300;
          margin-bottom: 16px; flex: 1;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .al-card-loc {
          display: flex; align-items: center; gap: 5px;
          font-size: 12px; color: rgba(196,181,253,.3); margin-bottom: 16px;
        }
        .al-card-actions { display: flex; gap: 8px; }
        .al-btn-primary {
          flex: 1; padding: 10px;
          background: linear-gradient(135deg, #5b21b6, #7c3aed);
          color: #ede9fe;
          border: none; border-radius: 10px; font-size: 13px; font-weight: 500;
          font-family: 'Outfit', sans-serif; cursor: pointer;
          transition: all .2s ease; letter-spacing: .02em;
        }
        .al-btn-primary:hover {
          background: linear-gradient(135deg, #6d28d9, #8b5cf6);
          box-shadow: 0 8px 20px rgba(109,40,217,.35);
          transform: translateY(-1px);
        }
        .al-btn-secondary {
          padding: 10px 14px;
          background: rgba(139,92,246,.08);
          color: rgba(196,181,253,.6);
          border: 1px solid rgba(139,92,246,.15);
          border-radius: 10px; font-size: 13px; font-weight: 400;
          font-family: 'Outfit', sans-serif; cursor: pointer;
          transition: all .2s ease; white-space: nowrap;
        }
        .al-btn-secondary:hover {
          background: rgba(139,92,246,.15);
          color: #c4b5fd;
          border-color: rgba(139,92,246,.3);
        }
        .al-admin-row {
          display: flex; gap: 8px; margin-top: 12px; padding-top: 12px;
          border-top: 1px solid rgba(139,92,246,.1);
        }

        /* ═══ Empty ═══ */
        .al-empty {
          text-align: center; padding: 90px 24px;
          max-width: 380px; margin: 0 auto;
          position: relative; z-index: 1;
        }
        .al-empty-icon {
          width: 80px; height: 80px;
          background: rgba(139,92,246,.1);
          border: 1px solid rgba(139,92,246,.2);
          border-radius: 24px;
          display: flex; align-items: center; justify-content: center;
          font-size: 36px; margin: 0 auto 24px;
        }
        .al-empty-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px; color: #ede9fe; margin-bottom: 10px; font-weight: 500;
        }
        .al-empty-sub {
          font-size: 14px; color: rgba(196,181,253,.4);
          font-weight: 300; line-height: 1.7; margin-bottom: 24px;
        }
        .al-empty-btn {
          padding: 11px 28px;
          background: rgba(139,92,246,.15);
          color: #c4b5fd;
          border: 1px solid rgba(139,92,246,.25);
          border-radius: 10px; font-size: 14px; font-weight: 500;
          font-family: 'Outfit', sans-serif; cursor: pointer;
          transition: all .2s;
        }
        .al-empty-btn:hover {
          background: rgba(139,92,246,.25);
          box-shadow: 0 0 20px rgba(124,58,237,.2);
        }

        /* ═══ Footer / Learning Model ═══ */
        .al-model {
          background: rgba(10,5,20,.9);
          border-top: 1px solid rgba(139,92,246,.12);
          padding: 90px 24px;
          position: relative; z-index: 1; overflow: hidden;
        }
        .al-model::before {
          content: '';
          position: absolute; top: -80px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 300px;
          background: radial-gradient(ellipse, rgba(109,40,217,.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .al-model-header { text-align: center; margin-bottom: 56px; }
        .al-model-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(30px,5vw,52px); font-weight: 300;
          color: #f1eeff; margin-bottom: 10px;
        }
        .al-model-title strong { font-weight: 700; color: #a78bfa; }
        .al-model-sub {
          font-size: 14px; color: rgba(196,181,253,.4); font-weight: 300;
          letter-spacing: .03em;
        }
        .al-model-grid {
          display: grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
          gap: 16px; max-width: 800px; margin: 0 auto;
        }
        .al-model-card {
          background: rgba(139,92,246,.04);
          border: 1px solid rgba(139,92,246,.1);
          border-radius: 20px; padding: 32px 26px;
          transition: all .25s ease; position: relative; overflow: hidden;
        }
        .al-model-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,.3), transparent);
          opacity: 0; transition: opacity .3s;
        }
        .al-model-card:hover::before { opacity: 1; }
        .al-model-card:hover {
          background: rgba(139,92,246,.08);
          border-color: rgba(139,92,246,.22);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(109,40,217,.12);
        }
        .al-model-icon { font-size: 32px; margin-bottom: 18px; }
        .al-model-phase {
          font-size: 10px; font-weight: 500; letter-spacing: .2em;
          text-transform: uppercase; color: #a78bfa; margin-bottom: 10px;
        }
        .al-model-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px; color: #ede9fe; margin-bottom: 10px; font-weight: 500;
        }
        .al-model-card-desc {
          font-size: 13px; color: rgba(196,181,253,.4); line-height: 1.75; font-weight: 300;
        }

        /* ═══ Floating orbs ═══ */
        .al-orb {
          position: fixed; border-radius: 50%; pointer-events: none; z-index: 0;
          animation: orb-drift 20s ease-in-out infinite;
        }
        .al-orb-1 {
          width: 300px; height: 300px; top: 10%; left: -100px;
          background: radial-gradient(circle, rgba(109,40,217,.07) 0%, transparent 70%);
          animation-duration: 25s;
        }
        .al-orb-2 {
          width: 400px; height: 400px; bottom: 20%; right: -150px;
          background: radial-gradient(circle, rgba(124,58,237,.05) 0%, transparent 70%);
          animation-duration: 30s; animation-delay: -10s;
        }
        @keyframes orb-drift {
          0%,100%{transform:translate(0,0)}
          33%{transform:translate(30px,-20px)}
          66%{transform:translate(-20px,30px)}
        }

        @media (max-width: 600px) {
          .al-hero-stats { gap: 0; }
          .al-stat { padding: 0 20px; }
          .al-zodiac-ring { width: 320px; height: 320px; }
        }
      `}</style>

      <div className="al-page">
        <div className="al-stars" aria-hidden="true" />
        <div className="al-nebula" aria-hidden="true" />
        <div className="al-orb al-orb-1" aria-hidden="true" />
        <div className="al-orb al-orb-2" aria-hidden="true" />

        {/* ── Hero ── */}
        <div className="al-hero">
          {/* Rotating zodiac ring */}
          <div className="al-zodiac-ring" aria-hidden="true">
            {zodiacSymbols.map((sym, i) => {
              const angle = (i / 12) * 360;
              const rad = (angle * Math.PI) / 180;
              const r = 220;
              const x = 250 + r * Math.cos(rad);
              const y = 250 + r * Math.sin(rad);
              return (
                <span
                  key={i}
                  className="al-zodiac-sym"
                  style={{
                    transform: `translate(${x - 250}px, ${y - 250}px)`,
                    animationDelay: `${i * 0.25}s`,
                  }}
                >
                  {sym}
                </span>
              );
            })}
          </div>

          <div className="al-hero-tag">
            <span className="al-hero-tag-dot" aria-hidden="true" />
            Astrology Learning Paths
          </div>

          <h1 className="al-hero-title">
            Unlock the Secrets of<br />
            <strong>Cosmic Wisdom</strong>
          </h1>

          <p className="al-hero-sub">
            Explore our curated astrology courses — from Vedic charts to Tarot mastery, guided by expert practitioners.
          </p>

          <div className="al-hero-stats">
            <div className="al-stat">
              <div className="al-stat-num">50+</div>
              <div className="al-stat-label">Courses</div>
            </div>
            <div className="al-stat-div" />
            <div className="al-stat">
              <div className="al-stat-num">12</div>
              <div className="al-stat-label">Zodiac Tracks</div>
            </div>
            <div className="al-stat-div" />
            <div className="al-stat">
              <div className="al-stat-num">100%</div>
              <div className="al-stat-label">Authentic</div>
            </div>
          </div>
        </div>

        {/* ── Category Pills ── */}
        <div className="al-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`al-cat-pill ${activeCategory === cat ? "active" : ""}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Divider / Count ── */}
        {!loading && (
          <div className="al-divider">
            <div className="al-divider-line" />
            <span className="al-divider-sym">✦</span>
            <p className="al-count">
              <strong>{listings.length}</strong> courses found
              {search && <> for &quot;{search}&quot;</>}
            </p>
            <span className="al-divider-sym">✦</span>
            <div className="al-divider-line" />
          </div>
        )}

        {/* ── Skeletons ── */}
        {loading && (
          <div className="al-skeleton">
            {[1, 2, 3].map((i) => <div key={i} className="al-skel-card" />)}
          </div>
        )}

        {/* ── Cards ── */}
        {!loading && listings.length > 0 && (
          <div className="al-grid">
            {listings.map((item, index) => {
              const c = getColor(item.amenities);
              return (
                <div
                  key={item._id}
                  className="al-card"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  {item.images?.length > 0
                    ? <img className="al-card-img" src={item.images[0].url} alt={item.title} />
                    : (
                      <div className="al-card-no-img">
                        {zodiacSymbols[index % 12]}
                      </div>
                    )
                  }
                  <div className="al-card-body">
                    <div className="al-card-top">
                      <span
                        className="al-card-badge"
                        style={{
                          background: c.bg,
                          color: c.color,
                          borderColor: `${c.dot}30`,
                        }}
                      >
                        <span className="al-badge-dot" style={{ background: c.dot, boxShadow: `0 0 6px ${c.dot}` }} />
                        {item.amenities || "Astrology"}
                      </span>
                      <span className="al-card-price">₹{item.price}</span>
                    </div>

                    <h3 className="al-card-title">{item.title}</h3>
                    <p className="al-card-desc">{item.description}</p>

                    {item.location && (
                      <div className="al-card-loc">
                        <span>✦</span>
                        <span>{item.location}</span>
                      </div>
                    )}

                    <div className="al-card-actions">
                      <button className="al-btn-primary" onClick={() => navigate("/career")}>
                        Enroll Now
                      </button>
                      <button className="al-btn-secondary" onClick={() => navigate("/contact")}>
                        Contact
                      </button>
                      <button className="al-btn-secondary" onClick={() => navigate(`/coursedetail/${item._id}`)}>
                        Details
                      </button>
                    </div>

                    {role === "admin" && (
                      <div className="al-admin-row">
                        <EditListing listingId={item._id} item={item} setListings={setListings} />
                        <DeleteListing item={item} setListings={setListings} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Empty State ── */}
        {!loading && listings.length === 0 && (
          <div className="al-empty">
            <div className="al-empty-icon">🔮</div>
            <h3 className="al-empty-title">Koi course nahi mila</h3>
            <p className="al-empty-sub">
              {search
                ? `"${search}" ke liye koi result nahi. Category change karo ya filter reset karo.`
                : "Category filter reset karo aur dobara try karo."}
            </p>
            <button className="al-empty-btn" onClick={handleReset}>
              ✦ Clear Filters
            </button>
          </div>
        )}

        {/* ── Learning Model ── */}
        <div className="al-model">
          <div className="al-model-header">
            <h2 className="al-model-title">Our <strong>Learning Path</strong></h2>
            <p className="al-model-sub">Teen phases mein mastery — basics se cosmic clarity tak</p>
          </div>
          <div className="al-model-grid">
            {[
              {
                phase: "Phase 01",
                title: "Foundations",
                desc: "Planets, houses, zodiac signs aur their cosmic meanings — curated content se strong base banao.",
                icon: "🌙",
              },
              {
                phase: "Phase 02",
                title: "Interpretation",
                desc: "Birth charts, transits, aur dashas ko samjho. Real charts pe practice karo with expert guidance.",
                icon: "⭐",
              },
              {
                phase: "Phase 03",
                title: "Mastery",
                desc: "Advanced techniques master karo aur apna professional astrology portfolio build karo.",
                icon: "☀️",
              },
            ].map((item) => (
              <div key={item.phase} className="al-model-card">
                <div className="al-model-icon">{item.icon}</div>
                <div className="al-model-phase">{item.phase}</div>
                <h3 className="al-model-card-title">{item.title}</h3>
                <p className="al-model-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default ExploreListing;