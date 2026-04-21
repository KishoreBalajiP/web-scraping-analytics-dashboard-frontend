import axios from "axios";
import { Mail } from "../types/Mail";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const fetchEmails = async (): Promise<Mail[]> => {
  const res = await API.get("/mail/fetch");
  return res.data.data;
};

export const searchEmails = async (
  keyword: string
): Promise<Mail[]> => {
  const res = await API.get(`/mail/search/${keyword}`);
  return res.data.emails;
};