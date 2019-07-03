import React, { useState, useEffect, Fragment } from 'react';
import Grid from './Grid';

/* HOCs */
import ScreenBreakpoint from './../../HOC/ScreenBreakpoint';
/* Styles */
import * as vars from '../Styled/variables';
import * as Styles from './../Styled/styles';

const GridsCols = props => {
    const { data, column, view } = props;
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getData = data;
        setItems(getData);
    },[data.length]);


    const arr1 = [];
    const arr2 = [];
    const arr3 = [];

    let i = 0;
    let cols = column || 3;

    while(i < items.length){

        arr1.push(<Grid 
                        key={i} 
                        item={items[i]}
                        view={view}
                        column={1}
                    ></Grid>);
        i += 1;

        if( i < items.length & cols >= 2) {
            arr2.push(<Grid 
                            key={i} 
                            item={items[i]}
                            view={view}
                            column={1}
                        ></Grid>);
            i += 1;
        }

        if( i < items.length & cols >= 3) {
            arr3.push(<Grid 
                            key={i} 
                            item={items[i]}
                            view={view}
                            column={1}
                        ></Grid>);
            i += 1;
        }
    }

    return(
        <Fragment>
            <Styles.GlobalStyle />   
            <div id={`${vars.prefix}_grids__cols`}>

                <div className={`flex_cols col${cols}`}>
                    {arr1.map((item) => (item))}
                </div>
                {
                    cols >= 2 ? <div className={`flex_cols col${cols}`}>
                                    {arr2.map((item) => (item))}
                                </div> : ''
                }
                {
                    cols >= 3 ? <div className={`flex_cols col${cols}`}>
                                    {arr3.map((item) => (item))}
                                </div> : ''
                }
            </div>
        </Fragment>
    )
}

export default ScreenBreakpoint(GridsCols);