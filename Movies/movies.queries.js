import client from "../client";

export default {
  Query: {
    movies: () => client.movie.findMany(), // 우리의 데이터베이스로 가서 모든 영활르 검색하게 돼
    movie: (_, { id }) => client.movie.findUnique({ where: { id } }),
  },
};
