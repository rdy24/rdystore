import axios from "axios";
import callAPI from "../config/api";
import { CheckoutTypes } from "./data-type";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function getFeaturedGame() {
  const URL = "players/landingpage";
  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}

export async function getDetailGame(id: string) {
  const URL = `players/${id}/detail`;
  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}

export async function getArcticle() {
  const URL = "players/articlepage";
  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}

export async function getDetailArticle(id: string) {
  const URL = `players/${id}/detail-article`;
  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}

export async function getGameCategory() {
  const URL = "players/category";
  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
}

export async function setCheckout(data: CheckoutTypes) {
  const url = `${ROOT_API}/${API_VERSION}/players/checkout`;
  return callAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
}
