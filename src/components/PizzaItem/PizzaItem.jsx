import Image from "next/image"
import Button from "../Button/Button"
import styles from './PizzaItem.module.sass'
import { Nunito } from "next/font/google";
import Bage from "../Bage/Bage";

const nunito = Nunito({ weight: ["500", "700"], subsets: ["latin"] });

const PizzaItem = ({ imageUrl, title, bage, price }) => {



  return (
    <div className={styles.root}>
      <Image
        src={imageUrl}
        width={200}
        height={200}
        alt={title}
        className={styles.image}
      />
      <h2 className={`${styles.title} ${nunito.className}`}>
        {title}
      </h2>
      <p className={`${styles.price} ${nunito.className}`}>
        {price} руб.
      </p>
      <Button isButton={true} mode='Default'>
        В корзину
      </Button>
      {bage && <Bage bage={bage} position='absolute' />}

    </div>
  )
}

export default PizzaItem
