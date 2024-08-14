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
  isLoading: boolean;
  isError: boolean;
  isLoggedIn: boolean;
  user: null | UserType;
  users: null | UserType;
};

export interface UserItemProps {
  user: UserType;
}
