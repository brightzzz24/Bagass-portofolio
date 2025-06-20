import React, { useState } from "react"; // 1. Impor useState

// --- GANTI DATA DI BAWAH INI DENGAN DATA ANDA ---
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
      "https://i.postimg.cc/rF5x7JmT/Screenshot-2025-06-14-19-17-56-16-c28519d624689b8d548e2809af584b0c.jpg",
      "https://i.postimg.cc/s2fWQGrZ/Screenshot-2022-07-13-14-52-46-60-c28519d624689b8d548e2809af584b0c.jpg",
      "https://i.postimg.cc/T3Jm3qZ6/Screenshot-2019-10-21-18-44-26-83-998d3425f9e75a0428f0fabdce419960.jpg",
      "https://i.postimg.cc/sX9bnLLL/Screenshot-2025-06-21-02-14-52-94-c28519d624689b8d548e2809af584b0c.jpg",
      "https://i.postimg.cc/jj87zqx3/Screenshot-2025-06-14-01-34-29-59-c28519d624689b8d548e2809af584b0c.jpg",
    ],
  },
  {
    name: "Zenless Zonee Zeroo",
    photos: [
      "https://i.postimg.cc/t4pZwn7m/Screenshot-2025-02-11-00-35-25-65-7124844c02309b9164e262fc9da42c49.jpg",
      "https://i.postimg.cc/PrmvSQfw/Screenshot-2025-02-14-14-58-24-59-7124844c02309b9164e262fc9da42c49.jpg",
      "https://i.postimg.cc/q7vKhHGB/Screenshot-2025-06-06-14-47-10-72-7124844c02309b9164e262fc9da42c49.jpg",
      "https://i.postimg.cc/50TQRPFw/Screenshot-2024-12-31-08-23-06-76-7124844c02309b9164e262fc9da42c49.jpg",
      "https://i.postimg.cc/kXrtNpCC/Screenshot-2025-01-02-14-12-41-29-7124844c02309b9164e262fc9da42c49.jpg",
    ],
  },
];
// ----------------------------------------------------

export const HobbySection = () => {
  const [selectedGame, setSelectedGame] = useState("All");
  // 1. Ubah state untuk menyimpan galeri dan indeks gambar yang aktif
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

  // 2. Logika baru untuk navigasi gambar
  const handleNextImage = (e) => {
    e.stopPropagation(); // Mencegah modal tertutup saat tombol diklik
    setActiveImage(prev => {
      const nextIndex = (prev.index + 1) % prev.gallery.length;
      return { ...prev, index: nextIndex };
    });
  };

  const handlePrevImage = (e) => {
    e.stopPropagation(); // Mencegah modal tertutup saat tombol diklik
    setActiveImage(prev => {
      const prevIndex = (prev.index - 1 + prev.gallery.length) % prev.gallery.length;
      return { ...prev, index: prevIndex };
    });
  };

  return (
    <>
      <section id="hobby" className="py-24 px-4">
        {/* ... Konten section tidak berubah ... */}
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            My <span className="text-primary">Gaming Hobbies</span>
          </h2>

          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {/* ... Tombol filter tidak berubah ... */}
          </div>
          
          <div className="space-y-16">
            {filteredGames.map((game) => (
              <div key={game.name}>
                <h3 className="text-2xl font-semibold mb-6 text-left">{game.name}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {game.photos.map((photo, photoIndex) => (
                    // 3. Perbarui onClick di sini
                    <div 
                      key={photoIndex} 
                      className="bg-card rounded-lg shadow-lg overflow-hidden group cursor-pointer"
                      onClick={() => handleImageClick(game.photos, photoIndex)}
                    >
                      <img
                        src={photo}
                        alt={`${game.name} screenshot ${photoIndex + 1}`}
                        className="aspect-video w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tampilan Modal/Popup yang sudah ditingkatkan */}
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
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          {/* Gambar yang Diperbesar */}
          <img
            src={activeImage.gallery[activeImage.index]}
            alt="Enlarged view"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat gambar diklik
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
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      )}
    </>
  );
};
