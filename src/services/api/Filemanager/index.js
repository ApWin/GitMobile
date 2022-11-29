export default api => {
  return {
    upload: data => {
      return api.post('/filemanager/uploads', data);
    },
    deleteImage: data => {
      return api.delete(`/filemanager/${data.id}`);
    },
  };
};
