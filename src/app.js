// This is the correct code once you
const data = document.getElementById("data-sink");
const Page = data.getAttribute("data-page");
let fetchNextPage;
let fetchPrevPage;
function rendertable1(pageNumber) {
  fetch(
    `https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84&page=${pageNumber}`
  )
    .then((data) => {
      //console.log(data) in json format;
      return data.json(); //converted to javascript object
    })
    .then((objectData) => {
      // console.log(objectData.results[0][index]);
      let tableData = "";
      objectData.results[0][pageNumber].map((values) => {
        tableData += `
      <tr id=${values.id}>
          <td>${values.row}</td>
          <td>${values.gender}</td>
          <td>${values.age}</td>
        </tr>
      `;
      });
      data.setAttribute("data-page", pageNumber);
      document.getElementById("data-sink").innerHTML = tableData;
      document.getElementById(
        "data-pageview"
      ).innerHTML = `showing page ${pageNumber}`;
      if (pageNumber < 2) {
        document.querySelector("#data-prevbtn").disabled = true;
      } else if (pageNumber > 1) {
        document.querySelector("#data-prevbtn").disabled = false;
      }
    });
}

rendertable1(Page);
// next page to be loaded
function goNext(fetchNextPage) {
  fetchNextPage++;
  // console.log(getNextPage);
  rendertable1(fetchNextPage);
}
function nextpage() {
  fetchNextPage = data.getAttribute("data-page");
  goNext(fetchNextPage);
  // document.querySelector("#data-prevbtn").style.visibility = "visible";
  // document.querySelector("#data-nextbtn").style.visibility = "hidden";
}
//previous page to be loaded
function gotoPrev(fetchPrevPage) {
  fetchPrevPage--;
  rendertable1(fetchPrevPage);
  console.log(fetchPrevPage);
}
function previousPage(fetchPrevPage) {
  fetchPrevPage = data.getAttribute("data-page");

  // currentPage = currentPage - 1;
  // document.querySelector("#data-prevbtn").style.visibility = "hidden";
  // document.querySelector("#data-nextbtn").style.visibility = "visible";
  gotoPrev(fetchPrevPage);
}

document
  .querySelector("#data-prevbtn")
  .addEventListener("click", previousPage, false);

document
  .querySelector("#data-nextbtn")
  .addEventListener("click", nextpage, false);
