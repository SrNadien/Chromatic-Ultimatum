//items desabilitados By SrNadien
ServerEvents.recipes(nadien => {

    nadien.remove({output: ['immersiveengineering:heavy_engineering', 'immersiveengineering:light_engineering', 'immersiveengineering:workbench', 'immersiveengineering:craftingtable', 'immersiveengineering:circuit_table']})



//bloque pesado de ingieneria
nadien.custom({"type":"minecraft:crafting_shaped","pattern":["igi","geg","igi"],"key":{"i":{"tag":"forge:sheetmetals/steel"},"e":{"item":'thermalendergy:stellarium_ingot'},"g":{"item":"immersiveengineering:component_steel"}},"result":{"item":"immersiveengineering:heavy_engineering","count":2}}).id('ultimate_utilities:heavyengineering')


//bloque de ingieneria pesada
nadien.custom({"type":"minecraft:crafting_shaped","pattern":["igi","gcg","igi"],"key":{"i":{"tag":"forge:sheetmetals/iron"},"c":{"item":'thermalendergy:stellarium_ingot'},"g":{"item":"immersiveengineering:component_iron"}},"result":{"item":"immersiveengineering:light_engineering","count":2}}).id('ultimate_utilities:lightengineering')




//dragon steel plate
nadien.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'thermal_extra:dragonsteel_plate'},"conditions":[{"value":{"tag":'forge:ingots/dragonsteel',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/dragonsteel',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:ingots/dragonsteel'},"energy":2400}).id('ultimate_utilities:dragonsteelcompatplate')

//twine plate
nadien.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'thermal_extra:twinite_plate'},"conditions":[{"value":{"tag":'forge:ingots/twinite',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/twinite',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:ingots/twinite'},"energy":2400}).id('ultimate_utilities:twinecompatplate')

//shellite plate
nadien.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'thermal_extra:shellite_plate'},"conditions":[{"value":{"tag":'forge:ingots/shellite',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/shellite',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:ingots/shellite'},"energy":2400}).id('ultimate_utilities:sellitecompatplate')

//soul infused plate
nadien.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'thermal_extra:soul_infused_plate'},"conditions":[{"value":{"tag":'forge:ingots/soul_infused',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/soul_infused',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:ingots/soul_infused'},"energy":2400}).id('ultimate_utilities:')

//enderium plate
nadien.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'thermal:enderium_plate'},"conditions":[{"value":{"tag":'forge:ingots/enderium',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/enderium',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:ingots/enderium'},"energy":2400}).id('ultimate_utilities:enderiumcompatplate')

//lumium plate
nadien.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'thermal:lumium_plate'},"conditions":[{"value":{"tag":'forge:ingots/lumium',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/lumium',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:ingots/lumium'},"energy":2400}).id('ultimate_utilities:lumiumcompatplates')

//signalum plate
nadien.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'thermal:signalum_plate'},"conditions":[{"value":{"tag":'forge:ingots/signalum',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/signalum',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:ingots/signalum'},"energy":2400}).id('ultimate_utilities:signalumcompatplate')

//netherite plate
nadien.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'thermal:netherite_plate'},"conditions":[{"value":{"tag":'forge:ingots/netherite',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/netherite',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:ingots/netherite'},"energy":2400}).id('ultimate_utilities:netheritecompatplate')

//iridium plate
nadien.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'alltheores:iridium_plate'},"conditions":[{"value":{"tag":'forge:ingots/iridium',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/iridium',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:ingots/iridium'},"energy":2400}).id('ultimate_utilities:iridiumcompatplate')

//diamond plate
nadien.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'alltheores:diamond_plate'},"conditions":[{"value":{"tag":'forge:gems/diamond',"type":"forge:tag_empty"},"type":"forge:not"},{"value":{"tag":'forge:plates/diamond',"type":"forge:tag_empty"},"type":"forge:not"}],"input":{"tag":'forge:gems/diamond'},"energy":2400}).id('ultimate_utilities:diamondcompatplate')



