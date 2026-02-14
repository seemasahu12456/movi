// ===============================
// 🎬 VIDEO DATA
// ===============================
let videos = [
   {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73ij4o/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fwe2/6f/s8/1/G/f/j/Z/GfjZz.qR4e-small-1.jpg",
    channel: "Nature Pro",
    views: "968 views",
    duration: "5:30",
    date: "2 days ago"
  },
  {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73ijck/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fwe2/7f/s8/1/8/j/j/Z/8jjZz.qR4e-small-2.jpg",
    channel: "Auto Vision",
    views: "820K views",
    duration: "8:45",
    date: "1 week ago"
  },
  {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73ik70/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fwe2/43/s8/1/e/B/j/Z/eBjZz.qR4e-small-3.jpg",
    channel: "Tech World",
    views: "540K views",
    duration: "12:20",
    date: "3 days ago"
  },
  {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73ikty/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fwe2/46/s8/1/-/N/j/Z/-NjZz.qR4e-small-4.jpg",
    channel: "Nature Pro",
    views: "2.1M views",
    duration: "4:15",
    date: "1 month ago"
  },
  {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73il84/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fwe2/2d/s8/1/8/V/j/Z/8VjZz.qR4e-small-5.jpg",
    channel: "Auto Vision",
    views: "1.5M views",
    duration: "6:40",
    date: "2 weeks ago"
  },
  {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73imig/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fww1/3e/s8/6/a/k/k/Z/akkZz.qR4e.jpg",
    channel: "Tech World",
    views: "950K views",
    duration: "15:30",
    date: "4 days ago"
  },
  {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73iqms/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fww1/c9/s8/1/C/D/l/Z/CDlZz.qR4e-small-7.jpg",
    channel: "AI Hub",
    views: "880K views",
    duration: "10:10",
    date: "5 days ago"
  },
    {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73jspg/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fww1/c2/s8/1/C/G/x/Z/CGxZz.qR4e-small-8.jpg",
    channel: "Nature Pro",
    views: "968 views",
    duration: "5:30",
    date: "2 days ago"
  },
  {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73jt4s/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fwe2/25/s8/1/e/P/x/Z/ePxZz.qR4e-small-9.jpg",
    channel: "Auto Vision",
    views: "820K views",
    duration: "8:45",
    date: "1 week ago"
  },
  {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73ju5m/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fww1/20/s8/1/Y/9/x/Z/Y9xZz.qR4e-small-10.jpg",
    channel: "Tech World",
    views: "540K views",
    duration: "12:20",
    date: "3 days ago"
  },
  {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73jvqc/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fwe2/55/s8/1/S/D/y/Z/SDyZz.qR4e-small-11.jpg",
    channel: "Nature Pro",
    views: "2.1M views",
    duration: "4:15",
    date: "1 month ago"
  },
  {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73jwzs/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fwe2/01/s8/1/q/3/y/Z/q3yZz.qR4e-small-12.jpg",
    channel: "Auto Vision",
    views: "1.5M views",
    duration: "6:40",
    date: "2 weeks ago"
  },
  {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73jzne/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fww1/0d/s8/1/c/T/z/Z/cTzZz.qR4e-small-13.jpg",
    channel: "Tech World",
    views: "950K views",
    duration: "15:30",
    date: "4 days ago"
  },
  {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73k0fm/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fwe2/b4/s8/1/6/8/z/Z/68zZz.qR4e-small-14.jpg",
    channel: "AI Hub",
    views: "880K views",
    duration: "10:10",
    date: "5 days ago"
  },
    {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73k0t6/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fwe2/2c/s8/1/I/e/A/Z/IeAZz.qR4e-small-15.jpg",
    channel: "Nature Pro",
    views: "968 views",
    duration: "5:30",
    date: "2 days ago"
  },
  {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73k17e/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fwe2/7a/s8/1/I/m/A/Z/ImAZz.qR4e-small-16.jpg",
    channel: "Auto Vision",
    views: "820K views",
    duration: "8:45",
    date: "1 week ago"
  },
  {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73k1pc/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fwe2/4e/s8/1/O/w/A/Z/OwAZz.qR4e-small-17.jpg",
    channel: "Tech World",
    views: "540K views",
    duration: "12:20",
    date: "3 days ago"
  },
  {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73k2i0/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fwe2/43/s8/1/W/M/A/Z/WMAZz.qR4e-small-18.jpg",
    channel: "Nature Pro",
    views: "2.1M views",
    duration: "4:15",
    date: "1 month ago"
  },
  {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73k2ya/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fwe2/b0/s8/1/6/V/A/Z/6VAZz.qR4e-small-19.jpg",
    channel: "Auto Vision",
    views: "1.5M views",
    duration: "6:40",
    date: "2 weeks ago"
  },
  {
    title: "",
    category: "Action & Adventure",
    src: "https://rumble.com/embed/v73k36m/?pub=2sznqv",
    thumb: "https://hugh.cdn.rumble.cloud/video/fww1/35/s8/1/M/0/A/Z/M0AZz.qR4e-small-20.jpg",
    channel: "Tech World",
    views: "950K views",
    duration: "15:30",
    date: "4 days ago"
  }
];

