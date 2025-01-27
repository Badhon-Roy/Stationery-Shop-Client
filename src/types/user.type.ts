export type TUser = {
    email: string;
    role: string;
    iat: number; 
    exp: number; 
  };

 export type TLoginUser = {
    name: string;
    photoUrl?: string;
    email: string;
    password: string;
};