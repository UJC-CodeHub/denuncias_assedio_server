import { PrismaClient } from "@prisma/client";
import { UserDTO } from "../@types/User";

const prisma = new PrismaClient();

export class UserService {
  static async createUser(userDTO: UserDTO) {
    const hashedPassword = await Bun.password.hash(userDTO.password);

    const userData = {
      code: userDTO.code,
      password: hashedPassword,
      role: userDTO.role,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return await prisma.user.create({
      data: userData,
    });
  }

  static async existsByCode(code: string) {
    return await prisma.user.findUnique({
      where: { code: code },
    });
  }
}
