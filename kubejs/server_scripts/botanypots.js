ServerEvents.recipes(nadien => {



nadien.remove({output: ['#botanypots:all_botany_pots']})
  
  
  //botanypot
  nadien.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'botanypots:terracotta_botany_pot',"count": 2},"input":{"item":'tconstruct:cobalt_block'},"energy":2400}).id('ultimate_utilities:potnormal')
  
  
  
  //hopper botany pot
  nadien.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'botanypots:terracotta_hopper_botany_pot',"count": 2},"input":{"item":'botanypots:terracotta_botany_pot'},"energy":2400}).id('ultimate_utilities:potnrmalhoppered')
  
  
  //elite botany pot
  nadien.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'botanypotstiers:elite_terracotta_botany_pot',"count": 2},"input":{"item":'extendedcrafting:frame'},"energy":2400}).id('ultimate_utilities:potelite')
  
  
  
  //elite hopper botani pot
  nadien.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'botanypotstiers:elite_terracotta_hopper_botany_pot',"count": 2},"input":{"item":'botanypotstiers:elite_terracotta_botany_pot'},"energy":2400}).id('ultimate_utilities:potelitehoppered')
  
  
  
   //ultra botany pot
   nadien.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 3,
      "pattern": [
        "AAAAAAA",
        "ABCCCBA",
        "ACDEDCA",
        "ACEFECA",
        "ACDEDCA",
        "ABCCCBA",
        "AAAAAAA"
      ],
      "key": {
        "A": {
          "item": "create:mechanical_crafter"
        },
        "B": {
          "item": "ae2:quartz_block"
        },
        "C": {
          "item": "minecraft:iron_ingot"
        },
        "D": {
          "item": 'allthemodium:allthemodium_ingot'
        },
        "E": {
          "item": "extendedcrafting:ultimate_catalyst"
        },
        "F": {
          "item": "botanypotstiers:elite_terracotta_botany_pot"
        }
      },
      "result": {
        "item": 'botanypotstiers:ultra_terracotta_botany_pot',
        "count": 2
      }
    }).id('ultimate_utilities:ultrabotanypot')
  
  
  
  //ultra hopper botany pot
  nadien.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 3,
    "pattern": [
      "AAAAAAA",
      "ABCCCBA",
      "ACDEDCA",
      "ACEFECA",
      "ACDEDCA",
      "ABCCCBA",
      "AAAAAAA"
    ],
    "key": {
      "A": {
        "item": "create:mechanical_crafter"
      },
      "B": {
        "item": "ae2:quartz_block"
      },
      "C": {
        "item": "minecraft:iron_ingot"
      },
      "D": {
        "tag": 'forge:ingots/unobtainium_allthemodium_alloy'
      },
      "E": {
        "item": "extendedcrafting:ultimate_catalyst"
      },
      "F": {
        "item": "botanypotstiers:ultra_terracotta_botany_pot"
      }
    },
    "result": {
      "item": 'botanypotstiers:ultra_terracotta_hopper_botany_pot',
      "count": 2
    }
  }).id('ultimate_utilities:ultrahopperbotanypot')
  
  
  
    //creative botany pot
    nadien.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000,
      "input": {
        "item": "botanypotstiers:ultra_terracotta_botany_pot"
      },
      "ingredients": [
        {
          "item": "extendedcrafting:crystaltine_ingot"
        },
        {
          "item": "extendedcrafting:crystaltine_ingot"
        },
        {
          "item": 'kubejs:conductive_mechanism'
        },
        {
          "item": 'kubejs:conductive_mechanism'
        },
        {
          "item": "extendedcrafting:crystaltine_ingot"
        },
        {
          "item": "extendedcrafting:crystaltine_ingot"
        },
        {
          "item": 'kubejs:conductive_mechanism'
        },
        {
          "item": 'kubejs:conductive_mechanism'
        }
      ],
      "result": {
        "item": 'botanypotstiers:creative_terracotta_botany_pot',
        "count": 1
      }
    }).id('ultimate_utilities:creativebotanypot')
  
  
    //creative hopper botany pot
    nadien.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000,
      "input": {
        "item": "botanypotstiers:creative_terracotta_botany_pot"
      },
      "ingredients": [
        {
          "item": "thermal:signalum_ingot"
        },
        {
          "item": 'powah:energy_hopper_nitro'
        },
        {
          "item": 'powah:energy_hopper_nitro'
        },
        {
          "item": 'powah:energy_hopper_nitro'
        },
        {
          "item": "thermal:signalum_ingot"
        },
        {
          "item": "thermal:signalum_ingot"
        },
        {
          "item": 'powah:energy_hopper_nitro'
        },
        {
          "item": 'powah:energy_hopper_nitro'
        }
      ],
      "result": {
        "item": 'botanypotstiers:creative_terracotta_hopper_botany_pot',
        "count": 1
      }
    }).id('ultimate_utilities:creativehopperbotanypot')
  
  
  

  
  
          
      //hellfire forged 
      //nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:hellforgedingot_seeds","mysticalagriculture:hellforgedingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:hellforgedingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:hellforgedingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:hellforgedingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:hellforgedingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:hellforged_seed')
  
  
      //prediction matrix
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:predicciondematrix_seeds","mysticalagriculture:predicciondematrix_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:predicciondematrix_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:predicciondematrix_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:predicciondematrix_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:predicciondematrix_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:matriz_de_prediccion_seed')
      
  
  
      //redstone ingot
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:redstoneingot_seeds","mysticalagriculture:redstoneingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:redstoneingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:redstoneingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:redstoneingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:redstoneingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:redstone_ingot_seed')
  
      //pink slime 
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:pink_slime_seeds","mysticalagriculture:pink_slime_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:pink_slime_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:pink_slime_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:pink_slime_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:pink_slime_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:pink_slime_seed')
      
      
      //luducrite ingot
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:luducrite_ingot_seeds","mysticalagriculture:luducrite_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:luducrite_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:luducrite_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:luducrite_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:luducrite_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:luducrite_ingot_seed')
  
      //black quartz
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:black_quartz_seeds","mysticalagriculture:black_quartz_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:black_quartz_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:black_quartz_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:black_quartz_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:black_quartz_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:black_quartz_seed')
      
      //duroplast
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:duroplast_seeds","mysticalagriculture:duroplast_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:duroplast_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:duroplast_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:duroplast_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:duroplast_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:duroplast_seed')
  
      //source gem
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:source_gem_seeds","mysticalagriculture:source_gem_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:source_gem_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:source_gem_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:source_gem_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:source_gem_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:source_gem_seed')
  
      //crystal matrix
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:crystal_matrix_seeds","mysticalagriculture:crystal_matrix_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:crystal_matrix_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:crystal_matrix_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:crystal_matrix_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:crystal_matrix_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:crystal_matrix_seed')
  
  
      //Super Cacotas seed
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:super_cacotas_seeds","mysticalagriculture:super_cacotas_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:super_cacotas_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:super_cacotas_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:super_cacotas_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:super_cacotas_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:super_cacotas_seed')
  
       //flux dust
       nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:flux_dust_seeds","mysticalagriculture:flux_dust_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:flux_dust_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:flux_dust_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:flux_dust_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:flux_dust_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:flux_dust_seed')
  
      //abyssal ingot
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:abyssal_ingot_seeds","mysticalagriculture:abyssal_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:abyssal_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:abyssal_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:abyssal_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:abyssal_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:abyssal_ingot_seed')
  
      //dragon steel ingot
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:dragon_steel_ingot_seeds","mysticalagriculture:dragon_steel_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:dragon_steel_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:dragon_steel_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:dragon_steel_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:dragon_steel_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:dragon_steel_ingot_seed')
  
      //shellite ingot
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:shellite_ingot_seeds","mysticalagriculture:shellite_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:shellite_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:shellite_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:shellite_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:shellite_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:shellyte_ingot_seed')
  
      //soul infused ingot
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:soul_infused_ingot_seeds","mysticalagriculture:soul_infused_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:soul_infused_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:soul_infused_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:soul_infused_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:soul_infused_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:soul_infused_ingot_seed')
  
      //twinite ingot
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:twine_ingot_seeds","mysticalagriculture:twine_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:twine_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:twine_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:twine_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:twine_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:twine_ingot_seed')
  
      //galaxy star
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:galaxy_star_seeds","mysticalagriculture:galaxy_star_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:galaxy_star_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:galaxy_star_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:galaxy_star_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:galaxy_star_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:galaxy_star_seed')
      
      //chaos shard
      //nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:chaos_shard_seeds","mysticalagriculture:chaos_shard_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:chaos_shard_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:chaos_shard_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:chaos_shard_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:chaos_shard_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:chaos_shard_seed')
  
      //cajita feliz
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:cajita_feliz_seeds","mysticalagriculture:cajita_feliz_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:cajita_feliz_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:cajita_feliz_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:cajita_feliz_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:cajita_feliz_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:cajita_feliz_seed')
  
      //arcane gold ingot
      //nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:arcane_gold_ingot_seeds","mysticalagriculture:arcane_gold_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:arcane_gold_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:arcane_gold_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:arcane_gold_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:arcane_gold_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:arcane_gold_ingot_seed')
  
     //aleacion de andesita
     nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:andesite_alloy_seeds","mysticalagriculture:andesite_alloy_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:andesite_alloy_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:andesite_alloy_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:andesite_alloy_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:andesite_alloy_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:andesite_alloy_seed')
  
    //deorum ingot
    //nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:deorum_ingot_seeds","mysticalagriculture:deorum_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:deorum_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:deorum_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:deorum_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:deorum_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:deorum_ingot_seed')
  
    //skysteel ingot
    nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:sky_steel_ingot_seeds","mysticalagriculture:sky_steel_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:sky_steel_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:sky_steel_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:sky_steel_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:sky_steel_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:sky_steel_ingot_seed')
    
    //naquadah ingot
    nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:naquadah_seeds","mysticalagriculture:naquadah_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:naquadah_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:naquadah_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:naquadah_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:naquadah_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:naquadah_seed')
 
    //Chromium Ingot
    //nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:chromium_seeds","mysticalagriculture:chromium_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:chromium_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:chromium_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:chromium_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:chromium_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:chromium_seed')


    //dawnstone
    //nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:dawnstone_seeds","mysticalagriculture:dawnstone_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:dawnstone_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:dawnstone_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:dawnstone_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:dawnstone_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:dawnstone_seed')

    //seared bricks ingot
    nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:seared_ingot_seeds","mysticalagriculture:seared_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:seared_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:seared_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:seared_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:seared_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:seared_ingot_seed')

   //Cognition Alloy
   nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:cognition_seeds","mysticalagriculture:cognition_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:cognition_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:cognition_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:cognition_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:cognition_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:cognition_seed')

  //Nadienite Ingot
  nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:nadienite_ingot_seeds","mysticalagriculture:nadienite_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:nadienite_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:nadienite_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:nadienite_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:nadienite_ingot_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:nadienite_ingot_ingot_seed')

  //dark gem
  nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:dark_gem_seeds","mysticalagriculture:dark_gem_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:dark_gem_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:dark_gem_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:dark_gem_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:dark_gem_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:dark_gem_seed')

  //spirit gem
  nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:spirit_gem_seeds","mysticalagriculture:spirit_gem_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:spirit_gem_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:spirit_gem_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:spirit_gem_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:spirit_gem_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:spirit_gem_seed')

  //replica ingot
  //nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:replica_ingot_seeds","mysticalagriculture:replica_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:replica_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:replica_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:replica_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:replica_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:replica_ingot_seed')


 //prosperity
  nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:prosperity_shard_seed","mysticalagriculture:prosperity_shard_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:prosperity_shard"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:prosperity_shard_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:prosperity_shard_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:prosperity_shard_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:prosperity_shard_seed')


  //Fire Dragon Ingot
  nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:fire_dragon_ingot_seeds","mysticalagriculture:fire_dragon_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:fire_dragon_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:fire_dragon_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:fire_dragon_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fire_dragon_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:fire_dragon_ingot_seed')

  //Ice Dragon Ingot
  nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:ice_dragon_ingot_seeds","mysticalagriculture:ice_dragon_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:ice_dragon_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:ice_dragon_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:ice_dragon_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:ice_dragon_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:ice_dragon_ingot_seed')

   //Lightining Dragon Ingot
   nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:lightning_dragon_ingot_seeds","mysticalagriculture:lightning_dragon_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:lightning_dragon_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:lightning_dragon_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:lightning_dragon_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:lightning_dragon_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:lightning_dragon_ingot_seed')

  //Ardite
  nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:ardite_seeds","mysticalagriculture:ardite_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:ardite_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:ardite_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:ardite_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:ardite_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:ardite_seed')
   
  //Reggar Fonite Ingot
  nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:reggarfoniteblock_seeds","mysticalagriculture:reggarfoniteblock_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:reggarfoniteblock_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:reggarfoniteblock_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:reggarfoniteblock_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:reggarfoniteblock_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:reggarfoniteblock_seed')
   
  //Cuarzo Rosa
  nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:cuarzorosa_seeds","mysticalagriculture:cuarzorosa_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:cuarzorosa_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:cuarzorosa_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:cuarzorosa_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:cuarzorosa_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('ultimate_utilities:cuarzorosa_seed')


})