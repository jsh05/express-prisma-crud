import { PrismaClient } from '@prisma/client';
import { SignUpInfo } from '@/service/auth';

const prisma = new PrismaClient();

export class UserRepository {
  createUser = async (signUpInfo: SignUpInfo) => {
    await prisma.user.create({
      data: {
        ...signUpInfo,
      },
    });
  };
  findByUser = async (email: string) => {
    const userRecord = await prisma.user.findFirst({
      where: { email },
    });
    return userRecord;
  };
}
