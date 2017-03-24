import React, { PropTypes } from 'react';

const TableBox = (props) => {
  const auctionBox = props.auctionList[0].searchResult[0].item.map(item => (
    <tr onClick={() => { window.open(item.viewItemURL[0]); }} key={item.itemId[0]}>
      <td>{item.title[0]}</td>
      <td>{item.sellingStatus[0].currentPrice[0].__value__}</td>
      <td>{item.sellingStatus[0].bidCount[0]}</td>
      <td>{item.sellerInfo[0].sellerUserName[0]}<br /><span className="small">{item.location[0]}</span></td>
    </tr>
  ));
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Auction</th>
          <th>$</th>
          <th>Bids</th>
          <th>Seller</th>
        </tr>
      </thead>
      <tbody>
        {auctionBox}
      </tbody>
    </table>
  );
};
export default TableBox;

TableBox.propTypes = {
  auctionList: PropTypes.array.isRequired,
};