//custom alloy additions
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":"forge:ingots/steel"},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_steel"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":"forge:ingots/copper"},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_copper"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":"forge:ingots/brass"},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_brass"}})
nadien.custom({"type":"immersiveengineering:mixer","energy":3200,"fluid":{"amount":1000,"tag":"minecraft:lava"},"inputs":[{"base_ingredient":{"item":"minecraft:coal"},"count":4},{"item":"minecraft:iron_ingot","count":2},{"item":"minecraft:amethyst_shard"}],"result":{"amount":250,"fluid":"kubejs:wrought_iron"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":"forge:ingots/steel"},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_steel"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":"forge:ingots/copper"},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_copper"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":"forge:ingots/brass"},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_brass"}})
nadien.custom({"type":"immersiveengineering:mixer","energy":3200,"fluid":{"amount":1000,"tag":"minecraft:lava"},"inputs":[{"base_ingredient":{"item":"minecraft:coal"},"count":4},{"item":"minecraft:iron_ingot","count":2},{"item":"minecraft:amethyst_shard"}],"result":{"amount":250,"fluid":"kubejs:wrought_iron"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"item":"minecraft:quartz"},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_nether_quartz"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"item":"minecraft:gold_ingot"},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_gold"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":"forge:ingots/zinc"},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_zinc"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"item":'galaxy_core:redstone_alloy'},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_desh"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":'forge:gems/sulfur'},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:sulfuric_heavy_oil"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"item":'cataclysm:ancient_metal_ingot'},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_ostrum"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"item":'allthemodium:unobtainium_allthemodium_alloy_block'},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_calorite"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"item":'minecraft:netherite_ingot'},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_netherite"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"item":"minecraft:obsidian"},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_obsidian"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"item":'mysticalagriculture:prosperity_shard'},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_prosperity"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"item":'minecraft:diamond'},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_diamond"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"item":'minecraft:emerald'},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_emerald"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"item":'minecraft:lapis_lazuli'},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_lapis"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"item":'minecraft:redstone'},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_redstone"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":'forge:ingots/signalum'},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_signalum"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":'forge:ingots/tin'},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_tin"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":'forge:ingots/lead'},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_lead"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":"forge:ingots/silver"},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_silver"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":'forge:ingots/nickel'},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_nickel"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":'forge:ingots/electrum'},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_electrum"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":'forge:ingots/invar'},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_invar"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"tag":'forge:ingots/constantan'},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_constantan"}})
nadien.custom({"type":"immersiveengineering:refinery","catalyst":{"item":'thermal_extra:twinite_ingot'},"energy":80,"input0":{"amount":1000,"tag":"minecraft:lava"},"result":{"amount":250,"fluid":"kubejs:molten_pendorite"}})



//mesa de crafteo del ingenierro
nadien.shaped('immersiveengineering:craftingtable', [
    'AAA',
    'BCB',
    'B B'
  ], {
    A: 'minecraft:cherry_slab',
    B: 'alltheores:diamond_rod',
    C: 'extendedcrafting:basic_table',
  }).id('ultimate_utilities:craftingtableing')


  //banco de trabajo del ingeniero
nadien.shaped('immersiveengineering:workbench', [
    'DAA',
    'B E',
    '   '
  ], {
    A: 'minecraft:cherry_slab',
    B: 'immersiveengineering:craftingtable',
    D: 'minecraft:iron_ingot',
    E: 'minecraft:cherry_fence'
  }).id('ultimate_utilities:workbenching')


  //tabla de circuitos del ingeniero
  nadien.shaped('immersiveengineering:circuit_table', [
    'AAD',
    'B E',
    '   '
  ], {
    A: 'minecraft:cherry_slab',
    B: 'immersiveengineering:craftingtable',
    D: 'immersiveengineering:screwdriver',
    E: 'immersiveengineering:light_engineering'
  }).id('ultimate_utilities:circuistableing')




  //madera tratada
   nadien.custom({
  "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "item": 'minecraft:cherry_planks'
    },
    {
      "item": 'minecraft:cherry_planks'
    },
    {
      "item": 'minecraft:cherry_planks'
    },
    {
      "item": 'minecraft:cherry_planks'
    },
    {
      "item": 'minecraft:cherry_planks'
    },
    {
      "item": 'minecraft:cherry_planks'
    },
    {
      "item": 'minecraft:cherry_planks'
    },
    {
      "item": 'minecraft:cherry_planks'
    }
  ],
  "inputFluid": "{Amount:2000,FluidName:\"immersiveengineering:creosote\"}",
  "output": {
    "count": 4,
    "item": 'immersiveengineering:treated_wood_horizontal'
  },
  "processingTime": 300
}).id('ultimate_utilities:madera_traata')

   nadien.custom({
  "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "item": 'minecraft:cherry_planks'
    },
    {
      "item": 'minecraft:cherry_planks'
    },
    {
      "item": 'minecraft:cherry_planks'
    },
    {
      "item": 'minecraft:cherry_planks'
    },
    {
      "item": 'minecraft:cherry_planks'
    },
    {
      "item": 'minecraft:cherry_planks'
    },
    {
      "item": 'minecraft:cherry_planks'
    },
    {
      "item": 'minecraft:cherry_planks'
    }
  ],
  "inputFluid": "{Amount:8000,FluidName:\"thermal:creosote\"}",
  "output": {
    "count": 4,
    "item": 'immersiveengineering:treated_wood_horizontal'
  },
  "processingTime": 300
}).id('ultimate_utilities:madera_traata_alt')



})

