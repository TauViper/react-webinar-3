import React from 'react';
import Item from "../item";
import './styles.css'
const ListItems = ({list, universalFunc}) => {
    return (
        <div className='App-center'>
            <div className='List'>{
                list.map(item =>
                    <div key={item.code} className='List-item'>
                    <Item item = {item} universalFunc={universalFunc} buttonName='Добавить'/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListItems;