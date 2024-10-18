function scrollingText(text) {
  const upperText = text.toUpperCase()
  const arr = []
  for (let i = 0; i < upperText.length; i++) {
    arr.push(upperText.slice(i) + upperText.slice(0, i))
  }
  return arr
}

  
console.log(scrollingText('codewars'))