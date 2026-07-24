(function () {
  var storageKey = "personal-site-theme";
  var themeToggle = document.querySelector(".theme-toggle");
  var darkModeQuery = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

  function readStoredTheme() {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function writeStoredTheme(theme) {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (error) {
      // The selected theme still applies when storage is unavailable.
    }
  }

  function applyTheme(theme) {
    var isDark = theme === "dark";
    document.body.classList.toggle("dark", isDark);

    if (themeToggle) {
      var label = isDark ? "切换为浅色模式" : "切换为深色模式";
      themeToggle.setAttribute("aria-pressed", String(isDark));
      themeToggle.setAttribute("aria-label", label);
      themeToggle.setAttribute("title", label);
    }
  }

  var storedTheme = readStoredTheme();
  var systemTheme = darkModeQuery && darkModeQuery.matches ? "dark" : "light";
  applyTheme(storedTheme === "dark" || storedTheme === "light" ? storedTheme : systemTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
      applyTheme(nextTheme);
      writeStoredTheme(nextTheme);
    });
  }

  if (darkModeQuery) {
    var handleSystemThemeChange = function (event) {
      if (!readStoredTheme()) {
        applyTheme(event.matches ? "dark" : "light");
      }
    };

    if (darkModeQuery.addEventListener) {
      darkModeQuery.addEventListener("change", handleSystemThemeChange);
    } else if (darkModeQuery.addListener) {
      darkModeQuery.addListener(handleSystemThemeChange);
    }
  }
})();
