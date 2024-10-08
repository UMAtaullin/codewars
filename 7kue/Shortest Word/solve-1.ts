function findShort(s: string): number {
  return Math.min(...s.
    split(' ')
   .map(word => word.length))
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))  // Output: 3