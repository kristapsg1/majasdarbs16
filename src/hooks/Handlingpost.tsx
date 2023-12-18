import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const Handlingposts = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => {
      return axios.post(`http://localhost:3000/films/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["films"] });
    },
  });
};

export default Handlingposts;
