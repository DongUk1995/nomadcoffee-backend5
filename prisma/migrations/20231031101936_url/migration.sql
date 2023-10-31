/*
  Warnings:

  - You are about to drop the column `avatarURL` on the `CoffeShopPhoto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CoffeShopPhoto" DROP COLUMN "avatarURL",
ADD COLUMN     "url" TEXT;
