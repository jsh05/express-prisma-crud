import { PostInfo } from '@/service/post';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PostRepository {
  create = async (postInfo: PostInfo) => {
    await prisma.post.create({
      data: {
        ...postInfo,
      },
    });
  };

  update = async (id: number, postInfo: PostInfo) => {
    await prisma.post.update({
      where: { id },
      data: { ...postInfo },
    });
  };

  find = async () => {
    const post = await prisma.post.findMany();
    return post;
  };

  findById = async (id: number) => {
    const postRecord = await prisma.post.findFirst({ where: { id } });
    return postRecord;
  };

  delete = async (id: number) => {
    await prisma.post.delete({ where: { id } });
  };

  findAllByUserId = async (userId: string) => {
    const userPosts = await prisma.user.findUnique({
      where: { id: +userId },
      include: { posts: true },
    });
    return userPosts?.posts;
  };
}
