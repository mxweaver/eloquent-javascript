const SCRIPTS = require('./scripts');

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

function characterScript(code) {
  return SCRIPTS.find((script) => script.ranges.some(([from, to]) => code >= from && code < to));
}

function countBy(items, groupName) {
  const counts = [];

  items.forEach((item) => {
    const name = groupName(item);
    const known = counts.findIndex((c) => c.name === name);
    if (known === -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count += 1;
    }
  });

  return counts;
}

function textScripts(text) {
  const scripts = countBy(text, (char) => {
    const script = characterScript(char.codePointAt(0));
    return script ? script.name : 'none';
  }).filter(({ name }) => name !== 'none');

  const total = scripts.reduce((n, { count }) => n + count, 0);
  if (total === 0) return 'No scripts found';

  return scripts.map(({ name, count }) => `${Math.round((count * 100) / total)}% ${name}`).join(', ');
}

module.exports = {
  repeat,
  characterScript,
  countBy,
  textScripts,
};
