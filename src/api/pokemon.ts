import { API_BASE_URL } from "common/environment";

//opted to not use axios to lessen app size

export const getAllPokemon: (limit?: number) => Promise<{
  result: any;
  nextPage: string | null;
  prevPage: string | null;
}> = async (limit = 8) => {
  const response = await fetch(`${API_BASE_URL}/pokemon?limit=${limit}`);

  if (!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  return { result: data.results, nextPage: data.next, prevPage: data.previous };
};
