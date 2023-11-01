import client from "../../client";

export default {
  Query: {
    seeCoffeeShops: (_, { id }) =>
      client.coffeeShop.findUnique({
        where: {
          id,
        },
      }),
  },
};
