import dayjs from "dayjs";
export const localeTime = (time) => {
  const day = dayjs(time).format("DD/MM/YYYY")
  return day;
};

export const getImage = (images, name = "thumbnail") => {
  const data = images?.data?.attributes?.formats;
  if (!data || !data[name]?.url) return "/";
  const url = process.env.API_URL + data[name]?.url;
  return url;
};

export const getImages = (images) => {
  const data = images?.data.map((element) => {
    return process.env.API_URL + element.attributes?.formats;
  });
  return data;
};
