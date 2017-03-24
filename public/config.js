window.config = {
  mainApiUrl: 'http://svcs.ebay.com/services/search/FindingService/v1',
  opperationName: 'findItemsByKeywords',
  serviceVersion: '1.0.0',
  securityAppName: 'EricAnde-snowbeac-PRD-d246ab013-8f306b6e', // Security Ebay ID
  globalId: 'EBAY-US',
  ResponseDataFormat: 'JSON',
  keywords: '(jordan,yeezy)',
  entriesPerPage: 30,
  itemFilter: [{
    id: 0,
    name: 'MinBids',
    value: 1
  }, {
    id: 1,
    name: 'EndTimeTo'
  }, {
    id: 2,
    name: 'listingType',
    value: 'auction'
  }],
  outputSelector: 'SellerInfo',
  sortOrderType: 'CurrentPriceHighest'
};
