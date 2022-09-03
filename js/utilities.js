// api colection from server
const siteApi = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const newsData = await data.data.news_category;
    // console.log(data);
    headerCategories(newsData);
  } catch (error) {
    console.log("not found");
  }
};

// header categories
const headerCategories = (categorieValue) => {
  const categoriesList = document.getElementById("categories-list");
  categorieValue.forEach((catValue) => {
    const categoriesItems = document.createElement("div");
    categoriesItems.classList.add("navbar-nav");
    categoriesItems.innerHTML = `
    <a class="nav-item  nav-link mx-lg-3 mx-md-3 mx-sm-2 mx-1 px-lg-3 px-md-2 px-sm-1 px-1" onclick="btnClick('${catValue.category_name}')" href="#">${catValue.category_name}</a>
      `;
    categoriesList.appendChild(categoriesItems);
  });
};

siteApi();

const cardImages = async (category_id) => {
  console.log(category_id);
  const url = ` https://openapi.programming-hero.com/api/news/category/0${category_id}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.data);
    cardValues(data.data);
  } catch (error) {
    console.log("not found");
  }
};

// card dynamic html creating 
const cardId = document.getElementById("card-info");
const cardValues = (cardInfo) => {
  // console.log(cardInfo);

  cardInfo.forEach((singleCard) => {
    const cardItemCreate = document.createElement("div");
    cardItemCreate.classList.add("card");
    cardItemCreate.innerHTML = `
    <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${singleCard.image_url}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">${singleCard.details}</p>
                      <div class="d-flex">
                      <p class="card-text me-lg-5 me-md-4 me-sm-2 me-1">Last updated 3 mins ago</p>
                      <p class="card-text me-lg-5 me-md-4 me-sm-2 me-1"><small class="text-muted">Last updated 3 mins ago</small></p>
                      <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary me-lg-5 me-md-4 me-sm-2 me-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Launch demo modal
                        </button>
                        
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                ...
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
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
};

// on click button function
const btnClick = (buttonValue) => {
  const btnName = buttonValue;
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
cardImages(8);
