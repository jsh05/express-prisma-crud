import { commonError } from '@/constants/error';
import { JWTHelper } from '@/helper/jwt';
import { UserRepository } from '@/repository/user';
import { ErrorResponse } from '@/util/error-res';
import { generatePasswordHash, comparePassword } from '@/util/hash';

export interface SignUpInfo {
  name: string;
  email: string;
  password: string;
}

export interface SignInInfo {
  email: string;
  password: string;
}

export class AuthService {
  private userRepository;
  private JWTHelper;

  constructor() {
    this.userRepository = new UserRepository();
    this.JWTHelper = new JWTHelper();
  }

  signIn = async (signInInfo: SignInInfo) => {
    const user = await this.userRepository.findByUser(signInInfo.email);
    if (!user) {
      throw new ErrorResponse(commonError.unauthorized);
    }

    const isValid = comparePassword(user.password, signInInfo.password);

    if (!isValid) {
      throw new ErrorResponse(commonError.unauthorized);
    }

    const tokens = this.JWTHelper.generateJwtTokens({ userId: user.id });

    return tokens;
  };

  signUp = async (signUpInfo: SignUpInfo) => {
    const alreadyUser = await this.userRepository.findByUser(signUpInfo.email);

    if (alreadyUser) {
      throw new ErrorResponse(commonError.conflict);
    }

    const hashedPassword = await generatePasswordHash(signUpInfo.password);

    const userRecord = await this.userRepository.createUser({
      ...signUpInfo,
      password: hashedPassword,
    });

    return userRecord;
  };
}
