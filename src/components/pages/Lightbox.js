import React, { Component } from 'react';
import ResponsiveGallery from 'react-responsive-gallery';
import { photos } from '../Photos.js';
import '../../style/Lightbox.scss';


export class Lightbox extends Component {
    render() {
        const numOfImagesPerRow = {
            xs: 1,
            s: 1,
            m: 2,
            l: 2,
            xl: 3,
            xxl: 3
        }

        return (
            <div className="gallery">
                <div className="gallery_header roboto">
                    <h3>LRC</h3>
                    <h1>Gallery</h1>
                </div>

                <div className="responsive_gallery">
                    <div className="images">
                        <ResponsiveGallery images={photos} useLightBox numOfImagesPerRow={numOfImagesPerRow} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Lightbox
