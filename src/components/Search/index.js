import React from 'react';

const Search = (props) => (
  <div className="App-search-box">
    <h1>eBay searching app</h1>
    <span>{props.totalEntries} sneaker auctions with 1 or more bids ending now @ebay</span>
    <div className="checkbox">
      <label htmlFor>
        <input type="checkbox" checked disabled /> Autorefresh every 60 seconds
      </label>
    </div>
    <a href="http://twipic.org/hashtag/snowbeach">@snowbeach</a>
  </div>
);
export default Search;
