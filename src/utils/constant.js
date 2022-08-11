const BASE_URL = "http://192.168.2.56:8080";

const API_CATEGORY_LIST = "/api/v1/param/category/list";
const API_VERIFY_FACEBOOK = "/api/auth/facebook/verify";
const API_VERIFY_GOOGLE = "/api/auth/google/verify";
const API_GET_PROFILE = "/api/v1/user/detail";
const API_LOGOUT = "/api/v1/logout";
const API_CONNECT_WALLET = "/api/v1/user/connect/wallet";
const API_TOP_CREATORS = "/api/v1/param/top/creators";
const APIT_TIMELINE_POSTS = "/api/v1/post/timeline/list";
const API_MY_POSTS = "/api/v1/post/own/list";
const API_POST_RATE = "/api/v1/post/rate";
const API_POST_CREATE = "/api/v1/post/create";
const API_NFT_GENERATE = "/api/v1/nft/generate";

const CONTRACT_ADDRESS ="0xd9145CCE52D386f254917e481eB44e9943F39138";
const GOOGLE_CLIENT_ID = "996736445415-m2jjeneiv61vo5srj1af330bb9lbh7ai.apps.googleusercontent.com";
export default {
  BASE_URL,
  API_CATEGORY_LIST,
  API_VERIFY_FACEBOOK,
  API_VERIFY_GOOGLE,
  API_GET_PROFILE,
  API_LOGOUT,
  CONTRACT_ADDRESS,
  API_CONNECT_WALLET,
  API_TOP_CREATORS,
  GOOGLE_CLIENT_ID,
  APIT_TIMELINE_POSTS,
  API_POST_RATE,
  API_MY_POSTS,
  API_POST_CREATE,
  API_NFT_GENERATE
};
