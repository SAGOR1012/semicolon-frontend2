import UseAxiosPublic from './UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const UseAllClassicMatchFF = () => {
  const axiosPublic = UseAxiosPublic();

  const {
    data: allFF_ClassicMatch = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['allFF_ClassicMatch'],
    queryFn: async () => {
      const res = await axiosPublic.get('/classic');
      return res.data;
    },
  });
  return [allFF_ClassicMatch, isLoading, refetch];
};

export default UseAllClassicMatchFF;
