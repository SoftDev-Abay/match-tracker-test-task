import http from "../utils/http";

const fetchMatches = async () => {
  const { data } = await http.get("/fronttemp");
  return data;
};

export { fetchMatches };
