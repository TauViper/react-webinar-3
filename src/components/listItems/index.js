import React from 'react';
import Item from "../item";
import './styles.css'
const ListItems = ({list, store}) => {
    return (
        <div className='App-center'>
            <div className='List'>{
                list.map(item =>
                    <div key={item.code} className='List-item'>
                    <Item props = {item} store={store}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListItems;