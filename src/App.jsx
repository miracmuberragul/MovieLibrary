import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, href } from 'react-router-dom'; 
import './App.css'
import Movies from './Movies';
// Artık doğru bileşeni, doğru isimle import ediyoruz
import MovieDetail from './MovieDetail'; 
import { Search } from 'lucide-react'; 



// Film verilerini ve resim importlarını App.js'e taşıdık
import oppenheimerImg from './assets/Oppenheimer.jpg';
import atonementImg from './assets/Atonement.jpg';
import anatomyofaFallImg from './assets/Anatomyofafall.jpg'
import redemptionImg from './assets/TheShawshank.jpg'
import inceptionImg from './assets/Inception.png'
import darknightImg from './assets/TheDarkKnight.jpg'
import interstellarImg from './assets/interstellar.jpg'
import parasiteImg from './assets/Parasite.jpg'

const movies =[ 
    {
        id: 'oppenheimer',
        image : oppenheimerImg,
        movieName: "Oppenheimer",
        year: 2023,
        imbdScore: 8.4,
        typeof: "Biography / Drama",
        detail:"Directed by Christopher Nolan, this biographical drama tells the story of J. Robert Oppenheimer, known as the father of the atomic bomb, and his role in the Manhattan Project. The film explores both scientific achievement and ethical dilemmas, portraying one of the most critical moments in history with powerful storytelling."
    },
    {
        id: 'atonement',
        image: atonementImg,
        movieName: "Atonement",
        year: 2007,
        imbdScore: 7.8,
        typeof: "War/ Romantic / Drama",
        detail:"Set during World War II, this romantic drama follows the devastating consequences of a young girl’s false accusation, which tears two lovers apart. With themes of war, regret, love, and redemption, Atonement captivates viewers through its emotional depth and striking visuals."
    },
    {
        id: 'anatomy-of-a-fall',
        image: anatomyofaFallImg,
        movieName: "Anatomy of a Fall",
        year: 2023,
        imbdScore: 7.9,
        typeof: "Crime / Drama / Thriller",
        detail:"This French crime drama revolves around a woman accused of her husband’s death, unfolding through a gripping courtroom trial. Exploring justice, guilt, and family dynamics, the film keeps viewers questioning the truth until the very end."
    },
    {
        id: 'the-shawshank-redemption',
        image: redemptionImg,
        movieName: "The Shawshank Redemption",
        year: 1994,
        imbdScore: 9.3,
        typeof: "Drama / Crime",
        detail: "One of the most beloved films of all time, this classic tells the story of a man wrongly imprisoned and his enduring journey toward freedom. With powerful themes of hope and friendship, it leaves a lasting emotional impact on its audience."
    },
    {
        id: 'inception',
        image: inceptionImg,
        movieName: "Inception",
        year: 2010,
        imbdScore: 8.8,
        typeof: "Action / Sci-Fi / Thriller",
        detail: "This action-packed sci-fi thriller dives into the world of dreams, where a team of specialists must plant an idea inside a target's subconscious. Known for its complex narrative and groundbreaking visuals, Inception is a modern cinematic masterpiece."
    },
    {
        id: 'the-dark-knight',
        image:darknightImg,
        movieName: "The Dark Knight",
        year: 2008,
        imbdScore: 9.0,
        typeof: "Action / Crime / Drama",
        detail: "The second film in Christopher Nolan’s Batman trilogy, The Dark Knight follows Batman’s battle against the chaos unleashed by the Joker. With a legendary performance by Heath Ledger, the film redefined the superhero genre with its dark, psychological depth."
    },
    {
        id: 'interstellar',
        image: interstellarImg,
        movieName: "Interstellar",
        year: 2014,
        imbdScore: 8.7,
        typeof: "Adventure / Drama / Sci-Fi",
        detail: "In a future where Earth is dying, a group of astronauts embarks on a mission to find a new habitable planet. Blending emotional storytelling with scientific wonder, Interstellar raises profound questions about time, space, and humanity."
    },
    {
        id: 'parasite',
        image: parasiteImg,
        movieName: "Parasite",
        year: 2019,
        imbdScore: 8.5,
        typeof: "Drama / Thriller",
        detail:"This award-winning South Korean film explores class division through the intertwined lives of a wealthy family and a poor one. Blending suspense, dark humor, and social commentary, Parasite became the first non-English language film to win the Oscar for Best Picture."
    }
];

function App() {
  // Arama metnini tutacak state
  const [searchQuery, setSearchQuery] = useState('');

  // Arama kutusu her değiştiğinde state'i güncelleyecek fonksiyon
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Ana film listesini arama metnine göre filtrele
  const filteredMovies = movies.filter(movie =>
    movie.movieName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (

    <Router>
      <div className="app-container"> {/* Genel bir container eklemek iyi bir pratik */}
        <Routes>
          {/* Rota 1: Ana Sayfa ("/") */}
          <Route 
            path="/" 
            element={
              <>
                <header>
                  <title>MovieLibrary</title>
                  <h1> 📽️ Movie Night </h1>
                  <h3>Discover The Best Movies</h3>
                </header>
                
                <div className="search-container">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search for a movie..."
                    className="search-input"
                  />
                  <Search className="search-icon" />
                </div>
                
                {/* Movies bileşenine SADECE filtrelenmiş filmleri gönderiyoruz */}
                <Movies moviesToDisplay={filteredMovies} />
              </>
            } 
          />
          
          {/* Rota 2: Film Detay Sayfası ("/movie/:movieId") */}
          <Route 
            path="/movie/:movieId" 
            // MovieDetail bileşenine TÜM film listesini gönderiyoruz ki içinden doğru olanı bulabilsin
            element={<MovieDetail allMovies={movies} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;