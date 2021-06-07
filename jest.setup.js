global.fetch = require("jest-fetch-mock");
fetch.enableFetchMocks();
fetch.mockResponse(JSON.stringify({ testing: true }));
