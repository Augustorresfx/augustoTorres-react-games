import { useState } from 'react';
import Item from './Item';

let ItemList = (items) => {

    let is_stock = true

    return (
        <>
        <div className="container d-flex justify-content-center align-items-center h-100">
        {
          items.length > 0
           ? items.map(item =>  
              <Item
                title={item.title} 
                price={item.price}
                genre={item.genre}
                thumbnail={item.thumbnail}
                />)
                : <div> </div>
         }
      </div>
     </>
    );
}

export default ItemList;