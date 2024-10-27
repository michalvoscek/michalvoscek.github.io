import { createContext, useContext, ReactNode, useReducer } from 'react'

type Context = {
  state: Record<string, number>,
  setProp: (code: string, amount: number) => void
}

const ThemeContext = createContext<Context | null>(null)

interface Props {
  children: ReactNode
}

export const UrlContext: React.FC<Props> = ({children}) => {
  const [, forceUpdate] = useReducer(x => x + 1, 0)
  
  const urlParams = new URLSearchParams(window.location.search);
  const urlConf = urlParams.get('conf');
  const state = urlConf ? JSON.parse(urlConf) : {}

  const setProp = (code: string, amount: number) => {
    const newState = {...state, [code]: amount}
    const newUrlParams = new URLSearchParams({conf: JSON.stringify(newState)}) 
    window.history.pushState({}, '', `?${newUrlParams.toString()}`)
    forceUpdate()
  }

  console.log('state', state)

  return (<ThemeContext.Provider value={{state, setProp}}>
    {children}
  </ThemeContext.Provider>)
}

export const useUrlContext = () => {
  const context = useContext(ThemeContext)
  if (context === null) {
    throw new Error("UrlContext out of provider")
  }

  return context
}

