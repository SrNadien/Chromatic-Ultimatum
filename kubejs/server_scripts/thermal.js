ServerEvents.recipes(nadien => {


  //eliminadas
  nadien.remove({id: 'thermal:fire_charge/enderium_ingot_2'})
  nadien.remove({id: 'thermal:enderium_dust_2'})
  nadien.remove({id: 'thermal:machines/smelter/smelter_alloy_enderium'})
  nadien.remove({id: 'alltheores:enderium_dust_from_alloy_blending'})
  nadien.remove({output:'#forge:coins'})
  nadien.remove({output:'thermal:machine_frame'})
  nadien.remove({id:'thermal:machine_frame'})
  nadien.remove({output:'thermal:rf_coil'})




 function addRecipeRockGen(adjacent,below,out,id) {
     let recipe =  {
         "type": "thermal:rock_gen",
         "adjacent":adjacent,
         "result": Item.of(out)
     }
     if (below != '') {
         recipe.below = below
     }
     nadien.custom(recipe).id(id)
 }
 addRecipeRockGen('minecraft:water','minecraft:polished_diorite','minecraft:diorite','ultimate_utilities:rock_gen/rock_gen_diorite')
 addRecipeRockGen('minecraft:water','minecraft:polished_andesite','minecraft:andesite','ultimate_utilities:rock_gen/rock_gen_andesite')
 addRecipeRockGen('minecraft:water','minecraft:polished_granite','minecraft:granite','ultimate_utilities:rock_gen/rock_gen_granite')
 addRecipeRockGen('minecraft:water','minecraft:redstone_block','minecraft:netherrack','ultimate_utilities:rock_gen/rock_gen_netherrack')
 addRecipeRockGen('minecraft:water','minecraft:glowstone','minecraft:end_stone','ultimate_utilities:rock_gen/rock_gen_endstone')
 addRecipeRockGen('minecraft:water','minecraft:bone_block','minecraft:calcite','ultimate_utilities:rock_gen/rock_gen_calcite')
 addRecipeRockGen('minecraft:soul_soil','minecraft:netherite_block','minecraft:soul_sand','ultimate_utilities:rock_gen/rock_gen_soul_sand')
 addRecipeRockGen('minecraft:soul_sand','minecraft:netherite_block','minecraft:soul_soil','ultimate_utilities:rock_gen/rock_gen_soul_soil')



     //multiverso press
nadien.recipes.thermal.press('alltheores:osmium_plate', ['#forge:ingots/osmium']).energy(2400)
nadien.recipes.thermal.press('allthemodium:vibranium_plate', ['allthemodium:vibranium_ingot']).energy(2400)
nadien.recipes.thermal.press('allthemodium:unobtainium_plate', ['allthemodium:unobtainium_ingot']).energy(2400)
nadien.recipes.thermal.press('allthemodium:allthemodium_plate', ['allthemodium:allthemodium_ingot']).energy(2400)
nadien.recipes.thermal.press('#forge:plates/brass', ['#forge:ingots/brass']).energy(2400)
nadien.recipes.thermal.press('create:brass_sheet', ['#forge:ingots/brass']).energy(2400)
nadien.recipes.thermal.press('alltheores:diamond_plate', ['minecraft:diamond']).energy(2400)
nadien.recipes.thermal.press('thermal:constantan_gear', ['4x thermal:constantan_plate']).energy(2400)
nadien.recipes.thermal.press('ultimate_utilities:absolute_plate', ['mekanism_extras:absolute_control_circuit']).energy(2400)
nadien.recipes.thermal.press('ultimate_utilities:absolute_plate', ['thermal_extra:abyssal_plate']).energy(2400)
nadien.recipes.thermal.press('kubejs:steel_rod', ['thermal:steel_ingot', 'thermal:chiller_rod_cast']).energy(2400)



 //induction smelter
 nadien.recipes.thermal.smelter('thermal:steel_ingot', ['minecraft:iron_ingot', 'minecraft:coal']).energy(4800).id('ultimate_utilities:steelingot')
 nadien.recipes.thermal.smelter('thermal:steel_block', ['minecraft:iron_block', 'minecraft:coal_block']).energy(4800).id('ultimate_utilities:steelblock')
 nadien.recipes.thermal.smelter('kubejs:lingotedeacero', ['minecraft:iron_ingot', 'minecraft:charcoal']).energy(4800).id('ultimate_utilities:steelingotdos')
 nadien.recipes.thermal.smelter('ultimate_utilities:hierro_pulsante', ['minecraft:iron_ingot', 'minecraft:ender_pearl']).energy(4800).id('ultimate_utilities:herropulsante')
 nadien.recipes.thermal.smelter('ultimate_utilities:redstone_alloy', ['minecraft:redstone', '#forge:silicon']).energy(4800).id('ultimate_utilities:redstonealloy')
 nadien.recipes.thermal.smelter('ultimate_utilities:hierro_conductor', ['minecraft:iron_ingot', 'minecraft:redstone']).energy(4800).id('ultimate_utilities:hierrocondustor')
 nadien.recipes.thermal.smelter('ultimate_utilities:energetic_alloy', ['minecraft:redstone', 'minecraft:glowstone_dust', 'minecraft:gold_ingot']).energy(4800).id('ultimate_utilities:aleacionenergetica')
 nadien.recipes.thermal.smelter('ultimate_utilities:soularium', ['minecraft:gold_ingot', 'minecraft:soul_sand']).energy(4800).id('ultimate_utilities:aleaciondealmas')
 nadien.recipes.thermal.smelter('ultimate_utilities:vibrant_alloy', ['ultimate_utilities:energetic_alloy', 'minecraft:ender_pearl']).energy(4800).id('ultimate_utilities:alaecionvibrante')
 nadien.recipes.thermal.smelter('ultimate_utilities:melodic_alloy', ['ultimate_utilities:end_steel_alloy', 'minecraft:popped_chorus_fruit']).energy(4800).id('ultimate_utilities:melodicalloy')
 nadien.recipes.thermal.smelter('ultimate_utilities:end_steel_alloy', ['minecraft:end_stone', 'ultimate_utilities:dark_steel', 'minecraft:obsidian']).energy(4800).id('ultimate_utilities:endsteelalloy')
 nadien.recipes.thermal.smelter('ultimate_utilities:dark_steel', ['minecraft:iron_ingot','#forge:dusts/coal', 'minecraft:obsidian']).energy(4800).id('ultimate_utilities:darksteelalloy')
 nadien.recipes.thermal.smelter('ultimate_utilities:stellar_alloy', ['minecraft:nether_star', 'ultimate_utilities:melodic_alloy', '4x minecraft:clay_ball']).energy(4800).id('ultimate_utilities:stellaralloy')
 nadien.recipes.thermal.smelter('ultimate_utilities:enderium_base', ['2x #forge:ingots/tin', 'thermal:lead_ingot', '#forge:ingots/platinum']).energy(4800).id('ultimate_utilities:enderiumbase')
 nadien.recipes.thermal.smelter('#forge:ingots/enderium', ['2x ultimate_utilities:enderium_base', 'thermal:basalz_powder', '2x minecraft:ender_pearl']).energy(4800).id('ultimate_utilities:enderiumingot')
 nadien.recipes.thermal.smelter('tfmg:steel_ingot', ['tfmg:coal_coke', 'immersiveengineering:ingot_steel']).energy(4800).id('ultimate_utilities:steelcreate')
 nadien.recipes.thermal.smelter('thermal:enderium_ingot', ['2x ultimate_utilities:enderium_base', '2x create:zinc_ingot', '2x minecraft:ender_pearl']).energy(4800).id('ultimate_utilities:enderiumingotdoos')


 nadien.recipes.thermal.pulverizer('occultism:crushed_end_stone', 'minecraft:end_stone').energy(4800).id('ultimate_utilities:crushedendstonethermal')

 //molten dragon steel
 nadien.custom({
     "type": "thermal:chiller",
     "ingredients": [
       {
         "fluid": "mekanism:uranium_hexafluoride",
         "amount": 2500
       },
       {
         "item": "thermal:chiller_ball_cast"
       }
     ],
     "result": [
       {
         "item": 'thermal_extra:dragonsteel_bucket',
         "count": 1
       }
     ],
     "energy": 120000
   }).id('ultimate_utilities:moltendragonsteel')


   
  //caca super
 nadien.custom({
   "type": "thermal:chiller",
   "ingredients": [
     {
       "fluid": 'createaddition:bioethanol',
       "amount": 2500
     },
     {
       "item": "thermal:chiller_ball_cast"
     }
   ],
   "result": [
     {
       "item": 'galaxy_origins:cacota',
       "count": 1
     }
   ],
   "energy": 120000
 }).id('ultimate_utilities:poop')


//chasis de maquina


//rf coil
nadien.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":100,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"tag":"forge:plates/gold"}},"output":{"count":4,"item":"thermal:rf_coil"}}).id('ultimate_utilities:rfcoil')


  //rf coil 2
  nadien.shaped('thermal:rf_coil', [
        'AB ',
        'BCB',
        ' BA'
      ],{
        A: 'extendedcrafting:redstone_ingot',
        B: 'create:golden_sheet',
        C: 'minecraft:iron_ingot'
      }).id('ultimate_utilities:rfcoildos')


//machine frame
nadien.shaped('thermal:machine_frame', [
  'ABA',
  'BCB',
  'ABA'
],{
  A: 'minecraft:netherite_ingot',
  B: 'create:brass_ingot',
  C: 'minecraft:shulker_shell'
}).id('ultimate_utilities:machineframee')


//netherite plate
nadien.shaped('thermal:netherite_plate', [
  'AB ',
  'B  ',
  '   '
],{
  A: '#alltheores:ore_hammers',
  B: 'minecraft:netherite_ingot'
}).id('ultimate_utilities:netheriteplate')


//x100 speed
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ppp",
    "nan",
    "nin"
  ],
  "key": {
    "i": {
      "item": "thermal_more:mega_upgrade_augment"
    },
    "a": {
      "item": "ultimate_utilities:estella_galactica"
    },
    "p": {
      "item": "minecraft:pink_dye"
    },
    "n": {
      "item": "thermal:netherite_gear"
    }
  },
  "result": {
    "item": "thermal_more:super_upgrade_augment"
  }
}).id('ultimate_utilities:cientmultiplier')


    nadien.shaped('thermalendergy:endergy_upgrade_2', [
        "GSG",
        "LRL",
        "GSG"
      ], {
      G: 'thermalendergy:melodium_ingot',
      L: 'thermalendergy:prismalium_gear',
      R: 'thermal_extra:upgrade_augment',
      S: 'minecraft:shulker_shell'
    }).id('ultimate_utilities:extra_to_endergy')

      
     //phytogenic insolator
     nadien.remove({id: 'thermal:machine_insolator'})
     nadien.remove({output: 'thermal:machine_insolator'})
     nadien.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "industrialforegoing:machine_frame_supreme"
  },
  "ingredients": [
    {
      "item": "avaritia:crystal_matrix_ingot"
    },
    {
      "item": "ae2:cell_component_16k"
    },
    {
      "item": "allthecompressed:emerald_block_2x"
    },
    {
      "item": 'botanypotstiers:creative_terracotta_hopper_botany_pot'
    },
    {
      "item": "ae2:cell_component_16k"
    },
    {
      "item": "avaritia:crystal_matrix_ingot"
    },
    {
      "item": "ae2:cell_component_16k"
    },
    {
      "item": "avaritia:crystal_matrix_ingot"
    },
    {
      "item": 'botanypotstiers:creative_terracotta_hopper_botany_pot'
    },
    {
      "item": "allthecompressed:emerald_block_2x"
    },
    {
      "item": "avaritia:crystal_matrix_ingot"
    }
  ],
  "result": {
    "item": "thermal:machine_insolator",
    "count": 1
  }
}).id('ultimate_utilities:inslator')

})
