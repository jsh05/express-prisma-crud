import dotenv from 'dotenv';
import { Algorithm } from 'jsonwebtoken';

const envFound = dotenv.config();

if (!envFound) {
  throw new Error('.env not found');
}

export const config = {
  port: process.env.PORT || '8080',
  jwt: {
    algorithm: (process.env.JWT_ALGORITHM as Algorithm) || 'HS256',
    secret: process.env.JWT_SECRET || '',
    expire: {
      access: parseFloat(process.env.JWT_EXPIRE_ACCESS || '0'),
      refresh: parseFloat(process.env.JWT_EXPIRE_REFRESH || '0'),
    },
  },
};
