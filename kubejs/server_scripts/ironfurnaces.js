//ironfurnaces By SrNadien 
ServerEvents.recipes(nadien => {



  //eliminadas
  nadien.remove({output:'ironfurnaces:iron_furnace'})
  nadien.remove({output:'ironfurnaces:gold_furnace'})
  nadien.remove({output:'ironfurnaces:diamond_furnace'})
  nadien.remove({output:'ironfurnaces:silver_furnace'})
  nadien.remove({output:'ironfurnaces:copper_furnace'})
  nadien.remove({output:'ironfurnaces:emerald_furnace'})
  nadien.remove({output:'ironfurnaces:netherite_furnace'})
  nadien.remove({output:'ironfurnaces:obsidian_furnace'})
  nadien.remove({output:'ironfurnaces:crystal_furnace'})
  nadien.remove({output:'ironfurnaces:upgrade_iron'})
  nadien.remove({output:'ironfurnaces:upgrade_gold'})
  nadien.remove({output:'ironfurnaces:upgrade_diamond'})
  nadien.remove({output:'ironfurnaces:upgrade_emerald'})
  nadien.remove({output:'ironfurnaces:upgrade_obsidian'})
  nadien.remove({output:'ironfurnaces:upgrade_crystal'})
  nadien.remove({ output: 'ironfurnaces:upgrade_netherite' })
  nadien.remove({ output: 'ironfurnaces:upgrade_copper' })
  nadien.remove({ output: 'ironfurnaces:upgrade_silver' })
  nadien.remove({ output: 'ironfurnaces:upgrade_obsidian2' })
  nadien.remove({ output: 'ironfurnaces:upgrade_iron2' })
  nadien.remove({ output: 'ironfurnaces:upgrade_gold2' })
  nadien.remove({ output: 'ironfurnaces:upgrade_silver2' })


//horno de hierro
nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 1,
  "pattern": [
    "ABA",
    "ACA",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "create:iron_sheet"
    },
    "B": {
      "item": "minecraft:iron_block"
    },
    "C": {
      "item": "minecraft:furnace"
    }
  },
  "result": {
    "item": 'ironfurnaces:iron_furnace',
    "count": 1
  }
}).id('ultimate_utilities:hornodehierro')



//horno de oro
nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 1,
  "pattern": [
    "ABA",
    "ACA",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "create:golden_sheet"
    },
    "B": {
      "item": "minecraft:gold_block"
    },
    "C": {
      "item": "ironfurnaces:iron_furnace"
    }
  },
  "result": {
    "item": 'ironfurnaces:gold_furnace',
    "count": 1
  }
}).id('ultimate_utilities:hornodeoro')


//horno de diamante
nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 1,
  "pattern": [
    "ABA",
    "ACA",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "alltheores:diamond_plate"
    },
    "B": {
      "item": "minecraft:diamond_block"
    },
    "C": {
      "item": "ironfurnaces:gold_furnace"
    }
  },
  "result": {
    "item": 'ironfurnaces:diamond_furnace',
    "count": 1
  }
}).id('ultimate_utilities:hornodediamante')


//horno de plata
nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 1,
  "pattern": [
    "ABA",
    "ACA",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:silver_plate"
    },
    "B": {
      "item": "thermal:silver_block"
    },
    "C": {
      "item": "minecraft:furnace"
    }
  },
  "result": {
    "item": 'ironfurnaces:silver_furnace',
    "count": 1
  }
}).id('ultimate_utilities:hornodeplata')


//horno de cobre
nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 1,
  "pattern": [
    "ABA",
    "ACA",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "create:copper_sheet"
    },
    "B": {
      "item": "minecraft:copper_block"
    },
    "C": {
      "item": "ironfurnaces:silver_furnace"
    }
  },
  "result": {
    "item": 'ironfurnaces:copper_furnace',
    "count": 1
  }
}).id('ultimate_utilities:hornodecobre')


//horno de esmeralda
nadien.custom({
  "type": "mysticalagriculture:infusion",
  "input": {
    "item": 'ironfurnaces:diamond_furnace'
  },
  "ingredients": [
    {
      "item": 'actuallyadditions:empowered_emeradic_crystal'
    },
    {
      "item": 'actuallyadditions:empowered_emeradic_crystal_block'
    },
    {
      "item": 'actuallyadditions:empowered_emeradic_crystal'
    },
    {
      "item": 'actuallyadditions:empowered_emeradic_crystal_block'
    },
    {
      "item": 'actuallyadditions:empowered_emeradic_crystal'
    },
    {
      "item": 'actuallyadditions:empowered_emeradic_crystal_block'
    },
    {
      "item": 'actuallyadditions:empowered_emeradic_crystal'
    },
    {
      "item": 'actuallyadditions:empowered_emeradic_crystal_block'
    }
  ],
  "result": {
    "item": 'ironfurnaces:emerald_furnace'
  }
}).id('ultimate_utilities:hornodeesmeralda')



//horno de netherite
nadien.custom({
  "type": "mysticalagriculture:infusion",
  "input": {
    "item": 'ironfurnaces:obsidian_furnace'
  },
  "ingredients": [
    {
      "item": 'thermal:netherite_plate'
    },
    {
      "item": 'minecraft:netherite_block'
    },
    {
      "item": 'thermal:netherite_plate'
    },
    {
      "item": 'minecraft:netherite_block'
    },
    {
      "item": 'thermal:netherite_plate'
    },
    {
      "item": 'minecraft:netherite_block'
    },
    {
      "item": 'thermal:netherite_plate'
    },
    {
      "item": 'minecraft:netherite_block'
    }
  ],
  "result": {
    "item": 'ironfurnaces:netherite_furnace'
  }
}).id('ultimate_utilities:hornodenetherite')


//horno de obsidiana
nadien.custom({
  "type": "mysticalagriculture:infusion",
  "input": {
    "item": 'ironfurnaces:emerald_furnace'
  },
  "ingredients": [
    {
      "item": 'mekanism:ingot_refined_obsidian'
    },
    {
      "item": 'minecraft:obsidian'
    },
    {
      "item": 'mekanism:ingot_refined_obsidian'
    },
    {
      "item": 'minecraft:obsidian'
    },
    {
      "item": 'mekanism:ingot_refined_obsidian'
    },
    {
      "item": 'minecraft:obsidian'
    },
    {
      "item": 'mekanism:ingot_refined_obsidian'
    },
    {
      "item": 'minecraft:obsidian'
    }
  ],
  "result": {
    "item": 'ironfurnaces:obsidian_furnace'
  }
}).id('ultimate_utilities:hornodeobsidiana')

//horno de diamante con cristal
nadien.custom({
  "type": "mysticalagriculture:infusion",
  "input": {
    "item": 'ironfurnaces:diamond_furnace'
  },
  "ingredients": [
    {
      "item": 'alltheores:diamond_plate'
    },
    {
      "item": 'minecraft:glass'
    },
    {
      "item": 'alltheores:diamond_plate'
    },
    {
      "item": 'minecraft:glass'
    },
    {
      "item": 'alltheores:diamond_plate'
    },
    {
      "item": 'minecraft:glass'
    },
    {
      "item": 'alltheores:diamond_plate'
    },
    {
      "item": 'minecraft:glass'
    }
  ],
  "result": {
    "item": 'ironfurnaces:crystal_furnace'
  }
}).id('ultimate_utilities:hornodediamanteconcristal')


})