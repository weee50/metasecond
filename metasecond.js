function updateThings(){
  if (document.getElementById("responseRadio").checked)
  {
    var metasecondLength = (Date.now() - 1578535490000);
    document.getElementById("passedsince").innerHTML = "have passed since the creation of my metasecond response"
  }
  else
  {
    var metasecondLength = Date.now();
    document.getElementById("passedsince").innerHTML = "have passed since the Unix epoch"
  }

  var mslMillisPart = metasecondLength % 1000;
  metasecondLength = metasecondLength / 1000 + 1;
  // +1 because the length of a metasecond is 1 second at time 0

  var metasecondsPassed = Math.log(metasecondLength);


  // probably very bad code for rightpadding the seconds decimal
  if (mslMillisPart % 1000 == 0)
  {
    metasecondLength += ".0";
  }
  if (mslMillisPart % 10 == 0)
  {
    metasecondLength += "0";
  }
  if (mslMillisPart % 100 == 0)
  {
    metasecondLength += "0";
  }

  // rounding metasecond length
  mmpFactor = Math.floor(Math.log10(metasecondLength));

  metasecondsPassed = metasecondsPassed.toFixed(mmpFactor + 3);
  // don't worry, past me, i've got a much better way to round a decimal

  document.getElementById("msvalue").innerHTML = metasecondLength + " seconds";
  document.getElementById("mspassed").innerHTML = metasecondsPassed + " metaseconds";
}

setInterval(updateThings, 1);