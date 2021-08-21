import React, { useContext } from 'react';
import TableCoins from './TableCoins';
import { ProviderContext } from '../context/Context';

const MainCoins = () => {

    const { coins, search, setSearch } = useContext(ProviderContext);
    
    return(
        <>
            <input 
            className="search"
            type="text" 
            placeholder="Buscar moneda"
            onChange={e => setSearch(e.target.value)}
            />
            <TableCoins coins={coins} search={search}/>
        </>
    )
}

export default MainCoins;