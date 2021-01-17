const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

// adding event listener to .about container, not the buttons
about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from all buttons and then add to clicked button
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    // hide all articles first and than add active to article if id matchese
    articles.forEach(function (article) {
      article.classList.remove("active");
      if (article.id === id) {
        article.classList.add("active");
      }
    });
    // could also use this code
    // const element = document.getElementById(id);
    // element.classList.add('active');
  }
});
