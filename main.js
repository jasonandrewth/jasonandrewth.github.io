
  const publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1G9BJKqkP0tOLI3Dg6MMNIkptcxdmtszfRNvYbNVqy9A/edit?usp=sharing';
  
  function init() {
    Tabletop.init( {
      key: publicSpreadsheetUrl,
      callback: displayInfo,
      simpleSheet: true 
    } )
  }



function displayInfo(data, tabletop) {
  data.forEach(function(data) {
    header.innerHTML = data.header;
    body.innerHTML = data.body;
    body2.innerHTML = data.header2;
    body3.innerHTML = data.body3;
    body4.innerHTML = data.body4;
    body5.innerHTML = data.body5;
    body6.innerHTML = data.body6;
    body7.innerHTML = data.body7;
    body8.innerHTML = data.body8;
    body9.innerHTML = data.body9;
    body10.innerHTML = data.body10;
    body11.innerHTML = data.body11;
    body12.innerHTML = data.body12;
    body13.innerHTML = data.body13;
    body14.innerHTML = data.body14;
    body15.innerHTML = data.body15;
    body16.innerHTML = data.body16;
    body17.innerHTML = data.body17;
 });
}
 

window.addEventListener('DOMContentLoaded', init)


//Theme Switching

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme

document.querySelector(".theme-switch").addEventListener( "click", function() {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
  } else {
      setTheme('theme-dark');
  }
})

//same on touch

document.querySelector(".theme-switch").addEventListener( "touchstart", function() {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
  } else {
      setTheme('theme-dark');
  }
})

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'theme-light') {
      setTheme('theme-light');
  } else {
      setTheme('theme-dark');
  }
}());








































