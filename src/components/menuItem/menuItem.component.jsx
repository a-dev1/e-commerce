import React from 'react';
import './menuItem.sass'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div >
)

export default withRouter(MenuItem); //Will return us a super power menu-item component with access to those location, match and history props which we need access to