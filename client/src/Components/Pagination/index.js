const Model = {
  highlightActivePage(e, activePage, setActivePage, pageNumbers, style) {
    const clicked = e.target;
    const listItems = document.querySelectorAll("li");
    listItems.forEach((item) => item.classList.remove(style.active));
    if (Number(clicked.innerHTML)) {
      clicked.classList.add(style.active);
      setActivePage(Number(clicked.innerHTML));
    } else if (clicked.innerHTML === "◁" && activePage === 1) {
      setActivePage(pageNumbers.length);
      listItems[pageNumbers.length].classList.add(style.active);
    } else if (clicked.innerHTML === "▷" && activePage === pageNumbers.length) {
      setActivePage(1);
      listItems[1].classList.add(style.active);
    } else if (clicked.innerHTML === "◁") {
      setActivePage((last) => --last);
      listItems[activePage - 1].classList.add(style.active);
    } else if (clicked.innerHTML === "▷") {
      setActivePage((last) => ++last);
      listItems[activePage + 1].classList.add(style.active);
    }
  },
};

export default Model;
