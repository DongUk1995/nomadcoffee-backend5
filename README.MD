// model CoffeShopPhoto {
//   id        Int          @id @default(autoincrement())
//   avatarURL String?
//   shop      CoffeeShop[]
//   userId    Int
// }

// model CoffeeShop {
//   id         Int              @id @default(autoincrement())
//   name       String?
//   latitude   String?
//   longitude  String?
//   user       User             @relation(fields: [userId], references: [id])
//   photos     CoffeShopPhoto[]
//   categories Category[]

//   userId Int
// }

// model Category {
//   id         Int          @id @default(autoincrement())
//   name       String?
//   slug       String?
//   shops      CoffeeShop[]
//   totalShops Int?
// }
