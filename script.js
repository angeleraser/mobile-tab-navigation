const phoneScreen = document.getElementById("phone-screen");
const phoneNavbar = document.getElementById("phone-navbar");

const images = {
  home: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
  work: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  blog: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
  ["about-us"]:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
};

Object.entries(images).forEach(function ([name, imgSrc], i) {
  phoneScreen.innerHTML += `
  <figure data-screen="${name}" class="${i === 0 ? "show" : ""}">
    <img src="${imgSrc}"alt="${name}"/>
  </figure>
`;
});

phoneNavbar.addEventListener("click", function ({ target }) {
  const { menu } = target.dataset;

  if (menu) {
    phoneScreen.querySelector(".show").classList.remove("show");
    phoneScreen.querySelector(`[data-screen="${menu}"]`).classList.add("show");
  }
});
