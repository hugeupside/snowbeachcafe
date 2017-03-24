import React, { PropTypes } from 'react';
import Gallery from 'react-grid-gallery';

const ProductGallery = (props) => {
  const galleryData = props.auctionList[0].searchResult[0].item.map(item => ( 
    {
      thumbnail: item.galleryURL[0],
      thumbnailWidth: 100,
      thumbnailHeight: 100,
      tags: [{value: '$ ' + item.sellingStatus[0].currentPrice[0].__value__, title: "price"}, {value: item.sellingStatus[0].bidCount[0], title: "bids"}]
    }
  ));
  const clickFunc = (index) => {window.open(props.auctionList[0].searchResult[0].item[index].viewItemURL)};
  return (
    <div className="gallery-container">
      <Gallery images={galleryData} enableImageSelection={false} onClickThumbnail={clickFunc}/>
    </div>  
  );
};
export default ProductGallery;

ProductGallery.propTypes = {
  auctionList: PropTypes.array.isRequired,
};
