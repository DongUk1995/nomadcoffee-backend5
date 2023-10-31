-- CreateTable
CREATE TABLE "CoffeShopPhoto" (
    "id" SERIAL NOT NULL,
    "avatarURL" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "CoffeShopPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoffeeShop" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT,
    "latitude" TEXT,
    "longitude" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CoffeeShop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "slug" TEXT,
    "totalShops" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CoffeShopPhotoToCoffeeShop" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToCoffeeShop" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CoffeShopPhotoToCoffeeShop_AB_unique" ON "_CoffeShopPhotoToCoffeeShop"("A", "B");

-- CreateIndex
CREATE INDEX "_CoffeShopPhotoToCoffeeShop_B_index" ON "_CoffeShopPhotoToCoffeeShop"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToCoffeeShop_AB_unique" ON "_CategoryToCoffeeShop"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToCoffeeShop_B_index" ON "_CategoryToCoffeeShop"("B");

-- AddForeignKey
ALTER TABLE "CoffeeShop" ADD CONSTRAINT "CoffeeShop_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CoffeShopPhotoToCoffeeShop" ADD CONSTRAINT "_CoffeShopPhotoToCoffeeShop_A_fkey" FOREIGN KEY ("A") REFERENCES "CoffeShopPhoto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CoffeShopPhotoToCoffeeShop" ADD CONSTRAINT "_CoffeShopPhotoToCoffeeShop_B_fkey" FOREIGN KEY ("B") REFERENCES "CoffeeShop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToCoffeeShop" ADD CONSTRAINT "_CategoryToCoffeeShop_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToCoffeeShop" ADD CONSTRAINT "_CategoryToCoffeeShop_B_fkey" FOREIGN KEY ("B") REFERENCES "CoffeeShop"("id") ON DELETE CASCADE ON UPDATE CASCADE;
