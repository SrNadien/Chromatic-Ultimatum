StartupEvents.registry('item', event =>{
	event.create('basic_mechanism').displayName('Basic mechanism')
	event.create('incomplete_basic_mechanism').displayName('Incomplete basic mechanism')
	event.create('copper_mechanism').displayName('Copper mechanism')
	event.create('incomplete_copper_mechanism').displayName('Incomplete copper mechanism')
	event.create('steel_mechanism').displayName('Steel mechanism')
	event.create('incomplete_steel_mechanism').displayName('Incomplete steel mechanism')
	event.create('enchanted_mechanism').displayName('Enchanted mechanism')
	event.create('incomplete_enchanted_mechanism').displayName('Incomplete enchanted mechanism')
	event.create('conductive_mechanism').displayName('Conductive mechanism')
	event.create('incomplete_conductive_mechanism').displayName('Incomplete conductive mechanism')
	event.create('mystical_mechanism').displayName('Mystical mechanism')
	event.create('incomplete_mystical_mechanism').displayName('Incomplete mystical mechanism')
	event.create('simulated_base').displayName('Simulated base')
	event.create('simulated_mechanism').displayName('Simulated mechanism')
	event.create('mek_mechanism').displayName('Mek mechanism')
	event.create('mek_base').displayName('Mek base')
	event.create('incomplete_press').texture('kubejs:item/incomplete_basic_control_circuit').maxStackSize(64).displayName('Circuito basico Incompleto')
	event.create('universal_press').texture('kubejs:item/universal_press').maxStackSize(64).displayName('Universal Press');



	event
	.create("avaritia:dark_iron_ingot_singularity")
	.displayName("Dark Iron Ingot Singularity");
  
	  event
	  .create("avaritia:addon_singularity")
	  .displayName("Prossesing Addon Tier 2");
  
	event
	  .create("avaritia:balloon_singularity")
	  .displayName("Balloon Singularity");
  
	event
	  .create("avaritia:certus_quartz_singularity")
	  .displayName("Certus Quartz Singularity");
  
	event
	  .create("avaritia:enderium_block_singularity")
	  .displayName("Enderium Block Singularity");
  
	event
	  .create("avaritia:singularity_emerlad_to_emerald_singularity")
	  .displayName("Singularidad De Singularidad De Esmerlda singularity");
  
	event
	  .create("avaritia:mateico_singularity")
	  .displayName("Mateico Singularity");
  
	event
	  .create("avaritia:crafting_table_singularity")
	  .displayName("Crafting Table Ingot Singularity");
  
	event
	  .create("avaritia:soul_berry_singularity")
	  .displayName("Soul Berry Singularity");
  
	event
	  .create("avaritia:nether_star_singularity")
	  .displayName("Nether Star Singularity");
  
	event
	  .create("avaritia:flux_block_singularity")
	  .displayName("Flux Block Singularity");
  
	event
	  .create("avaritia:crystal_nitro_singularity")
	  .displayName("Nitro Crystal Singularity");
  
	event
	  .create("avaritia:uranium_235_singularity")
	  .displayName("Uranium Cake Singularity");
  
	event
	  .create("avaritia:record_singularity")
	  .displayName("Record Fragment Singularity");
  
	event
	  .create("avaritia:pellet_polonium_singularity")
	  .displayName("Polonium Pellet Singularity");
  
	event
	  .create("avaritia:caca_singularity")
	  .displayName("Caca Singularity");
  
	event
	  .create("avaritia:neutronium_singularity")
	  .displayName("Neutronium Singularity");
  
	event
	  .create("avaritia:hopper_botany_pot_singularity")
	  .displayName("Hopper Botany Pot Singularity");
  
	event
	  .create("avaritia:source_gem_singularity")
	  .displayName("Source Gem Singularity");
  
	event
	  .create("avaritia:track_singularity")
	  .displayName("Train Track Singularity");
  
	event
	  .create("avaritia:uraninite_singularity")
	  .displayName("Uraninite Singularity");
  
	event.create("avaritia:cheese_singularity").displayName("Cheese Singularity");
	event
	  .create("avaritia:fusion_reactor_casing_singularity")
	  .displayName("Nuclear Fussion Singularity");
	event
	  .create("avaritia:xp_jelly_baby_singularity")
	  .displayName("Xp Jelly Baby Singularity");

	event
	  .create("avaritia:esmarelda_singularity")
	  .displayName("Esmarelda singularity");

	//event
	  //.create("avaritia:ethereal_singularity")
	  //.displayName("Ethereal singularity");

	//event
	  //.create("avaritia:chaotic_singularity")
	  //.displayName("Chaotic singularity");

	event
	  .create("avaritia:nadienite_singularity")
	  .displayName("Nadienite singularity");

	//event
	 // .create("avaritia:terra_steel_singularity")
	 // .displayName("Terra Steel singularity");//

	event
	  .create("avaritia:andesite_cassing_singularity")
	  .displayName("Andesite Cassing singularity");

	  event
	  .create("avaritia:eternal_singularity")
	  .displayName("Andesite Cassing singularity");

	  event
	  .create("avaritia:double_uranium_235_plate_singularity")
	  .displayName("Uranium 235 Singularity");


  
  
    event
	.create("compactmachines:atom_enlarger")
	.displayName("Atom Enlarging Module");


	  event
	  .create("compactmachines:atom_shrinker")
	  .displayName("Atom Shirinking Module");
  
  

	  let item = (name) => {
		let id = name.toLowerCase().replace(/ /g, "_");
		event.create(id).texture(`kubejs:item/${id}`).displayName(name);
	  };
	  let mechanism = (name) => {
		let id = name.toLowerCase();
		event.create(`incomplete_${id}_mechanism`).texture(`kubejs:item/incomplete_${id}_mechanism`).displayName(`Incomplete ${name} Mechanism`);
		event.create(`${id}_mechanism`).texture(`kubejs:item/${id}_mechanism`).displayName(`${name} Mechanism`);
	  };
	
	
	
	  mechanism("Desh");
	  mechanism("Refined");
	  mechanism("Ostrum");
	  mechanism("Calorite");
	  mechanism("Creative");
	
	  item("Steel Rod");
	  item("Zinc Hand");
	  item("Solid Fuel Clump");


	  event.create('create:radiant_mechanism').texture("kubejs:item/radiant_mechanism").displayName('Radiant Mechanism').glow(true)
      event.create('create:incomplete_radiant_mechanism', 'create:sequenced_assembly').texture("kubejs:item/incomplete_radiant_mechanism").displayName('Incomplete Radiant Mechanism').glow(false)
      event.create('create:incomplete_engineering_circuit', 'create:sequenced_assembly').displayName('Incomplete Engineering Circuit').texture("kubejs:item/radiant_mechanism")
	  event.create('create:radiant_coil').glow(true).texture("kubejs:item/radiant_coil").displayName('Radiant Induction Coil')
	  event.create('create:radiant_sheet').glow(true).texture("kubejs:item/radiant_sheet").displayName('Radiant Sheet')
	  event.create('hostilenetworks:glitch_heart').glow(true).texture("kubejs:item/glitch_heart").displayName('Glitched Hearth')
	  event.create('hostilenetworks:glitch_fragment').glow(true).texture("kubejs:item/glitch_fragment").displayName('Glitched Fragment')



})

