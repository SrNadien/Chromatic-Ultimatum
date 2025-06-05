
Ponder.registry((nadien) => {
    nadien.create(['pneumaticcraft:pressure_chamber_glass', 'pneumaticcraft:pressure_chamber_interface', 'pneumaticcraft:pressure_chamber_valve', 'pneumaticcraft:pressure_chamber_wall']).scene("presurechamber", "Reactor Fission Mekanism", "kubejs:presurechamber", (scene, util) => {
        scene.showStructure();
        
 
        scene.idle(10);


  
        

        scene.text(60, "Camara De Presion", [2.0, 2.5, 2.5]).colored(PonderPalette.RED).placeNearTarget().attachKeyFrame();


    })


    })


    Ponder.tags((nadien) => {
        /**
         * "kubejs:getting_started" -> the tag name
         * "minecraft:paper"        -> the icon
         * "Getting Started"        -> the title
         * "This is a description"  -> the description
         * [...items]               -> default items
         */
        nadien.createTag("presurechamber", 'pneumaticcraft:pressure_chamber_wall', "Camara De Presion Basica.", "!By SrNadien¡", "kubejs:presurechamber", [
            // some default items
            'pneumaticcraft:pressure_chamber_interface' , 
        ]);
    });