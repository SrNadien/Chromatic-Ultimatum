ServerEvents.recipes( nadien => {



   nadien.recipes.summoningrituals
    .altar('avaritia:eternal_singularity')
    .sacrifice('minecraft:warden')
    .input('ultimate_utilities:catalizador')
    .input('ultimate_utilities:planos')
    .input('ultimate_utilities:combustible_radiactivo')
    .input('ultimate_utilities:agujero_negro')
    .input('ultimate_utilities:brujula_maldita')
    .input('ultimate_utilities:semilla')
    .input('ultimate_utilities:alma_de_dragon')
    .input('ultimate_utilities:transmisor')
	.blockBelow('ultimate_utilities:nadienitebloque')
	.itemOutput('ultimate_utilities:estella_galactica')
	.recipeTime(60)
  .id('ultimate_utilities:estrella_galactica')
   

    //Black hole
   nadien.shaped('ultimate_utilities:agujero_negro', ["asd", "fgh", "jkl"], {
        a: "allthecompressed:oak_log_5x",
        s: "allthecompressed:iron_block_5x",
        d: "allthecompressed:dirt_5x",
        f: "allthecompressed:redstone_block_5x",
        g: "allthecompressed:cobblestone_6x",
        h: "allthecompressed:gold_block_5x",
        j: "allthecompressed:obsidian_5x",
        k: "allthecompressed:gravel_5x",
        l: "allthecompressed:sand_5x"
      }).id('ultimate_utilities:pulsating_black_hole')

  // Philosopher's Fuel
 nadien.shaped('ultimate_utilities:combustible_radiactivo', ['ACB', 'DEF', 'GHI'], {
    A: 'generatorgalore:ender_generator',
    B: 'ironfurnaces:million_furnace'  ,
    C: Item.of('rftoolsutility:syringe', '{level:10,mobId:"allthemodium:piglich",mobName:"allthemodium:piglich"}'),
    D: 'solarflux:sp_7',
    E: 'mysticalagradditions:insanium_coal_block',
    F: Item.of('bhc:soul_heart_amulet', '{bhc_itemlist:{Items:[{Count:10b,Slot:0,id:"bhc:red_heart_canister"},{Count:10b,Slot:1,id:"bhc:yellow_heart_canister"},{Count:10b,Slot:2,id:"bhc:green_heart_canister"},{Count:10b,Slot:3,id:"bhc:blue_heart_canister"},{Count:10b,Slot:4,id:"bhc:soul_heart_canister"}],Size:5},heart_amount:[I;20,20,20,20,20]}'),
    G: 'mysticalagriculture:awakened_supremium_furnace',
    H: 'psi:psigem_block',
    I: 'enderio:sentient_ender'
    }).id('ultimate_utilities:philosophers_fuel')

  // Improbable Probability Device
 nadien.shaped('ultimate_utilities:planos', ['ABA', 'CGE', 'FDF'], {
    A: 'mekanism:pellet_antimatter',
    B: 'enderio:vibrant_capacitor_bank',
    C: 'megacells:cell_component_16m',
    D: 'solarpanels:ultimate_hybrid_solar_panel',
    E: 'rftoolsutility:flight_module',
    F: Item.of('powah:battery_nitro', '{powah_tile_data:{energy_stored_main_energy:2000000000L}}').weakNBT(),
    G: 'alexsmobs:mysterious_worm',
    }).id('ultimate_utilities:improbable_probability_device')

    // Withers Compass
   nadien.shaped('ultimate_utilities:brujula_maldita', ['DCD', 'ABA', 'DED'], {
        A: 'generatorgalore:netherstar_generator',
        B: 'industrialforegoing:wither_builder',
        C: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:wither"}}').strongNBT(),
        D: 'thermal_more:mega_upgrade_augment',
        E: 'reliquary:witherless_rose'
      }).id('ultimate_utilities:withers_compass')

    // Nexium Emitter
   nadien.shaped('ultimate_utilities:transmisor', ['ASB', 'HCF', 'GED'], {
        A: 'powah:player_transmitter_nitro',
        B: Item.of('ae2wtlib:wireless_universal_terminal', '{crafting:1b,ex_pattern_access:1b,internalMaxPower:3200000.0d}'),
        S: 'aeinfinitybooster:dimension_card',
        H: 'avaritia:endest_pearl',
        F: 'mekanism:module_gravitational_modulating_unit',
        D: 'create:mechanical_arm',
        E: 'ae2:singularity',
        C: 'xnet:wireless_router',
        G: 'exchangers:end_exchanger'
      }).id('ultimate_utilities:nexium_emitter')

  // Dragon Soul
 nadien.shaped('ultimate_utilities:alma_de_dragon', ['CDA', 'XNY', 'BGE'], {
    C: 'mysticalagradditions:dragon_scale',
    D: 'occultism:soul_gem',
    A: 'minecraft:dragon_egg',
    N: 'allthemodium:piglich_heart_block',
    B: 'mysticalagradditions:creative_essence',
	  G: 'advanced_ae:recharging_card',
    E: 'ars_nouveau:summon_focus',
    X: 'angelring:energetic_angel_ring',
    Y: 'ironfurnaces:rainbow_core'
  }).id('ultimate_utilities:dragon_soul')

  // dimensional_seed
 nadien.shaped('ultimate_utilities:semilla', ['ABC', 'DEF', 'GHI'], {
    A: 'mysticalagriculture:nitro_crystal_seeds',
    B: 'thermal_extra:dragonsteel_ingot',
    C: 'mysticalagriculture:dragon_egg_seeds',
    D: 'thermal_extra:twinite_ingot',
    E: 'thermalendergy:endergy_upgrade_3',
    F: 'thermal_extra:shellite_ingot',
    G: 'mysticalagriculture:neutronium_seeds',
    H: 'thermal_extra:soul_infused_ingot',
    I: 'mysticalagriculture:nether_star_seeds'
    }).id('ultimate_utilities:dimensional_seed')

  // Oblivion Shard
 nadien.shaped('ultimate_utilities:catalizador', ['DAB', 'ACA', 'BAE'], {
    A: 'enderio:octadic_capacitor',
    D: 'avaritia:end_crafting_table',
    E: 'modularrouters:modular_router',
    C: 'mekanism_extras:infinite_induction_cell',
    B: 'ae2:quantum_entangled_singularity'
  }).id('ultimate_utilities:oblivion_shard')


})