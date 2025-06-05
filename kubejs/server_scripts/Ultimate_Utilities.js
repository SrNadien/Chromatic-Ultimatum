ServerEvents.recipes(nadien => {



   //hellfire sword
   nadien.custom({
    "type": "tconstruct:casting_basin",
    "cast": {
      "item": "allthemodium:alloy_sword"
    },
    "cast_consumed": true,
    "cooling_time": 5500,
    "fluid": {
      "amount": 5000,
      "fluid": "immersiveengineering:phenolic_resin"
    },
    "result": "galaxy_core:hellfiresword"
  }).id('ultimate_utilitieshellfire_sword')
  


  




  nadien.recipes.create.mechanical_crafting('ultimate_utilities:galaxy_globe', [
    "SSSSSSSSS",
    "S G G G S",
    "S G M M S",
    "S G M M S",
    "S G G G S",
    "S G G G S",
    "S M M M S",
    "S S S S S",
    "SSSSSSSSS"
  ], {
    S: 'minecraft:chiseled_stone_bricks',  // Marco de piedra
    G: 'solarpanels:photonic_solar_panel',             // Globo terráqueo (el centro del mapa)
    M: 'kubejs:mek_mechanism',              // Globo de la luna (alrededor de la tierra)
  }).id('ultimate_utilitiesgalacticglobealt');
  

  //nadien.custom({
    //"type": "tconstruct:casting_basin",
    //"cooling_time": 500,
    //"fluid": {//
      //"amount": 1000,
      //"fluid": "ultimate_utilities:nadienitefluid"
   // },
   // "result": "ultimate_utilities:nadienitebloque"
  //}).id('ultimate_utilities:nadienite_block_recipe_tinkers')

  nadien.custom({
  "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "item": 'argentinas_delight:pavacalientetool'
    },
    {
      "item": 'argentinas_delight:matevacio'
    },
    {
      "item": 'minecraft:sugar'
    },
    {
      "item": 'minecraft:water_bucket'
    },
    {
      "item": 'argentinas_delight:yerbamate'
    },
    {
      "item": 'argentinas_delight:yerbamate'
    },
    {
      "item": 'argentinas_delight:yerbamate'
    },
    {
      "item": 'argentinas_delight:yerbamate'
    }
  ],
  "inputFluid": "{Amount:8000,FluidName:\"kubejs:molten_prosperity\"}",
  "output": {
    "count": 1,
    "item": 'argentinas_delight:matedulceitem'
  },
  "processingTime": 300
})

})