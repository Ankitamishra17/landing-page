// Toggle sidebar (mobile + tablet)
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const cross = document.querySelector(".crossico");

  sidebar.classList.toggle("show");

  if (window.innerWidth < 992) {
    cross.style.display = sidebar.classList.contains("show") ? "block" : "none";
  }
}

// Close sidebar (X button)
function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const cross = document.querySelector(".crossico");

  sidebar.classList.remove("show");
  cross.style.display = "none";
}

// Toggle sidebar (desktop >= 992px)
function toggleSidebarDesktop() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");

  if (window.innerWidth >= 992) {
    sidebar.classList.toggle("collapsed");
    mainContent.classList.toggle("expanded");
  } else {
    toggleSidebar();
  }
}

// Reset on resize
window.addEventListener("resize", () => {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");
  const cross = sidebar.querySelector(".crossico");

  if (window.innerWidth >= 992) {
    sidebar.classList.remove("show");
    cross.style.display = "none";
  } else {
    sidebar.classList.remove("collapsed");
    mainContent.classList.remove("expanded");
  }
});

// Chart configurations
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

// Cases Donut Chart
const casesCtx = document.getElementById("casesChart").getContext("2d");
new Chart(casesCtx, {
  type: "doughnut",
  data: {
    labels: [
      "Successful",
      "Pending Case",
      "Case in Progress",
      "Closed Cases",
      "Case Allowed",
    ],
    datasets: [
      {
        data: [200, 100, 80, 70, 50],
        backgroundColor: [
          "#4A90E2",
          "#F5A623",
          "#7ED321",
          "#D0021B",
          "#9013FE",
        ],
        borderWidth: 0,
        cutout: "60%",
      },
    ],
  },
  options: chartOptions,
});

// Requests Donut Chart
const requestsCtx = document.getElementById("requestsChart").getContext("2d");
new Chart(requestsCtx, {
  type: "doughnut",
  data: {
    labels: [
      "Successful",
      "Pending Case",
      "Approved but request not send",
      "Rejected Requests",
    ],
    datasets: [
      {
        data: [40, 20, 10, 15],
        backgroundColor: ["#4A90E2", "#F5A623", "#FF6B35", "#D0021B"],
        borderWidth: 0,
        cutout: "60%",
      },
    ],
  },
  options: chartOptions,
});

// Bar Chart
const ctxBar = document.getElementById("barChart").getContext("2d");
const barChart = new Chart(ctxBar, {
  type: "bar",
  data: {
    labels: ["CDR", "IPDR", "PCAP", "ISD"],
    datasets: [
      { label: "TMA", data: [120, 0, 0, 0], backgroundColor: "#f6ad55" },
      { label: "FA", data: [0, 95, 0, 0], backgroundColor: "#4e73df" },
      { label: "UDA", data: [0, 0, 65, 0], backgroundColor: "#a0aec0" },
      { label: "OSINT", data: [0, 0, 0, 95], backgroundColor: "#2b6cb0" },
      { label: "DF", data: [0, 0, 0, 90], backgroundColor: "#f6e05e" },
    ],
  },
  options: {
    scales: {
      y: { beginAtZero: true, max: 140, ticks: { stepSize: 20 } },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: { font: { weight: "bold" } },
      },
    },
  },
});

const rightSidebar = document.getElementById("right-sidebar");

//document.querySelectorAll("#right-sidebar button").forEach(btn => {
//            rightSidebar.classList.toggle("expanded");
//        });

// Handle window resize
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    document.getElementById("sidebar").classList.remove("show");
  }
});
