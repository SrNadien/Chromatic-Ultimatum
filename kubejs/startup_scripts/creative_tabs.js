StartupEvents.modifyCreativeTab('ironfurnaces:ironfurnaces_tab', nadien => {


nadien.add('ironfurnaces:allthemodium_furnace')
nadien.add('ironfurnaces:vibranium_furnace')
nadien.add('ironfurnaces:unobtainium_furnace')


nadien.removeDisplay('ironfurnaces:upgrade_obsidian');
nadien.removeDisplay('ironfurnaces:upgrade_iron');
nadien.removeDisplay('ironfurnaces:upgrade_gold');
nadien.removeDisplay('ironfurnaces:upgrade_diamond');
nadien.removeDisplay('ironfurnaces:upgrade_emerald');
nadien.removeDisplay('ironfurnaces:upgrade_crystal');
nadien.removeDisplay('ironfurnaces:upgrade_netherite');
nadien.removeDisplay('ironfurnaces:upgrade_copper');
nadien.removeDisplay('ironfurnaces:upgrade_silver');
nadien.removeDisplay('ironfurnaces:upgrade_silver2');
nadien.removeDisplay('ironfurnaces:upgrade_gold2');
nadien.removeDisplay('ironfurnaces:upgrade_iron2');
nadien.removeDisplay('ironfurnaces:upgrade_obsidian2');
nadien.removeDisplay('ironfurnaces:item_xmas');
nadien.removeDisplay('ironfurnaces:item_spooky');



})


StartupEvents.registry('creative_mode_tab', nadien => {
	nadien.create('ultimate_utilities:singularities_tab').icon(() => 'avaritia:infinity_catalyst').content(() => [
	'avaritia:dark_iron_ingot_singularity',
    'avaritia:addon_singularity',
    'avaritia:balloon_singularity',
    'avaritia:certus_quartz_singularity',
    'avaritia:enderium_block_singularity',
    'avaritia:singularity_emerlad_to_emerald_singularity',
    'avaritia:mateico_singularity',
    'avaritia:crafting_table_singularity',
    'avaritia:soul_berry_singularity',
    'avaritia:nether_star_singularity',
    'avaritia:flux_block_singularity',
    'avaritia:crystal_nitro_singularity',
    'avaritia:uranium_235_singularity',
    'avaritia:record_singularity',
    'avaritia:pellet_polonium_singularity',
    'avaritia:caca_singularity',
    'avaritia:neutronium_singularity',
    'avaritia:hopper_botany_pot_singularity',
    'avaritia:source_gem_singularity',
    'avaritia:track_singularity',
    'avaritia:uraninite_singularity',
    'avaritia:cheese_singularity',
    'avaritia:fusion_reactor_casing_singularity',
    'avaritia:xp_jelly_baby_singularity',
    'avaritia:esmarelda_singularity',
    'avaritia:nadienite_singularity',
    'avaritia:andesite_cassing_singularity',
    'avaritia:eternal_singularity',
    'avaritia:double_uranium_235_plate_singularity',
    'ultimate_utilities:infinityswordbalanced',
    'ultimate_utilities:infinitysword_1'
	])
})


StartupEvents.modifyCreativeTab('kubejs:kubejs_tab', nadien => {
	// Adds example item after redstone
	// Removes redstone
	nadien.removeDisplay('avaritia:dark_iron_ingot_singularity');
    nadien.removeDisplay('avaritia:addon_singularity');
    nadien.removeDisplay('avaritia:balloon_singularity');
    nadien.removeDisplay('avaritia:certus_quartz_singularity');
    nadien.removeDisplay('avaritia:enderium_block_singularity');
    nadien.removeDisplay('avaritia:singularity_emerlad_to_emerald_singularity');
    nadien.removeDisplay('avaritia:mateico_singularity');
    nadien.removeDisplay('avaritia:crafting_table_singularity');
    nadien.removeDisplay('avaritia:soul_berry_singularity');
    nadien.removeDisplay('avaritia:nether_star_singularity');
    nadien.removeDisplay('avaritia:flux_block_singularity');
    nadien.removeDisplay('avaritia:crystal_nitro_singularity');
    nadien.removeDisplay('avaritia:uranium_235_singularity');
    nadien.removeDisplay('avaritia:record_singularity');
    nadien.removeDisplay('avaritia:pellet_polonium_singularity');
    nadien.removeDisplay('avaritia:caca_singularity');
    nadien.removeDisplay('avaritia:neutronium_singularity');
    nadien.removeDisplay('avaritia:hopper_botany_pot_singularity');
    nadien.removeDisplay('avaritia:source_gem_singularity');
    nadien.removeDisplay('avaritia:track_singularity');
    nadien.removeDisplay('avaritia:uraninite_singularity');
    nadien.removeDisplay('avaritia:cheese_singularity');
    nadien.removeDisplay('avaritia:fusion_reactor_casing_singularity');
    nadien.removeDisplay('avaritia:xp_jelly_baby_singularity');
    nadien.removeDisplay('avaritia:esmarelda_singularity');
    nadien.removeDisplay('avaritia:nadienite_singularity');
    nadien.removeDisplay('avaritia:andesite_cassing_singularity');
    nadien.removeDisplay('avaritia:eternal_singularity');
})


StartupEvents.modifyCreativeTab('minecraft:redstone_tab', nadien => {
    nadien.removeDisplay('minecraft:tnt');
    })


    StartupEvents.modifyCreativeTab('ultimate_utilities:utimate_utilities_tab', nadien => {
        nadien.removeDisplay('ultimate_utilities:infinityswordbalanced');
        nadien.removeDisplay('ultimate_utilities:infinitysword_1');
        })