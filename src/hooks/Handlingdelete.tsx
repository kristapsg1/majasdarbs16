import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const Handlingdelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => {
      return axios.delete(`http://localhost:3000/films/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["films"] });
    },
  });
};

export default Handlingdelete;
