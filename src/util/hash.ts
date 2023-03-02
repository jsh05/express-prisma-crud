import { compare, hash } from 'bcrypt';

export const generatePasswordHash = (password: string) => {
  return hash(password, 10);
};

export const comparePassword = (hashedPassword: string, password: string) => {
  return compare(hashedPassword, password);
};
