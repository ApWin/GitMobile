import configs from '../config';

const staticsBaseURL = 'http://example.com';

export default {
  staticsBaseURL,

  apisauce: {
    baseURL: configs.API_ROOT,

    headers: {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      Authorization: 'Bearer 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',
    },
  },
};
