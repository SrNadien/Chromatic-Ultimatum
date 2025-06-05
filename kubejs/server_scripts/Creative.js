ServerEvents.recipes(nadien => {


      


        //celda creatva aplied energistics
        nadien.custom({
          type: 'powah:energizing',
          ingredients: [
            Ingredient.of('megacells:mega_energy_cell').toJson(),
            Ingredient.of('megacells:mega_energy_cell').toJson(),
            Ingredient.of('ultimate_utilities:estella_galactica').toJson(),
            Ingredient.of('megacells:mega_energy_cell').toJson(),
            Ingredient.of('megacells:mega_energy_cell').toJson(),
            Ingredient.of('avaritia:infinity',).toJson(),
          ],
          energy: '2147483647',
          result: Item.of('ae2:creative_energy_cell').toJson()
        }).id(`ultimate_utilities:energizing/ae2_creative_energy_cell`)
      
        nadien.recipes.create.mechanical_crafting("ae2:creative_energy_cell", [
          "CCCCXCCCC",
          "CYYYXYYYC",
          "CYYRXRYYC",
          "CYYYXYYYC",
          "XXXXXXXXX",
          "CYYYXYYYC",
          "CYYRXRYYC",
          "CYYYXYYYC",
          "CCCCXCCCC"
        ], {
          Y: "ae2:dense_energy_cell",
          X: "ae2:engineering_processor",
          C: "avaritia:infinity_ingot",
          R: 'ultimate_utilities:estella_galactica'
        }).id('ultimate_utilities:celdacreativaaedos')



        //cubo de energia creativa mekanism
        // nadien.shaped('mekanism:creative_energy_cube', ['ATA', 'UCU', 'ATA'], {
        //   A: 'mekanism:alloy_atomic',
        //   T: 'mekanism:energy_tablet',
        //   U: 'allthemodium:unobtainium_block',
        //   C: 'mekanism:ultimate_energy_cube'
        // }).id('ultimate_utilities:mekanism/creative_energy_cube')


        nadien.custom({
          type: 'powah:energizing',
          ingredients: [
            Ingredient.of('mekanism:creative_energy_cube',).toJson(),
            Ingredient.of('mekanism:creative_energy_cube',).toJson(),
            Ingredient.of('ultimate_utilities:estella_galactica').toJson(),
            Ingredient.of('mekanism:creative_energy_cube',).toJson(),
            Ingredient.of('mekanism:creative_energy_cube',).toJson(),
            Ingredient.of('avaritia:infinity',).toJson(),
          ],
          energy: '2147483647',
          result: Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}').toJson()
        }).id(`ultimate_utilities:energizing/mekanism_creative_energy_cube`)


        
        nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAABAAAA",
    "AB  C  BA",
    "A  DDD  A",
    "A DDEDD A",
    "BCDEFEDCB",
    "A DDEDD A",
    "A  DDD  A",
    "AB  C  BA",
    "AAAABAAAA"
  ],
  "key": {
    "A": {
      "item": "avaritia:infinity_ingot"
    },
    "B": {
      "item": "mekanism:pellet_polonium"
    },
    "C": {
      "item": "avaritia:infinity_catalyst"
    },
    "D": {
      "item": "mekanism_extras:alloy_spectrum"
    },
    "E": {
      "item": "mekanism_extras:infinite_energy_cube"
    },
    "F": {
      "item": "mekanism:pellet_antimatter"
    }
  },
  "result": {
    "item": 'mekanism:creative_energy_cube',
    "count": 1
  }
}).id('ultimate_utilities:mekanism/creative_energy_cubee')


        //tanque quimico creativo mekanism
        nadien.recipes.create.mechanical_crafting("mekanism:creative_chemical_tank", [
          "   B B   ",
          " SAADAAS ",
          " ABRBRBA ",
          " ABBCBBA ",
          " ABCICBA ",
          " ABBCBBA ",
          " ABRBRBA ",
          " SAADAAS ",
          "         "
        ], {
          A: "mekanism:ultimate_chemical_tank",
          B: "mekanism:dynamic_tank",
          C: "mekanism:dynamic_glass",
          D: "mekanism:dynamic_valve",
          I: "avaritia:infinity_ingot",
          S: "avaritia:infinity_catalyst",
          R: 'ultimate_utilities:estella_galactica'
        }).id('ultimate_utilities:quimicocreativo')

        
        //tanque creativo de fluidos mekanism
        nadien.recipes.create.mechanical_crafting("mekanism:creative_fluid_tank", [
          "         ",
          " SAADAAS ",
          " ABRCRBA ",
          " ABBCBBA ",
          " ACCICCA ",
          " ABBCBBA ",
          " ABRCRBA ",
          " SAADAAS ",
          "         "
        ], {
          A: "mekanism:ultimate_fluid_tank",
          B: "mekanism:dynamic_tank",
          C: "mekanism:dynamic_glass",
          D: "mekanism:dynamic_valve",
          I: "avaritia:infinity_ingot",
          S: "avaritia:infinity_catalyst",
          R: 'ultimate_utilities:estella_galactica'
        }).id('ultimate_utilities:fluidtankmeka')


        //creative coil thermal
        nadien.recipes.create.mechanical_crafting("thermal:rf_coil_creative_augment", [
          "AAAABAAAA",
          "ACCRBRCCA",
          "ACCCBCCCA",
          "ACCDBDCCA",
          "BBBBEBBBB",
          "ACCDBDCCA",
          "ACCCBCCCA",
          "ACCRBRCCA",
          "AAAABAAAA"
        ], {
          A: "avaritia:infinity_ingot",
          B: "avaritia:caca_singularity",
          C: "thermal:dynamo_compression",
          D: "avaritia:track_singularity",
          E: "thermal_extra:rf_coil_augment_5",
          R: 'ultimate_utilities:estella_galactica'
        }).id('ultimate_utilities:coilthermal')
        
        
          //creative jar ars
          nadien.recipes.create.mechanical_crafting('ars_nouveau:creative_source_jar', [
            ' AAA ',
            'ABCDA',
            'AIHJA',
            'AEFGA',
            ' AAA '
          ], {
            A:'ars_nouveau:summon_focus', 
            B:'ars_nouveau:bookwyrm_charm', 
            C:'ars_nouveau:starbuncle_charm', 
            D:'ars_nouveau:whirlisprig_charm', 
            E:'ars_nouveau:wixie_charm', 
            F:'ars_nouveau:drygmy_charm', 
            G:'ars_nouveau:amethyst_golem_charm', 
            H:'ultimate_utilities:estella_galactica', 
            I:'ars_nouveau:thread_spellpower', 
            J:'ars_nouveau:potion_melder'
  
          }).id('ultimate_utilities:creativesourcejar')

          //creative Blaze Cake
          nadien.recipes.create.mechanical_crafting('create:creative_blaze_cake', [
            '     ',
            'AAAAA',
            'BCCCB',
            'BCDCB',
            ' BAB '
          ], {
            A: 'create:precision_mechanism',
            B: 'create:blaze_cake',
            C: 'create:experience_block',
            D: 'ultimate_utilities:estella_galactica'
  
          }).id('ultimate_utilities:creativeblazecake')

         //creative motor
          nadien.recipes.create.mechanical_crafting('create:creative_motor', [
            'CLC', 
            'HSH', 
            'LGL'
            ], {
            C: 'create:cogwheel',
            L: 'create:large_cogwheel',
            H: 'create:shaft',
            S: 'ultimate_utilities:estella_galactica',
            G:  'create:gearbox'
  
          }).id('ultimate_utilities:creativemotor')


         


        

          nadien.shaped('ars_nouveau:creative_spell_book',  ['BSG', 'GGE', 'EER'],
            {
              B: 'ars_nouveau:archmage_spell_book',
              S: 'ultimate_utilities:estella_galactica',
              G: 'ars_nouveau:source_gem_block',
              E: 'minecraft:ender_eye',
              R: 'ars_nouveau:starbuncle_charm'
            }).id('ultimate_utilities:creativespellbook')
        

            
   //creative chest gregtech
   nadien.recipes.extendedcrafting.shaped_table("2x gtceu:creative_chest", [
        "BMMMMMMMMMB",
        "MIWOPPPOYIM",
        "MIFNNNNNFIM",
        "MINCSSSCNIM",
        "RUSSAQASSUR",
        "REEMGHGMEER",
        "RUTTAQATTUR",
        "MINCTTTCNIM",
        "MIFNNNNNFIM",
        "MIXPPZPPVIM",
        "BMMMMMMMMMB"
    ], {
        A: "kubejs:furious_infinity_catalyst",
        B: "gtceu:monium_block",
        C: "kubejs:serene_infinity_catalyst",
        E: "kubejs:creative_energy_data",
        F: "gtceu:uiv_field_generator",
        G: "gtceu:monium_gear",
        H: "gtceu:max_machine_hull",
        I: "kubejs:elementally_infused_omnic_matrix_heavy_plating",
        M: "kubejs:causality_exempt_monic_heavy_plating",
        N: "kubejs:dimensionally_stabilized_infinity_heavy_plating",
        O: "gtceu:uiv_sensor",
        P: "kubejs:monic_processor_mainframe",
        Q: "kubejs:field_stabilised_omnic_pulsar_compound",
        R: "gtceu:uiv_robot_arm",
        S: "kubejs:creative_storage_data",
        T: "kubejs:omnic_data",
        U: "gtceu:subatomic_digital_assembler",
        V: "kubejs:infinity_file",
        W: "kubejs:infinity_screwdriver",
        X: "kubejs:infinity_wrench",
        Y: "kubejs:infinity_hammer",
        Z: "kubejs:infinity_wire_cutter"
    })



      })