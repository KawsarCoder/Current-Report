const siteApi = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const newsData = await data.data.news_category;
    headerCategories(newsData);
  } catch (error) {
    console.log("not found");
  }
};

const headerCategories = (categorieValue) => {
  console.log(categorieValue);
  const categoriesList = document.getElementById("categories-list");
  categorieValue.forEach((catValue) => {
    const categoriesItems = document.createElement("div");
    categoriesItems.classList.add("navbar-nav");
    categoriesItems.innerHTML = `
    <a class="nav-item nav-link mx-lg-3 mx-md-3 mx-sm-2 mx-1 px-lg-3 px-md-2 px-sm-1 px-1" href="#">${catValue.category_name}</a>
      `;
    categoriesList.appendChild(categoriesItems);
  });
};

siteApi();
