export const getUser = async (userId) => {
  return await get(`https://jsonplaceholder.typicode.com/users/${userId}`);
};

export const getUsers = async () => {
  return await get("https://jsonplaceholder.typicode.com/users");
};

export const getAlbums = async () => {
  return await get("https://jsonplaceholder.typicode.com/albums");
};

export const getAlbumsByUser = async (userId) => {
  return await get(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
};

export const getAlbum = async (albumId) => {
  return await get(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
};

export const getPhotos = async (albumId) => {
  return await get(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
  );
};

const get = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Не удалось загрузить данные");
  }
  return response.json();
};
