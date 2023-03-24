const API_URL = `https://63d91b485a330a6ae174b73e.mockapi.io/items`;

export const PizzaService = {
  async getPizzas() {
    // const responce = await fetch(`${API_URL}&page=${currentPage}`);
    const responce = await fetch(`${API_URL}`);
    const data = await responce.json();
    return data;
  },
};
