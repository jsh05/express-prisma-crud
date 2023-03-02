import { PostRepository } from '@/repository/post';

export class MyPageService {
  private postRepository;
  constructor() {
    this.postRepository = new PostRepository();
  }
  getMyPost = async (userId: string) => {
    const userPosts = await this.postRepository.findAllByUserId(userId);
    return userPosts;
  };
}
