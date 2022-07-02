import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Services.module.css"
const Services = ({services}) => {
  return (
    <div className={styles.container}>
    <div className={styles.info}>
      <h1 className={styles.title}>¿Qué hacemos?</h1>
      <h1 className={styles.subtitle}>Servicios que podemos brindarte</h1>
      <div className={styles.services}>
        {services.map(service => (
          <Link key={service.id} href={`/products/${service.name}`}>
            <div className={styles.service}>
              <div className={styles.catInfo}>{service.desc}</div>
              <span className={styles.cat}>{service.title}</span>
              <div className={styles.media}>
                {service.video ? (
                  <video className={styles.video} src={`/img/${service.video}`} autoPlay loop />
                ): (
                  <Image src={`/img/${service.photo}`} width="100%" height="100%" layout="responsive" objectFit="cover" alt=""/>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Services