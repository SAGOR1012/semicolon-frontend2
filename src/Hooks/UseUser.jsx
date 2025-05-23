// 🪝 useUser.js (Custom Hook to get a specific user)
import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic';
import UseAuth from './UseAuth';

const UseUser = () => {
  const { user } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  // const axiosSecure = UseAxiosSecure(); // Create an instance of axios for public API requests

  const {
    data: userData = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['user', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email, // Only run if user email is available
  });
  // const { refetch, data: userData = [] } = useQuery({
  //   queryKey: ['user', user?.email],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get(`/user/email=${user.email}`);
  //     return res.data;
  //   },
  // });

  return [userData, isLoading, refetch];
  // return [userData, refetch];
};

export default UseUser;
