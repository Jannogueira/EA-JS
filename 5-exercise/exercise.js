
// Objective: Practice array manipulation using functional patterns (filter, map, reduce, and destructuring) by processing real data from an API.
// Filter: Only include users whose id is an even number.
// Transform: Create a new array of objects containing only the id, name, and the city (extracted from the nested address object).
// Add: Insert a "Guest User" at the beginning of the list without mutating the original result.
// Statistics: Calculate the total number of characters in all usernames combined using reduce.

fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(users => {
      // YOUR CODE STARTS HERE
      console.log("--- Processed Users ---");
      // 1. Filter even IDs
      const pares = users.filter((user) => user.id %2 === 0 );
      console.log("Filtrado:");
      console.log(pares);
      // 2. Map to clean objects {id, name, city}
      const transformado = pares.map((user) => {
         return {
            id: user.id,
            name: user.name,
            city: user.address.city
         };
      });
      console.log("Transformado:");
      console.log(transformado);
      // 3. Add Guest User at the start using Spread (...)
      const jan = {
        id: 0,
        name: "Jan Nogueira",
        city: "Barcelona"
      }
      console.log(jan.name.replace(/\s+/g, '')); //prueba para ver si el replace eliminaba los espacios en blanco
      const conjan = [jan, ...transformado];
      console.log("Añadiendo Usuario:");
      console.log(conjan);
      console.log("--- Statistics ---");
      // 4. Reduce to count total characters in names
      const total = conjan.reduce((suma, nombre) => suma + nombre.name.replace(/\s+/g, '').length, 0)  ;
      console.log("Suma de los caracteres en los nombres " +total); 
  });