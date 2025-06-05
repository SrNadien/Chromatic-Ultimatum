ServerEvents.recipes(nadien => {



  
	nadien.recipes.createSequencedAssembly([ // start the recipe
		  Item.of('kubejs:steel_mechanism') // this is the item that will appear in JEI as the result
	  ],'kubejs:copper_mechanism',[ // the input
		  // the transitional item
	  nadien.recipes.create.filling('kubejs:incomplete_steel_mechanism', [Fluid.of('tconstruct:sky_slime', 1000), 'kubejs:copper_mechanism']),
	  nadien.recipes.create.filling('kubejs:incomplete_steel_mechanism', [Fluid.of('mekanism:sulfuric_acid', 1000), 'kubejs:incomplete_steel_mechanism']),
		  nadien.recipes.createDeploying('kubejs:incomplete_steel_mechanism',['kubejs:incomplete_steel_mechanism','create:nixie_tube']),
		  nadien.recipes.createDeploying('kubejs:incomplete_steel_mechanism',['kubejs:incomplete_steel_mechanism','createaddition:electric_motor']),
		  nadien.recipes.createDeploying('kubejs:incomplete_steel_mechanism',['kubejs:incomplete_steel_mechanism', 'kubejs:copper_mechanism']),
		  nadien.recipes.create.pressing('kubejs:incomplete_steel_mechanism', 'kubejs:steel_mechanism')
	  ]).transitionalItem('kubejs:incomplete_steel_mechanism').loops(1).id('ultimate_utilities:steelmechanism') // set the transitional item and the loops (amount of repetitions)
  
      
	  //simulated Mechanism
	  nadien.recipes.createSequencedAssembly([
	  Item.of('kubejs:simulated_mechanism') 
	  ],'ultimate_utilities:galaxy_globe',[
	  nadien.recipes.createDeploying('kubejs:simulated_base',['kubejs:simulated_base','alltheores:osmium_plate']),
	  nadien.recipes.createDeploying('kubejs:simulated_base',['kubejs:simulated_base','create_sa:portable_drill']),
	  nadien.recipes.create.filling('kubejs:simulated_base', [Fluid.of('tconstruct:molten_brass', 1000), 'minecraft:honeycomb_block']),
	  nadien.recipes.create.filling('kubejs:simulated_base', [Fluid.of('ultimate_utilities:nadienitefluid', 1000), 'kubejs:simulated_base']),
	  nadien.recipes.create.filling('kubejs:simulated_base', [Fluid.of('tconstruct:molten_slimesteel', 1000), 'kubejs:simulated_base']),
	  nadien.recipes.create.filling('kubejs:simulated_base', [Fluid.of('mob_grinding_utils:fluid_xp', 1000), 'kubejs:simulated_base']),
	  nadien.recipes.create.pressing('kubejs:simulated_base', 'kubejs:simulated_base'),
	  ]).transitionalItem('kubejs:simulated_base').loops(1).id('ultimate_utilities:simulatedmechanism')
  
  
       //enchanted mechanism
	  nadien.recipes.createSequencedAssembly([ // start the recipe
	  Item.of('kubejs:enchanted_mechanism') // this is the item that will appear in JEI as the result
  ],'create:andesite_casing',[ // the input
	  // the transitional item
	  nadien.recipes.create.filling('kubejs:incomplete_enchanted_mechanism', [Fluid.of('allthemodium:soul_lava', 1000), 'kubejs:copper_mechanism']),
	  nadien.recipes.create.filling('kubejs:incomplete_enchanted_mechanism', [Fluid.of('mekanism:oxygen', 1000), 'kubejs:incomplete_enchanted_mechanism']),
	  nadien.recipes.createDeploying('kubejs:incomplete_enchanted_mechanism',['kubejs:incomplete_enchanted_mechanism','create:precision_mechanism']),
	  nadien.recipes.createDeploying('kubejs:incomplete_enchanted_mechanism',['kubejs:incomplete_enchanted_mechanism','kubejs:copper_mechanism']),
	  nadien.recipes.createDeploying('kubejs:incomplete_enchanted_mechanism',['kubejs:incomplete_enchanted_mechanism','kubejs:basic_mechanism']),
	  nadien.recipes.create.pressing('kubejs:incomplete_enchanted_mechanism', 'kubejs:steel_mechanism')
  ]).transitionalItem('kubejs:incomplete_enchanted_mechanism').loops(1).id('ultimate_utilities:enchantedmechanism') // set the transitional item and the loops (amount of repetitions)
  
  
    //basic mechanism
	nadien.recipes.createSequencedAssembly([ // start the recipe
	Item.of('kubejs:basic_mechanism') // this is the item that will appear in JEI as the result
  ],'create:andesite_casing',[ // the input
	// the transitional item
	nadien.recipes.createDeploying('kubejs:incomplete_basic_mechanism',['kubejs:incomplete_basic_mechanism','create:cogwheel']),
	nadien.recipes.createDeploying('kubejs:incomplete_basic_mechanism',['kubejs:incomplete_basic_mechanism','create:cogwheel']),
	nadien.recipes.createDeploying('kubejs:incomplete_basic_mechanism',['kubejs:incomplete_basic_mechanism','create:andesite_alloy']),
	nadien.recipes.create.pressing('kubejs:incomplete_basic_mechanism', 'kubejs:basic_mechanism'),
  ]).transitionalItem('kubejs:incomplete_basic_mechanism').loops(1).id('ultimate_utilities:basicmechanism') // set the transitional item and the loops (amount of repetitions)
  
  //copper mechanism
  nadien.recipes.createSequencedAssembly([ // start the recipe
		  Item.of('kubejs:copper_mechanism') // this is the item that will appear in JEI as the result
	  ],'kubejs:basic_mechanism',[ // the input
		  // the transitional item
		  nadien.recipes.create.filling('kubejs:incomplete_copper_mechanism', [Fluid.of('tconstruct:sky_slime', 1000), 'kubejs:basic_mechanism']),
		  nadien.recipes.createDeploying('kubejs:incomplete_copper_mechanism',['kubejs:incomplete_copper_mechanism','create:cogwheel']),
		  nadien.recipes.createDeploying('kubejs:incomplete_copper_mechanism',['kubejs:incomplete_copper_mechanism','create:electron_tube']),
		  nadien.recipes.createDeploying('kubejs:incomplete_copper_mechanism',['kubejs:incomplete_copper_mechanism','create:precision_mechanism']),
		  nadien.recipes.create.pressing('kubejs:incomplete_copper_mechanism', 'kubejs:copper_mechanism'),
		  nadien.recipes.create.pressing('kubejs:incomplete_copper_mechanism', 'kubejs:copper_mechanism'),
	  ]).transitionalItem('kubejs:incomplete_copper_mechanism').loops(1).id('ultimate_utilities:coppermechanism') // set the transitional item and the loops (amount of repetitions)
  
		
  
      //mek mechanism
	  const nadiens = Item.of('minecraft:player_head', '{SkullOwner:{Id:[I;2118518208,-1698609149,-1383017808,204096419],Name:"SrNadien",Properties:{textures:[{Value:"ewogICJ0aW1lc3RhbXAiIDogMTczNjE4NzkxMjI4MiwKICAicHJvZmlsZUlkIiA6ICI3ZTQ2MDVjMDlhYzE0ODAzYWQ5MGQyYjAwYzJhNDNhMyIsCiAgInByb2ZpbGVOYW1lIiA6ICJTck5hZGllbiIsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS83ZGQ2YWQ2MTYyMDBkNzNkZjA4NDUyYWMyYmE1MzVhY2FhMGQ1MmU0ZDhlNWM3YjAwNDg0MjNkNGVhMDE5Nzg0IgogICAgfSwKICAgICJDQVBFIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS81NjliN2YyYTFkMDBkMjZmMzBlZmUzZjlhYjlhYzgxN2IxZTZkMzVmNGYzY2ZiMDMyNGVmMmQzMjgyMjNkMzUwIgogICAgfQogIH0KfQ=="}]}}}')
	  nadien.recipes.createSequencedAssembly([ // start the recipe
	  Item.of('kubejs:mek_mechanism') // this is the item that will appear in JEI as the result
	  ],'ultimate_utilities:nadienitebloque',[
	  nadien.recipes.create.filling('kubejs:mek_base', [Fluid.of('createaddition:bioethanol', 1000), 'kubejs:mek_base']),
	  nadien.recipes.createDeploying('kubejs:mek_base',['kubejs:mek_base','create:desk_bell']),
	  nadien.recipes.createDeploying('kubejs:mek_base',['kubejs:mek_base', nadiens,]),
	  nadien.recipes.createDeploying('kubejs:mek_base',['kubejs:mek_base','thermal:rf_coil']),
	  nadien.recipes.createDeploying('kubejs:mek_base',['kubejs:mek_base','ae2:cell_component_1k']),
	  nadien.recipes.createDeploying('kubejs:mek_base',['kubejs:mek_base','create:placard']),
	  nadien.recipes.createDeploying('kubejs:mek_base',['kubejs:mek_base','create:wand_of_symmetry']),
	  ]).transitionalItem('kubejs:mek_base').loops(1).id('ultimate_utilities:mekmechanism') // set the transitional item and the loops (amount of repetitions)
  

     //conductive mechanism
	 nadien.recipes.createSequencedAssembly([
		Item.of('kubejs:conductive_mechanism') 
		], 'create:precision_mechanism', 
		[
			// Los pasos de la secuencia
			nadien.recipes.create.pressing('create:precision_mechanism', 'create:precision_mechanism'),
			nadien.recipes.createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'createaddition:capacitor']),
			nadien.recipes.createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'createaddition:connector']),
			nadien.recipes.createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'createaddition:alternator']),
			nadien.recipes.create.pressing('create:precision_mechanism', 'create:precision_mechanism')
		]).transitionalItem('create:precision_mechanism').loops(1) .id('ultimate_utilities:conductivemechanism');
	


      //creative mechanism
	  nadien.recipes.createSequencedAssembly([ // start the recipe
		Item.of('kubejs:creative_mechanism') // this is the item that will appear in JEI as the result
	],'kubejs:mystical_mechanism',[ // the input
		// the transitional item
		nadien.recipes.create.filling('kubejs:incomplete_creative_mechanism', [Fluid.of('mekanismgenerators:tritium', 1000), 'avaritia:esmarelda_singularity']),
		nadien.recipes.createDeploying('kubejs:incomplete_creative_mechanism',['kubejs:incomplete_creative_mechanism','avaritia:infinity_catalyst']),
		  // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		nadien.recipes.createDeploying('kubejs:incomplete_creative_mechanism',['kubejs:incomplete_creative_mechanism','minecraft:ice']),
		nadien.recipes.createDeploying('kubejs:incomplete_creative_mechanism',['kubejs:incomplete_creative_mechanism','ae2:singularity']),
		nadien.recipes.createDeploying('kubejs:incomplete_creative_mechanism',['kubejs:incomplete_creative_mechanism','allthecompressed:bronze_block_9x']).keepHeldItem()
	]).transitionalItem('kubejs:incomplete_creative_mechanism').loops(1).id('ultimate_utilities:creativemechanism') // set the transitional item and the loops (amount of repetitions)


	   //ostrum mechanism
	   nadien.recipes.createSequencedAssembly([ // start the recipe
		Item.of('kubejs:ostrum_mechanism') // this is the item that will appear in JEI as the result
	],'kubejs:desh_mechanism',[ // the input
		// the transitional item
		nadien.recipes.create.filling('kubejs:incomplete_ostrum_mechanism', [Fluid.of('thermal_extra:flux_infused_oil', 1000), 'ultimate_utilities:cajita_feliz']),
		nadien.recipes.createDeploying('kubejs:incomplete_ostrum_mechanism',['kubejs:incomplete_ostrum_mechanism','create_sa:steam_engine']),
		  // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		nadien.recipes.createDeploying('kubejs:incomplete_ostrum_mechanism',['kubejs:incomplete_ostrum_mechanism', 'create_sa:heat_engine']),
		nadien.recipes.createDeploying('kubejs:incomplete_ostrum_mechanism',['kubejs:incomplete_ostrum_mechanism','create_sa:hydraulic_engine']),
		nadien.recipes.createDeploying('kubejs:incomplete_ostrum_mechanism',['kubejs:incomplete_ostrum_mechanism','tconstruct:queens_slime_ingot']).keepHeldItem()
	]).transitionalItem('kubejs:incomplete_ostrum_mechanism').loops(1).id('ultimate_utilities:ostrummechanism')
	   
	  //desh mechanism
	  nadien.recipes.createSequencedAssembly([ // start the recipe
		Item.of('kubejs:desh_mechanism') // this is the item that will appear in JEI as the result
	],'kubejs:steel_mechanism',[ // the input
		// the transitional item
		nadien.recipes.create.filling('kubejs:incomplete_desh_mechanism', [Fluid.of('thermal:glowstone', 1000), 'alltheores:osmium_plate']),
		nadien.recipes.create.filling('kubejs:incomplete_desh_mechanism', [Fluid.of('experienceobelisk:cognitium', 1000), 'ironfurnaces:augment_factory']),
		  // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		nadien.recipes.createDeploying('kubejs:incomplete_desh_mechanism',['kubejs:incomplete_desh_mechanism','matc:supremium_crystal']),
		nadien.recipes.createDeploying('kubejs:incomplete_desh_mechanism',['kubejs:incomplete_desh_mechanism','tconstruct:manyullyn_block']),
		nadien.recipes.createDeploying('kubejs:incomplete_desh_mechanism',['kubejs:incomplete_desh_mechanism','allthemodium:piglich_heart_block']),
		nadien.recipes.createDeploying('kubejs:incomplete_desh_mechanism',['kubejs:incomplete_desh_mechanism','createaddition:chocolate_cake']).keepHeldItem()
	]).transitionalItem('kubejs:incomplete_desh_mechanism').loops(1).id('ultimate_utilities:deshmechanism')
  


     //refined mechanism
	 nadien.recipes.createSequencedAssembly([ // start the recipe
		Item.of('kubejs:refined_mechanism') // this is the item that will appear in JEI as the result
	],'kubejs:conductive_mechanism',[ // the input
		// the transitional item
		nadien.recipes.create.filling('kubejs:incomplete_refined_mechanism', [Fluid.of('tconstruct:sky_slime', 1000), 'ae2:silicon']),
		nadien.recipes.createDeploying('kubejs:incomplete_refined_mechanism',['kubejs:incomplete_refined_mechanism','ae2:printed_logic_processor']),
		  // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		nadien.recipes.createDeploying('kubejs:incomplete_refined_mechanism',['kubejs:incomplete_refined_mechanism','createaddition:honey_cake']),
		nadien.recipes.createDeploying('kubejs:incomplete_refined_mechanism',['kubejs:incomplete_refined_mechanism','ae2:printed_calculation_processor']),
		nadien.recipes.createDeploying('kubejs:incomplete_refined_mechanism',['kubejs:incomplete_refined_mechanism','ae2:printed_engineering_processor']).keepHeldItem()
	]).transitionalItem('kubejs:incomplete_refined_mechanism').loops(1).id('ultimate_utilities:refinedmechanism')


	     //calorite mechanism
	    nadien.recipes.createSequencedAssembly([ // start the recipe
		Item.of('kubejs:calorite_mechanism') // this is the item that will appear in JEI as the result
		],'kubejs:ostrum_mechanism',[
		nadien.recipes.create.filling('kubejs:incomplete_calorite_mechanism', [Fluid.of('tconstruct:molten_manyullyn', 1000), 'kubejs:solid_fuel_clump']),
		nadien.recipes.createDeploying('kubejs:incomplete_calorite_mechanism',['kubejs:incomplete_calorite_mechanism','ironfurnaces:unobtainium_furnace']),
		nadien.recipes.createDeploying('kubejs:incomplete_calorite_mechanism',['kubejs:incomplete_calorite_mechanism','mysticaladaptations:insanium_reprocessor']),
		nadien.recipes.createDeploying('kubejs:incomplete_calorite_mechanism',['kubejs:incomplete_calorite_mechanism','extendedcrafting:luminessence_block']),
		nadien.recipes.createDeploying('kubejs:incomplete_calorite_mechanism',['kubejs:incomplete_calorite_mechanism','tconstruct:blood_slime_sapling']),
		nadien.recipes.createDeploying('kubejs:incomplete_calorite_mechanism',['kubejs:incomplete_calorite_mechanism','extendedcrafting:black_iron_block']),
		nadien.recipes.createDeploying('kubejs:incomplete_calorite_mechanism',['kubejs:incomplete_calorite_mechanism','ae2:fuzzy_card']),
		]).transitionalItem('kubejs:incomplete_calorite_mechanism').loops(1).id('ultimate_utilities:caloritemechanismxxl') // set the transitional item and the loops (amount of repetitions)





			//mystical mechanism
			nadien.recipes.createSequencedAssembly([ // start the recipe
				Item.of('kubejs:mystical_mechanism') // this is the item that will appear in JEI as the result
			], 'ultimate_utilities:bob_toronja',[ 
			    nadien.recipes.create.filling('kubejs:incomplete_mystical_mechanism', [Fluid.of('allthemodium:molten_allthemodium', 1000), 'kubejs:copper_mechanism']),
			    nadien.recipes.create.filling('kubejs:incomplete_mystical_mechanism', [Fluid.of('ultimate_utilities:nadienitefluid', 1000), 'ultimate_utilities:nadienite_ingot']),
				nadien.recipes.create.filling('kubejs:incomplete_mystical_mechanism', [Fluid.of('kubejs:molten_pendorite', 1000), 'kubejs:incomplete_mystical_mechanism']),
				nadien.recipes.createDeploying('kubejs:incomplete_mystical_mechanism',['kubejs:incomplete_mystical_mechanism','alltheores:diamond_plate']),
				nadien.recipes.createDeploying('kubejs:incomplete_mystical_mechanism',['kubejs:incomplete_mystical_mechanism','tconstruct:queens_slime_ingot']),
				nadien.recipes.createDeploying('kubejs:incomplete_mystical_mechanism',['kubejs:incomplete_mystical_mechanism','ultimate_utilities:cajita_feliz']),
				nadien.recipes.createDeploying('kubejs:incomplete_mystical_mechanism',['kubejs:incomplete_mystical_mechanism','ultimate_utilities:patricio_estrella']),
			]).transitionalItem('kubejs:incomplete_mystical_mechanism').loops(1).id('ultimate_utilities:mysticalmech')
	

   //radiant mechanism
   nadien.recipes.createSequencedAssembly([ // start the recipe
	Item.of('create:radiant_mechanism') // this is the item that will appear in JEI as the result
], 'create:radiant_sheet',[ // the input
	// the transitional item
	nadien.recipes.create.filling('create:incomplete_radiant_mechanism', [Fluid.of('create:chocolate', 1000), 'kubejs:copper_mechanism']),
	nadien.recipes.create.filling('create:incomplete_radiant_mechanism', [Fluid.of('create:honey', 1000), 'mysticaladaptations:insanium_reprocessor']),
	nadien.recipes.create.filling('create:incomplete_radiant_mechanism', [Fluid.of('ultimate_utilities:nadienitefluid', 1000), 'kubejs:copper_mechanism']),
	nadien.recipes.createDeploying('create:incomplete_radiant_mechanism',['create:incomplete_radiant_mechanism','ars_nouveau:glyph_summon_steed']),
	nadien.recipes.createDeploying('create:incomplete_radiant_mechanism',['create:incomplete_radiant_mechanism','allthecompressed:pumpkin_5x']),
	nadien.recipes.createDeploying('create:incomplete_radiant_mechanism',['create:incomplete_radiant_mechanism', 'mysticaladaptations:insanium_reprocessor']),
	nadien.recipes.createDeploying('create:incomplete_radiant_mechanism',['create:incomplete_radiant_mechanism','avaritia:crystal_matrix']),
]).transitionalItem('create:incomplete_radiant_mechanism').loops(1).id('ultimate_utilities:radiantmechanism')

    //mecanismo de precicion
	nadien.remove({output: 'create:precision_mechanism'})
    nadien.recipes.createSequencedAssembly([
     Item.of('create:precision_mechanism') 
     ], '#forge:plates/gold',[ 
        nadien.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
        nadien.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
        nadien.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:nuggets/iron']),
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(8).id('ultimate_utilities:presicionmechanism');  

     //steam mechanism
		nadien.remove({ output: 'create_sa:steam_engine' })
		nadien.recipes.create.sequenced_assembly(
			[
				'create_sa:steam_engine'
			],
		   'create:precision_mechanism', [
			nadien.recipes.createDeploying('create_sa:heat_engine', ['create_sa:heat_engine', 'thermal:rosin']),
			nadien.recipes.createDeploying('create_sa:heat_engine', ['create_sa:heat_engine', 'iceandfire:dragonsteel_ice_ingot']),
			nadien.recipes.createDeploying('create_sa:heat_engine', ['create_sa:heat_engine', 'create:propeller']),
			nadien.recipes.createDeploying('create_sa:heat_engine', ['create_sa:heat_engine', 'create:radial_chassis'])
		]).transitionalItem('create_sa:heat_engine').loops(1).id('ultimate_utilities:steam_engine'); 



    //heat engine
	nadien.recipes.create.sequenced_assembly([
        'create_sa:heat_engine'
	    ],
        'create_sa:steam_engine', [
       nadien.recipes.createDeploying('create:incomplete_radiant_mechanism', ['create:incomplete_radiant_mechanism', 'create:cogwheel']),
       nadien.recipes.createDeploying('create:incomplete_radiant_mechanism', ['create:incomplete_radiant_mechanism', 'iceandfire:dragonsteel_fire_ingot']),
       nadien.recipes.createDeploying('create:incomplete_radiant_mechanism', ['create:incomplete_radiant_mechanism', 'ars_nouveau:glyph_summon_steed'])
    ]).transitionalItem('create:incomplete_radiant_mechanism').loops(1).id('ultimate_utilities:heat_engine');  

        

      //hydraulic mechanism
	 nadien.recipes.create.sequenced_assembly(
        [
            'create_sa:hydraulic_engine'
        ],
       'create_sa:heat_engine', [
       nadien.recipes.createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'tconstruct:blood_slime_sapling']),
       nadien.recipes.createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'mekanism:teleportation_core']),
       nadien.recipes.createDeploying('create:precision_mechanism', ['create:precision_mechanism', 'iceandfire:dragonsteel_lightning_ingot']),
       nadien.recipes.createDeploying('create_sa:steam_engine', ['create_sa:steam_engine', 'angelring:diamond_ring'])
    ]).transitionalItem('create:precision_mechanism').loops(1).id('ultimate_utilities:hydraulic_engine'); 

  })




  