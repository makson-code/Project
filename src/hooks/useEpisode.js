import { useQuery } from "@tanstack/react-query"
import { characters } from "../api/api"

export const useEpisodeById = (id) => {
	return useQuery({
	  queryFn: () => characters.getEpisodeById(id),
	  queryKey: ['episode', id],
	  enabled: !!id,
	  select: (data) => data.data 
	})
};