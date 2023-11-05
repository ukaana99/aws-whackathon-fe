const Regex = {
  letter: /^[a-zA-Z]+$/,
  alphabet6: /^[a-zA-Z0-9]{6}$/,
  number7: /^[0-9]{7}$/,
  number8: /^[0-9]{8}$/,
  alphabet: /^[a-zA-Z0-9]+$/,
  emailDomain: /@(.*)/g, // '@example.com'
  parenthesisAndContent: /\((.*)\)/g, // '(example)'
  number: /^\d+$/,
  uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i, //https://stackoverflow.com/questions/7905929/how-to-test-valid-uuid-guid
};

export default Regex;
