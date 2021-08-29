import React, { useContext } from 'react';
import CoinRow from './CoinRow';
import { ProviderContext } from '../context/Context';

const TableCoins = (): JSX.Element => {

    const { titles, filterCoins } = useContext(ProviderContext)

    return(
        <table className="styled-table">
            <thead>
                <tr>
                    {titles.map((title:string, i: string) => (
                        <td key={i}>{title}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filterCoins.map((coin: string, i: string) => (
                    <CoinRow key={i} coin={coin} i={i}/>
                ))}
            </tbody>
        </table>
    )
}

export default TableCoins;