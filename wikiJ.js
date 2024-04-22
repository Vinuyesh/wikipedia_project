let inE = document.getElementById("searchInput");
let conE = document.getElementById("searchResults");
let sE = document.getElementById("spinner");
function create(result) {
  sE.classList.add("d-none");
  //let { link, title, description } = result[0];
  //for result(let i of each){
  let { link, title, description } = result;
  console.log(title);
  console.log(link);
  console.log(description);
  let contE = document.createElement("div");
  contE.classList.add("result-item");
  conE.appendChild(contE);
  let headE = document.createElement("a");
  headE.href = link;
  headE.target = "_blank";
  headE.textContent = title;
  headE.classList.add("result-title");
  contE.appendChild(headE);
  let brE = document.createElement("br");
  contE.appendChild(brE);
  let aE = document.createElement("a");
  aE.href = link;
  aE.target = "_blank";
  aE.textContent = link;
  //aE.classList.add("result-url");
  contE.appendChild(aE);
  aE.classList.add("result-url");
  let pE = document.createElement("p");
  pE.textContent = description;
  contE.appendChild(pE);
  //let br1E=document.createElement("br");
  //contE.appendChild(br1E);
  // }
}
function getfun(res) {
  for (let i of res) {
    create(i);
  }
}
function fun(event) {
  if (event.key === "Enter") {
    sE.classList.remove("d-none");
    conE.textContent = "";
    let value = inE.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + value;
    let options = {
      method: "GET",
    };
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        let { search_results } = data;
        getfun(search_results);
        //create(data.search_results);
      });
  }
}
inE.addEventListener("keydown", fun);
