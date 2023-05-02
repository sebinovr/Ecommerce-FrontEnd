import { createContext } from 'react'

const ProviderContext = createContext();

const EcommerceProvider = ({children}) => {

  return (
    <ProviderContext.Provider
      value={{}}
    >

      {children}
    </ProviderContext.Provider>
  )
}

export {
    EcommerceProvider
}

export default ProviderContext
