import React, { PureComponent } from 'react';

class Image extends PureComponent {
    render() {
        const { src } = this.props;
        return <img align="center" src={src} />;
    }
}
export default Image;