window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function getRandomLetters(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function generatorExcuses() {
    const rdmWho = getRandomLetters(who);
    const rdmAction = getRandomLetters(action);
    const rdmWhat = getRandomLetters(what);
    const rdmWhen = getRandomLetters(when);

    return `${rdmWho} ${rdmAction} ${rdmWhat} ${rdmWhen}`;
  }

  // creating a sentence (the excuse)
  document.querySelector("#excuse").innerHTML = generatorExcuses();
};
