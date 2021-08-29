import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const ProviderContext = createContext();

const { Provider } = ProviderContext;

const Context = ({children}): JSX.Element => {

  //HEADER TABLE
  const titles: string[] = ['#', 'Moneda', 'Precio', 'Cambio', 'Volumen 24hs'];

  //BODY TABLE
  const [coins, setCoins] = useState<string>([]);

  //SEARCH
  const [search, setSearch] = useState<string>('');
  const filterCoins =  coins.filter((coin: any) =>  
  coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  //DATA API
  const getData = async (): Promise<void> => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1');
    // console.log(res.data)
    setCoins(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return(
      <Provider value={{coins, setCoins, search, setSearch, titles, filterCoins}}>
          {children}
      </Provider>
  )
}

export default Context;