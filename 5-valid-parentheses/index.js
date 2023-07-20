var isValid = function (s) {
  const stack = []

  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (brackets[char]) {
      stack.push(char)
    } else {
      const lastOpeningBracket = stack.pop();
      if (brackets[lastOpeningBracket] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};