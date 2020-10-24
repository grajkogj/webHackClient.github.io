//bookmarklet code:      javascript:(function () {var script = document.createElement('script');script.id="webHackClientScript";script.src="https://grajkogj.github.io/webHackClient.github.io/script";document.body.appendChild(script);}) 




function openHackClient() {
        if(document.getElementById("webHackClientWindow")) {return;} else {
                hackWindow = document.createElement('div');
                hackWindowContents = document.createElement('div');
                hackWindowContents.style="min-width: 100px;min-height: 100px;display: grid;"
                hackWindow.id = "webHackClientWindow";
                hackWindow.style = "min-width: 100px;min-height:100px;position: absolute;border-raduis: 5px;border: solid;border: #FFF;border-width: 2px;place-items: center;";
                hackWindow.innerHTML = "<div id='webHackClientWindow-header' style='width: 100%;height: 25px; background: #828282;'></div><div id='webHackClientContentContainer'></div>";
                hackWindowContents.innerHTML = "<h1>hi</h1>";
                document.body.appendChild(hackWindow);
                document.getElementById("webHackClientContentContainer").appendChild(hackWindowContents);
        }
};

openHackClient();




dragElement(document.getElementById("webHackClientWindow"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "-header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
};
