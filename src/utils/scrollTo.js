export const scrollTo = (destination) => {
  let offsetTop = document.getElementById(destination)?.offsetTop;
  window.scrollTo({
    top: offsetTop - 100,
    behavior: "smooth",
  });
};
