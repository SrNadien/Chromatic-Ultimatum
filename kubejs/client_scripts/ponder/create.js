Ponder.registry((nadien) => {



    //anesite cassing
    nadien.create(['create:andesite_casing', 'minecraft:stripped_oak_log']).scene("andesite_cassing", "Crear revestidor De Andesita Automatica (Funciona Con Applied)",  "kubejs:andesite_cassing_automatic", (scene, util) => {
        scene.showStructure();
        
 
        scene.idle(10);


  
        

        scene.text(60, "Revestidor De Andesita", [2.0, 2.5, 2.5]).colored(PonderPalette.RED).placeNearTarget().attachKeyFrame();


    })


    //madera automatica
    nadien.create(['#minecraft:logs']).scene("madera_automaticar", "Madera Automatica",  "kubejs:madera_create", (scene, util) => {
        scene.showStructure();
        
 
        scene.idle(10);


  
        

        scene.text(60, "Maderinchis Automatica", [2.0, 2.5, 2.5]).colored(PonderPalette.RED).placeNearTarget().attachKeyFrame();


    })


    })


    Ponder.tags((nadien) => {
        nadien.createTag("andesite_cassing", 'create:andesite_casing', "Revestidor De nadesita Automatico.", "!By SrNadien¡", "kubejs:andesite_cassing_automatic", [
            // some default items
            'create:andesite_casing' ,
            'minecraft:stripped_oak_log' 
        ]);


        nadien.createTag("madera_automaticar", 'minecraft:birch_sapling', "Revestidor De nadesita Automatico.", "!By SrNadien¡", 'kubejs:madera_create', [
            // some default items
            'minecraft:birch_sapling'
        ]);
    });


    