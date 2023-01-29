/*Select Dom elements*/
const tabs = document.querySelector('[aria-label="Tabs"]');
const tabButtons = tabs.querySelectorAll("button");
// const tabPanelsList = tabs.querySelectorAll('[role="tabpanel"]');
/*Add event listeners*/
console.log(tabs);
tabButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target);
    tabButtons.forEach((btn) => {
      btn.setAttribute("aria-selected", false);
    });
    e.target.setAttribute("aria-selected", true);
    const id = e.target.getAttribute("aria-controls");
    console.log(id);
    const tabPanelsList = document.querySelectorAll(`div[aria-labelledby]`);
    console.log(tabPanelsList);
    tabPanelsList.forEach((panel) => {
      panel.setAttribute("hidden", true);
    });
    const tabPanel = document.querySelector(`[aria-labelledby="${id}"]`);
    tabPanel.removeAttribute("hidden");
  });
});
