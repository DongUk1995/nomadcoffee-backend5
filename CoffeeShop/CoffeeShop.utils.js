export const processcategoryGrup = (categoryGrup) => {
  const categoryGrup_arr = categoryGrup.split() || [];
  return categoryGrup_arr.map((name) => ({
    where: { name },
    create: { name },
  }));
};
