import client from "../../client";
import { protectedResolver } from "../../users.utils";

export default {
  Mutation: {
    createCoffeeShop: protectedResolver(
      async (_, { name }, { loggedInUser }) => {
        return client.coffeeShop.create({
          data: {
            name,
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
            categories: {
              connectOrCreate: [
                {
                  where: {
                    name: "자연",
                  },
                  create: {
                    name: "자연",
                  },
                },
              ],
            },
          },
        });
      }
    ),
  },
};
