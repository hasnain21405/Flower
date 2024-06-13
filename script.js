const button = document.getElementById("btn-main");

// button.addEventListener("click" , () => {
//     window.open("index_02.html" , "_blank")
// })

function open_btn () {
    window.location.href = "index_02.html";
};

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
