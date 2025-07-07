// Movies.jsx

import React from "react";
import { Link } from 'react-router-dom'; // Tıklanabilir yapmak için Link'i import ediyoruz
import { CalendarIcon, StarIcon } from 'lucide-react'; 
import './App.css';

function Movies({ moviesToDisplay }) {
    
  // Eğer gösterilecek film yoksa (arama sonucu boşsa) bir mesaj göster
  if (moviesToDisplay.length === 0) {
    return <div className="no-movies-found">Aradığınız kriterlere uygun film bulunamadı.</div>;
  }

  return (
    <div className="movie-list">
      {/* Gelen "moviesToDisplay" dizisini map ile dönüyoruz */}
      {moviesToDisplay.map((movie) => (
        // Her bir kartı, doğru URL'e yönlendiren bir Link bileşeni ile sarıyoruz
        // key prop'u her zaman en dıştaki elemana verilir
        <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card-link">
          <div className="movie-card">
            {movie.image && (
              <img src={movie.image} alt={movie.movieName} className="movie-card-image" />
            )}
            <div className="movie-card-info">
              <h2>{movie.movieName}</h2>
              <p><CalendarIcon className='calender-icon'/>Year:{movie.year}</p>
              <p><StarIcon className='star-icon'/>IMDb Score:{movie.imbdScore}</p>
              <p>Gendre: {movie.typeof}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Movies;