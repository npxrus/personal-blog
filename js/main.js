const articles = document.querySelectorAll(".article-item");
const selector = document.getElementById("categories");
const textareas = document.querySelectorAll(".message");
const submitButton = document.querySelector(".submit-button");
const like = document.querySelector(".like");
const likesNumber = document.getElementById("likes");
const commentForm = document.querySelector(".comment-form");
const commentsList = document.querySelector(".comments-list");
const authorField = document.querySelector(".comment-author span");
const commentText = document.querySelector("comment-item p");
const author = document.getElementById("name");
const email = document.getElementById("email");

if (selector) {
  selector.addEventListener("change", () => {
    for (let article of articles) {
      if (
        article.dataset.category !== selector.value &&
        selector.value !== "all"
      ) {
        article.classList.add("visually-hidden");
      } else {
        article.classList.remove("visually-hidden");
      }
    }
  });
}

if (textareas) {
  for (let textarea of textareas) {
    textarea.addEventListener("input", () => {
      if (textarea.value.length >= 200 || textarea.value.length <= 10) {
        textarea.classList.add("red");
        submitButton.disabled = true;
      } else {
        textarea.classList.remove("red");
        submitButton.disabled = false;
      }
    });
  }
}

if (like) {
  let counter = likesNumber.textContent;
  like.addEventListener("click", () => {
    if (!likesNumber.classList.contains("add")) {
      likesNumber.textContent = counter++;
    } else {
      likesNumber.textContent = counter--;
    }
    likesNumber.classList.toggle("add");
  });
}

if (commentForm) {
  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newCommentBlock = document.createElement("div");
    newCommentBlock.classList.add("comment-author");
    let newCommentAuthor = document.createElement("span");
    newCommentAuthor.textContent = author.value;
    let newCommentText = document.createElement("p");
    newCommentText.textContent = document.querySelector(".message").value;
    let newComment = document.createElement("li");
    newComment.classList.add("comment-item");
    newCommentBlock.append(newCommentAuthor);
    newComment.append(newCommentBlock);
    newComment.append(newCommentText);
    commentsList.append(newComment);
  });
}
