function calculateGpa() {
    // Get all the input values
    var mathth = parseFloat(document.getElementById("mathth").value);
    var mathpr = parseFloat(document.getElementById("mathpr").value);
    var scienceth = parseFloat(document.getElementById("scienceth").value);
    var sciencepr = parseFloat(document.getElementById("sciencepr").value);
    var englishth = parseFloat(document.getElementById("englishth").value);
    var englishpr = parseFloat(document.getElementById("englishpr").value);
    var nepalith = parseFloat(document.getElementById("nepalith").value);
    var nepalipr = parseFloat(document.getElementById("nepalipr").value);
    var socialth = parseFloat(document.getElementById("socialth").value);
    var socialpr = parseFloat(document.getElementById("socialpr").value);
    var populationth = parseFloat(document.getElementById("populationth").value);
    var populationpr = parseFloat(document.getElementById("populationpr").value);
    var computerth = parseFloat(document.getElementById("computerth").value);
    var computerpr = parseFloat(document.getElementById("computerpr").value);
    var accountth = parseFloat(document.getElementById("accountth").value);
    var accountpr = parseFloat(document.getElementById("accountpr").value);

    var maththgrade, mathprgrade, sciencethgrade, scienceprgrade, englishthgrade, englishprgrade,
    nepalithgrade, nepaliprgrade, socialthgrade, socialprgrade, populationthgrade, populationprgrade,
    computerthgrade = 0, computerprgrade=0, accountthgrade=0, accountprgrade=0;

// Calculation for each subject

// For Theoritical marks of Math
if (mathth >= 67.5) {
    maththgrade = 4;
} else if (mathth >= 60) {
    maththgrade = 3.6;
} else if (mathth >= 53) {
    maththgrade = 3.2;
} else if (mathth >= 45) {
    maththgrade = 2.8;
} else if (mathth >= 38) {
    maththgrade = 2.4;
} else if (mathth >= 30) {
    maththgrade = 2.0;
} else if (mathth >= 27) {
    maththgrade = 1.6;
} 

// For practical marks of Math
if (mathpr >= 22.5) {
    mathprgrade = 4;
} else if (mathpr >= 20) {
    mathprgrade = 3.6;
} else if (mathpr >= 17.5) {
    mathprgrade = 3.2;
} else if (mathpr >= 15) {
    mathprgrade = 2.8;
} else if (mathpr >= 12.5) {
    mathprgrade = 2.4;
} else if (mathpr >= 10) {
    mathprgrade = 2.0;
} else if (mathpr >= 8) {
    mathprgrade = 1.6;
} 


//For Theoritical marks of Science
if (scienceth >= 67.5) {
    sciencethgrade = 4;
} else if (scienceth >= 60) {
    sciencethgrade = 3.6;
} else if (scienceth >= 53) {
    sciencethgrade = 3.2;
} else if (scienceth >= 45) {
    sciencethgrade = 2.8;
} else if (scienceth >= 38) {
    sciencethgrade = 2.4;
} else if (scienceth >= 30) {
    sciencethgrade = 2.0;
} else if (scienceth >= 27) {
    sciencethgrade = 1.6;
} 

//For practical marks of Science
if (sciencepr >= 22.5) {
    scienceprgrade = 4;
} else if (sciencepr >= 20) {
    scienceprgrade = 3.6;
} else if (sciencepr >= 17.5) {
    scienceprgrade = 3.2;
} else if (sciencepr >= 15) {
    scienceprgrade = 2.8;
} else if (sciencepr >= 12.5) {
    scienceprgrade = 2.4;
} else if (sciencepr >= 10) {
    scienceprgrade = 2.0;
} else if (sciencepr >= 8) {
    scienceprgrade = 1.6;
} 

// For theoritical marks of English
if (englishth >= 67.5) {
    englishthgrade = 4;
} else if (englishth >= 60) {
    englishthgrade = 3.6;
} else if (englishth >= 53) {
    englishthgrade = 3.2;
} else if (englishth >= 45) {
    englishthgrade = 2.8;
} else if (englishth >= 38) {
    englishthgrade = 2.4;
} else if (englishth >= 30) {
    englishthgrade = 2.0;
} else if (englishth >= 27) {
    englishthgrade = 1.6;
}

// For practical marks of English
if (englishpr >= 22.5) {
    englishprgrade = 4;
} else if (englishpr >= 20) {
    englishprgrade = 3.6;
} else if (englishpr >= 17.5) {
    englishprgrade = 3.2;
} else if (englishpr >= 15) {
    englishprgrade = 2.8;
} else if (englishpr >= 12.5) {
    englishprgrade = 2.4;
} else if (englishpr >= 10) {
    englishprgrade = 2.0;
} else if (englishpr >= 8) {
    englishprgrade = 1.6;
}

// For theroitical subject of Nepali
if (nepalith >= 67.5) {
    nepalithgrade = 4;
} else if (nepalith >= 60) {
    nepalithgrade = 3.6;
} else if (nepalith >= 53) {
    nepalithgrade = 3.2;
} else if (nepalith >= 45) {
    nepalithgrade = 2.8;
} else if (nepalith >= 38) {
    nepalithgrade = 2.4;
} else if (nepalith >= 30) {
    nepalithgrade = 2.0;
} else if (nepalith >= 27) {
    nepalithgrade = 1.6;
} 

// For practical marks of Nepali
if (nepalipr >= 22.5) {
    nepaliprgrade = 4;
} else if (nepalipr >= 20) {
    nepaliprgrade = 3.6;
} else if (nepalipr >= 17.5) {
    nepaliprgrade = 3.2;
} else if (nepalipr >= 15) {
    nepaliprgrade = 2.8;
  } else if (nepalipr >= 12.5) {
nepaliprgrade = 2.4;
} else if (nepalipr >= 10) {
nepaliprgrade = 2.0;
} else if (nepalipr >= 8) {
nepaliprgrade = 1.6;
} 
// For socialth
if (socialth >= 67.5) {
socialthgrade = 4;
} else if (socialth >= 60) {
socialthgrade = 3.6;
} else if (socialth >= 53) {
socialthgrade = 3.2;
} else if (socialth >= 45) {
socialthgrade = 2.8;
} else if (socialth >= 38) {
socialthgrade = 2.4;
} else if (socialth >= 30) {
socialthgrade = 2.0;
} else if (socialth >= 27) {
socialthgrade = 1.6;
} 
// For socialpr
if (socialpr >= 22.5) {
socialprgrade = 4;
} else if (socialpr >= 20) {
socialprgrade = 3.6;
} else if (socialpr >= 17.5) {
socialprgrade = 3.2;
} else if (socialpr >= 15) {
socialprgrade = 2.8;
} else if (socialpr >= 12.5) {
socialprgrade = 2.4;
} else if (socialpr >= 10) {
socialprgrade = 2.0;
} else if (socialpr >= 8) {
socialprgrade = 1.6;
}
// For populationth
if (populationth >= 67.5) {
populationthgrade = 4;
} else if (populationth >= 60) {
populationthgrade = 3.6;
} else if (populationth >= 53) {
populationthgrade = 3.2;
} else if (populationth >= 45) {
populationthgrade = 2.8;
} else if (populationth >= 38) {
populationthgrade = 2.4;
} else if (populationth >= 30) {
populationthgrade = 2.0;
} else if (populationth >= 27) {
populationthgrade = 1.6;
} 
// For populationpr
if (populationpr >= 22.5) {
populationprgrade = 4;
} else if (populationpr >= 20) {
populationprgrade = 3.6;
} else if (populationpr >= 17.5) {
populationprgrade = 3.2;
} else if (populationpr >= 15) {
populationprgrade = 2.8;
} else if (populationpr >= 12.5) {
populationprgrade = 2.4;
} else if (populationpr >= 10) {
populationprgrade = 2.0;
} else if (populationpr >= 8) {
populationprgrade = 1.6;
} 
// For computerth
if (computerth >= 45) {
computerthgrade = 4;
} else if (computerth >= 40) {
computerthgrade = 3.6;
} else if (computerth >= 35) {
computerthgrade = 3.2;
} else if (computerth >= 30) {
computerthgrade = 2.8;
} else if (computerth >= 25) {
computerthgrade = 2.4;
} else if (computerth >= 20) {
computerthgrade = 2.0;
}

// For computerpr
if (computerpr >= 45) {
computerprgrade = 4;
} else if (computerpr >= 40) {
computerprgrade = 3.6;
} else if (computerpr >= 35) {
computerprgrade = 3.2;
} else if (computerpr >= 30) {
computerprgrade = 2.8;
} else if (computerpr >= 25) {
computerprgrade = 2.4;
} else if (computerpr >= 20) {
computerprgrade = 2.0;
} 

// For accountth
if (accountth >= 67.5) {
accountthgrade = 4;
} else if (accountth >= 60) {
accountthgrade = 3.6;
} else if (accountth >= 53) {
accountthgrade = 3.2;
} else if (accountth >= 45) {
accountthgrade = 2.8;
} else if (accountth >= 37.5) {
accountthgrade = 2.4;
} else if (accountth >= 30) {
accountthgrade = 2.0;
} else if (accountth >= 22.5) {
accountthgrade = 1.6;
}

// For accountpr
if (accountpr >= 22.5) 
{
accountprgrade = 4;
} 
else if (accountpr >= 20) {
accountprgrade = 3.6;
} else if (accountpr >= 17.5) {
accountprgrade = 3.2;
} else if (accountpr >= 15) {
accountprgrade = 2.8;
} else if (accountpr >= 12.5) {
accountprgrade = 2.4;
} else if (accountpr >= 10) {
accountprgrade = 2.0;
} else if (accountpr >= 7.5) {
accountprgrade = 1.6;
}

// Calculate GPA
var gpa =  ((3.75 * maththgrade + 1.25 * mathprgrade) +
    (3.75 * sciencethgrade + 1.25 * scienceprgrade) +
    (3.75 * englishthgrade + 1.25 * englishprgrade) +
    (3.75 * nepalithgrade + 1.25 * nepaliprgrade) +
    (3 * socialthgrade + 1 * socialprgrade) +
    (3 * populationthgrade + 1 * populationprgrade) +
    (3 * computerthgrade + 1 * computerprgrade) +
    (3 * accountthgrade + 1 * accountprgrade)) / 32;


document.getElementById('result').innerHTML = "GPA: "+gpa;
}
