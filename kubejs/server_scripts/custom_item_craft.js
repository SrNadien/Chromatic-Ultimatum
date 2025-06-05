ServerEvents.recipes(nadien => {

  //universal navigator
  nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "       ",
    "  AAA  ",
    " ABCBA ",
    " ACDCA ",
    " ABCBA ",
    "  AAA  ",
    "       "
  ],
  "key": {
    "A": {
      "item": "avaritia:crystal_matrix_ingot"
    },
    "B": {
      "item": "allthecompressed:lapis_block_1x"
    },
    "C": {
      "item": "kubejs:universe_resistant_neutronium_heavy_plating"
    },
    "D": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:redstone\"}"
    }
  },
  "result": {
    "item": 'kubejs:universal_navigator',
    "count": 1
  }
}).id('ultimate_utilities:universal_navigator')


//micromoner t10
nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "    A    ",
    "   AAA   ",
    "  AABAA  ",
    " AAACAAA ",
    "AADAAADAA",
    " AAAEAAA ",
    " AAAAAAA ",
    " AAAAAAA ",
    "AA F F AA"
  ],
  "key": {
    "A": {
      "item": "kubejs:universe_resistant_neutronium_heavy_plating"
    },
    "B": {
      "item": "solarflux:sp_avaritia.neutronium"
    },
    "C": {
      "item": "kubejs:universal_navigator"
    },
    "D": {
      "item": "bhc:soul_heart_crystal"
    },
    "E": {
      "item": "allthemodium:piglich_heart"
    },
    "F": {
      "item": "kubejs:warp_engine"
    }
  },
  "result": {
    "item": 'kubejs:microminer_t10',
    "count": 1
  }
}).id('ultimate_utilities:microminer_t10')


//heartj of universe
nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "         ",
    "         ",
    "         ",
    "         ",
    "    A    ",
    "         ",
    "         ",
    "         ",
    "         "
  ],
  "key": {
    "A": {
      "item": "kubejs:microminer_t10"
    }
  },
  "result": {
    "item": 'kubejs:heart_of_a_universe',
    "count": 1
  }
}).id('ultimate_utilities:heart_of_a_universe')


//singularity cointaiment unit
nadien.shaped('kubejs:singularity_containment_unit', [
  'AAA',
  'A A',
  'AAA'
], {
  A: 'advanced_ae:quantum_alloy_plate'
}).id('ultimate_utilities:singularity_containment_unit')


//contained singularity
nadien.shaped('kubejs:contained_singularity', [
  'AB ',
  '   ',
  '   '
], {
  A: 'kubejs:singularity_containment_unit',
  B: 'ae2:singularity'
}).id('ultimate_utilities:contained_singularity')


//neutroiun heavy plating
nadien.recipes.thermal.press('kubejs:universe_resistant_neutronium_heavy_plating', ['avaritia:neutron_ingot']).energy(2400).id('ultimate_utilities:universe_resistant_neutronium_heavy_plating')
nadien.recipes.create.pressing('kubejs:universe_resistant_neutronium_heavy_plating','avaritia:neutron_ingot').id('ultimate_utilities:universe_resistant_neutronium_heavy_plating_alt')
nadien.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'kubejs:universe_resistant_neutronium_heavy_plating',"count": 2},"input":{"item":'avaritia:neutron_ingot'},"energy":2400}).id('ultimate_utilities:universe_resistant_neutronium_heavy_plating_alt_alt')
  
//infinity heavy plating
nadien.recipes.thermal.press('kubejs:dimensionally_stabilized_infinity_heavy_plating', ['avaritia:infinity_ingot']).energy(2400).id('ultimate_utilities:dimensionally_stabilized_infinity_heavy_plating')
nadien.recipes.create.pressing('kubejs:dimensionally_stabilized_infinity_heavy_plating','avaritia:infinity_ingot').id('ultimate_utilities:dimensionally_stabilized_infinity_heavy_plating_alt')
nadien.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'kubejs:dimensionally_stabilized_infinity_heavy_plating',"count": 1},"input":{"item":'avaritia:infinity_ingot'},"energy":2400}).id('ultimate_utilities:dimensionally_stabilized_infinity_heavy_plating_alt_alt')


 //primal mana
 nadien.shaped("4x kubejs:primal_mana", [
        "AAB",
        "DEB",
        "DCC"
    ], {
        A: "kubejs:aerotheum_dust",
        B: "kubejs:pyrotheum_dust",
        C: "kubejs:petrotheum_dust",
        D: "kubejs:cryotheum_dust",
        E: "#forge:dusts/diamond"
    }).noMirror().noShrink().id('ultimate_utilities:primal_mana')

    nadien.shaped("2x kubejs:aerotheum_dust", [
        "AA ",
        "BC ",
        "   "
    ], {
        A: "thermal:blitz_powder",
        B: "minecraft:redstone",
        C: "#forge:dusts/saltpeter"
    }).noMirror().noShrink().id('ultimate_utilities:aerotheum_dust')

    nadien.shaped("2x kubejs:cryotheum_dust", [
        "AA ",
        "BC ",
        "   "
    ], {
        A: "thermal:blizz_powder",
        B: "minecraft:redstone",
        C: "minecraft:snowball"
    }).noMirror().noShrink().id('ultimate_utilities:cryotheum_dust')

    nadien.shaped("2x kubejs:petrotheum_dust", [
        "AA ",
        "BC ",
        "   "
    ], {
        A: "thermal:basalz_powder",
        B: "minecraft:redstone",
        C: "#forge:dusts/obsidian"
    }).noMirror().noShrink().id('ultimate_utilities:petrotheum_dust')

    nadien.shaped("2x kubejs:pyrotheum_dust", [
        "AA ",
        "BC ",
        "   "
    ], {
        A: "minecraft:blaze_powder",
        B: "minecraft:redstone",
        C: "#forge:dusts/sulfur"
    }).noMirror().noShrink().id('ultimate_utilities:pyrotheum_dust')

})


  