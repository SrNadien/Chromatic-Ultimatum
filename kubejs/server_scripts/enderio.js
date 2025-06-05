ServerEvents.recipes(nadien => {


  //ADVANCED ITEM FILTER
  nadien.shaped('enderio:advanced_item_filter', [
     'ABA',
     'BCB',
     'ABA'
   ], {
     A: 'minecraft:paper',
     B: 'minecraft:redstone',
     C: 'minecraft:zombie_head'
   }).id('ultimate_utilities:advanced_item_filter')


  // SOUL BINDER
 nadien.shaped('enderio:soul_binder', [
  'ADA',
  'BCB',
  'AEA'
], {
  A: 'enderio:soularium_ingot',
  B: 'enderio:energized_gear',
  C: 'enderio:ensouled_chassis',
  D: 'enderio:empty_soul_vial',
  E: 'minecraft:zombie_head'
  }).id('ultimate_utilities:soul_binder')



  //POWERED SPAWNER
  nadien.shaped('enderio:powered_spawner', [
  'ABA',
  'ACA',
  'DED'
], {
  A: 'enderio:soularium_ingot',
  B: 'enderio:broken_spawner',
  C: 'enderio:ensouled_chassis',
  D: 'enderio:vibrant_crystal',
  E: 'minecraft:zombie_head'
  }).id('ultimate_utilities:powered_spawner')



  //Z-LOGIC PROCCESOR
  nadien.remove({output: 'enderio:z_logic_controller'})
  nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "A  B  A",
    " A C A ",
    " DEFEG ",
    "HIJKJLH",
    " MEFEN ",
    " A C A ",
    "A  B  A"
  ],
  "key": {
    "A": {
      "item": "avaritia:neutron_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "hostilenetworks:prediction",
      "count": 1,
      "nbt": "{data_model:{id:\"hostilenetworks:zombie\"}}"
    },
    "C": {
      "item": "ae2:quantum_entangled_singularity"
    },
    "D": {
      "item": "minecraft:melon_slice"
    },
    "E": {
      "item": "biggerreactors:ludicrite_block"
    },
    "F": {
      "item": "enderio:soularium_ingot"
    },
    "G": {
      "item": "farmersdelight:cake_slice"
    },
    "H": {
      "item": "ae2:singularity"
    },
    "I": {
      "item": "thermal:frost_melon_slice"
    },
    "J": {
      "item": "mekanismgenerators:fusion_reactor_frame"
    },
    "K": {
      "item": "minecraft:zombie_head"
    },
    "L": {
      "item": "farmersdelight:sweet_berry_cheesecake_slice"
    },
    "M": {
      "item": "farmersdelight:pumpkin_slice"
    },
    "N": {
      "item": "farmersdelight:apple_pie_slice"
    }
  },
  "result": {
    "item": 'enderio:z_logic_controller',
    "count": 1
  }
}).id('ultimate_utilities:z_logic_controller')


//grains of infinity block
nadien.shaped('kubejs:infinity_dust_block', [
 'AAA',
 'AAA',
 'AAA'
], {
 A: 'enderio:grains_of_infinity'
}).id('ultimate_utilities:infinity_dust_block')


//grains of infinity block compressed
nadien.shaped('kubejs:compressed_infinity_dust_block', [
 'AAA',
 'AAA',
 'AAA'
], {
 A: 'kubejs:infinity_dust_block'
}).id('ultimate_utilities:compressed_infinity_dust_block')

//grains of infinity block doble compressed
nadien.shaped('kubejs:double_compressed_infinity_dust_block', [
 'AAA',
 'AAA',
 'AAA'
], {
 A: 'kubejs:compressed_infinity_dust_block'
}).id('ultimate_utilities:double_compressed_infinity_dust_block')


//basic capacitor
nadien.replaceInput({id: 'enderio:basic_capacitor'}, 'enderio:grains_of_infinity', 'kubejs:double_compressed_infinity_dust_block')


//double layer capacitor
nadien.replaceInput({id: 'enderio:double_layer_capacitor'}, 'enderio:energetic_alloy_ingot', 'enderio:energetic_alloy_block')

//octadic capacitor
nadien.replaceInput({id: 'enderio:octadic_capacitor'}, 'enderio:vibrant_alloy_ingot', 'enderio:vibrant_alloy_block')



//energetic alloy coduit
nadien.shaped('8x enderio:energetic_conduit', [
 'AAA',
 'BBB',
 'AAA'
], {
 A: 'enderio:conduit_binder',
 B: 'enderio:energetic_alloy_ingot'
}).id('ultimate_utilities:energetic_conduit')


//vibrant conduit
nadien.shaped('8x enderio:vibrant_conduit', [
 'AAA',
 'BBB',
 'AAA'
], {
 A: 'enderio:conduit_binder',
 B: 'enderio:vibrant_alloy_ingot'
}).id('ultimate_utilities:vibrant_conduit')

//endsteel conduit
nadien.shaped('8x enderio:endsteel_conduit', [
 'AAA',
 'BBB',
 'AAA'
], {
 A: 'enderio:conduit_binder',
 B: 'enderio:end_steel_ingot'
}).id('ultimate_utilities:endsteel_conduit')

//lumium Conduit
nadien.shaped('8x enderio:lumium_conduit', [
 'AAA',
 'BBB',
 'AAA'
], {
 A: 'enderio:conduit_binder',
 B: 'thermal:lumium_ingot'
}).id('ultimate_utilities:lumium_conduit')

//signalum conduit
nadien.shaped('8x enderio:signalum_conduit', [
 'AAA',
 'BBB',
 'AAA'
], {
 A: 'enderio:conduit_binder',
 B: 'thermal:signalum_ingot'
}).id('ultimate_utilities:signalum_conduit')

//sculk conduit
nadien.shaped('8x enderio:sculk_superconductor_conduit', [
 'AAA',
 'CBC',
 'AAA'
], {
 A: 'enderio:conduit_binder',
 B: 'minecraft:echo_shard',
 C: 'allthemodium:unobtainium_vibranium_alloy_ingot'
}).id('ultimate_utilities:sculk_superconductor_conduit')






















  })