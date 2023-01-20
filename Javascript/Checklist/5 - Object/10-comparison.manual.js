/*
    Manual comparison: So sánh thủ công
    - Manual comparison is way to compare objects 
    by content => is to read the properties and compare them manually.
*/

// Demo: Manual comparison

function isHeroEqual(object1, object2) {
  return object1.name === object2.name && object1.slug === object2.slug;
}
const hero1 = {
  slug: 'DX034',
  name: 'Batman',
};
const hero2 = {
  slug: 'DX034',
  name: 'Batman',
};
const hero3 = {
  slug: 'CI398',
  name: 'Joker',
};

console.log('hero1 and hero2: ', isHeroEqual(hero1, hero2)); // => true
console.log('hero1 and hero3: ', isHeroEqual(hero1, hero3)); // => false
