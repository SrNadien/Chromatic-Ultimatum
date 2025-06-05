ServerEvents.tags('item', nadien => {
    nadien.remove('forge:seeds', '#mysticalagriculture:seeds')
    nadien.remove('tombstone:seeds', '#mysticalagriculture:seeds')  
    
    //espadas mod custom
    nadien.remove('minecraft:swords', "ultimate_utilities:infinitysword_1")
    nadien.remove('minecraft:swords', "ultimate_utilities:infinityswordbalanced")
    nadien.remove('minecraft:swords', "ultimate_utilities:hellfiresword")
    nadien.remove('minecraft:swords', "ultimate_utilities:infinitykey")

    //allthemodium
    nadien.remove('minecraft:swords', "allthemodium:allthemodium_sword")
    nadien.remove('forge:swords', "allthemodium:allthemodium_sword")
    nadien.remove('minecraft:swords', "allthemodium:allthemodium_sword")
    nadien.remove('forge:swords', "allthemodium:alloy_sword")


        //applied energistics
        nadien.add("ae2:all_fluix", "gtceu:fluix_gem")
        nadien.add("ae2:all_certus_quartz", "gtceu:charged_certus_quartz_gem")
        nadien.add("forge:gems/certus_quartz", "gtceu:charged_certus_quartz_gem")
        nadien.add("forge:singularities/ultimate", "kubejs:mote_of_omnium")
        nadien.add("forge:dusts/quartz", "gtceu:nether_quartz_dust")

        // enderio!!!!
    nadien.add("forge:heads", "enderio:enderman_head")
    nadien.remove("forge:gears/wood", "enderio:wood_gear")
    nadien.remove("forge:gears/stone", "enderio:stone_gear")
    nadien.remove("forge:gears/iron", "enderio:iron_gear")
    nadien.remove("forge:gears/dark_steel", "enderio:dark_bimetal_gear")


    // Endgame tools
    nadien.add("forge:tools/files", "kubejs:infinity_file")
    nadien.add("forge:tools/hammers", "kubejs:infinity_hammer")
    nadien.add("forge:tools/screwdrivers", "kubejs:infinity_screwdriver")
    nadien.add("forge:tools/wrenches", "kubejs:infinity_wrench")
    nadien.add("forge:tools/wire_cutters", "kubejs:infinity_wire_cutter")

    
})
