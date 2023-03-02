export const getAccessToken = (authorization?: string) => {
  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.split(' ')[1];
  }
  return '';
};
