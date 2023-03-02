import { config } from '../config';
import jwt, { Algorithm } from 'jsonwebtoken';

interface OwnJwtPayload {
  userId: number;
}

export class JWTHelper {
  private algorithm: Algorithm;

  private secret: string;

  private accessExpiresInSeconds: number;

  private refreshExpiresInSeconds: number;

  constructor() {
    this.algorithm = config.jwt.algorithm;
    this.secret = config.jwt.secret;
    this.accessExpiresInSeconds = config.jwt.expire.access * 3600;
    this.refreshExpiresInSeconds = config.jwt.expire.refresh * 3600;
  }

  generateAccessToken({ userId }: OwnJwtPayload) {
    const jwtOptions = {
      algorithm: this.algorithm,
      expiresIn: this.accessExpiresInSeconds,
      subject: 'ACCESS_TOKEN',
    };

    return jwt.sign({ userId }, this.secret, jwtOptions);
  }

  generateRefreshToken({ userId }: OwnJwtPayload) {
    const jwtOptions = {
      algorithm: this.algorithm,
      expiresIn: this.refreshExpiresInSeconds,
      subject: 'REFRESH_TOKEN',
    };

    return jwt.sign({ userId }, this.secret, jwtOptions);
  }

  generateJwtTokens(payload: OwnJwtPayload): {
    access: string;
    refresh: string;
  } {
    const access = this.generateAccessToken(payload);
    const refresh = this.generateRefreshToken(payload);

    return { access, refresh };
  }

  decodeJwtToken(token: string, subject?: string) {
    const decodedToken = jwt.verify(token, this.secret, {
      algorithms: [this.algorithm],
      subject,
    });
    return decodedToken;
  }

  decodeAccessToken(token: string) {
    return this.decodeJwtToken(token, 'ACCESS_TOKEN') as OwnJwtPayload;
  }

  decodeRefreshToken(token: string) {
    return this.decodeJwtToken(token, 'REFRESH_TOKEN');
  }
}
