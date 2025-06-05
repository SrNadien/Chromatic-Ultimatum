ServerEvents.recipes( nadien => {


nadien.remove({ output:['mysticalagriculture:infusion_pedestal', 'mysticalagriculture:infusion_altar', 'mysticalagriculture:awakening_pedestal', 'mysticalagriculture:awakening_altar', 'mysticalagriculture:essence_vessel', 'mysticalagriculture:master_infusion_crystal'] })



        nadien.shaped(Item.of("mysticalagriculture:awakening_pedestal"), ["ABA", " C ", " C "], { A: "kubejs:mystical_mechanism", B: "minecraft:orange_wool", C: "mysticalagriculture:soulstone" })
        nadien.shaped(Item.of('mysticalagriculture:essence_vessel'), ["ABA", " C ", " C "], { A: "kubejs:mystical_mechanism", B: "minecraft:orange_wool", C: "mysticalagriculture:soulstone" })
        nadien.shaped(Item.of("mysticalagriculture:awakening_altar"), ["ABA", " C ", "CCC"], { A: "kubejs:mystical_mechanism", B: "minecraft:orange_wool", C: "mysticalagriculture:soulstone" })
        nadien.shaped(Item.of("mysticalagriculture:infusion_pedestal"), ["ABA", " C ", " C "], { A: "kubejs:mystical_mechanism", B: "minecraft:red_wool", C: "minecraft:stone" })
        nadien.shaped(Item.of("mysticalagriculture:infusion_altar"), ["ABA", " C ", "CCC"], { A: "kubejs:mystical_mechanism", B: "minecraft:red_wool", C: "minecraft:stone" })



        
           // essence crafting for custom seeds
           function essenceCircle(result, essenceType) {
            nadien.shaped(result, ['aaa', 'a a', 'aaa'], { a: `mysticalagriculture:${essenceType}_essence` }).id(`ultimate_utilities:mysticalagriculture/${essenceType}_essence_crafting`)
            }
            essenceCircle('allthemodium:allthemodium_ingot', 'allthemodium')
            essenceCircle('allthemodium:vibranium_ingot', 'vibranium')
            essenceCircle('allthemodium:unobtainium_ingot', 'unobtainium')
          //essenceCircle('bloodmagic:ingot_hellforged', 'hellforgedingot')
            essenceCircle('hostilenetworks:prediction_matrix', 'predicciondematrix')
            essenceCircle('extendedcrafting:redstone_ingot', 'redstoneingot')
            essenceCircle('avaritia:crystal_matrix_ingot', 'crystal_matrix')
            essenceCircle('industrialforegoing:pink_slime_ingot', 'pink_slime')
            essenceCircle('biggerreactors:ludicrite_ingot', 'luducrite_ingot')
            essenceCircle('ars_nouveau:source_gem', 'source_gem')
            essenceCircle('immersiveengineering:plate_duroplast', 'duroplast')
            essenceCircle('actuallyadditions:black_quartz', 'black_quartz')
            essenceCircle('ultimate_utilities:super_caca', 'super_cacotas')
            essenceCircle('fluxnetworks:flux_dust', 'flux_dust')
         //essenceCircle('draconicevolution:chaos_shard' , 'chaos_shard')
            essenceCircle('thermal_extra:abyssal_ingot' , 'abyssal_ingot')
            essenceCircle('thermal_extra:dragonsteel_ingot' , 'dragon_steel_ingot')
            essenceCircle('thermal_extra:shellite_ingot' , 'shellite_ingot')
            essenceCircle('thermal_extra:soul_infused_ingot' , 'soul_infused_ingot')
            essenceCircle('thermal_extra:twinite_ingot' , 'twine_ingot')
            essenceCircle('ultimate_utilities:estella_galactica' , 'galaxy_star')
            essenceCircle('ultimate_utilities:cajita_feliz' , 'cajita_feliz')
            //essenceCircle('eidolon:arcane_gold_ingot' , 'arcane_gold_ingot')/
            essenceCircle('create:andesite_alloy' , 'andesite_alloy')
            //essenceCircle('forbidden_arcanus:deorum_ingot' , 'deorum_ingot')
            essenceCircle('ultimate_utilities:nadienite_ingot' , 'nadienite_ingot')
           //essenceCircle('replication:replica_ingot', 'replica_ingot')
           //essenceCircle('createcasing:chorium_ingot', 'chromium')
            essenceCircle('megacells:sky_steel_ingot', 'sky_steel_ingot')
            essenceCircle('mekanism_extras:ingot_naquadah', 'naquadah')
          //essenceCircle('occultism:spirit_attuned_gem', 'spirit_gem')
            essenceCircle('experienceobelisk:cognitive_alloy', 'cognition')
          //essenceCircle('embers:dawnstone_ingot', 'dawnstone')
            essenceCircle('tconstruct:seared_brick', 'seared_ingot')
            essenceCircle('mysticalagriculture:prosperity_shard', 'prosperity_shard')
         //essenceCircle('evilcraft:dark_gem', 'dark_gem')
        // essenceCircle('iceandfire:dragonsteel_fire_ingot', 'fire_dragon_ingot')
         //essenceCircle('iceandfire:dragonsteel_ice_ingot', 'ice_dragon_ingot')
        // essenceCircle('iceandfire:dragonsteel_lightning_ingot', 'lightning_dragon_ingot')
         essenceCircle('tinkers_thinking:ardite_ingot', 'ardite')
        // essenceCircle('create_better_motors:reggarfonite_gem', 'reggarfoniteblock')
         essenceCircle('create:polished_rose_quartz', 'cuarzorosa')
        //  essenceCircle(, '')
        //  essenceCircle(, '')
        //  essenceCircle(, '')
      
         
         
   
     //magical soil crafting
     nadien.custom({
       type: 'mysticalagriculture:infusion',
       input: { item: 'mysticalagradditions:insanium_farmland' },
       ingredients: [
         { item: 'mysticalagradditions:dragon_scale' },
         { item: 'mysticalagradditions:insanium_block' },
         { item: 'mysticalagradditions:dragon_scale' },
         { item: 'mysticalagradditions:insanium_block' },
         { item: 'mysticalagradditions:dragon_scale' },
         { item: 'mysticalagradditions:insanium_block' },
         { item: 'mysticalagradditions:dragon_scale' },
         { item: 'mysticalagradditions:insanium_block' }
       ],
       result: { item: 'kubejs:magical_soil' }
     }).id('ultimate_utilities:soul')
   
      // Creative Essence
      nadien.shaped('mysticalagradditions:creative_essence', ['CAC', 'ABA', 'CAC'], {
        A: 'mystical_extended_tier:ouranium_block',
        C: 'mystical_extended_tier:ouranium_gemstone_block',
        B: 'mysticalagriculture:master_infusion_crystal'
      }).id('ultimate_utilities:allthetweaks/creative_essence')
  
   
   
   
     //remove gaia crux
     nadien.remove({ id: "mysticalagradditions:gaia_spirit_crux" })

    //remove infinite crux
    nadien.remove({ id: 'mystical_extended_tier:infinity_crux' })

    //remove nether star crux
    nadien.remove({ id: 'mysticalagradditions:nether_star_crux' })

    //remove nitro crystal crux
    nadien.remove({ id: 'mysticalagradditions:nitro_crystal_crux' })

     
  //neutronium seed
  nadien.custom({
    "type": "mysticalagriculture:infusion",
    "input": {
      "item": 'mysticalagriculture:prosperity_seed_base'
    },
    "ingredients": [
      {
        "item": 'avaritia:neutron_ingot'
      },
      {
        "item": 'mysticalagradditions:insanium_ingot_block'
      },
      {
        "item": 'avaritia:neutron_ingot'
      },
      {
        "item": 'mysticalagradditions:insanium_ingot_block'
      },
      {
        "item": 'avaritia:neutron_ingot'
      },
      {
        "item": 'mysticalagradditions:insanium_ingot_block'
      },
      {
        "item": 'avaritia:neutron_ingot'
      },
      {
        "item": 'mysticalagradditions:insanium_ingot_block'
      }
    ],
    "result": {
      "item": 'mysticalagriculture:neutronium_seeds'
    }
  }).id('ultimate_utilities:neutronioseed')



              //escombros ansestrales
              nadien.custom({
                "type": "cucumber:shaped_no_mirror",
                "pattern": [
                  "EE ",
                  "EE ",
                  "   "
                ],
                "key": {
                  "E": {
                    "item": "mysticalagriculture:netherite_essence"
                  }
                },
                "result": {
                  "item": 'minecraft:netherite_scrap',
                  "count": 1
                }
              }).id('ultimate_utilities:shardnetherite')


              nadien.custom({
                "type": "cucumber:shaped_no_mirror",
                "pattern": [
                  "ESE",
                  "EDE",
                  "ESE"
                ],
                "key": {
                  "E": {"item": "mysticalagriculture:netherite_essence"},
                  "D":{"item": 'minecraft:nether_star'},
                  "S":{"item": 'minecraft:netherrack'}
                },
                "result": {
                  "item": 'minecraft:ancient_debris',
                  "count": 1
                }
              }).id('ultimate_utilities:ancientdeberisore')

              nadien.shaped('mysticalagriculture:master_infusion_crystal', [
                'PRP',
                'RAR',
                'PRP'
              ], {
                P: 'mysticalagradditions:insanium_ingot',
                A: 'matc:supremium_crystal',
                R: 'mysticalagriculture:prosperity_shard'
              }).id('ultimate_utilities:master_infusion_stone')

 //ornium essence
 nadien.replaceInput({id: 'mystical_extended_tier:ornium_essence'}, 'mysticalagriculture:supremium_essence', 'mysticalagradditions:insanium_essence')



    

})