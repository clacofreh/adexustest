import { useEffect, useState } from 'react';
import { UsersResponse, UserResponse } from '../interfaces/usersInterface';
import reqresApi from '../api/reqresApi';
interface UserState {
  users: UserResponse[];
}
export const useUsers = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [userList, setUserList] = useState<UserState>({
    users: [],
  });
  const getData = async () => {
    const { data } = await reqresApi.get('/users');
    setUserList({ users: data.data });
    setIsLoading(true);
  };
  useEffect(() => {
    getData();
  }, []);
  return { userList, isLoading };
};
