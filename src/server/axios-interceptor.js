import client from "./axios-client";

export default (store) => {
  client.interceptors.request.use((config) => {
    const token = store.getState().auth.token;
    if (token) config.headers.Authorization = "Bearer " + token;
    return config;
  });

  client.interceptors.response.use(
      response=>{
        return response.data;
      }
  )
};
