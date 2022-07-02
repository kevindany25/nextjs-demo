import styles from "../styles/Intro.module.css";
import Image from "next/dist/client/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="cyan" top="-50vh" left="-50vh" />
      <Circle backgroundColor="cyan" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>EMPRESA ABCXYZ </span>AGENCIA DE PRODUCTOS
          DIGITALES
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia
          ornare sagittis. Cras aliquam velit vel metus porta cursus. Sed
          pellentesque felis in eros varius mollis.
        </p>
        <button className={styles.button}> DESCUBRE</button>
      </div>
      <div className={styles.card}>
        <div className={styles.imagen}>

        <Image
          src="/img/work.png"
          alt=""
          layout="fill"
          objectFit="cover"
        />
        </div>
      </div>
    </div>
  );
};

export default Intro;
