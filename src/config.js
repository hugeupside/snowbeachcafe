const config = {
  mainApiUrl: 'http://svcs.sandbox.ebay.com/services/search/FindingService/v1',
  opperationName: 'findItemsByKeywords',
  serviceVersion: '1.0.0',
  securityAppName: 'PiotrKos-Searchin-PRD-c2466ad44-8491f29f', // Security Ebay ID
  //securityAppName: 'EricAnde-snowbeac-SBX-e6c385072-32ad28ab',
  globalId: 'EBAY-US',
  ResponseDataFormat: 'JSON',
  keywords: '(jordan,yeezy)',
  entriesPerPage: 30,
  itemFilter: [
    {
      id: 0,
      name: 'MinBids',
      value: 1,
    },
    {
      id: 1,
      name: 'EndTimeTo',
    },
    {
      id: 2,
      name: 'listingType',
      value: 'auction',
    },
  ],
  outputSelector: 'SellerInfo',
  sortOrderType: 'CurrentPriceHighest',
};

export default config;
