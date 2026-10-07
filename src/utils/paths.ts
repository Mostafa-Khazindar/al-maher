export const BASE_PATH = process.env.NODE_ENV === "production" ? "/al-maher" : "";

export const asset = (path: string) => {
  if (path.startsWith("/")) {
    return `${BASE_PATH}${path}`;
  }
  return `${BASE_PATH}/${path}`;
};
