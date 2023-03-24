import styles from './Pagination.module.sass'
import { Nunito } from "next/font/google";

const nunito = Nunito({ weight: ["600"], subsets: ["latin"] });

const Pagination = ({ onPageChange, currentPage, pizzas, pageSize }) => {

  const pagesCount = Math.ceil(pizzas / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);


  return (
    <div className={styles.root}>
      <ul className={`${styles.pagination} ${nunito.className}`}>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage ? styles.pageItemActive : styles.pageItem
            }
          >
            <a className={styles.pageLink} onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Pagination

