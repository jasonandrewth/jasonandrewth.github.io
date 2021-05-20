let line
let lastPoint
let letters
let choices
let choiceNum
let title = "hello hi"
let load;
let fetchedText; 

function mousePressed() {

  goWiki()

  function goWiki() {
    let url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=rainbow'
    let url2 = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1"

    loadJSON(url2, gotData, "jsonp")
  }

  function gotData(data) {
    const randNr = Math.floor(Math.random() * data.query.random.length)
    fetchedText = data.query.random[randNr].title;
    console.log(fetchedText)
    document.getElementById("show").innerHTML = fetchedText
  };
}

function preload() {
}

function setup() {
     
  createCanvas(windowWidth, windowHeight)
  letters = []
  // choices = title.split("")
  choiceNum = 0 
  
  line = new Snake(20 / 2)
}

function draw() {
  background(000000)

  if (fetchedText) {
    choices = fetchedText.split("")
    // console.log(choices)
    line.draw()
  
    letters.forEach(letter => {
       letter.draw()
    })
  }
}

function mouseDragged() {
  let currentPoint = createVector(mouseX, mouseY)
  
  let distance = 10000
  if (lastPoint) {
    distance = p5.Vector.dist(lastPoint, currentPoint)
  }
  
  let rotation = 0
  if (lastPoint) {
    let diffVector = currentPoint.copy().sub(lastPoint)
    rotation = diffVector.heading()
  }
  
  if (distance > 25) {
    line.push(currentPoint)
    
    letters.push(
    	new Letter(choices[choiceNum], currentPoint, rotation)
    )
    letters = letters.slice(-1 * choices.length)
    
    lastPoint = currentPoint
    
    choiceNum = choiceNum + 1
    if (choiceNum > choices.length - 1) {
      choiceNum = 0
    }
  }  
}





