const basicApiUrl = window.config.mainApiUrl +
  `?OPERATION-NAME=${window.config.opperationName}` +
  `&SERVICE-VERSION=${window.config.serviceVersion}` +
  `&SECURITY-APPNAME=${window.config.securityAppName}` +
  `&GLOBAL-ID=${window.config.globalId}` +
  `&RESPONSE-DATA-FORMAT=JSON${window.config.ResponseDataFormat}` +
  '&REST-PAYLOAD' +
  `&keywords=${window.config.keywords}` +
  `&paginationInput.entriesPerPage=${window.config.entriesPerPage}` +
  `&itemFilter(0).name=${window.config.itemFilter[0].name}` +
  `&itemFilter(0).value=${window.config.itemFilter[0].value}` +
  `&itemFilter(1).name=${window.config.itemFilter[1].name}` +
  `&itemFilter(2).name=${window.config.itemFilter[2].name}` +
  `&itemFilter(2).value=${window.config.itemFilter[2].value}` +
  `&outputSelector(0)=${window.config.outputSelector}` +
  `&sortOrder=${window.config.sortOrderType}`;

export default basicApiUrl;
