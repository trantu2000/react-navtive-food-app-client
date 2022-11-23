import axios from "axios";

import ApiConstants from "../constants/ApiConstants";
import { getToken } from "../Redux/Store";
import { authHeader } from "../utils/Generator";

const getRestaurants = async () => {
  //console.log(`RestaurantsService | getRestaurants`);
  try {
    let restaurantResponse = await axios.get(
      `${ApiConstants.BACKEND_API.BASE_API_URL}${ApiConstants.BACKEND_API.RESTAURANT}`,
      {
        headers: authHeader(getToken()),
      }
    );
    if (restaurantResponse?.status === 200) {
      return {
        status: true,
        message: `Restaurant data fetched`,
        data: restaurantResponse?.data?.data,
      };
    } else {
      return {
        status: false,
        message: `Restaurant data not found`,
      };
    }
  } catch (error) {
    return {
      status: false,
      message: `Restaurant data not found`,
    };
  }
};

const getOneRestaurantById = async (restaurantId) => {
  console.log(`RestaurantsService | getOneRestaurantById`);
  try {
    let restaurantResponse = await axios.get(
      `${ApiConstants.BACKEND_API.BASE_API_URL}${ApiConstants.BACKEND_API.RESTAURANT}/${restaurantId}`,
      {
        headers: authHeader(getToken()),
      }
    );
    if (restaurantResponse?.status === 200) {
      return {
        status: true,
        message: `Restaurant data fetched`,
        data: restaurantResponse?.data?.data,
      };
    } else {
      return {
        status: false,
        message: `Restaurant data not found`,
      };
    }
  } catch (error) {
    return {
      status: false,
      message: `Restaurant data not found`,
    };
  }
};

export default { getRestaurants, getOneRestaurantById };
