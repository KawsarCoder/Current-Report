// api colection from server
const siteApi = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const newsData = await data.data.news_category;
    headerCategories(newsData);
  } catch (error) {
    console.log("Categories not found");
  }
};

// header categories
const headerCategories = (categorieValue) => {
  const categoriesList = document.getElementById("categories-list");
  categorieValue.forEach((catValue) => {
    const categoriesItems = document.createElement("div");
    categoriesItems.classList.add("navbar-nav");
    categoriesItems.innerHTML = `
    <a class="nav-item nav-link mx-lg-3 mx-md-3 mx-sm-2 mx-1 px-lg-3 px-md-2 px-sm-1 px-1" onclick="btnClick('${catValue.category_name}')" href="#">${catValue.category_name}</a>
      `;
    categoriesList.appendChild(categoriesItems);
  });
};

siteApi();

const cardImages = async (category_id) => {
  const url = ` https://openapi.programming-hero.com/api/news/category/0${category_id}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    cardValues(data.data);
  } catch (error) {
    console.log("Categoy data not found");
  }
};
const spinnerSection = document.getElementById("loding-spner");
// card dynamic html creating
const cardId = document.getElementById("card-info");
const cardValues = (cardInfo) => {
  cardInfo.sort((a, b) => b.total_view - a.total_view);
  const cardLength = document.getElementById("category-count");
  cardLength.innerText = cardInfo.length;

  cardInfo.forEach((singleCard) => {
    const cardItemCreate = document.createElement("div");
    cardItemCreate.classList.add("card");
    cardItemCreate.innerHTML = `
          <div class="row g-0">
                        <div class="col-md-4">
                          <img src="${
                            singleCard.image_url
                              ? singleCard.image_url
                              : "No data available"
                          }" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${
                              singleCard.title
                                ? singleCard.title
                                : "no data available"
                            }</h5>
                            <p class="card-text"> ${
                              singleCard.details
                                ? singleCard.details.slice(0, 300) + "..."
                                : "No details found"
                            }</p>
                            <div class=" row align-items-center">
                            <p class="col card-text me-lg-5 me-md-4 me-sm-2 me-1"><img class="me-1" style="height:50; width:50px; border-radius:100%" src="${
                              singleCard.author.img
                            }"> <span>${
      singleCard.author.name ? singleCard.author.name : "Athor name not found"
    }</span></p>
                            <p id="view-count" class="col card-text align-middle me-lg-5 me-md-4 me-sm-2 me-1"> <span class="me-1"><i class="fa-solid fa-eye"></i></span> <span> ${
                              singleCard.total_view
                                ? singleCard.total_view
                                : "No views found"
                            }</span></p>
                            <!-- Button trigger modal -->
                              <button type="button" class="col col-lg-2 h-25 btn btn-primary me-lg-5 me-md-4 me-sm-2 me-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                  Know More
                              </button>
                              
                              <!-- Modal -->
                              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog">
                                  <div class="modal-content">
                                      <div class="modal-header">
                                      
                                      <h5 class="modal-title" id="exampleModalLabel">${
                                        singleCard.author.name
                                          ? singleCard.author.name
                                          : "author name not found"
                                      }</h5>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                      <img class="w-75 h-75 d-block"  src="${
                                        singleCard.image_url
                                      }"/>
                                      <p>Publish Date: ${
                                        singleCard.author.published_date
                                          ? singleCard.author.published_date
                                          : "No date found"
                                      }</p>
                                      <p>Batch: ${
                                        singleCard.rating.batch
                                          ? singleCard.rating.batch
                                          : "No batch found"
                                      }</p>
                                      <p>Rating: ${
                                        singleCard.rating.number
                                          ? singleCard.rating.number
                                          : "No rating available"
                                      }</p>
      
                                      </div>
                                      <div class="modal-footer">
                                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                      
                                      </div>
                                  </div>
                                  </div>
                              </div>
                          </div>
                          </div>
                        </div>
                      </div>
        //     `;
    cardId.appendChild(cardItemCreate);
  });

  // console.log(viewsCounter);

  // console.log(totalView);

  spinnerSection.classList.add("invisible");
};
// on click button function
const btnClick = (buttonValue) => {
  const welcomeImg = document.getElementById("welcome-image");
  welcomeImg.classList.add("visually-hidden");
  const btnName = buttonValue;
  let cardName = document.getElementById("category-name");
  cardName.innerText = btnName;

  spinnerSection.classList.remove("invisible");
  cardId.innerText = "";

  if (btnName === "Breaking News") {
    cardImages(1);
  } else if (btnName === "Regular News") {
    cardImages(2);
  } else if (btnName === "International News") {
    cardImages(3);
  } else if (btnName === "Sports") {
    cardImages(4);
  } else if (btnName === "Entertainment") {
    cardImages(5);
  } else if (btnName === "Culture") {
    cardImages(6);
  } else if (btnName === "Arts") {
    cardImages(7);
  } else {
    cardImages(8);
  }
};
// cardImages(8);
