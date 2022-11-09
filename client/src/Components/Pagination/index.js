const Model = {
  highlightFirstPageByDefault(style, setActivePage) {
    const buttons = document.querySelectorAll("li");
    buttons.forEach((button) => {
      button.classList.remove(style.active);
      button.classList.remove(style.pageBtnFirstNumber);
    });
    buttons[1].classList.add(style.pageBtnFirstNumber);
    setActivePage(1);
  },

  highlightActivePage(e, activePage, setActivePage, pageNumbers, style) {
    const clicked = e.target;
    const listItems = document.querySelectorAll("li");
    listItems.forEach((item) => {
      item.classList.remove(style.active);
      item.classList.remove(style.pageBtnFirstNumber);
    });
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
