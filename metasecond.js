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
  mspMillisPart = metasecondsPassed - Math.floor(metasecondsPassed);

  mmpFactor = Math.floor(Math.log10(metasecondLength));

  mspMillisPart = String(mspMillisPart).substring(1,mmpFactor + 5);
  // because this is obviously the best way to round a decimal
  // hey, future me, if you're looking at this code, don't post it on r/badcode
  // if that's even still a thing by the time you see this

  while (mspMillisPart.length < mmpFactor + 4)
  {
    mspMillisPart += "0";
  }

  metasecondsPassed = Math.floor(metasecondsPassed) + mspMillisPart; // yes, quite hacky code

  document.getElementById("msvalue").innerHTML = metasecondLength + " seconds";
  document.getElementById("mspassed").innerHTML = metasecondsPassed + " metaseconds";
}

setInterval(updateThings, 1);