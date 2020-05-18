import React from 'react';

import './Loading.scss';

class Loading extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="content">
                    <div className="loader"/>
                </div>
            </div>
        ) 
    }
}

export default Loading;