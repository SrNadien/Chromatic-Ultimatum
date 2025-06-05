ServerEvents.recipes(nadien => {
  nadien.custom({
    type: "create:mechanical_crafting",
    pattern: [
      '    B    ',
      '   BCA   ',
      'BBBGCABBB',
      'ACGCGGGCA',
      ' AAGGGBA ',
      '  EDDDE  ',
      ' EFEDEFE ',
      'BEDD DDEB',
      'AAA   AAA'
    ],
    key: {
      A: Ingredient.of('minecraft:magenta_concrete').toJson(),
      B: Ingredient.of('minecraft:pink_concrete').toJson(),
      C: Ingredient.of('minecraft:pink_concrete_powder').toJson(),
      D: Ingredient.of('minecraft:green_concrete').toJson(),
      E: Ingredient.of('minecraft:green_concrete_powder').toJson(),
      F: Ingredient.of('minecraft:lime_concrete').toJson(),
      G: Ingredient.of('minecraft:magenta_concrete_powder').toJson()
    },
    result: Ingredient.of('ultimate_utilities:patricio_estrella').toJson(),
    acceptMirrored: false
  }).id('galaxyorigins:patrick')




// Bob Esponja
nadien.recipes.create.mechanical_crafting('ultimate_utilities:bob_toronja', [
  "SSSSSSSSS",
  "S   A   S",
  "S  ABA  S",
  "S ABGBA S",
  "SABGDGBAS",
  "S ABGBA S",
  "S  ABA  S",
  "S   A   S",
  "SSSSSSSSS"
  ], {
    S: 'minecraft:chiseled_stone_bricks', // Marco de piedra
    A: 'minecraft:yellow_concrete',       // Cuerpo amarillo (esponja)
    B: 'minecraft:brown_concrete',        // Pantalones marrones
    G: 'minecraft:white_concrete',        // Camisa blanca
    D: 'minecraft:blue_concrete'          // Corbata azul
  }).id('galaxyorigins:bobtoronja')







  



})
