import React, { useState } from "react";
import { cn } from "../lib/utils";
import { Crown, Award, Check, ChevronsDown, Star } from "lucide-react";
const games = [
  // Pastikan data Anda sudah terisi di sini
  {
    name: "Honkai: Star Rail",
    level: 90,
    photos: [
      "/hsr/hsr1.png",
      "/hsr/hsr2.png",
      "/hsr/hsr3.png",
      "/hsr/hsr4.png",
      "/hsr/hsr5.png",
    ],
  },
  {
    name: "Honor Of Kings",
    level: 95,
    photos: [
      "/hok/hok1.png",
      "/hok/hok2.png",
      "/hok/hok3.png",
      "/hok/hok4.png",
      "/hok/hok5.png",
    ],
  },
  {
    name: "Free Fire",
    level: 85,
    photos: [
      "/ff/ff1.png",
      "/ff/ff2.png",
      "/ff/ff3.png",
      "/ff/ff4.png",
      "/ff/ff5.png",
    ],
  },
  {
    name: "Genshin Impact",
    level: 70,
    photos: [
      "/gi/gi1.png",
      "/gi/gi2.png",
      "/gi/gi3.png",
      "/gi/gi4.png",
      "/gi/gi5.png",
    ],
  },
];

const gameCategories = ["All", ...games.map((game) => game.name)];

const GameLevelIcon = ({ level }) => {
  const iconSize = 22;
  const iconClassName = "text-primary";
  if (level >= 95) return <Crown size={iconSize} className={iconClassName} />;
  if (level >= 85) return <Star size={iconSize} className={iconClassName} />;
  if (level >= 70) return <Award size={iconSize} className={iconClassName} />;
  return <ChevronsDown size={iconSize} className={iconClassName} />;
};

export const HobbySection = () => {
  const [selectedGame, setSelectedGame] = useState("All");
  const [activeImage, setActiveImage] = useState({ gallery: null, index: 0 });

  const filteredGames =
    selectedGame === "All"
      ? games
      : games.filter((game) => game.name === selectedGame);

  const handleImageClick = (gamePhotos, photoIndex) => {
    setActiveImage({ gallery: gamePhotos, index: photoIndex });
  };
  const handleCloseModal = () => {
    setActiveImage({ gallery: null, index: 0 });
  };
  const handleNextImage = (e) => {
    e.stopPropagation();
    setActiveImage((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.gallery.length,
    }));
  };
  const handlePrevImage = (e) => {
    e.stopPropagation();
    setActiveImage((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.gallery.length) % prev.gallery.length,
    }));
  };

  return (
    <>
      <section id="hobby" className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            My <span className="text-primary">Hobby</span>
          </h2>

          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {gameCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedGame(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300",
                  selectedGame === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 hover:bg-primary/20"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-16">
            {filteredGames.map((game) => (
              <div key={game.name}>
                <div className="flex items-center gap-3 text-left mb-6">
                  <GameLevelIcon level={game.level} />
                  <h3 className="text-2xl font-semibold">{game.name}</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {game.photos.map((photo, photoIndex) => (
                    <div
                      key={photoIndex}
                      className="bg-card rounded-lg shadow-lg overflow-hidden group cursor-pointer border border-border/50 dark:border-border/80 transition-all duration-200 hover:ring-2 hover:ring-white/75"
                      onClick={() => handleImageClick(game.photos, photoIndex)}
                    >
                      <img
                        src={photo}
                        alt={`${game.name} screenshot ${photoIndex + 1}`}
                        className="aspect-video w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="w-full bg-slate-200 dark:bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${game.level}%` }}
                    />
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-sm font-medium text-slate-500 dark:text-muted-foreground font-mono">
                      Level {game.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BAGIAN POPUP GAMBAR (MODAL) YANG DIKEMBALIKAN --- */}
      {activeImage.gallery && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex justify-center items-center p-4"
          onClick={handleCloseModal}
        >
          {/* Tombol Navigasi Kiri */}
          <button
            className="absolute left-4 md:left-8 text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
            onClick={handlePrevImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Gambar yang Diperbesar */}
          <img
            src={activeImage.gallery[activeImage.index]}
            alt="Enlarged view"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Tombol Close */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 transition-colors z-10"
            onClick={handleCloseModal}
          >
            &times;
          </button>

          {/* Tombol Navigasi Kanan */}
          <button
            className="absolute right-4 md:right-8 text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
            onClick={handleNextImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};
