//bookmarklet code:      javascript:(function () {var script = document.createElement('script');script.id="webHackClientScript";script.src="https://grajkogj.github.io/webHackClient.github.io/script.js";document.body.appendChild(script);}()) 
//command dev code: (copy and paste all the code below into the console to get the final result)

function openHackClient() {
        if(document.getElementById("webHackClientWindow")) {return;} else {
                var id = "webHackClientWindow";
                hackWindow = document.createElement('div');
                hackWindowContents = document.createElement('div');
                hackWindowContents.style="min-width: 100px;min-height: 100px;display: grid;"
                hackWindow.id = "webHackClientWindow";
                hackWindow.style = "z-index: 9999;min-width: 100px;min-height:100px;position: absolute;top: 10px;left: 10px;border-radius: 5px;border: solid;border-color:black;border-width: 2px;background:#fff;place-items: center;";
                hackWindow.innerHTML = "<div id='webHackClientWindow-header' style='cursor:move;width: 100%;min-height: 25px; background: #828282;place-items:center;display: grid;padding:5px;'><input type='button' style='width: 30px; height: 100%; background-color: red;border-radius:5px;padding:2px;outline:none;border:none;display: inline-block;cursor:pointer;' onclick='killWebHacksClientWindow()' value='X'><h2 style='display: inline-block;'>WebHack Client V1.0</h2><p>Created by: Gavin Grajkowski</p></div><div id='webHackClientContentContainer' style='display: grid; row-gap:5px;'></div>";
                hackWindowContents.innerHTML = "<div id='page hacks' style='display: inline-block; place-items:center; background: #cfcfcf;'><p>Page Changing Hacks:</p><input type='button' value='Dark Page Background' onclick=document.body.style='background: #292a2d'></div><div id='membean hacks' style='display: inline-block; place-items:center; background: #cfcfcf;'><p>Membean Hacks:</p><input type='button' value='Answer Correct' onclick=document.getElementById('pass').click></div>";
                document.body.appendChild(hackWindow);
                document.getElementById("webHackClientContentContainer").appendChild(hackWindowContents);
        }
};

openHackClient();


function killWebHacksClientWindow() {
        document.getElementById("webHackClientWindow").remove();
};



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



