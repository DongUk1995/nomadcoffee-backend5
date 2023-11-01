import client from "../client";
/* user: (parent) => {
      console.log(parent);
      return "";
    },
  },
}; */

export default {
  CoffeeShop: {
    user: ({ userId }) => client.user.findUnique({ where: { id: userId } }),
    categories: ({ id }) =>
      client.category.findMany({
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
/* client.category.findMany({
  where: {
    shops: {
      some: {
        name,
      },
    },
  },
}), */
