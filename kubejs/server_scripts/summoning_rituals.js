ServerEvents.recipes(nadien => {

    //altar
    nadien.shaped('summoningrituals:altar', [`GRG`, `SWS`, ` S `], {
        G: `minecraft:gold_ingot`,
        R: `minecraft:red_carpet`,
        S: `minecraft:stone`,
        W: `minecraft:oak_log`
    }).id('ultimate_utilities:altar')

    //blizz
    nadien.recipes.summoningrituals
    .altar('minecraft:blaze_powder')
    .sacrifice('minecraft:blaze')
    .input('2x minecraft:ice')
    .input('4x minecraft:snowball')
    .input('2x minecraft:snow_block')
    .mobOutput('thermal:blizz')
    .id('ultimate_utilities:blizz')

    //basalz
    nadien.recipes.summoningrituals
    .altar('minecraft:blaze_powder')
    .sacrifice('minecraft:blaze')
    .input('4x mekanism:dust_obsidian')
    .input('2x minecraft:stone')
    .input('minecraft:dirt')
    .mobOutput('thermal:basalz')
    .id('ultimate_utilities:basalz')

    //chicken
    nadien.recipes.summoningrituals
    .altar('minecraft:wheat_seeds')
    .input('2x minecraft:dirt')
    .input('minecraft:grass')
    .input('2x minecraft:bone_meal')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .mobOutput('minecraft:chicken')
    .id('ultimate_utilities:pollo')

    //cow
    nadien.recipes.summoningrituals
    .altar('minecraft:wheat')
    .input('minecraft:leather')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:dirt')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:hay_block')
    .mobOutput('minecraft:cow')
    .id('ultimate_utilities:vaca')

    //sheep
    nadien.recipes.summoningrituals
    .altar('minecraft:string')
    .input('2x minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:white_wool')
    .mobOutput('minecraft:sheep')
    .id('ultimate_utilities:oveja')

    //pig
    nadien.recipes.summoningrituals
    .altar('minecraft:carrot')
    .input('2x minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('thermal:carrot_block')
    .mobOutput('minecraft:pig')
    .id('ultimate_utilities:cerdo')

    //fox
    nadien.recipes.summoningrituals
    .altar('minecraft:sweet_berries')
    .input('2x minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:spruce_sapling')
    .mobOutput('minecraft:fox')
    .id('ultimate_utilities:zorro')

    //bat
    nadien.recipes.summoningrituals
    .altar('minecraft:torch')
    .input('2x minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:coal_block')
    .mobOutput('minecraft:bat')
    .id('ultimate_utilities:murcielago')

    //wolf
    nadien.recipes.summoningrituals
    .altar('minecraft:bone')
    .input('2x minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:bone_block')
    .mobOutput('minecraft:wolf')
    .id('ultimate_utilities:lobo')

    //cat
    nadien.recipes.summoningrituals
    .altar('minecraft:cod')   
    .input('2x minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:cooked_cod')
    .mobOutput('minecraft:cat')
    .id('ultimate_utilities:gato')
    
    //bee
    nadien.recipes.summoningrituals
    .altar('minecraft:glass_bottle')   
    .input('2x minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:sugar')
    .mobOutput('minecraft:bee')
    .id('ultimate_utilities:abeja')

    //slime
    nadien.recipes.summoningrituals
    .altar('minecraft:milk_bucket')
    .input('4x #forge:slimeballs')
    .input('2x minecraft:stone')
    .input('minecraft:dirt')
    .mobOutput('minecraft:slime')
    .id('ultimate_utilities:slime')

    //squid
    nadien.recipes.summoningrituals
    .altar('minecraft:water_bucket')
    .input('4x minecraft:black_dye')
    .input('2x minecraft:stone')
    .input('minecraft:dirt')
    .mobOutput('minecraft:squid')
    .id('ultimate_utilities:calamar')

    //piglich
    nadien.recipes.summoningrituals
    .altar('ars_creo:starbuncle_wheel')
    .input('3x allthemodium:unobtainium_ingot')
    .input('mekanism:yellow_cake_uranium')
    .input('4x mysticalagriculture:soulium_dust')
    .mobOutput('allthemodium:piglich')
    .id('ultimate_utilities:piglitch')


      //wither
      nadien.recipes.summoningrituals
      .altar('ultimate_utilities:chancla')
      .input('3x minecraft:wither_skeleton_skull')
      .input('4x minecraft:soul_sand')
      .blockBelow('minecraft:soul_soil')
      .sacrifice('minecraft:wither_skeleton', 3)
      .sacrificeRegion(3, 3)
      .mobOutput('minecraft:wither')
      .id('ultimate_utilities:wither_boss')


    //dragon del end
    nadien.recipes.summoningrituals
    .altar('extendedcrafting:flux_star')
    .input('3x minecraft:shulker_shell')
    .input('4x minecraft:end_crystal')
    .blockBelow('tconstruct:seared_bricks')
    .sacrifice('minecraft:enderman', 8)
    .sacrificeRegion(5, 5)
    .mobOutput('minecraft:ender_dragon')
    .id('ultimate_utilities:ender_dragon')


      //soulstone
      nadien.recipes.summoningrituals
      .altar('mysticalagriculture:soulium_gemstone')
      .input('4x mysticalagriculture:soulium_dust')
      .input('4x minecraft:basalt')
      .input('4x minecraft:cobblestone')
      .input('4x minecraft:cobbled_deepslate')
      .blockBelow('minecraft:soul_sand')
      .itemOutput('mysticalagriculture:soulstone_cobble')
      .recipeTime(10)
      .id('ultimate_utilities:soul_stone')


    //warden
    nadien.recipes.summoningrituals
    .altar('minecraft:sculk')
    .input('4x minecraft:sculk_vein')
    .input('4x minecraft:sculk_sensor')
    .input('4x minecraft:sculk_catalyst')
    .input('4x minecraft:sculk_shrieker')
    .input('4x minecraft:calibrated_sculk_sensor')
    .blockBelow('minecraft:sculk')
    .sacrifice('minecraft:iron_golem', 4)
    .sacrificeRegion(5, 5)
    .mobOutput('minecraft:warden')
    .id('ultimate_utilities:warden')


        //shulker
  


      //wilden
      nadien.recipes.summoningrituals
     .altar('ars_nouveau:ritual_wilden_summon')
     .input('ars_nouveau:wilden_horn')
     .input('ars_nouveau:wilden_spike')
     .input('ars_nouveau:wilden_wing')
     .sacrificeRegion(5, 5)
     .mobOutput('ars_nouveau:wilden_guardian')
     .id('ultimate_utilities:wilden')



})