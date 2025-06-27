import axios from '../utils/axios.js';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../features/auth/authSlice';

const useRefreshToken = () => {
    const dispatch = useDispatch()

    const refresh = async () => {
        const response = await axios.get('auth/refresh', {
            withCredentials: true
        });
        dispatch(setAccessToken(
            {
                accessToken: response.data.accessToken 
            }
        ));

        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;