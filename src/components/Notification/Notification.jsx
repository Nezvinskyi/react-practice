import styles from './Notification.module.css'

const Notification = ({ text, type }) => <p className={styles[type]}>{text}</p>

export default Notification