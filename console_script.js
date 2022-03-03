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
