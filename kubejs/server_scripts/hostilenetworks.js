ServerEvents.recipes(nadien => {
	
	//eliminadas
   nadien.remove({output:'hostilenetworks:sim_chamber'})
   nadien.remove({output:'hostilenetworks:loot_fabricator'})
   nadien.remove({output:'hostilenetworks:deep_learner'})
   nadien.remove({output:'hostilenetworks:blank_data_model'})
   nadien.remove({output:'hostilenetworks:prediction_matrix'})
   nadien.remove({output:Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:vindicator"}}')})
   nadien.remove({output:Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:ender_dragon"}}')})
	
	
	//simulation chamber
	 nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAA",
    "ABBBA",
    "ABCBA",
    "ABBBA",
    "AAAAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:crying_obsidian"
    },
    "B": {
      "item": "thermal:diamond_gear"
    },
    "C": {
      "item": "minecraft:diamond_block"
    }
  },
  "result": {
    "item": 'hostilenetworks:sim_chamber',
    "count": 1
  }
}).id('ultimate_utilities:simulationchamber')
  
    //loot fabricator
  nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAA",
    "ABBBA",
    "ABCBA",
    "ABBBA",
    "AAAAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:crying_obsidian"
    },
    "B": {
      "item": "thermal:gold_gear"
    },
    "C": {
      "item": "minecraft:gold_block"
    }
  },
  "result": {
    "item": "hostilenetworks:loot_fabricator",
    "count": 1
  }
}).id('galaxyorigenes:lootfabricator')




   //deep learner
   nadien.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "OCO",
      "CPC",
      "ORO"
    ],
    "key": {
      "P": {
        "tag": "forge:glass_panes"
      },
    "O": {
        "tag": "forge:obsidian"
      },
    "R": {
        "item": "mekanism:pellet_polonium"
      },
    "C": {
        "item": 'ultimate_utilities:nadienitebloque'
      }
    },
    "result": {
      "item": "hostilenetworks:deep_learner"
    }
  }).id('galaxyorigenes:deeplearner')


    //blank data model
    nadien.shaped('hostilenetworks:blank_data_model', ['UCU', 'CDC', 'UCU'], {
      U: 'avaritia:crystal_matrix_ingot',
      C: 'mob_grinding_utils:mob_swab',
      D: 'create:andesite_casing'
    }).id('galaxyorigenes:blankdatamodel')

  //matrix 1
   nadien.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "IG ",
      "GLG",
      " GD"
    ],
    "key": {
      "G": {
        "tag": "forge:glass_panes"
      },
    "I": {
        "item": "biggerreactors:cyanite_ingot"
      },
    "L": {
        "item": "minecraft:clay_ball"
      },
    "D": {
        "item": "biggerreactors:cyanite_ingot"
      }
    },
    "result": {
      "item": "hostilenetworks:prediction_matrix",
    "count": 16
    }
  }).id('galaxyorigenes:matrixuno')

    

    
})