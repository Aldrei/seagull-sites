import { getHostname } from "@/utils";
import { IRequestError } from "./types";

export const listPropertiesFiltered = async (params: string) => {
  try {
    const response = await fetch(`
      ${process.env.NEXT_PUBLIC_API_BASE_URL}pub/${getHostname()}/properties/filtered?${params}`,
      { method: 'GET' }
    );

    return response.json();
  } catch (error) {
    return { error } as IRequestError;
  }
}

export const listStateOptions = async () => {
  try {
    const response = await fetch(`
      ${process.env.NEXT_PUBLIC_API_BASE_URL}pub/${getHostname()}/states`,
      { method: 'GET' }
    );

    return response.json();
  } catch (error) {
    return { error } as IRequestError;
  }
}

export const listGeneralOptions = async () => {
  try {
    const response = await fetch(`
      ${process.env.NEXT_PUBLIC_API_BASE_URL}pub/${getHostname()}/filter`,
      { method: 'GET' }
    );
  
    return response.json();
  } catch (error) {
    return { error } as IRequestError;
  }
}
