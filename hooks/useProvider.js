import { useContext } from 'react'
import ProviderContext from '@/context/EcommerceProvider';

const useProvider = () => {
  return useContext(ProviderContext);
}

export default useProvider;