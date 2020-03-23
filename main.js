


const list= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];



var numberOfItems = 3; //number of items per page
var pageList = [] // what elements to show per page
var currentPage = 1;
var numberOfPages = 1; //total number of pages that will be required

function getNumberofPages(){
  return Math.ceil(list.length / numberOfItems)
}

function firstPage(){
  currentPage = 1;
  loadList();
}

function lastPage(){
  currentPage = numberOfPages;
  loadList();
}

function previousPage(){
  currentPage -= 1;
  loadList();
}

function nextPage(){
  currentPage += 1;
  loadList();
}

function loadList(){
  let begin = ((currentPage - 1) * numberOfItems);
  let end = begin + numberOfItems;
  pageList = list.slice(begin, end);
  drawList();
  check();
 
}
function drawList(){
      document.getElementById("list").innerHTML = "";
  
    for (r = 0; r < pageList.length; r++) {
        document.getElementById("list").innerHTML += pageList[r].name + "<br/>";
    }
}

function check(){
  document.getElementById("first").disabled = currentPage == 1 ? true : false;
  document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
  document.getElementById("previous").disabled = currentPage == 1 ? true : false;
  document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;

}

function load(){
  numberOfPages = getNumberofPages();
 // console.log(numberOfPages)
  loadList();
}

window.onload = load;
