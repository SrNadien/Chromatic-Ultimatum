ServerEvents.recipes(nadien => {

       

  //eliminados
  nadien.remove({output:'aeinfinitybooster:infinity_card'})
  nadien.remove({output:'aeinfinitybooster:dimension_card'})
  nadien.remove({output:'ae2:tiny_tnt'})
  nadien.remove({output:'ae2:matter_cannon'})
  nadien.remove({output: 'ae2:inscriber'})

  //incompleted base
  nadien.custom({
    "type": "ae2:transform",
    "circumstance": {
      "type": "fluid",
      "tag": "minecraft:water"
    },
    "ingredients": [
      {
        "item": 'tconstruct:pig_iron_block'
      },
      {
        "item": 'kubejs:copper_mechanism'
      }
    ],
    "result": {
      "item": 'kubejs:incomplete_press'
    }
  }).id('galaxyorigenes:incompletecircuitbasic')


 //universal press
//  nadien.shaped('kubejs:universal_press', ['FPF', 'CSL', 'FEF'], {
//   F: '#forge:ingots/sky_steel',
//   P: 'ae2:silicon_press',
//   C: 'ae2:calculation_processor_press',
//   S: 'kubejs:incomplete_press',
//   L: 'ae2:logic_processor_press',
//   E: 'ae2:engineering_processor_press'
// }).id('galaxyorigenes:universal_press_dos')

//perfecto ciernes
nadien.custom({
"type": "ae2:transform",
"circumstance": {
  "type": "fluid",
  "tag": "minecraft:water"
},
"ingredients": [
  {
    "item": "ae2:charged_certus_quartz_crystal"
  },
  {
    "item": "ae2:flawed_budding_quartz"
  }
],
"result": {
  "item": "ae2:flawless_budding_quartz"
}
}).id('galaxyorigenes:ciernesperfecto')



//incompleted base
nadien.custom({
  "type": "ae2:transform",
  "circumstance": {
    "type": "fluid",
    "tag": "minecraft:water"
  },
  "ingredients": [
    {
      "item": 'swplanets:light_saber_violet'
    },
    {
      "item": 'kubejs:copper_mechanism'
    }
  ],
  "result": {
    "item": 'kubejs:incomplete_press'
  }
}).id('galaxyorigenes:incompletecircuitbasic')


//infinity card booster

nadien.recipes.createMechanicalCrafting('2x aeinfinitybooster:infinity_card',
  [
   "AABAA",
   "CBDBC",
   "BDEDB",
   "CBDBC",
   "FFBFF"
 ],
 {
   A:  "minecraft:ender_eye",
   B:  "ae2:wireless_booster",
   C:  "minecraft:nether_star",
   D:  "extendedcrafting:ender_ingot",
   E:  'ultimate_utilities:patricio_estrella', 
   F:  "minecraft:netherite_ingot"
}).id('galaxyorigenes:infinitybooster')
  
  
  
  //infinity dimensional card
  nadien.recipes.createMechanicalCrafting('aeinfinitybooster:dimension_card',
    [
      "AABAA",
      "CBDBC",
      "BDEDB",
      "CBDBC",
      "FFBFF"
    ],
    {
      A:  "minecraft:ender_eye",
      B:  "aeinfinitybooster:infinity_card",
      C:  "extendedcrafting:ender_star",
      D:  "extendedcrafting:ender_ingot",
      E:  'ultimate_utilities:bob_toronja',
      F:  "minecraft:netherite_ingot"
    }).id('galaxyorigenes:dimensioncard')


//inscriber
nadien.shaped('ae2:inscriber', [
  'abn',
  'c n',
  'abn'
], {
  a: 'minecraft:netherite_ingot',
  b: 'minecraft:sticky_piston',
  c: 'kubejs:incomplete_press',
  n: 'ultimate_utilities:nadienite_ingot'
}).id('galaxyorigenes:inscriber')


///PROCESADORES


    //procesador de oro
    nadien.recipes.createSequencedAssembly([ // start the recipe
      Item.of("ae2:printed_logic_processor") // this is the item that will appear in JEI as the result
  ],"minecraft:gold_ingot",[ // the input// the transitional item
      nadien.recipes.createDeploying("ae2:printed_logic_processor",["ae2:printed_logic_processor",'kubejs:universal_press']).keepHeldItem(),
  ]).transitionalItem("ae2:printed_logic_processor").loops(1).id('galaxyorigins:circuitodeoro') // set the transitional item and the loops (amount of repetitions)
     



   ///impreso de oro
   nadien.recipes.createSequencedAssembly([ // start the recipe
    Item.of('ae2:logic_processor') // this is the item that will appear in JEI as the result
],'ae2:printed_logic_processor',[ // the input
    // the transitional item
    nadien.recipes.createDeploying("ae2:printed_logic_processor",["ae2:printed_logic_processor",'kubejs:universal_press']).keepHeldItem(),
    nadien.recipes.createDeploying("ae2:printed_logic_processor",["ae2:printed_logic_processor",'minecraft:redstone']),
    nadien.recipes.createDeploying("ae2:printed_logic_processor",["ae2:printed_logic_processor","ae2:printed_silicon"]),
    nadien.recipes.create.pressing('ae2:printed_logic_processor', 'ae2:printed_logic_processor')
]).transitionalItem("ae2:printed_logic_processor").loops(1).id('galaxyorigins:circuitodeoroterm')


   //procesador de diamante
        nadien.recipes.createSequencedAssembly([ // start the recipe
          Item.of("ae2:printed_engineering_processor") // this is the item that will appear in JEI as the result
      ],"minecraft:diamond",[ // the input// the transitional item
          nadien.recipes.createDeploying("ae2:printed_engineering_processor",["ae2:printed_engineering_processor",'kubejs:universal_press']).keepHeldItem(),
      ]).transitionalItem("ae2:printed_engineering_processor").loops(1).id('galaxyorigins:circuitodediamantes') // set the transitional item and the loops (amount of repetitions)
      

     ///impreso de diamante
     nadien.recipes.createSequencedAssembly([ // start the recipe
      Item.of('ae2:engineering_processor') // this is the item that will appear in JEI as the result
  ],'ae2:printed_engineering_processor',[ // the input
      // the transitional item
      nadien.recipes.createDeploying("ae2:printed_engineering_processor",["ae2:printed_engineering_processor",'kubejs:universal_press']).keepHeldItem(),
      nadien.recipes.createDeploying("ae2:printed_engineering_processor",["ae2:printed_engineering_processor",'minecraft:redstone']),
      nadien.recipes.createDeploying("ae2:printed_engineering_processor",["ae2:printed_engineering_processor","ae2:printed_silicon"]),
      nadien.recipes.create.pressing('ae2:printed_engineering_processor', 'ae2:printed_engineering_processor')
  ]).transitionalItem("ae2:printed_engineering_processor").loops(1).id('galaxyorigins:circuitodediamantesterm') // set the transitional item and the loops (amount of repetitions)



        //procesador de calculo
        nadien.recipes.createSequencedAssembly([ // start the recipe
          Item.of("ae2:printed_calculation_processor") // this is the item that will appear in JEI as the result
      ],"#ae2:all_certus_quartz",[ // the input// the transitional item
          nadien.recipes.createDeploying("ae2:printed_calculation_processor",["ae2:printed_silicon",'kubejs:universal_press']).keepHeldItem(),
      ]).transitionalItem("ae2:printed_calculation_processor").loops(1).id('galaxyorigins:circuitodecalculo') // set the transitional item and the loops (amount of repetitions)

        


      ///impreso de calculo
      nadien.recipes.createSequencedAssembly([ // start the recipe
        Item.of("ae2:calculation_processor") // this is the item that will appear in JEI as the result
    ],'ae2:printed_calculation_processor',[ // the input
        // the transitional item
        nadien.recipes.createDeploying("ae2:calculation_processor",["ae2:calculation_processor",'kubejs:universal_press']).keepHeldItem(),
        nadien.recipes.createDeploying("ae2:calculation_processor",["ae2:calculation_processor",'minecraft:redstone']),
        nadien.recipes.createDeploying("ae2:calculation_processor",["ae2:calculation_processor","ae2:printed_silicon"]),
        nadien.recipes.create.pressing('ae2:calculation_processor', 'ae2:calculation_processor')
    ]).transitionalItem("ae2:printed_calculation_processor").loops(1).id('galaxyorigins:circuitodecalculoterm') // set the transitional item and the loops (amount of repetitions)


      //silicona
      nadien.recipes.createDeploying("ae2:printed_silicon",['#forge:silicon','kubejs:universal_press']).keepHeldItem()

      //polvo de enderpearl
              nadien.recipes.createSequencedAssembly([ // start the recipe
                Item.of('#forge:dusts/ender_pearl') // this is the item that will appear in JEI as the result
            ],'minecraft:ender_pearl',[ // the input// the transitional item
                nadien.recipes.createDeploying('#forge:dusts/ender_pearl',['#forge:dusts/ender_pearl','alltheores:platinum_ore_hammer']).keepHeldItem(),
            ]).transitionalItem('minecraft:ender_pearl').loops(1).id('galaxyorigins:enderpearldust') // set the transitional item and the loops (amount of repetitions)


            nadien.recipes.createSequencedAssembly([ // start the recipe
              Item.of('ae2:ender_dust') // this is the item that will appear in JEI as the result
          ],'minecraft:ender_pearl',[ // the input// the transitional item
              nadien.recipes.createDeploying('ae2:ender_dust',['ae2:ender_dust','alltheores:platinum_ore_hammer']).keepHeldItem(),
          ]).transitionalItem('minecraft:ender_pearl').loops(1).id('galaxyorigins:enderpearldustapplied') // set the transitional item and the loops (amount of repetitions)


            //polvo de certus
            nadien.recipes.createSequencedAssembly([ // start the recipe
              Item.of('ae2:certus_quartz_dust') // this is the item that will appear in JEI as the result
          ],'#ae2:all_certus_quartz',[ // the input// the transitional item
              nadien.recipes.createDeploying('ae2:certus_quartz_dust',['ae2:certus_quartz_dust','alltheores:platinum_ore_hammer']).keepHeldItem(),
          ]).transitionalItem('ae2:certus_quartz').loops(1).id('galaxyorigins:certusdust') // set the transitional item and the loops (amount of repetitions)



    


    })


