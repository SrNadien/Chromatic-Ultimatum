//create By Srnadien
ServerEvents.recipes(nadien => {

   

   

  nadien.remove({output: ['create:deployer', 'create:mechanical_crafter', 'create:spout','create:andesite_alloy', 'create:andesite_casing', 'create:brass_casing', 'create:copper_casing', 'create:railway_casing',  'create:refined_radiance_casing']})
 
 
 //aleacion de andesita
 nadien.shaped('create:andesite_alloy', [
   'PA ',
   'AP ',
   '   '
 ], {
   P: 'allthecompressed:andesite_1x',
   A: 'ultimate_utilities:nadienite_ingot'
 }).id('ultimate_utilities:aleaciondeandesita')


 nadien.recipes.create.mixing('create:andesite_alloy', ['2x minecraft:andesite', '2x minecraft:copper_ingot']).id('ultimate_utilities:andesite_alloy_aged').superheated()
 
 
  //andesita desde bloque
  nadien.shaped('9x create:andesite_alloy', [
    '   ',
    ' P ',
    '   '
  ], {
    P: 'create:andesite_alloy_block',
  }).id('ultimate_utilities:aleaciondeandesitablockingot')


 

 //surtidor
 nadien.shaped('create:spout', [
   ' P ',
   ' A ',
   '   '
 ], {
   P: 'create:andesite_casing',
   A: 'minecraft:dried_kelp'
 }).id('ultimate_utilities:spout')
 
 //ensamblador mecanico
 nadien.shaped('create:mechanical_crafter', [
   ' P ',
   ' A ',
   ' D '
 ], {
   P: 'create:electron_tube',
   A: 'create:andesite_casing',
   D: 'minecraft:crafting_table'
 }).id('ultimate_utilities:mechanical_crafter')
 
 
 
 })
 
 // Add missing ore crushing recipes for Create
 let missingCreateOres = [
     'aluminum',
     'lead',
     'nickel',
     'osmium',
     'platinum',
     'silver',
     'tin',
     'uranium',
 ]
 ServerEvents.recipes(nadien => {
     missingCreateOres.forEach(ore => {
        nadien.smelting('alltheores:' + ore + '_ingot', 'create:crushed_raw_' + ore + '').xp(0.1).id('ultimate_utilities:smelting/' + ore + '_ingot_from_crushed')
        nadien.blasting('alltheores:' + ore + '_ingot', 'create:crushed_raw_' + ore + '').xp(0.1).id('ultimate_utilities:blasting/' + ore + '_ingot_from_crushed')
        nadien.custom({
             type: 'create:splashing',
             ingredients: [
                 {
                     'item': 'create:crushed_raw_' + ore
                 }
             ],
             results: [
                 {
                     'count': 9,
                     'item': 'alltheores:' + ore + '_nugget'
                 }
             ]
         }).id('ultimate_utilities:splashing/crushed_raw_' + ore)
     })
 
 
     nadien.custom({
         "type": "minecraft:crafting_shaped",
         "pattern": [
           "AAA",
           "CSC",
           "AAA"
         ],
         "key": {
           "A": {
             "tag": "minecraft:planks"
           },
           "C": {
             "item": "create:andesite_alloy"
           },
           "S": {
             "tag": "minecraft:logs"
           }
         },
         "result": {
           "item": "create:andesite_casing",
           "count": 4
         }
       }).id('ultimate_utilities:andesitealloy')
 
 
       nadien.custom({
         "type": "minecraft:crafting_shaped",
         "pattern": [
           "AAA",
           "CSC",
           "AAA"
         ],
         "key": {
           "A": {
             "tag": "minecraft:planks"
           },
           "C": {
             "item": "thermal:electrum_plate"
           },
           "S": {
             "tag": "minecraft:logs"
           }
         },
         "result": {
           "item": 'create:brass_casing',
           "count": 4
         }
       }).id('ultimate_utilities:brassalloy')
 
       
 
       nadien.custom({
         "type": "minecraft:crafting_shaped",
         "pattern": [
           "AAA",
           "CSC",
           "AAA"
         ],
         "key": {
           "A": {
             "tag": "minecraft:planks"
           },
           "C": {
             "tag": "iceandfire:scales/dragon"
           },
           "S": {
             "tag": "minecraft:logs"
           }
         },
         "result": {
           "item": 'create:copper_casing',
           "count": 4
         }
       }).id('ultimate_utilities:copperalloy')
 
 
       nadien.custom({
         "type": "minecraft:crafting_shaped",
         "pattern": [
           "AAA",
           "CSC",
           "AAA"
         ],
         "key": {
           "A": {
             "item": "minecraft:rail"
           },
           "C": {
             "item": "thermal:signalum_plate"
           },
           "S": {
             "item": "create:brass_casing"
           }
         },
         "result": {
           "item": 'create:railway_casing',
           "count": 4
         }
       }).id('ultimate_utilities:railwaycassing')
 
 
 
       nadien.custom({
         "type": "minecraft:crafting_shaped",
         "pattern": [
           "AAA",
           "CSC",
           "AAA"
         ],
         "key": {
           "A": {
             "item": "minecraft:oak_planks"
           },
           "C": {
             "item": "thermal:enderium_plate"
           },
           "S": {
             "item": "create:brass_casing"
           }
         },
         "result": {
           "item": 'create:refined_radiance_casing',
           "count": 4
         }
       }).id('ultimate_utilities:radiancecassing')
 
 
 
       nadien.custom({
         "type": "minecraft:crafting_shaped",
         "category": "misc",
         "key": {
           "A": {
             "item": "create:andesite_alloy"
           },
           "B": {
             "tag": 'forge:plates/zinc'
           }
         },
         "pattern": [
           " A ",
           "BBB",
           " B "
         ],
         "result": {
           "item": 'kubejs:zinc_hand'
         },
         "show_notification": true
       }).id('ultimate_utilities:zinchand')
 
       
 
 
        nadien.custom({
         "type": "minecraft:crafting_shaped",
         "category": "misc",
         "key": {
           "B": {
             "item": "create:electron_tube"
           },
           "C": {
             "item": "create:andesite_casing"
           },
           "I": {
             "item": 'kubejs:zinc_hand'
           }
         },
         "pattern": [
           "B",
           "C",
           "I"
         ],
         "result": {
           "item": "create:deployer"
         },
         "show_notification": true
       }).id('ultimate_utilities:deployer')
 
 
 
       nadien.remove({output: 'createaddition:copper_wire'})
       nadien.custom({
         "type":"createaddition:rolling",
         "input": {
               "item": "minecraft:cut_copper"
         },
         "result": {
           "item": "createaddition:copper_wire",
           "count": 2
         }
       }).id('ultimate_utilities:copperwire')
 
    
       nadien.remove({output: 'createaddition:iron_rod'})
       nadien.custom({
         "type":"createaddition:rolling",
         "input": {
               "item": "minecraft:raw_iron_block"
         },
         "result": {
           "item": 'createaddition:iron_rod',
           "count": 2
         }
       }).id('ultimate_utilities:ironbar')
 
 
       nadien.remove({output: 'createaddition:copper_rod'})
       nadien.custom({
         "type":"createaddition:rolling",
         "input": {
               "item": "create:copper_sheet"
         },
         "result": {
           "item": 'createaddition:copper_rod',
           "count": 2
         }
       }).id('ultimate_utilities:copperbar')
 
       nadien.remove({output: 'createaddition:gold_rod'})
       nadien.custom({
         "type":"createaddition:rolling",
         "input": {
               "item": "minecraft:gold_ingot"
         },
         "result": {
           "item": 'createaddition:gold_rod',
           "count": 2
         }
       }).id('ultimate_utilities:goldbar')
 
 
       nadien.remove({output: 'createaddition:electrum_rod'})
       nadien.custom({
         "type":"createaddition:rolling",
         "input": {
               "item": 'createaddition:electrum_ingot'
         },
         "result": {
           "item": 'createaddition:electrum_rod',
           "count": 2
         }
       }).id('ultimate_utilities:electrumbar')
 
 
       nadien.remove({output: 'createaddition:brass_rod'})
       nadien.custom({
         "type":"createaddition:rolling",
         "input": {
               "item": 'create:brass_ingot'
         },
         "result": {
           "item": 'createaddition:brass_rod',
           "count": 2
         }
       }).id('ultimate_utilities:brassbar')
 
 
 
       nadien.remove({output: 'createaddition:alternator'})
       nadien.custom({
         "type": "create:mechanical_crafting",
         "pattern": [
           "  A  ",
           " ISI ",
           "ISRSI",
           " ICI "
         ],
         "key": {
           "C": {
             "item": "createaddition:capacitor"
           },
           "I": {
             "tag": "forge:plates/iron"
           },
           "R": {
             "item": "createaddition:iron_rod"
           },
           "S": {
             "item": "createaddition:copper_spool"
           },
           "A": {
             "item": "create:andesite_alloy"
           }
         },
         "result": {
           "item": "createaddition:alternator"
         }
       }).id('ultimate_utilities:alternator')
 
 
       nadien.remove({output: 'createaddition:electric_motor'})
       nadien.custom({
         "type": "create:mechanical_crafting",
         "pattern": [
           "  A  ",
           " BSB ",
           "BSRSB",
           " BCB "
         ],
         "key": {
           "A": {
             "item": "create:andesite_alloy"
           },
           "C": {
             "item": "createaddition:capacitor"
           },
           "B": {
             "tag": "forge:plates/brass"
           },
           "R": {
             "item": "createaddition:iron_rod"
           },
           "S": {
             "item": "createaddition:copper_spool"
           }
         },
         "result": {
           "item": "createaddition:electric_motor"
         }
       }).id('ultimate_utilities:electricmotor')
 
       //radiant sheet
       nadien.recipes.create.mixing('create:radiant_sheet', '4x mekanism_extras:alloy_radiance').id('ultimate_utilities:radiant_sheet').superheated()
       
 
      
   
 
 
    
 
 
 
 
 })
 