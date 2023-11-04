import { Role } from "@prisma/client";

export type UserDTO = {
  code: string;
  password: string;
  role: Role;
};
