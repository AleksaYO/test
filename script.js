document.addEventListener("DOMContentLoaded", function () {
  const popupForm = document.getElementById("popupForm");
  const comments = document.querySelector(".comment-block");
  const overlay = document.querySelector(".overlay");
  const body = document.body;

  const showPopupForm = () => {
    overlay.style.display = "block";
    body.style.overflow = "hidden";
    document.removeEventListener("scroll", scrollHandler);
    overlay.classList.add("show");
  };

  const hidePopupForm = (e) => {
    if (e.target === overlay) {
      overlay.style.display = "none";
      body.style.overflow = "auto";
      overlay.classList.remove("show");
    }
  };

  overlay.addEventListener("click", hidePopupForm);

  const scrollHandler = () => {
    const commentsTop = comments.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (commentsTop <= windowHeight) {
      showPopupForm();
    }
  };

  document.addEventListener("scroll", scrollHandler);
});
