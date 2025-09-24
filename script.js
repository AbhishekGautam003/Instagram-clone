// const posts = [
//   {
//     username: "ninja_coder",
//     avatar: "https://source.unsplash.com/random/40x40?face&sig=11",
//     image: "https://source.unsplash.com/random/600x400?tech&sig=1",
//     image: "assets/ninja.jpg",
//     likes: 43,
//     comments: ["🔥🔥", "So cool!"]
//   },
//   {
//     username: "dev_master",
//     avatar: "https://source.unsplash.com/random/40x40?face&sig=12",
//     image: "https://source.unsplash.com/random/600x400?code&sig=2",
//     image: "assets/dev.jpg",
//     likes: 18,
//     comments: ["Nice work!", "Love this!","hola abhi"]
//   }
// ];
 
// const users = ["frontend_pro", "design_guru", "ui_master", "code_wizard"];

// const feedEl = document.getElementById("feed");
// const suggestionsEl = document.getElementById("suggestions");
 
// function renderPosts() {
//   feedEl.innerHTML = "";
//   posts.forEach((post, idx) => {
//     const postEl = document.createElement("div");
//     postEl.className = "post";
//     postEl.innerHTML = `
//       <div class="post-header">
//         <img src="assets/IMG-20230310-WA0005.jpg" height="40">
//         <strong>${post.username}</strong>
//       </div>
//       <img src="${post.image}" alt="post">
//       <div class="post-actions">
//         <span onclick="toggleLike(${idx})">❤️</span>
//         <span>💬</span>
//         <span>📤</span>
//       </div>
//       <div class="post-comments">
//         <p><strong>${post.likes} likes</strong></p>
//         <div id="comments-${idx}">
//           ${post.comments.map(c => `<p>${c}</p>`).join("")}
//         </div>
//       </div>
//       <div class="comment-input">
//         <input type="text" id="comment-${idx}" placeholder="Add a comment...">
//         <button onclick="addComment(${idx})">Post</button>
//       </div>
//     `;
//     feedEl.appendChild(postEl);
//   });
// }

// function toggleLike(idx) {
//   posts[idx].likes++;
//   renderPosts();
// }

// function addComment(idx) {
//   const input = document.getElementById(`comment-${idx}`);
//   if (input.value.trim()) {
//     posts[idx].comments.push(input.value.trim());
//     renderPosts();
//   }
// }

// function renderSuggestions() {
//   suggestionsEl.innerHTML = users
//     .map(u => `<li>@${u} <button>Follow</button></li>`)
//     .join("");
// }

// renderPosts();
// renderSuggestions();


// ================= Like Button =================
// document.querySelectorAll(".post").forEach(post => {
//   const likeIcon = post.querySelector(".left-icons .icon");
//   const likesText = post.querySelector(".likes");

//   likeIcon.addEventListener("click", () => {
//     if (likeIcon.classList.contains("liked")) {
//       likeIcon.classList.remove("liked");
//       likeIcon.style.stroke = "white";
//       likesText.innerHTML = "<strong>43 likes</strong>";
//     } else {
//       likeIcon.classList.add("liked");
//       likeIcon.style.stroke = "red";
//       likesText.innerHTML = "<strong>44 likes</strong>";
//     }
//   });
// });

document.querySelectorAll(".post").forEach(post => {
  const likeIcon = post.querySelector(".left-icons .icon");
  const likesText = post.querySelector(".likes");

  likeIcon.addEventListener("click", () => {
    // extract number only
    let currentLikes = parseInt(likesText.textContent.replace(/\D/g, ""), 10);

    if (likeIcon.classList.contains("liked")) {
      // UNLIKE
      likeIcon.classList.remove("liked");
      likeIcon.style.stroke = "white";    // outline white again
      likeIcon.style.fill = "none";       // no fill (empty heart)
      likesText.innerHTML = `<strong>${currentLikes - 1} likes</strong>`;
    } else {
      // LIKE
      likeIcon.classList.add("liked");
      likeIcon.style.stroke = "red";      // outline red
      likeIcon.style.fill = "red";        // full red fill
      likesText.innerHTML = `<strong>${currentLikes + 1} likes</strong>`;
    }
  });
});


// ================= Follow Button =================
document.querySelectorAll(".follow").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "Follow") {
      btn.innerText = "Following";
      btn.style.color = "#999";
    } else {
      btn.innerText = "Follow";
      btn.style.color = "rgba(78, 78, 245, 0.904)";
    }
  });
});

// for follow right side bar
document.querySelectorAll(".follow-btn").forEach(btn => {
  btn.addEventListener("click",() => {
    if (btn.innerText === "Follow") {
      btn.innerText = "Following";
      btn.style.color = "#999";
    }if (btn.innerText === "Switch"){  // for switch button alert top up
      alert("you don't have another acount");
    
    }
  })
})


// ================= Close Suggestion Box =================
document.querySelectorAll(".btn-close").forEach(btn => {
  btn.addEventListener("click", () => {
    const outerBox = btn.closest(".outer");
    outerBox.style.display = "none";
  });
});

// ================= Add Comment =================
document.querySelectorAll(".comment-box input").forEach(input => {
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value.trim() !== "") {
      const newComment = document.createElement("p");
      newComment.classList.add("comment");
      newComment.innerHTML = `<strong>you</strong> ${input.value}`;
      
      const post = input.closest(".post");
      const commentBox = post.querySelector(".comment-box");
      post.insertBefore(newComment, commentBox);

      input.value = ""; // clear input
    }
  });
});
