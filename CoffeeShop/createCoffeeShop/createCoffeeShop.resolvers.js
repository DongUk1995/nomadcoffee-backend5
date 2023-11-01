import client from "../../client";
import { protectedResolver } from "../../users.utils";
import { processcategoryGrup } from "../CoffeeShop.utils";

export default {
  Mutation: {
    createCoffeeShop: protectedResolver(
      async (
        _,
        { name, latitude, longitude, categoryGrup },
        { loggedInUser }
      ) => {
        let categoryGruprr = [];
        if (categoryGrup) {
          categoryGruprr = processcategoryGrup(categoryGrup);
        }
        return client.coffeeShop.create({
          data: {
            name,
            latitude,
            longitude,
            categoryGrup,
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
            ...(categoryGruprr.length > 0 && {
              categories: {
                connectOrCreate: categoryGruprr,
              },
            }),
          },
        });
      }
    ),
  },
};
