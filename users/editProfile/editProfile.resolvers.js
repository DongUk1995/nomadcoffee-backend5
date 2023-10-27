import client from "../../client";
import { bcrypt } from "bcrypt";
import { jwt } from "jsonwebtoken";
export default {
  Mutation: {
    editProfile: async (
      _,
      {
        username,
        email,
        password: newPassword,
        avatarURL,
        githubUsername,
        token,
      }
    ) => {
      const vs = await jwt.verity(token, process.env.SECRECT_KEY);
      console.log(vs);
      let uglyPassword = null;

      if (newPassword) {
        uglyPassword = await bcrypt.hash(newPassword, 10);
      }
      const updateUser = await client.user.update({
        where: {
          id: 1,
        },
        data: {
          username,
          email,
          avatarURL,
          githubUsername,
          ...(uglyPassword && { password: uglyPassword }),
        },
      });
      if (updateUser.id) {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
          error: "Could not update profile.",
        };
      }
    },
  },
};
