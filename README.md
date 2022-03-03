# Octordle Reformatter

Octordle.com is 8 games of Wordle at once.  For some odd reason, even on desktop, it has a max width of 550px, which means you have to scroll up and down to see all 8 games.  This is a simple script to see all 8 games on one screen on desktop.  Major limitation though, when you resize the screen (which includes closing the console), Octordle tries to redraw all the boxes.  So just run the script and play the game, don't close the console or resize.

## Steps to Use

1. Start a game of Octordle.com on a desktop computer
2. Pull up your browser's developer console.  CTRL+Shift+J on Chrome/Windows, see others [here](https://balsamiq.com/support/faqs/browserconsole/).
3. Resize the console as small as possible.
4. Paste the code below into the console and click enter.
5. Do NOT resize the browser or close the console.
6. If you do resize the browser, just hit refresh and start all over.  Your progress is saved, don't worry!
7. Enjoy the game!

## Code

```
document.getElementById("body").style.removeProperty('max-width');
document.getElementById("body").style.removeProperty('display');
document.getElementById("box-holder-1").style.width = '25%';
document.getElementById("box-holder-2").style.width = '25%';
document.getElementById("box-holder-3").style.width = '25%';
document.getElementById("box-holder-4").style.width = '25%';
document.getElementById("box-holder-5").style.width = '25%';
document.getElementById("box-holder-6").style.width = '25%';
document.getElementById("box-holder-7").style.width = '25%';
document.getElementById("box-holder-8").style.width = '25%';

document.getElementById("box-holder-1").style.padding = '18px';
document.getElementById("box-holder-2").style.padding = '18px';
document.getElementById("box-holder-3").style.padding = '18px';
document.getElementById("box-holder-4").style.padding = '18px';
document.getElementById("box-holder-5").style.padding = '18px';
document.getElementById("box-holder-6").style.padding = '18px';
document.getElementById("box-holder-7").style.padding = '18px';
document.getElementById("box-holder-8").style.padding = '18px';

const boxItems = document.querySelectorAll(".table_guesses td.box.button");

boxItems.forEach(function (userItem) {
  userItem.style.width = '10%';
});

var div = document.querySelector('#box-holder-3');
div = div.parentNode.removeChild(div);
row = document.querySelector('#box-holder-1').parentNode;
row.insertAdjacentHTML('beforeend', div.outerHTML);

var div = document.querySelector('#box-holder-4');
div = div.parentNode.removeChild(div);
row = document.querySelector('#box-holder-1').parentNode;
row.insertAdjacentHTML('beforeend', div.outerHTML);

var div = document.querySelector('#box-holder-7');
div = div.parentNode.removeChild(div);
row = document.querySelector('#box-holder-5').parentNode;
row.insertAdjacentHTML('beforeend', div.outerHTML);

var div = document.querySelector('#box-holder-8');
div = div.parentNode.removeChild(div);
row = document.querySelector('#box-holder-5').parentNode;
row.insertAdjacentHTML('beforeend', div.outerHTML);

// Get rid of empty space between rows
document.querySelector('#box-holder-1').parentNode.parentNode.id = 'uc_tbody';
trs = document.querySelectorAll("#uc_tbody>tr");
trs[6].remove();
trs[5].remove();
trs[3].remove();
trs[2].remove();
trs[1].remove();
```
