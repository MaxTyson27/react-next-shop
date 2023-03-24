import { PizzaService } from "@/services/PizzaService";
import Pizzas from "@/components/Pizzas/Pizzas";
import { useState } from "react";
import Pagination from "@/components/Pagination/Pagination";
import { paginate } from "@/utils/paginate";

export default function Home({ pizzas }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const paginatedPizzas = paginate(pizzas, currentPage, pageSize);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Pizzas pizzas={paginatedPizzas} />
      <Pagination
        onPageChange={onPageChange}
        currentPage={currentPage}
        pizzas={pizzas.length}
        pageSize={pageSize}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const pizzas = await PizzaService.getPizzas();

  return {
    props: { pizzas },
  };
};
