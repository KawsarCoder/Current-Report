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
    const categoriesItems = document.createElement("ul");
    categoriesItems.classList.add("myClass");
    categoriesItems.innerHTML = `
      
    <li class='mx-5 hover:text-blue-300 px-5 py-2 rounded-xl hover:bg-slate-800' >${catValue.category_name}</li>

      `;
    categoriesList.appendChild(categoriesItems);
  });
};

siteApi();
