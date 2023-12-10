import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../Services/Api';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState();
  const fetchThisMovieCast = async id => {
    const fetchedData = await fetchMovieCast(id);
    setCast(fetchedData);
  };

  const { movieId } = useParams();

  useEffect(() => {
    fetchThisMovieCast(movieId);
  }, [movieId]);

  if (cast) {
    return (
      <div className={css['wrapper']}>
        <ul>
          {cast.map(e => {
            return (
              <li key={e.id} className={css['item']}>
                <img
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                      : 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'
                  }
                  alt={e.name}
                />
                <div className={css['actor-details']}>
                  <p>{e.name}</p>
                  <p>Character: {e.character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Cast;
