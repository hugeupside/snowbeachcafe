import React, { Component } from 'react';
import moment from 'moment';
import fetchJsonp from 'fetch-jsonp';
import 'es6-promise/auto';
import basicApiUrl from './helper/basicApiUrl';
import Search from './components/Search';
import TableBox from './components/TableBox';
import ProductGallery from './components/ProductGallery';
import './App.css';
import loader from './images/loader.gif';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auctionList: null,
      loading: false,
      totalEntries: 0,
      currentView: 0
    };
  }
  componentDidMount() {
    this.getAuctionList(1);
  }
  getAuctionList = (page) => {
    this.apiUrl = basicApiUrl;
    this.apiUrl += `&itemFilter(1).value=${moment().add(15, 'm').toISOString()}`;
    this.apiUrl += `&paginationInput.pageNumber=${page}`;
    this.setState({
      loading: true,
    });
    fetchJsonp(this.apiUrl)
      .then(response => response.json())
      .then((json) => {
        this.renderAuctionList(json.findItemsByKeywordsResponse);
      })
      .catch(() => {
        this.setState({
          loading: false,
        });
      });
  };
  renderAuctionList = (data) => {
    const allPages = [];
    const pagOutput = data[0].paginationOutput[0];
    for (let i = 1; i <= parseInt(pagOutput.totalPages[0], 10); i += 1) {
      allPages.push({ number: i });
    }
    this.pagesBox = allPages.map(page => (
      <button
        className="btn btn-info btn-pagination"
        onClick={() => { this.getAuctionList(page.number); }}
        key={page.number}
      >{page.number}</button>
    ));
    this.setState({
      auctionList: data,
      loading: false,
      totalEntries: pagOutput.totalEntries[0],
    });
    //setTimeout(() => { this.getAuctionList(1); }, 60000);
  }

  render() {
    return (
      <div className="container">
        <Search {...this.state} />
        <ul className="navMenu">
          <li className={this.state.currentView==0 && 'active'} onClick={()=>{this.setState({currentView: 0});}}>Table</li>
          <li className={this.state.currentView==1 && 'active'} onClick={()=>{this.setState({currentView: 1});}}>Gallery</li>
        </ul>
        { this.state.currentView == 0 && this.state.totalEntries > 0 &&
          <TableBox auctionList={this.state.auctionList} /> }
        { this.state.currentView == 1 && this.state.totalEntries > 0 &&
          <ProductGallery auctionList={this.state.auctionList} /> }
        <hr />
        <div>
          <span>Pages: </span>
          {this.pagesBox}
        </div>  
        <div className="LoadingImage" style={{ display: `${this.state.loading ? 'flex' : 'none'}` }}>
          <img src={loader} alt="loading" />
        </div>
      </div>
    );
  }
}

export default App;
