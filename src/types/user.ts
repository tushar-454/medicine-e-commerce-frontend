export type UserType = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: string;
  division: string;
  district: string;
  upazila: string;
  address: string;
};

export type InitialStateType = {
  isLoggedIn: boolean;
  user: null | UserType;
};
