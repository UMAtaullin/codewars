function abbrevName(name) {

  let upperName = name
    .toUpperCase()
    .split(' ')

  return `${upperName[0][0]}.${upperName[1][0]}`

}

console.log(abbrevName('Ural Ataullin'))