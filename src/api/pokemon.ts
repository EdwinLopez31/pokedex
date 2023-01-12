import { API_BASE_URL } from "common/environment";

//opted to not use axios to lessen app size

export const getAllPokemon: (
  page?: string,
  limit?: number
) => Promise<{
  result: any;
  nextPage: string | null;
  prevPage: string | null;
}> = async (page, limit = 20) => {
  // page is returned by the API under data.results, it is for loading the nextPage or the previousPage
  const response = await fetch(
    page ? page : `${API_BASE_URL}/pokemon?limit=${limit}`
  );

  if (!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  return { result: data.results, nextPage: data.next, prevPage: data.previous };
};
