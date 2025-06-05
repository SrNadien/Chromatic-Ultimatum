
Ponder.registry((nadien) => {
    nadien.create(['mekanismgenerators:fission_reactor_casing', 'mekanismgenerators:fission_reactor_logic_adapter', 'mekanismgenerators:fission_reactor_port', 'mekanismgenerators:reactor_glass', 'mekanismgenerators:fission_fuel_assembly', 'mekanismgenerators:control_rod_assembly']).scene("reactor_fission_mekanism", "Reactor Fission Mekanism", "kubejs:reactor_fission_mekanism", (scene, util) => {
        scene.showStructure();
        
 
        scene.idle(10);


  
        

        scene.text(60, "Reactor De Fission Mekanism", [2.0, 2.5, 2.5]).colored(PonderPalette.RED).placeNearTarget().attachKeyFrame();


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
        nadien.createTag("reactor_fission_mekanism", 'mekanismgenerators:fission_fuel_assembly', "Controlador Rentable AE2.", "!By SrNadien¡", "kubejs:laser_drill", [
            // some default items
            'ae2:controller' , 
        ]);
    });