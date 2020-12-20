import React from 'react';
import './preview-item.styles.sass'

const Preview = ({ title, items }) => {
  return (
    <div >
      <h1 className="title">{title}</h1>
      <div className="preview">
        {
          items.filter((item, index) => index < 4).map(({ name, id, imageUrl, price }) => {
            return (
              <div key={id} className="preview-item">
                <div className='image'
                  style={{
                    backgroundImage: `url(${imageUrl})`
                  }} />
                <div className="preview-footer">
                  <span className="name">{name}</span>
                  <span className="price">{price}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Preview;

