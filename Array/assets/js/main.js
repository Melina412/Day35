// * Aufgabe 1_1
console.log("%c 1_1 ----------", "background:purple; color: white");

const person = ["Bruce", "Wayne", "Superreich"];
console.log({ person });

const friends = ["Farid", "Christian", "Sergio"];
console.log({ friends });

const favorite_food = ["Burger", "Sushi", "Mais-Käsebällchen"];
console.log({ favorite_food });

// * Aufgabe 1_2
console.log("%c 1_2 ----------", "background:purple; color: white");

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(favorite_food[0]);
console.log(favorite_food[1]);
console.log(favorite_food[2]);

console.log(typeof person[1]);

// * Aufgabe 1_3
console.log("%c 1_3 ----------", "background:purple; color: white");

console.log(person.length);
console.log(friends.length);
console.log(favorite_food.length);

// * Aufgabe 1_4
console.log("%c 1_4 ----------", "background:purple; color: white");

console.log({ person }); // {person: Array(3)}; person: (3) // *-
console.log("person length:", person.length); // 3
const push_person = person.push("Batman");
console.log({ push_person }); // {push_person: 4} (number?)
console.log({ person }); // {person: Array(4)}; person: (4)
console.log("person length:", person.length); // 4
// *- wird nach push zu: {person: Array(3)}; person: (4)

// - die angezeigte Zahl in Array(n) bezieht sich auf die ursprüngliche length des Arrays (im code an der stelle vor push), die Zahl person(m) bezieht sich also auf die aktuelle length (im code nach push)

const push_again_person = person.push("Gotham-City");
console.log({ push_again_person });
console.log({ person }); // {person: Array(5)}; person: (5)

friends.push("Marzio", "Magda");
console.log({ friends });

favorite_food.push("Pizza", "Currywurst");
console.log({ favorite_food });

// * Aufgabe 1_5
console.log("%c 1_5 ----------", "background:purple; color: white");

const pop_person = person.pop();
console.log({ pop_person }); // Gotham-City
console.log({ person }); // Array(4)

const pop_friends = friends.pop();
console.log({ pop_friends }); // Magda
console.log({ friends }); // Array(4)

// const pop_favorite_food = (favorite_food.pop()).pop(); geht nicht :(
const pop_favorite_food = favorite_food.pop();
console.log({ pop_favorite_food }); // Currywurst
console.log({ favorite_food }); // Array(4)

// * Aufgabe 1_6
console.log("%c 1_6 ----------", "background:purple; color: white");

const shift_person = person.shift();
console.log({ shift_person }); // Bruce
console.log({ person }); // Array(3)

const shift_friends = friends.shift();
console.log({ shift_friends });
console.log({ friends });

const shift_favorite_food = favorite_food.shift();
console.log({ shift_favorite_food });
console.log({ favorite_food });

// * Aufgabe 1_7
console.log("%c 1_7 ----------", "background:purple; color: white");

const unshift_friends = friends.unshift("Lea");
console.log({ unshift_friends }); // 4
console.log({ friends }); // Array(4)
const unshift_again_friends = friends.unshift("Julia");
console.log({ friends }); // Array(5)

const unshift_favorite_food = favorite_food.unshift("Leberkäse", "Spinat");
console.log({ favorite_food }); // ['Leberkäse', 'Spinat', 'Sushi';...]
// Das Element was man als erstes schreibt ist dann das erste Element des Arrays

// * Aufgabe 1_10
console.log("%c 1_10 ----------", "background:purple; color: white");

const text =
  "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";

console.log(text);

const split_text_1 = text.split("."); // split an jedem Punkt
console.log({ split_text_1 });

const split_text_2 = text.split(" "); // split an jedem Leerzeichen
console.log({ split_text_2 });

const split_text_3 = text.split(""); // split an jedem Index
console.log({ split_text_3 });
