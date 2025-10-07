import axios from "axios";
import { useEffect } from "react";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});
