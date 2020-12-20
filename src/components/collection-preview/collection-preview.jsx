import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import Preview from '../preview-item/preview-item.component';

class CollectionPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: SHOP_DATA
    };
  }

  render() {
    return (
      <div className="collection-preview">
        {
          this.state.data.map(({ id, ...restProps }) => {
            return <Preview key={id} {...restProps} />
          })
        }
      </div>
    );
  }
}

export default CollectionPreview;