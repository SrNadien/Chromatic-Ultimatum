ServerEvents.recipes(nadien => {
    [1,2,3,4,5].forEach(num =>  nadien.remove({id:`cobblefordays:tier_${num}`}));

      
    //coble gen tier 1
    nadien.shaped("cobblefordays:tier_1", ["RRR", "WGL", "RRR"], {
        W: "minecraft:water_bucket",
        L: "minecraft:lava_bucket",
        G: "minecraft:glass",
        R: 'allthecompressed:stone_1x',
      }).id('galaxyorigins:cobble_gen_tier_1')



    //coble gen tier 2
     nadien.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
          "item": "cobblefordays:tier_1"
        },
        "cast_consumed": true,
        "cooling_time": 100,
        "fluid": {
          "amount": 4000,
          "fluid": "tconstruct:seared_stone"
        },
        "result": "cobblefordays:tier_2"
      }).id('galaxyorigins:cobble_gen_tier_2')



     //coble gen tier 3
      nadien.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
          "item": "cobblefordays:tier_2"
        },
        "cast_consumed": true,
        "cooling_time": 100,
        "fluid": {
          "amount": 3240,
          "fluid": "tconstruct:molten_iron"
        },
        "result": "cobblefordays:tier_3"
      }).id('galaxyorigins:cobble_gen_tier_3')



      //coble gen tier 4
      nadien.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
          "item": "cobblefordays:tier_3"
        },
        "cast_consumed": true,
        "cooling_time": 100,
        "fluid": {
          "amount": 3240,
          "fluid": "tconstruct:molten_gold"
        },
        "result": "cobblefordays:tier_4"
      }).id('galaxyorigins:cobble_gen_tier_4')





      //coble gen tier 5
      nadien.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
          "item": "cobblefordays:tier_4"
        },
        "cast_consumed": true,
        "cooling_time": 100,
        "fluid": {
          "amount": 3240,
          "fluid": "tconstruct:molten_diamond"
        },
        "result": "cobblefordays:tier_5"
      }).id('galaxyorigins:cobble_gen_tier_5')
})