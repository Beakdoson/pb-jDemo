// Console log to output form data
// event listener for submit button

document
  .getElementById("user_form")
  .addEventListener("submit", (submitOrder) => {
    // prvents brows from refreshing webpage with prevenDefault() function
    submitOrder.preventDefault();
    let pbjOrder = submitOrder.target;
    // console.log(pbjOrder);
    let jelly = pbjOrder.jelly_flavor.value;
    let toastOption = pbjOrder.Bread_style.value;
    let breadOption = pbjOrder.wheat_white.value;
    let pbjPhoto = pbjOrder.PBJ_photo.value;
    let pbjDesc = pbjOrder.description.value;
    console.log(breadOption);
    console.log(toastOption);
    console.log(jelly);
    console.log(pbjDesc);
    console.log(pbjPhoto);

    if (pbjPhoto === "") {
      pbjPhoto = "https://unsplash.com/photos/uLMvVDgc-9k";
    }
  });

//   <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
