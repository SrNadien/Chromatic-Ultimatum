//star items v2 By SrNadien 
ServerEvents.recipes(nadien => {



    //Muñeco De Paja
    nadien.recipes.create.mixing('ultimate_utilities:muneco_de_paja', ['ultimate_utilities:cacota', 'ultimate_utilities:super_semilla', 'minecraft:sculk_sensor', 'mob_grinding_utils:solid_xp_baby', 'argentinas_delight:matedulceitem', 'ars_nouveau:glyph_wither']).superheated().id('ultimate_utilities:mpj')
  

    //super semilla
    nadien.recipes.create.mixing('ultimate_utilities:super_semilla', ['ultimate_utilities:cajita_feliz', 'ultimate_utilities:cajita_feliz', 'ultimate_utilities:super_caca', 'argentinas_delight:tablachura', 'allthemodium:allthemodium_apple', 'argentinas_delight:matedulceitem', 'ultimate_utilities:cacota', 'createaddition:chocolate_cake', 'farmersdelight:steak_and_potatoes']).superheated().id('ultimate_utilities:opsemilla')

  //antimateria
  nadien.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": 'createaddition:electric_motor'
    },
    "ingredients": [
      {
        "item": 'ultimate_utilities:bob_toronja'
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": 'ultimate_utilities:bob_toronja'
      },
      {
        "item": 'mekanism:meka_tool'
      },
      {
        "item": 'mekanism:meka_tool'
      },
      {
        "item": 'thermal:machine_frame'
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": 'ultimate_utilities:super_semilla'
      },
      {
        "item": 'ultimate_utilities:bob_toronja'
      },
      {
        "item": 'ultimate_utilities:bob_toronja'
      },
      {
        "item": 'thermal:machine_frame'
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": "ae2:engineering_processor"
      },
      {
        "item": 'mekanism:meka_tool'
      },
      {
        "item": 'mekanism:meka_tool'
      }
    ],
    "result": {
      "item": 'ultimate_utilities:anti_materia',
      "count": 1
    }
  }).id('ultimate_utilities:uumater')




  //mini portal
  nadien.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": "minecraft:end_portal_frame"
    },
    "ingredients": [
      {
        "item": "create:mechanical_saw"
      },
      {
        "item": 'create:radiant_sheet'
      },
      {
        "item": 'mekanism_extras:infinite_control_circuit'
      },
      {
        "item": 'create:radiant_sheet'
      },
      {
        "item": 'ironfurnaces:million_furnace'
      },
      {
        "item": 'ironfurnaces:million_furnace'
      },
      {
        "item": "create:mechanical_saw"
      },
      {
        "item": 'mekanism_extras:infinite_control_circuit'
      },
      {
        "item": 'mekanism_extras:infinite_control_circuit'
      },
      {
        "item": "create:mechanical_saw"
      },
      {
        "item": 'ironfurnaces:million_furnace'
      },
      {
        "item": 'ironfurnaces:million_furnace'
      },
      {
        "item": 'create:radiant_sheet'
      },
      {
        "item": 'mekanism_extras:infinite_control_circuit'
      },
      {
        "item": 'create:radiant_sheet'
      },
      {
        "item": "create:mechanical_saw"
      }
    ],
    "result": {
      "item": 'ultimate_utilities:mini_portal',
      "count": 1
    }
  }).id('ultimate_utilities:miniportal')


  //mini reactor
  nadien.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": "extendedcrafting:ender_star_block"
    },
    "ingredients": [
      {
        "item": "avaritia:caca_singularity",
      },
      {
        "item": "avaritia:caca_singularity"
      },
      {
        "item": "sophisticatedbackpacks:battery_upgrade"
      },
      {
        "item": "extendedcrafting:nether_star_block"
      },
      {
        "item": "sophisticatedbackpacks:battery_upgrade"
      },
      {
        "type": "forge:nbt",
        "item": "hostilenetworks:prediction",
        "count": 1,
        "nbt": "{data_model:{id:\"hostilenetworks:ender_dragon\"}}"
      },
      {
        "type": "forge:nbt",
        "item": "hostilenetworks:prediction",
        "count": 1,
        "nbt": "{data_model:{id:\"hostilenetworks:ender_dragon\"}}"
      },
      {
        "item": "sophisticatedbackpacks:battery_upgrade"
      },
      {
        "item": "extendedcrafting:nether_star_block"
      },
      {
        "item": "sophisticatedbackpacks:battery_upgrade"
      },
      {
        "item": "avaritia:caca_singularity"
      },
      {
        "item": "avaritia:caca_singularity"
      },
      {
        "type": "forge:nbt",
        "item": "hostilenetworks:prediction",
        "count": 1,
        "nbt": "{data_model:{id:\"hostilenetworks:ender_dragon\"}}"
      },
      {
        "item": "extendedcrafting:nether_star_block"
      },
      {
        "item": "extendedcrafting:nether_star_block"
      },
      {
        "type": "forge:nbt",
        "item": "hostilenetworks:prediction",
        "count": 1,
        "nbt": "{data_model:{id:\"hostilenetworks:ender_dragon\"}}"
      }
    ],
    "result": {
      "item": 'ultimate_utilities:mini_reactor',
      "count": 1
    }
  }).id('ultimate_utilities:minireactor')


    //buscador del universo
    nadien.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000,
      "input": {
        "item": "compatdelight:ars_burger"
      },
      "ingredients": [
        {
          "item": 'thermal_extra:twinite_plate'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'thermal_extra:twinite_plate'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'thermal_extra:twinite_plate'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'thermal_extra:twinite_plate'
        }
      ],
      "result": {
        "item": 'ultimate_utilities:buscador_del_universo',
        "count": 1
      }
    }).id('ultimate_utilities:universesearch')

    //calavaera maldita
    nadien.recipes.create.mechanical_crafting('ultimate_utilities:calavera_oscura', [
      '    F    ',
      '   AAA   ',
      '  FACAF  ',
      '  FABAF  ',
      '   NNN   ',
      '    F    '
      ], {
        A: 'minecraft:wither_skeleton_skull',
        B: 'thermal_extra:upgrade_augment',
        C: 'ars_nouveau:glyph_summon_steed',
        F: 'minecraft:wither_rose',
        N: 'occultism:soul_gem'
      }).id('ultimate_utilities:calaveradark')



   //star nuget
   nadien.shaped('9x ultimate_utilities:pepita_de_mega_estrella', [
    '   ',
    ' A ',
    '   '
  ], {
    A: 'ultimate_utilities:estella_galactica'
  }).id('ultimate_utilities:starnugget')


})