import { User } from '@entities/user';
import { axiosInstance } from '@shared/api';

export const fetchUserList = async (page: number, search?: string, sort?: string | null) => {
  const params = { page, search, sort };
  if (search === '') delete params.search;
  if (!sort) delete params.sort

  const {
    data: { data, pages },
  } = await axiosInstance<UserListResponse>('user/list', { params });

  const users = data.map((u) => mapDataToUsers(u));

  return { users, pages };
};

const mapDataToUsers = ({
  email,
  id,
  name,
  role,
  subscription,
}: UserResponse): User => ({
  id,
  email,
  name,
  role,
  subscription,
});

interface UserListResponse {
  data: UserResponse[];
  pages: number;
}

export interface UserResponse {
  id: string;
  email: string;
  tg_id: null;
  name: string;
  password: null;
  avatar: null;
  created_at: string;
  role: string;
  subscription: {
    id: string;
    plan_id: string;
    user_id: string;
    tokens: number;
    additional_tokens: number;
    created_at: string;
    plan: {
      id: string;
      type: string;
      price: number;
      currency: string;
      tokens: number;
    };
  };
}
