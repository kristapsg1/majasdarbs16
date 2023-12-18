import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Handlingget = () => {
    return useQuery({
        queryKey: ["films"],
        queryFn: () => {
          return axios.get("http://localhost:3000/films").then(({ data }) => {
            return data;
          });
        },
      });
}
 
export default Handlingget;