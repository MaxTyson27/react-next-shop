import Pagination from "../Pagination/Pagination"
import PizzaItem from "../PizzaItem/PizzaItem"
import styles from './Pizzas.module.sass'

const Pizzas = ({ pizzas }) => {
  return (
    <>
      <div className={styles.root}>
        {pizzas.map((pizza) => {
          return <PizzaItem {...pizza} key={pizza.id} />
        })}
      </div>
    </>
  )
}

export default Pizzas
