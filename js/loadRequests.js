// loadJSON(function(response){
//     var requests = JSON.parse(response);
//     for(var r in requests){
//         createRequests(requests[r].ProdBuild);
//     }
//     createShowAll();
// });

// // create a new XMLHttpRequest to load JSON file
// function loadJSON(callback) {   

//     var xobj = new XMLHttpRequest();
//         xobj.overrideMimeType("application/json");
//     xobj.open('GET', '../Json/requests.json', true); // Replace 'my_data' with the path to your file
//     xobj.onreadystatechange = function () {
//           if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//           }
//     };
//     xobj.send(null);  
//  }
var fs = require('fs');
fs.readFile('../Json/requests.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object
    //obj.table.push({id: 2, square:3}); //add some data
    //json = JSON.stringify(obj); //convert it back to json
    //fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back 
    console.log(obj);
}});

//Create and Append Historical Requests
function createRequests(build){

  //create div
  var requestDiv = document.createElement("div");
  requestDiv.classList.add("media");
  requestDiv.classList.add("text-muted");
  requestDiv.classList.add("pt-3");

  //create p
  var requestP = document.createElement("p");
  requestP.classList.add("media-body");
  requestP.classList.add("pb-3");
  requestP.classList.add("mb-0");
  requestP.classList.add("small");
  requestP.classList.add("lh-125");
  requestP.classList.add("border-bottom");
  requestP.classList.add("border-gray");

  //create strong
  var request = document.createElement("strong");
  request.classList.add("d-block");
  request.classList.add("text-gray-dark");

  //create texts
  var requestName = document.createTextNode(build);
  var requestText = document.createTextNode("Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.");

  //build the div
  request.appendChild(requestName);
  requestP.appendChild(request);
  requestP.appendChild(requestText);
  requestDiv.appendChild(requestP);

  var board = document.getElementById("board");
  board.appendChild(requestDiv);
}

//Create and Append Show All button
function createShowAll(){

  var all = document.createElement("small");
  all.classList.add("d-block");
  all.classList.add("text-right");
  all.classList.add("mt-3");

  var showAll = document.createElement("a");
  showAll.setAttribute("href", "#");

  var textnode = document.createTextNode("All Requests");

  showAll.appendChild(textnode);
  all.appendChild(showAll);

  var board = document.getElementById("board");
  board.appendChild(all);
}