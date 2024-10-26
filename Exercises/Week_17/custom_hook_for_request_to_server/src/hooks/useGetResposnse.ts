import { useEffect, useState } from "react";
import { IPost } from "../types/posts.type";

interface IResponse {
  data: IPost[] | undefined;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  refetch: () => void;
}
type UseGetResponse = ({ queryFunc }: { queryFunc: () => Promise<any> }) => IResponse;
export const useGetResposnse: UseGetResponse = ({ queryFunc }) => {
  const [fetchData, setFetchData] = useState<IPost[] | undefined>(undefined);
  const [Loading, setLoading] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchOfServer = async () => {
    try {
      setLoading(true);
      setError(false)
      setSuccess(false)
      if(fetchData?.length) setFetchData(undefined)
      const response = await queryFunc();
      setFetchData(response.posts);
      setSuccess(true);
      setError(false);
    } catch (error) {
      setError(true);
      setSuccess(false);
    }
    setLoading(false);
  };

  const reFetch = () => {
    fetchOfServer();
  };

  useEffect(() => {
    fetchOfServer();
  }, [queryFunc]);
  return {
    data: fetchData,
    isLoading: Loading,
    isSuccess: success,
    isError: error,
    refetch: reFetch,
  };
};
