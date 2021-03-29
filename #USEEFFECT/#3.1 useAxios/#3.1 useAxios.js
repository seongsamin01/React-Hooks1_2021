// API로 data를 불러와서 새로고침버튼을 만들어서 버튼을 누르면 data가 refresh되게 만드는 것을 배웠다.
// 이번 편은 좀 복잡하긴 했다.
import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
    .then(data => {
      setState({
        ...state,
        loading: false,
        data
      });
    })
    .catch(error => {
      setState({ ...state, loading: false, error})
    });
  }, [trigger]);
  return {...state, refetch};
};

export default useAxios;