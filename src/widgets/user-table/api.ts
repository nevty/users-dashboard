import { User } from '@entities/user';
import { axiosInstance } from '@shared/api';

interface fetchUserListParams {
  page: number;
  search?: string;
  orderBy?: {
    tokens?: string | null;
  };
}

export const fetchUserList = async ({page, search, orderBy}: fetchUserListParams) => {
  const params = { page, search, orderBy: '' };
  if (search === '') delete params.search;
  if (orderBy) {
    params.orderBy = Object.entries(orderBy)
      .filter((entry) => Boolean(entry[1]))
      .map(([key, value]) => `${key}:${value}`)
      .join(',');
  }
  const {
    data: { data, pages },
  } = await axiosInstance.get<UserListResponse>('user/list', { params });

  const users = data.map(mapDataToUsers);

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
