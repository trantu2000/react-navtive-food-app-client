import axios from "axios";
import ApiConstants from "../../constants/ApiConstants";
import { getToken } from "../../Redux/Store";
import { authHeader } from "../../utils/Generator";

const AuthRequest = axios.create({
  baseURL: ApiConstants.BACKEND_API.BASE_API_URL,
});

const register = async (user) => {
  if (!user?.username || !user?.email || !user?.password) {
    return { status: false, message: "Vui lòng điền thông tin vào chỗ trống!" };
  }
  try {
    let requestBody = {
      username: user?.username,
      email: user?.email,
      password: user?.password,
    };
    let registerResponse = await AuthRequest.post(
      ApiConstants.BACKEND_API.REGISTER,
      requestBody
    );
    return registerResponse?.data;
  } catch (error) {
    console.log(error);
    return { status: false, message: "Oops! Something went wrong" };
  }
};

const checkUserExist = async (type, value) => {
  try {
    let params = { [type]: value };
    let userCheckResponse = await AuthRequest.get(
      ApiConstants.BACKEND_API.USER_EXIST,
      { params }
    );
    return userCheckResponse?.data;
  } catch (error) {
    console.log(error);
    return { status: false, message: "Oops! Something went wrong" };
  }
};

const login = async (user) => {
  if (!user?.username || !user?.password) {
    return { status: false, message: "Vui lòng điền thông tin vào chỗ trống!" };
  }
  try {
    let requestBody = {
      username: user?.username,
      password: user?.password,
    };
    let loginResponse = await AuthRequest.post(
      ApiConstants.BACKEND_API.LOGIN,
      requestBody
    );
    return loginResponse?.data;
  } catch (error) {
    console.log(error);
    return { status: false, message: "Oops! Something went wrong" };
  }
};

const refreshToken = async () => {
  try {
    let tokenResponse = await AuthRequest.post(
      ApiConstants.BACKEND_API.REFRESH_TOKEN,
      { headers: authHeader(getToken()) }
    );
    if (tokenResponse?.status === 200) {
      return { status: true, data: tokenResponse?.data };
    } else {
      return { status: false };
    }
  } catch (error) {
    console.log(error);
    return { status: false, message: "Oops! Something went wrong" };
  }
};

export default { register, checkUserExist, login, refreshToken };
