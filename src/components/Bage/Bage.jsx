import { Nunito } from "next/font/google";
import styles from './Bage.module.sass'

const nunito = Nunito({ weight: ["700"], subsets: ["latin"] });

const Bage = ({ bage, position }) => {

  const bageStyles = {
    position,
    background: bage === 'top' ? 'linear-gradient(90deg, rgba(230,83,45,0.9038209033613446) 0%, rgba(230,83,36,0.8926164215686274) 33%)' : bage === 'sale' ? 'linear-gradient(90deg, rgba(214,125,43,1) 0%, rgba(247,113,19,0.8393951330532212) 33%)' : 'linear-gradient(90deg, rgba(214,125,43,1) 0%, rgba(233,102,11,0.929030987394958) 29%, rgba(204,176,21,1) 100%)'
  }


  return (
    <div style={bageStyles} className={`${styles.bage} ${nunito.className}`}>
      {bage}
    </div>
  )
}

export default Bage
