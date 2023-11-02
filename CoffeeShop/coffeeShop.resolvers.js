import client from "../client";

export default {
  CoffeeShop: {
    user: ({ id }) =>
      client.user.findFirst({
        where: {
          shops: {
            some: {
              id,
            },
          },
        },
      }),
  },
};
