ServerEvents.recipes(nadien => {



    nadien.remove({output: ['enderstorage:ender_chest', 'enderstorage:ender_tank', 'enderstorage:ender_pouch']})

    nadien.shaped('enderstorage:ender_chest', [
        'BWB',
        'OCO',
        'BPB'
    ], {
        'P': '#forge:ender_pearls',     
        'O': '#forge:obsidian',         
        'C': 'minecraft:ender_chest',    
        'B': 'ultimate_utilities:nadienite_ingot', //ingot custom mod   
        'W': '#forge:wool'             
    }).id('galaxyorigenes:enderchest')


    nadien.shaped('enderstorage:ender_pouch', [
        'BLB',
        'LPL',
        'BWB'
    ], {
        'P': '#forge:ender_pearls',    // Perlas de Ender
        'L': '#forge:leather',         // Cuero
        'B': 'ultimate_utilities:nadienite_ingot', // Polvo de Blaze
        'W': '#forge:wool'             // Lana
    }).id('galaxyorigenes:enderpouch')


    nadien.shaped('enderstorage:ender_tank', [
        'BWB',
        'OCO',
        'BPB'
    ], {
        'P': '#forge:ender_pearls',    // Perlas de Ender
        'O': '#forge:obsidian',        // Obsidio
        'C': 'minecraft:cauldron',     // Caldero
        'B': 'ultimate_utilities:nadienite_ingot',    // Varita de Blaze
        'W': '#forge:wool'             // Lana
    }).id('galaxyorigenes:ender_tank')




})