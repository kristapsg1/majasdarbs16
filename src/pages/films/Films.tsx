import styles from "./Filmas.module.css";
import { NavLink } from "react-router-dom";
import Handlingdelete from "../../hooks/Handlingdelete";
import Handlingget from "../../hooks/Handlingget";

type Filmstype = {
  id: string;
  title: number;
  year: number;
  genre: string;
  director: string;
  rating: number;
  duration: number;
  country: string;
};

const Films = () => {
  const { data, isLoading } = Handlingget();

  const { mutateAsync: deleteFilm, isPending: deleteState } = Handlingdelete();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.wrapper}>
      {data &&
        data.map((films: Filmstype) => (
          <div className={styles.filmWrapper} key={films.id}>
            <NavLink to={`/films/${films.id}`}>
              <h2>{films.title}</h2>
            </NavLink>

            <p>
              <b>Year:</b> {films.year}
            </p>
            <p>
              <b>Genre:</b> {films.genre}
            </p>
            <p>
              <b>Director:</b> {films.director}
            </p>
            <p>
              <b>Rating:</b> {films.rating}
            </p>
            <p>
              <b>Duration:</b> {films.duration}
            </p>
            <p>
              <b>Country:</b> {films.country}
            </p>
            <div className={styles.btnWrapper}>
              <button
                onClick={() => {
                  deleteFilm(films.id);
                }}
                disabled={deleteState}
                className={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Films;
