function translatePigLatin(str) {
    let pigLatin = '';
    let regex = /[aeiou]/gi;
    
    if (str[0].match(regex)) {
        pigLatin = str + 'way';
    } else if (str.match(regex) === null) {
        pigLatin = str + 'ay';
    } else {
        var vowelIndex = str.indexOf(str.match(regex)[0]);

        pigLatin = str.substr(vowelIndex) + str.substr(0, vowelIndex) + 'ay';
    }

    return pigLatin;
}
  
  console.log(translatePigLatin("glove"));