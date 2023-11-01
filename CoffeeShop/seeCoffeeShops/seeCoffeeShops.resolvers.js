import client from "../../client";

export default {
  Query: {
    seeCoffeeShops: (_, { keyword }) =>
      client.coffeeShop.findMany({
        where: {
          categories: {
            startsWith: keyword,
          },
        },
      }),
  },
};
