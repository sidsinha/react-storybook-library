import React from "react";
import PropTypes from 'prop-types';

/*  Custom Components */
import List from '../List';
import Grid from '../Grid';


const itemListing = props => {

    const {
        currentItems, 
        displayType,
        view
    } = props;

    const components = {
        'list': List,
        'grid': Grid
    }

    return(
        <div className="item-listing">
            {
                currentItems.map(
                    (item, index) => React.createElement(
                        components[displayType], {
                            key: index,
                            item: item,
                            column: 4,
                            view: view
                        }
                    )
                )
            }
        </div>
    )
}

export default itemListing;

/*  Declare Prop Types */
itemListing.propTypes = {
    currentItems: PropTypes.array.isRequired,
    displayType: PropTypes.string
}
/*  Set default Props */
itemListing.defaultProps = {
    displayType: 'list',
};