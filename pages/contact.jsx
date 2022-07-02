import styles from "../styles/Contact.module.css"
import Circle from "../components/Circle"

const contact = () => {
  return (
    <div className={styles.container}>
        <Circle backgroundColor="green" left="-40vh" top="-20vh"/>
        <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh"/>
        <h1 className={styles.title}>PONERSE EN CONTACTO</h1>
        <form className={styles.form}>
            <input className={styles.inputS} placeholder="Usuario"/>
            <input className={styles.inputS} placeholder="Teléfono"/>
            <input className={styles.inputL} placeholder="Email"/>
            <input className={styles.inputL} placeholder="Asunto"/>
            <textarea className={styles.textArea} placeholder="Mensaje" rows={6}/>
            <button className={styles.button}>ENVIAR</button>
        </form>
    </div>
  )
}

export default contact