import React, { useState } from "react";
import { cn } from "../lib/utils"; // 1. Tambahkan impor untuk cn

// Data 'games' Anda tidak perlu diubah, biarkan seperti ini
const games = [
  {
    name: "Honkai: Star Rail",
    photos: [
      "https://i.postimg.cc/QxDHKr8L/Screenshot-2025-02-14-16-39-03-70-f940ae8776cd4aedda1adc27c5d1f2d6.jpg",
      "https://i.postimg.cc/hvLvZ203/Screenshot-2025-04-09-15-45-03-16-f940ae8776cd4aedda1adc27c5d1f2d6.jpg",
      "https://i.postimg.cc/13PwSqnq/Screenshot-2025-05-27-14-08-57-65-f940ae8776cd4aedda1adc27c5d1f2d6.jpg",
      "https://i.postimg.cc/3Jj0txSJ/Screenshot-2025-04-26-11-54-08-51-f940ae8776cd4aedda1adc27c5d1f2d6.jpg",
      "https://i.postimg.cc/52xYTWT5/Screenshot-2025-04-26-11-54-45-38-f940ae8776cd4aedda1adc27c5d1f2d6.jpg",
    ],
  },
  {
    name: "Honor Of Kings",
    photos: [
      "https://i.postimg.cc/BvRzQ0rk/FULL-PRESET-CUSTOM-PROFILE-HONOR-OF-KINGS-CR-XZEEL-ON-TIKTOK-FD2-F150.png",
      "https://i.postimg.cc/Y9hm8cjr/Screenshot-2024-11-02-20-12-43-70-6a94144e19573033dd3c8ad4551cc566.jpg",
      "https://i.postimg.cc/g2sXWcZc/Screenshot-2025-01-25-20-34-27-45-6a94144e19573033dd3c8ad4551cc566.jpg",
      "https://i.postimg.cc/CK6RRv7W/Screenshot-2025-03-29-20-43-34-40-6a94144e19573033dd3c8ad4551cc566.jpg",
      "https://i.postimg.cc/g0tZ3tMV/Screenshot-2025-05-13-19-24-44-10-6a94144e19573033dd3c8ad4551cc566.jpg",
    ],
  },
  {
    name: "Free Fire",
    photos: [
      "https://i.postimg.cc/T3Jm3qZ6/Screenshot-2019-10-21-18-44-26-83-998d3425f9e75a0428f0fabdce419960.jpg",
      "https://i.postimg.cc/s2fWQGrZ/Screenshot-2022-07-13-14-52-46-60-c28519d624689b8d548e2809af584b0c.jpg",
      "https://i.postimg.cc/y6227ppg/Screenshot-2023-05-06-16-33-57-98-c28519d624689b8d548e2809af584b0c.jpg",
      "https://i.postimg.cc/rF5x7JmT/Screenshot-2025-06-14-19-17-56-16-c28519d624689b8d548e2809af584b0c.jpg",
      "https://i.postimg.cc/jj87zqx3/Screenshot-2025-06-14-01-34-29-59-c28519d624689b8d548e2809af584b0c.jpg",
    ],
  },
  {
    name: "Genshin Impact",
    photos: [
      "https://i.postimg.cc/76wYtY04/Screenshot-2025-01-01-10-00-53-81-e80eb31669cc7edfbce1531f4d25a535.jpg",
      "https://i.postimg.cc/tJgRySBm/Screenshot-2024-05-01-03-23-09-35-e80eb31669cc7edfbce1531f4d25a535.jpg",
      "https://i.postimg.cc/T35wpsfz/Screenshot-2023-06-13-17-04-18-51-e80eb31669cc7edfbce1531f4d25a535.jpg",
      "https://i.postimg.cc/43zx1hKw/Screenshot-2023-11-17-17-49-06-39-e80eb31669cc7edfbce1531f4d25a535.jpg",
      "https://i.postimg.cc/8C8CWbCj/Screenshot-2023-10-02-13-44-17-88-e80eb31669cc7edfbce1531f4d25a535.jpg",
    ],
  },
];

// 2. Buat daftar kategori game secara dinamis
const gameCategories = ["All", ...games.map((game) => game.name)];

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
    setActiveImage((prev) => {
      const nextIndex = (prev.index + 1) % prev.gallery.length;
      return { ...prev, index: nextIndex };
    });
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setActiveImage((prev) => {
      const prevIndex =
        (prev.index - 1 + prev.gallery.length) % prev.gallery.length;
      return { ...prev, index: prevIndex };
    });
  };

  return (
    <>
      <section id="hobby" className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            My <span className="text-primary">Hobby</span>
          </h2>

          {/* 3. Tambahkan blok tombol filter di sini */}
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
                <h3 className="text-2xl font-semibold mb-6 text-left">
                  {game.name}
                </h3>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bagian Modal/Popup tidak ada perubahan */}
      {activeImage.gallery && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex justify-center items-center p-4"
          onClick={handleCloseModal}
        >
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
          <img
            src={activeImage.gallery[activeImage.index]}
            alt="Enlarged view"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 transition-colors z-10"
            onClick={handleCloseModal}
          >
            &times;
          </button>
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
