import React from 'react';

const CoinRow = ({coin, i}) => {

    return(
            <tr key={coin.id}>
                <td>{i +1}</td>
                <td className="table-name-img">
                    <img className="table-image" alt={coin.name} src={coin.image}/>
                    <span className= "table-name">{coin.name}</span>
                    <span className="table-symbol">{coin.symbol}</span>
                </td>
                <td>{coin.current_price}</td>
                <td className={coin.price_change_percentage_24h > 0 ? 'up' : 'down'}>
                    {`${coin.price_change_percentage_24h}%`}
                </td>
                <td>{coin.total_volume}</td>
            </tr>
    )
}

export default CoinRow;