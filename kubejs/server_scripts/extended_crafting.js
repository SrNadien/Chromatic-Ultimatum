ServerEvents.recipes(nadien => {


	//eliminadas
	nadien.remove({output: ['extendedcrafting:ultimate_singularity', 'extendedcrafting:black_iron_slate', 'extendedcrafting:black_iron_ingot']}) 
    
  


	  



  //placa de hierro oscuro
  nadien.recipes.create.pressing('extendedcrafting:black_iron_slate', 'extendedcrafting:black_iron_ingot').id('ultimate_utilities:blackironslate')

  //hierro oscuro
  nadien.recipes.create.mixing('extendedcrafting:black_iron_ingot', ['create:brass_ingot', 'create:bar_of_chocolate']).superheated().id('ultimate_utilities:blackiron')

  

   //ultimate singularity
   nadien.remove({output: 'extendedcrafting:ultimate_singularity'})
  nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCDEFGHI",
    "JKLMNOPQR",
    "S        ",
    "         ",
    "         ",
    "         ",
    "         ",
    "         ",
    "         "
  ],
  "key": {
    "A": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:platinum\"}"
    },
    "B": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:lapis_lazuli\"}"
    },
    "C": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:copper\"}"
    },
    "D": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:bronze\"}"
    },
    "E": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:aluminum\"}"
    },
    "F": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:lead\"}"
    },
    "G": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:silver\"}"
    },
    "H": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:tin\"}"
    },
    "I": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:electrum\"}"
    },
    "J": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:steel\"}"
    },
    "K": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:emerald\"}"
    },
    "L": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:iron\"}"
    },
    "M": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:redstone\"}"
    },
    "N": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:coal\"}"
    },
    "O": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:invar\"}"
    },
    "P": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:diamond\"}"
    },
    "Q": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:nickel\"}"
    },
    "R": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:gold\"}"
    },
    "S": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:glowstone\"}"
    }
  },
  "result": {
    "item": 'extendedcrafting:ultimate_singularity',
    "count": 1
  }
}).id('ultimate_utilities:ultimate_singularity')





})