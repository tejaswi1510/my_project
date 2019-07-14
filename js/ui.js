/*
  ui.js: This file consists of all the elements used in our application
  Author: Sai Midhil Chowdary Kari
  Email: midhilkari@gmail.com
*/

/*
  This function creates heading 1
  Parameters:
  content : Content to be displayed as heading 1
  Example:
  createHeading1("Heading")
  creates : <h1>Heading</h1>
*/
function createHeading1(content) {
  var element = document.createElement("H1");
  if(content != undefined) {
    var text = document.createTextNode(content);
    element.appendChild(text);
  }
  return element;
}

/*
  This function creates division
  Parameters:
  content : Content to be displayed in the division
  Example:
  createDiv("Division")
  creates : <div>Division</div>
*/
function createDiv(content) {
  var element = document.createElement("DIV");
  if(content != undefined) {
    var text = document.createTextNode(content);
    element.appendChild(text);
  }
  return element;
}

/*
  This function creates Button
  Parameters:
  content : Content to be displayed on the button
  Example:
  createButton("Button")
  creates : <button>Button</button>
*/
function createButton(content) {
  var element = document.createElement("BUTTON");
  if(content != undefined) {
    var text = document.createTextNode(content);
    element.appendChild(text);
  }
  return element;
}

/*
  This function creates paragraph
  Parameters:
  content : Content to be displayed in the paragraph
  Example:
  createPara("Paragraph")
  creates : <p>Paragraph</p>
*/
function createPara(content) {
  var element = document.createElement("p");
  if(content != undefined) {
    var text = document.createTextNode(content);
    element.appendChild(text);
  }
  return element;
}

/*
  This function creates text input element and returns text
*/
function createTextInput() {
  var element = document.createElement("INPUT");
  element.setAttribute("type","text");
  return element;
}

/*
  This function creates break line
  This is used to create space between elements
*/
function createBreakLine(){
  return document.createElement('br');
}

/*
  This function creates image element
  Parameters:
  content : Content to be displayed when the image is not loaded
  imageUrl : link to the image
  Example:
  createImg("Image not loaded","sampleimage.svg")
  creates : <img alt="Image not loaded" src="sampleimage.svg">
*/
function createImage(content, imageUrl) {
  var element = document.createElement("IMG");
  element.setAttribute("alt",content);
  element.setAttribute("src",imageUrl);
  return element;
}

/*
  This function creates span element
  Parameters:
  content : Content to be displayed in the span
  Example:
  createSpan("This is span")
  creates : <span>This is span</span>
*/
function createSpan(content) {
  var element = document.createElement("SPAN");
  if(content != undefined) {
    var text = document.createTextNode(content);
    element.appendChild(text);
  }
  return element;
}
