import axios from 'axios'
import { loginFail, loginStart, loginSuccess } from './authen/authenSlice'

export const loginUser = async(user,dispatch,navigate)=>{
    const headers = {
        'Accept':'*/*',
        'Accept-Encoding':'gzip,deflate,br',
        'X-Parse-Application-Id':'myAppId',
        'X-Parse-REST-API-Key':'myRestApiKey',
        'X-Parse-Revocable-Session':1,
        'Content-Type':'application/json'
    }
    dispatch(loginStart());

    try {
        const res = await axios.post("http://e-commerce-store-api.herokuapp.com/api/login",user,{
            headers:headers
        });
        dispatch(loginSuccess(res.data));
        const sessionToken = res.data.sessionToken;
        localStorage.setItem('sessionToken',sessionToken);
        navigate('/')
    } catch (error) {
        dispatch(loginFail());
    }
}