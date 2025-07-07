// MovieDetail.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CalendarIcon, StarIcon, PauseIcon } from 'lucide-react'; 
import './App.css'; 

const trailerLinks = {
  oppenheimer: "https://www.youtube.com/watch?v=uYPbbksJxIg",
  atonement: "https://www.youtube.com/watch?v=rkVQwwPrr4c",
  anatomyOfAFall: "https://www.youtube.com/watch?v=FUXawkH-ONM",
  shawshankRedemption: "https://www.youtube.com/watch?v=NmzuHjWmXOc",
  inception: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  theDarkKnight: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  interstellar: "https://www.youtube.com/watch?v=2LqzF5WauAw",
  parasite: "https://www.youtube.com/watch?v=isOGD_7hNIY"
};

// Fonksiyonun adını genel bir şey yapalım: MovieDetail
function MovieDetail({ allMovies }) {
  // 1. URL'den filmin ID'sini al
  const { movieId } = useParams();

  // 2. O ID'yi kullanarak tüm filmler listesinden doğru filmi bul
  const movie = allMovies.find(m => m.id === movieId);

  // 3. Eğer film bulunamazsa bir hata mesajı göster
  if (!movie) {
    return <div>Film bulunamadı!</div>;
  }

  // 4. Bulunan filmin bilgilerini kullanarak şablonu doldur ve ekrana bas
  return (
    <div className="movie-detail-container">
      <Link to="/" className="back-link" >← Geri Dön</Link>
      <div className="movie-detail-content">
        <img src={movie.image} alt={movie.movieName} className="movie-detail-image" />
        <div className="movie-detail-info">
          <h1>{movie.movieName}</h1>
          <p><CalendarIcon className='calender-icon'/><strong>Yayın Yılı:</strong> {movie.year}</p>
          <p><StarIcon className='star-icon'/><strong>IMDb Puanı:</strong> {movie.imbdScore}</p>
          <p>
            <PauseIcon className="pause-icon" />
            <a 
              href={trailerLinks[movie.id]} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ marginLeft: '6px', color: 'whitesmoke' }}
            >
              Click for trailer
            </a>
          </p>

          <p><strong>Gendre:</strong> {movie.typeof}</p>
          <p>{movie.detail}.</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;