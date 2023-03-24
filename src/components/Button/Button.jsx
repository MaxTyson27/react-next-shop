import styles from './Button.module.sass'
import { Nunito } from "next/font/google";

const nunito = Nunito({ weight: ["600"], subsets: ["latin"] });

export default function Button({ isButton, href, children, mode, display, size = 'lg' }) {


  const modeStyles = {
    display,
    width: size === 'lg' ? '150px' : '60px',
    backgroundColor: mode === 'Danger' ? '#d44949' : mode === 'Default' ? '#ffdf8c' : mode === 'Success' ? '#179248' : '#ffdf8c',
    color: mode === 'Default' ? '#000' : '#fff'
  }

  return (
    <>
      {isButton ?
        <button
          style={modeStyles}
          className={`${styles.button} ${nunito.className}`}>
          {children}
        </button> :
        <a
          style={modeStyles}
          className={`${styles.button} ${nunito.className}`}
          href={href}>
          {children}
        </a>
      }
    </>
  )
}

