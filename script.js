document.addEventListener("DOMContentLoaded", function () {
  // Initialize Particles.js
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
  const ctx = document.getElementById("skillsChart").getContext("2d");

  const config = {
    type: "radar",
    data: {
      labels: [
        "Programming",
        "Machine Learning",
        "Data Analysis",
        "Web Development",
        "DevOps",
        "Cloud Technologies",
        "Data Engineering",
      ],
      datasets: [
        {
          label: "Skill Level",
          data: [92, 90, 80, 88, 80, 75, 85],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 2,
          pointBackgroundColor: "rgba(54, 162, 235, 1)",
          pointRadius: 5,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
          pointHoverBorderColor: "rgba(255, 99, 132, 1)",
        },
      ],
    },
    options: {
      animation: {
        duration: 2000,
        easing: "easeOutBounce",
        onProgress: function (animation) {
          const chartInstance = animation.chart;
          const ctx = chartInstance.ctx;
          ctx.strokeStyle = "rgba(54, 162, 235, 1)";
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 5]); // Dashed line effect
        },
        onComplete: function (animation) {
          const chartInstance = animation.chart;
          const ctx = chartInstance.ctx;
          ctx.setLineDash([]); // Reset to solid line after animation
        },
      },
      hover: {
        mode: "nearest",
        intersect: true,
        onHover: function (e) {
          const point = this.getElementAtEvent(e);
          if (point.length) {
            e.target.style.cursor = "pointer";
          } else {
            e.target.style.cursor = "default";
          }
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              const label = tooltipItem.label;
              const value = tooltipItem.raw;
              return `${label}: ${value}% proficiency`;
            },
          },
        },
      },
      scales: {
        r: {
          // For Chart.js v3.x, the scale configuration might be under 'scales' instead of 'scale'
          ticks: {
            beginAtZero: true,
            max: 100,
            stepSize: 20,
            backdropColor: false,
            color: "#495057",
            font: {
              size: 14,
            },
          },
          pointLabels: {
            color: "#495057",
            font: {
              size: 18,
            },
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  // Function to check if the chart is in the viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scroll event and trigger the animation
  function handleScroll() {
    const chartContainer = document.getElementById("skillsChartContainer");
    if (isElementInViewport(chartContainer)) {
      skillsChart.update(); // Trigger the chart animation
      window.removeEventListener("scroll", handleScroll); // Remove the event listener after the animation is triggered
    }
  }

  // Create the chart without animation initially
  const skillsChart = new Chart(ctx, config);

  // Listen for scroll events to trigger the animation
  window.addEventListener("scroll", handleScroll);

  // Also trigger the check once on page load in case the element is already in view
  handleScroll();
});

// Initialize Typed.js
new Typed(".typed-text", {
  strings: [
    "Machine Learning Engineer",
    "Data Engineer",
    "Full Stack Developer",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

// Initialize AOS (Animate on Scroll)
AOS.init();
