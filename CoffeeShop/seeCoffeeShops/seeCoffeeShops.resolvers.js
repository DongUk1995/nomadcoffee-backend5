import client from "../../client";

export default {
  Query: {
    seeCoffeeShops: async (_, { name, lassId }) => {
      const ok = await client.coffeeShop.findUnique({
        where: { name },
        select: { id: true },
      });
      if (!ok) {
        return {
          ok: false,
          error: "coffeeShop Not found",
        };
      }
      const shops = await client.coffeeShop
        .findUnique({
          where: {
            name,
          },
        })
        .shops({
          take: 5,
          skip: lassId ? 1 : 0,
          ..._(lassId && { cursor: { name: lassId } }),
        });
      return {
        ok: true,
        shops,
      };
    },
  },
};
