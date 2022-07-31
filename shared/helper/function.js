export const localeTime = (time) => {
  const day = new Date(time).toLocaleString().split(",")[0];
  return day;
};

export const getImage = (images, name = "thumbnail") => {
  const data = images?.data?.attributes?.formats;
  const url = process.env.API_URL + data[name]?.url;
  return url;
};

export const getImages = (images) => {
  const data = images?.data.map((element) => {
    return process.env.API_URL + element.attributes?.formats;
  });
  return data;
};
