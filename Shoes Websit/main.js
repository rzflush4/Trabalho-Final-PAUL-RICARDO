let col_btn = document.querySelectorAll(".btn-col");
let col_item = document.querySelectorAll(".collection-item");

col_btn.forEach((btn,index) => {
   btn.addEventListener("click",(e) => {
      col_btn.forEach((col_bt,ind) => {
         col_bt.classList.remove("btn");
      })
      e.target.classList.add("btn");
      let data_btn = btn.getAttribute("data-btn");
      col_item.forEach((col,inde) => {
         if (col.getAttribute("data-item") == data_btn || data_btn == "all") {
            col.classList.remove("hide")
         } else {
            col.classList.add("hide");
         }
      })
   })
})