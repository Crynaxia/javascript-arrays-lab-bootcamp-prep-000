const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];


function destructivelyAppendKitten()
{
  return kittens.push("Ralph")
}

function destructivelyPrependKitten()
{
 return kittens.unshift("Bob")
 }

function destructivelyRemoveLastKitten()
{
  return kittens.pop()
}

function destructivelyRemoveFirstKitten()
{
  return kittens.shift()
}

function appendKitten()
{
  return [...kittens, "Broom"]
}

function prependKitten()
{
  return ["Arnold", ...kittens]
}

function removeLastKitten()
{
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten()
{
  return kittens.slice(1)
 
}



