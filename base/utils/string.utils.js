export const capitalizeFirstLetter = (string) => {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
};

export const stringAvatar = (string) => {
  return `${string.split(' ')[0][0]}${string.split(' ')[1][0]}`;
};
