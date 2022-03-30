(() => {
  // document.querySelector(".bold").addEventListener("click", () => {
  //   // deprecated
  //   document.execCommand("bold");
  // });
  // document.querySelector(".italic").addEventListener("click", () => {
  //   document.execCommand("italic");
  // });
  // document.querySelector(".left").addEventListener("click", () => {
  //   document.execCommand("justifyLeft");
  // });
  // document.querySelector(".center").addEventListener("click", () => {
  //   document.execCommand("justifyCenter");
  // });
  // document.querySelector(".right").addEventListener("click", () => {
  //   document.execCommand.apply("justifyRight");
  // });
  document.querySelectorAll(".toolbar button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const command = e.target.getAttribute("data-command");
      document.execCommand(command);
    });
  });
})();
