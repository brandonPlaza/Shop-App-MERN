declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TOKEN_KEY: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}
export {}