export const isServer = () => typeof window === 'undefined'

export const getDateNow = () => new Date().toLocaleDateString(
  "pt-BR", 
  {
    timeZone: "America/Sao_Paulo",
  }
)

export const getYear = () => {
  try {
    const date = getDateNow();
    return date.split("/")[2];
  } catch (e) {
    console.log(e);
  }
  return "----";
};
