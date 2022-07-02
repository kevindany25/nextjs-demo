import styles from "../styles/Footer.module.css"
import Link from "next/link"
import Image from "next/image"
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>EMPRESA ABCXYZ.</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" passHref>
            <span className={styles.linkText}>CONTACTANOS</span>
            <Image src="/img/link.png" width="40px" height="40px" alt=""/>
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          CALLE PRINCIPAL 123 <br/> EC
        </div>
        <div className={styles.cardItem}>
          CONTACTO1@OUTLOOK.COM <br/> 593 123 4567
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          SIGUENOS:
          <br/> __FB__IN__BE__TW
        </div>
        <div className={styles.cardItem}>
            © 2022 DYNATECH
            <br/>
            ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  )
}

export default Footer