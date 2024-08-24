/**
 * flatMap() is a combination of two array methods: map() and flat(). It first maps each element of an
 * array using a provided function, then flattens the resulting array by one level.
 */
const arr = [1, 2, 3, 4];
const flatMapped = arr.flatMap(x => [x, x * 2]);

console.log(flatMapped); // Output: [1, 2, 2, 4, 3, 6, 4, 8]
