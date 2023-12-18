import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.homeWrapper}>
      <header className={styles.homeHeader}>
        <h1>16. Mājasdarbs </h1>
        <h2>Movies list - React Query, React-router, React-i18n</h2>
      </header>
      <br />
      <main className={styles.homeMain}>
        <h3>Prasības: </h3>
        <h4>Applikācja ir trīs sadaļas:</h4>
        <ul>
          <li>
            <b>Par projektu</b> - info par mājasdarbu
          </li>
          <li>
            <b>Filmu saraksts</b> - saraksts ar filmām
          </li>
          <li>
            <b>Par autoru</b> - info par autoru
          </li>
        </ul>
        <p>
          Filmas ir jāvar izdzēst, un kad tas tiek izdarīt visas filmas tiek
          paprasītas no DB pa jaunu (invalidate query). Katrai filmai ir arī
          savs atvēruma skats, kurā atšķirībā no list skata rādās arī komentāri
          un Komentārus ir jāvar arī pievienot. Ja filma netika atrasta, ir
          jāsūta uz 404 lapu. Filmas kartiņa ir atsevišķs komponents. Visiem
          react-query hookiem ir jābūt savos izolētos failos, kā mēs to darijām
          nodarbībā.
        </p>
        <br />
        <hr />
        <br />
        <h3>Jāizmanto:</h3>
        <ul>
          <li>React router</li>
          <li>React Query</li>
          <li>React</li>
          <li>CSS modules.</li>
        </ul>
        <br />
        <hr />
        <br />
        <h3>Bonuss:</h3>
        <p>
          Applikācijā ir iespējams nomainīt valodu, kur teksti, kas nenāk no DB
          tulkojās. Pievienojot komentārus datus validē ar zod
        </p>
        <br />
        <h3>Jāizmanto:</h3>
        <ul>
          <li>zod</li>
          <li>react-i18next</li>
        </ul>
      </main>
      <br /><br />
    </section>
  );
};

export default Home;
