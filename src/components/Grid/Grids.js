import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import * as vars from '../Styled/variables';

const Grids = props => {
    const { data, column, view } = props;
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const getData = data.entries.item;
        setItems(getData);
    });

    return(
        <div className={`${vars.prefix}_grids`}>
            {items.map((item, index) => (
                <Grid 
                    key={index} 
                    item={item}
                    column={column}
                    view={view}
                >
                </Grid>
            ))}
        </div>
    )
}

export default Grids;