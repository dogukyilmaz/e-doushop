import bcrypt from "bcryptjs";

export const users = [
  {
    email: "admin@admin.com",
    firstName: "Admin",
    lastName: "Admin",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    email: "kaan@seller.com",
    firstName: "Seller",
    lastName: "Kaan",
    password: bcrypt.hashSync("123456", 10),
    isSeller: true,
  },
  {
    email: "dou@user.com",
    firstName: "User",
    lastName: "Dou",
    password: bcrypt.hashSync("123456", 10),
  },
];
