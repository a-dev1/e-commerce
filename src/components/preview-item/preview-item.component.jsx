import React from 'react';

const Preview = ({ title, items }) => {
  return (
    <div className="preview">
      <h1>{title}</h1>
      {
        items.filter((item, index) => index < 4).map(({ name, id, imageUrl, price }) => {
          return (
            <div key={id}>
              <p>{name}</p>
              <h3>{price}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default Preview;

