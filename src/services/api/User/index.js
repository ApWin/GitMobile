export default api => {
  return {
    getMe: () => {
      return api.get('/hr/user/get-me');
    },
    getList: data => {
      return api.get(`search/${data.link}?q=${data.query}`);
    },
    getUserDetails: data => {
      return api.get(`users/${data?.login}`);
    },
  };
};
