import constant from "../utils/constant";
import client from "./axios-client";

const getCategoryList=()=>{
    const formData = new FormData();
    return client.post(constant.API_CATEGORY_LIST, formData);
}

const getProfile=()=>{
    return client.post(constant.API_GET_PROFILE);
}

const logout=()=>{
    return client.post(constant.API_LOGOUT);
}

const topCreators=()=>{
    return client.post(constant.API_TOP_CREATORS);
}

const getTimelinePosts=(page= 1)=>{
    const formData = new FormData();
    formData.append('page', page);
    return client.post(constant.APIT_TIMELINE_POSTS, formData);
}

const getMyPosts=(page= 1)=>{
    const formData = new FormData();
    formData.append('page', page);
    return client.post(constant.API_MY_POSTS, formData);
}

const connectWallet=(account)=>{
    const formData = new FormData();
    formData.append('wallet', account);
    return client.post(constant.API_CONNECT_WALLET, formData);
}

const loginGoogle=(email, name, userId, accessToken)=>{

    const formData = new FormData();
    formData.append('email', email);
    formData.append("name", name);
    formData.append('userId', userId);
    formData.append('accessToken', accessToken);

    return client.post(constant.API_VERIFY_GOOGLE, formData);
}

const loginFacebook=(email, name, userId, accessToken)=>{

    const formData = new FormData();
    formData.append('email', email);
    formData.append("name", name);
    formData.append('userId', userId);
    formData.append('accessToken', accessToken);

    return client.post(constant.API_VERIFY_FACEBOOK, formData);
}

const ratePost=(postId)=>{
    const formData = new FormData();
    formData.append('postId', postId);
    return client.post(constant.API_POST_RATE, formData);
}

const createPost=(title, text, image)=>{
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content_text', text);
    formData.append('content_image', image);

    return client.post(constant.API_POST_CREATE, formData);
}

const generateNft=(postId)=>{
    const formData = new FormData();
    formData.append('postId', postId);
    return client.post(constant.API_NFT_GENERATE, formData, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    });
}

export default {
    getCategoryList,
    loginFacebook,
    getProfile,
    logout,
    connectWallet,
    topCreators,
    loginGoogle,
    getTimelinePosts,
    ratePost,
    getMyPosts,
    createPost,
    generateNft
}