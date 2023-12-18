import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styles from "./Byid.module.css";

const Byid = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["byid"],
    queryFn: () => {
      return axios.get(`http://localhost:3000/films/${id}`).then(({ data }) => {
        return data;
      });
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.filmaCardWrapper}>
      <div className={styles.filmaCard}>
        <h2>Title: {data.title}</h2>

        <p>
          <b>Year</b>: {data.year}
        </p>
        <p>
          <b>Genre</b>: {data.genre}
        </p>
        <p>
          <b>Director</b>: {data.director}
        </p>
        <p>
          <b>Rating</b>: {data.rating}
        </p>
        <p>
          <b>Duration</b>: {data.duration}
        </p>
        <p>
          <b>Country</b>: {data.country}
        </p>
        <p>
          <b>Comment</b>:
        </p>
        <div className={styles.commentWrapper}>
          <p>{data.comment}</p>
        </div>

        <div className={styles.btnWrapper}>
          <button >Edit</button>
        </div>
      </div>
    </section>
  );
};

export default Byid;
