
Ponder.registry((nadien) => {

    //controlador
    nadien.create(['ae2:controller']).scene("controlador_ae2", "Setup perfecto Controlador AE2", "kubejs:controlador_ae2", (scene, util) => {
        scene.showStructure();
        scene.idle(10);
        scene.text(60, "Controlador AE2", [2.0, 2.5, 2.5]).colored(PonderPalette.RED).placeNearTarget().attachKeyFrame();
    })

    //pc
    nadien.create(['ae2:crafting_accelerator', 'ae2:crafting_unit', 'ae2:256k_crafting_storage', 'ae2:me_p2p_tunnel']).scene("pc_applied", "PC Applied", "kubejs:pc_applied", (scene, util) => {
        scene.showStructure();
        scene.idle(10);
        scene.text(60, "Cerebro AE2", [2.0, 2.5, 2.5]).colored(PonderPalette.RED).placeNearTarget().attachKeyFrame();


    })

    //ensambladora molecular
    nadien.create(['ae2:pattern_provider', 'ae2:molecular_assembler', 'ae2:me_p2p_tunnel']).scene("ensambladora_molecular", "Ensambladora Molecular", "kubejs:ensambladora_molecular", (scene, util) => {
        scene.showStructure();
        scene.idle(10);
        scene.text(60, "Ensabmladoa Molecular", [2.0, 2.5, 2.5]).colored(PonderPalette.RED).placeNearTarget().attachKeyFrame();
    })
    })


    Ponder.tags((nadien) => {



        //controlador
        nadien.createTag("controlador_ae2", 'ae2:controller', "Controlador Rentable AE2.", "!By SrNadien¡", "kubejs:controlador_ae2", [
            // some default items
            'ae2:controller' , 
        ]);



        //cerebro ae2
        nadien.createTag("pc_applied", 'ae2:256k_crafting_storage', "Cerebro AE2.", "!By SrNadien¡", "kubejs:pc_applied", [
            // some default items
            'ae2:256k_crafting_storage' , 
        ]);

        nadien.createTag("ensambladora_molecular", 'ae2:molecular_assembler', "Ensambladora Molecular", "!By SrNadien¡", "kubejs:ensambladora_molecular", [
            // some default items
            'ae2:molecular_assembler' , 
        ]);


    });