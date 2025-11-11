import axios from "axios";
import React from "react";
import { EMOJIS } from '../../composant/Emoji';


export interface IGetProducts {
  id: number;
  name: string;
  overview: string;
  first_air_date: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  genre_ids: number[];
  origin_country: string[];
  original_language: string;
  original_name: string;
}

export interface Result {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

async function About() {
  const res = await fetch("http://localhost:8000/results", {
    cache: "force-cache", 
  });
  const data = await res.json();
   

  return (
    <>
      <div className="text-3xl font-bold text-center m-4 gap-4 rounded-4xl">About</div>

      <div className="m-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((item: IGetProducts) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image de fond */}
              {item.poster_path && (
                <img 
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              )}
              
              {/* Overlay gradient pour meilleure lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Contenu superposé */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                
                {/* Titre */}
                <h2 className="text-xl font-bold mb-2 line-clamp-2">
                  {item.name}
                </h2>
                
                {/* Note et votes */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-sm font-bold">{EMOJIS.STAR} 
                    {item.vote_average}
                  </span>
                  <span className="text-sm text-gray-300">
                    ({item.vote_count} votes)
                  </span>
                </div>
                
                {/* Date */}
                <div className="text-sm text-gray-300 mb-3">
                  {EMOJIS.CALENDAR} {new Date(item.first_air_date).toLocaleDateString()}
                </div>
                
                {/* Description (apparaît au hover) */}
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm line-clamp-3 mb-2">
                    {item.overview}
                  </p>
                  
                  {/* Langue et pays */}
                  <div className="flex flex-wrap gap-1 text-xs">
                    <span className="bg-blue-600 px-2 py-1 rounded">
                      {item.original_language.toUpperCase()}
                    </span>
                    {item.origin_country.map((country, index) => (
                      <span 
                        key={index}
                        className="bg-green-600 px-2 py-1 rounded"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Badge de popularité en haut */}
              <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                 {EMOJIS.FIRE} {Math.round(item.popularity)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;