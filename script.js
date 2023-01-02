// HEADER STYLE ///////////////////
var header = document.getElementById('header') , modeCheck
function mode() {
    if (document.getElementById('mySwitch').checked) {
        modeCheck == false
        document.getElementById('boody').style.backgroundColor = "rgb(26, 4, 47)"
        document.querySelector('.table').style.borderColor = "white"
        document.getElementById('tbody').style.color = "white"
        header.style.backgroundColor = "#ffc107"
        document.querySelector('.fa-solid').style.color = "#ffc107"
        document.querySelector('.btn').style.backgroundColor = "rgb(26, 4, 47)"
    }
    else {
        modeCheck == true
        header.style.backgroundColor = "rgb(26, 4, 47)"
        document.getElementById('boody').style.backgroundColor = "white"
        document.querySelector('.table').style.borderColor = "rgb(26, 4, 47)"
        document.getElementById('tbody').style.color = "rgb(26, 4, 47)"
        document.querySelector('.fa-solid').style.color = "rgb(26, 4, 47)"
        document.querySelector('.btn').style.backgroundColor = "#ffc107"
 }}
function show() {
    header.style.opacity = "1"
}
const checkpoint = 180;
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll < checkpoint) {
        header.style.transition = "0.5s"
        header.style.opacity = "1"
    } else {
        header.style.opacity = "0.6"
    }});
// XHTTP REQUEST  ////////////////////////////////////
var xhttp = new XMLHttpRequest();
xhttp.open('GET', "movies.json");
xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var data = JSON.parse(xhttp.responseText)
        for (let i = 0; i < data.movies.length; i++) {
            console.log(data.movies[i])
            //  TABLE FILL ////////////////////////////////////
            // ROW & CELLS CREATE /////////////////////////////
            var table = document.getElementById("tbody");
            for (movies in data) {
                var row = table.insertRow();
                var cell2 = row.insertCell();
                var cell1 = row.insertCell();
                var cell3 = row.insertCell();
                var cell4 = row.insertCell();
                var cell5 = row.insertCell();
                var cell6 = row.insertCell();
                var cell7 = row.insertCell();              
            }  
            // CELLS CONTENT ////////////////////////
            cell1.innerHTML = "<a target='_blank' href=" + data.movies[i].Poster + "><img class='img-fluid' src=" + data.movies[i].Poster + " ></a>"
            cell2.innerHTML = data.movies[i].title;
            cell3.innerHTML = data.movies[i].director;
            cell4.innerHTML = data.movies[i].time;
            cell5.innerHTML = data.movies[i].yearOfProducyion;
            for (let j = 0; j < data.movies[i].Festivals.length; j++) {
                cell6.innerHTML += "<li>" + data.movies[i].Festivals[j] + "</li>";
            }
            for (let k = 0; k < data.movies[i].Actors.length; k++) {
                cell7.innerHTML += "<li> <br> Nom" + " : " + data.movies[i].Actors[k].name + "<br>" + "Prénom " + " : " + data.movies[i].Actors[k].lastName + "<br>" + "Nationalité" + " : " + data.movies[i].Actors[k].nationality + "<br> </li>";
            }}
        // SEARCH /////////////////////////////////////////
        var input = document.querySelector('.form-control')
        var table = document.getElementById('table');
        input.addEventListener('input', () => {
            table.querySelectorAll('tr').forEach(row => row.hidden = row.cells[1].innerText.toUpperCase().indexOf(input.value.toUpperCase()) === -1)
        })
///// SORT ////////////////////////////
th = document.getElementsByTagName('th')
for(let c = 0 ; c < th.length ; c++){
  th[c].addEventListener('onClick' , item(c))
}
function item(c){
  return function (){
    sortTable(c)
}}
var rows = table.rows
function sortTable(c) {
  var table, rows
  table = document.getElementById("table");
  var switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for ( var z = 1; z < (rows.length - 1); z++) {
      shouldSwitch = false;
      var x = rows[z].getElementsByTagName("TD")[c];
     var y = rows[z + 1].getElementsByTagName("TD")[c];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        rows[z].parentNode.insertBefore(rows[z + 1], rows[z]);
        switching = true;
        break;
}}}}}}
xhttp.send()


