import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

const fetchActivity = () => {
    axios.get("https://www.boredapi.com/api/activity?type=recreational")
      .then(response => {
        const bored = response.data;
        aktiviteler(bored);
        const searchButton = document.querySelector(".search-button");
        searchButton.setAttribute("target","_blank");
        searchButton.href = myUrl(bored.activity);
      })
  };
  
  const body = document.querySelector("body");
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo");
  body.append(logoContainer);
  const logo = document.createElement("img");
  logo.setAttribute("src","/logo.png");
  logoContainer.append(logo);
  body.prepend(logoContainer);
  const container = document.createElement("div");
  container.classList.add("container");
  body.append(container);
  const aktivite = document.createElement("h3");
  aktivite.classList.add("activity");
  const h3Container = document.createElement("div");
  h3Container.classList.add("aktivite-container");
  h3Container.append(aktivite);
  container.prepend(h3Container);
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  container.append(buttonContainer);
  
  const myUrl = (activity) => {
    const url = activity.split(" ").join("+");
    return "https://www.google.com/search?q=" + url;
  };
  
  const aktiviteler = (bored) => {
    const activityElement = document.querySelector(".activity");
    activityElement.textContent = bored.activity;
  };
  
  const refreshButton = document.createElement("button");
  refreshButton.classList.add("refresh");
  refreshButton.textContent = "Show me another activity!";
  refreshButton.addEventListener("click", fetchActivity);
  buttonContainer.append(refreshButton);
  
  const searchButton = document.createElement("a");
  searchButton.innerHTML = "Learn more about this activity";
  searchButton.classList.add("search-button");
  buttonContainer.append(searchButton);
  
  fetchActivity();
  