// ===============================
// 🔀 SHUFFLE (RANDOM) VIDEOS
// ===============================
function shuffleVideos(showUI = true) {
  videos = videos.sort(() => Math.random() - 0.5);
  renderVideos();

  if (showUI) {
    const fab = document.getElementById("refreshFab");
    fab.style.transform = "rotate(360deg)";
    setTimeout(() => fab.style.transform = "", 500);
    showNotification("Videos shuffled!");
  }
}

// ===============================
// 📦 ELEMENTS
// ===============================
const grid = document.getElementById("videoList");
const searchInput = document.getElementById("searchInput");
const cats = document.querySelectorAll(".cat");
let activeCategory = "All";

// ===============================
// ⏳ LOADER
// ===============================
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }
  }, 1200);
});

// ===============================
// 🎥 RENDER VIDEOS
// ===============================
function renderVideos() {
  grid.innerHTML = "";
  const q = searchInput.value.toLowerCase();

  const filtered = videos.filter(v =>
    (activeCategory === "All" || v.category === activeCategory) &&
    (v.title.toLowerCase().includes(q) ||
      v.channel.toLowerCase().includes(q))
  );

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <h3>No videos found</h3>
        <p>Try different keywords</p>
      </div>
    `;
    return;
  }

  filtered.forEach((v, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${i * 0.08}s`;

    card.innerHTML = `
      <div class="thumb">
        <img src="${v.thumb}">
        <div class="play-overlay">
          <i class="fas fa-play-circle"></i>
        </div>
        <div class="video-duration">${v.duration}</div>
      </div>
      <div class="info">
        <h4>${v.title}</h4>
        <span><i class="fas fa-user-circle"></i> ${v.channel}</span>
        <div class="video-meta">
          <span><i class="fas fa-eye"></i> ${v.views}</span>
          <span><i class="far fa-clock"></i> ${v.date}</span>
        </div>
      </div>
    `;

    card.onclick = () => {
      card.style.transform = "scale(0.95)";
      setTimeout(() => {
        window.location.href =
          `video.html?src=${v.src}&title=${encodeURIComponent(v.title)}`;
      }, 200);
    };

    grid.appendChild(card);
  });

  updateCategorySlider();
}

// ===============================
// 🎯 CATEGORY SLIDER
// ===============================
function updateCategorySlider() {
  const active = document.querySelector(".cat.active");
  if (!active) return;

  const slider = document.querySelector(".category-slider");
  const rect = active.getBoundingClientRect();
  const parent = document.querySelector(".categories").getBoundingClientRect();

  slider.style.width = rect.width + "px";
  slider.style.left = rect.left - parent.left + "px";
}

// ===============================
// 🔍 SEARCH
// ===============================
searchInput.oninput = () => renderVideos();

// ===============================
// 🏷 CATEGORY FILTER
// ===============================
cats.forEach(c => {
  c.onclick = () => {
    cats.forEach(x => x.classList.remove("active"));
    c.classList.add("active");
    activeCategory = c.dataset.cat;
    renderVideos();
  };
});

// ===============================
// 🌗 THEME TOGGLE
// ===============================
document.getElementById("themeToggle").onclick = () => {
  const html = document.documentElement;
  const theme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  showNotification(`Switched to ${theme} mode`);
};

// ===============================
// 🔔 NOTIFICATION
// ===============================
function showNotification(msg) {
  const n = document.getElementById("notification");
  n.querySelector("span").textContent = msg;
  n.classList.add("show");
  setTimeout(() => n.classList.remove("show"), 2500);
}

// ===============================
// 🔘 FAB BUTTON
// ===============================
document.getElementById("refreshFab").onclick = () => shuffleVideos(true);

// ===============================
// 🚀 INIT (PAGE REFRESH = RANDOM)
// ===============================
const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);

// 🔥 IMPORTANT LINE
shuffleVideos(false);

window.addEventListener("resize", updateCategorySlider);
setTimeout(updateCategorySlider, 100);

