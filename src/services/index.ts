import { getHostname } from "@/utils";

export const listPropertiesFiltered = async (params: string) => {
  const response = await fetch(`
      ${process.env.NEXT_PUBLIC_API_BASE_URL}pub/${getHostname()}/properties/filtered?${params}`,
      { method: 'GET' }
    );

  return response.json();
}
