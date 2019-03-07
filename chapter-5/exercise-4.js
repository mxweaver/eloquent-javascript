const helpers = require('./helpers')

function dominantDirection (text) {
  const sortedGroups = helpers.countBy(text, (char) => {
    const script = helpers.characterScript(char.codePointAt(0))

    return script ? script.direction : 'none'
  })
    .filter(group => group.name !== 'none')
    .sort((a, b) => b.count - a.count)

  if (sortedGroups.length > 0) {
    return sortedGroups[0].name
  }
}

const cases = [
  ['Hello!', 'ltr'],
  ['Hey, مساء الخير', 'rtl']
]

for (const c of cases) {
  console.log(c[0], c[1])
  console.log(dominantDirection(c[0]))
}
