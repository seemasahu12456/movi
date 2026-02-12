// ===============================
// 🎬 VIDEO DATA
// ===============================
let videos = [
  {
    title: "Cinematic Nature | 4K Ultra HD",
    category: "Nature",
    src: "https://vod.wwe.com/vod/2026/,1080,720,540,432,360,288,/dchiraw1707_07_ntwk.m3u8",
    thumb: "https://www.wwe.com/f/styles/wwe_16_9_l/public/2026/02/20260209_RAW_final.jpg",
    channel: "Nature Pro",
    views: "1.2M views",
    duration: "5:30",
    date: "2 days ago"
  },
  {
    title: "Massive intense pleasure brought on by a powerful sex toy",
    category: "Cars",
    src: "https://hugh.cdn.rumble.cloud/video/s8/2/B/D/R/x/BDRxm.caa.mp4?u=3&b=0",
    thumb: "https://hugh.cdn.rumble.cloud/video/s8/6/B/D/R/x/BDRxm.qR4e.jpg",
    channel: "Auto Vision",
    views: "820K views",
    duration: "8:45",
    date: "1 week ago"
  },
  {
    title: "Future Tech AI | The Next Generation",
    category: "Tech",
    src: "videos/4.mp4",
    thumb: "thumbnails/11.jpg",
    channel: "Tech World",
    views: "540K views",
    duration: "12:20",
    date: "3 days ago"
  },
  {
    title: "Mountain Sunrise | Cinematic Timelapse",
    category: "Nature",
    src: "videos/4.mp4",
    thumb: "thumbnails/3.jpg",
    channel: "Nature Pro",
    views: "2.1M views",
    duration: "4:15",
    date: "1 month ago"
  },
  {
    title: "Hypercar Showcase | 8K Resolution",
    category: "Cars",
    src: "videos/4.mp4",
    thumb: "thumbnails/11.jpg",
    channel: "Auto Vision",
    views: "1.5M views",
    duration: "6:40",
    date: "2 weeks ago"
  },
  {
    title: "Quantum Computing Explained",
    category: "Tech",
    src: "videos/4.mp4",
    thumb: "thumbnails/3.jpg",
    channel: "Tech World",
    views: "950K views",
    duration: "15:30",
    date: "4 days ago"
  },
  {
    title: "Future AI | Next Gen",
    category: "AI",
    src: "videos/4.mp4",
    thumb: "thumbnails/11.jpg",
    channel: "AI Hub",
    views: "880K views",
    duration: "10:10",
    date: "5 days ago"
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
