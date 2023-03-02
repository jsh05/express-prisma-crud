import { commonError } from '@/constants/error';
import { PostRepository } from '@/repository/post';
import { ErrorResponse } from '@/util/error-res';

export interface PostInfo {
  title: string;
  content: string;
  authorId: number;
}

export class PostService {
  private postRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  create = async (postInfo: PostInfo) => {
    await this.postRepository.create(postInfo);
  };

  update = async (postId: number, postInfo: PostInfo) => {
    await this.postRepository.update(postId, postInfo);
  };

  find = async () => {
    const post = await this.postRepository.find();
    return post;
  };

  findById = async (postId: number) => {
    const postRecord = await this.postRepository.findById(postId);

    if (!postRecord) {
      throw new ErrorResponse(commonError.notFound);
    }

    return postRecord;
  };

  delete = async (postId: number) => {
    await this.postRepository.delete(postId);
  };
}
