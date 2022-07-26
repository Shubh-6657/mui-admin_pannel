const createShorterText = (string) => {
  if (!string || typeof string !== 'string') return null
  const maxLength = 160
  if (string.length > maxLength) {
    let string2 = string.substring(0, maxLength).trim()
    let lastSpaceIndex = string2.lastIndexOf(' ')
    if (lastSpaceIndex > 0) {
      let string3 = string2.substring(0, lastSpaceIndex)
      return string3 + '...'
    }
    return string2 + '...'
  }
  return string
}

const temp =
  'In a surprise announcement, we’ve learned that Hideo Kojima, the designer behind Metal Gear and Death Stranding, has a new project in the works with Xbox.'
const sample =
  'Each section also includes projects that you can complete in any order that require only the skills learned in that section and the sections prior.'
const myArray = [1, 2, 3]

console.log(createShorterText(temp))
