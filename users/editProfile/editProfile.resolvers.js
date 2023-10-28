import { bcrypt } from "bcrypt";
import client from "../../client";
import { protectResolver } from "../../users.utils";

export default {
  Mutation: {
    editProfile: protectResolver(
      async (
        _,
        { username, email, password: newPassword, avatarURL, githubUsername },
        { loggedInUser, protectResolver }
      ) => {
        let uglyPassword = null;
        if (newPassword) {
          uglyPassword = await bcrypt.hash(newPassword, 10);
        }
        const updateUser = await client.user.update({
          where: {
            id: loggedInUser.id,
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
      }
    ),
  },
};
