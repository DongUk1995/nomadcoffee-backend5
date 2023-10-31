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
    //우리가 찾고있는 커피숍의 id를 가지고 있는 카테고리
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
