// Rotating hero statements: advance the ticker one row every few seconds.
(function () {
  const list = document.querySelector(".ticker__list");
  if (!list) return;

  const count = list.children.length;
  const INTERVAL_MS = 3500;
  let index = 0;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  setInterval(() => {
    index = (index + 1) % count;
    list.style.setProperty("--i", index);
  }, INTERVAL_MS);
})();
