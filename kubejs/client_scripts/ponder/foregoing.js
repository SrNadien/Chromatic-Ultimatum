
Ponder.registry((event) => {
    event.create(['industrialforegoing:ore_laser_base' , 'industrialforegoing:laser_drill', 'mekanism:ultimate_energy_cube']).scene("laser_drill", "punto perfecto laser ore drill",  "kubejs:laser_drill", (scene, util) => {
        scene.showStructure();
        
 
        scene.idle(10);


  
        

        scene.text(60, "Lasser Drill", [2.0, 2.5, 2.5]).colored(PonderPalette.RED).placeNearTarget().attachKeyFrame();


    })


    })


    Ponder.tags((event) => {
        /**
         * "kubejs:getting_started" -> the tag name
         * "minecraft:paper"        -> the icon
         * "Getting Started"        -> the title
         * "This is a description"  -> the description
         * [...items]               -> default items
         */
        event.createTag("laser_drill", 'industrialforegoing:ore_laser_base', "Laser Drill config.", "!By SrNadien¡", "kubejs:laser_drill", [
            // some default items
            'industrialforegoing:ore_laser_base' , 
        ]);
    });