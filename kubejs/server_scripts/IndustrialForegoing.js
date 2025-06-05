ServerEvents.recipes(nadien => {
  
  
  
  
  
  //eliminado
  nadien.remove({output: ['industrialforegoing:ether_gas', 'industrialforegoing:laser_drill', 'industrialforegoing:fluid_laser_base', "industrialforegoing:machine_frame_pity", "industrialforegoing:machine_frame_advanced", "industrialforegoing:machine_frame_supreme"] })
  nadien.remove({id: 'industrialforegoing:ore_laser_base'})

//machine frame basic
nadien.replaceInput({id: 'industrialforegoing:machine_frame_pity'}, 'minecraft:redstone_block', 'create:andesite_casing')




//apatite ore
nadien.custom({
"type": "industrialforegoing:laser_drill_ore",
"catalyst": {
  "item": "industrialforegoing:laser_lens3"
},
"output": {
  "item": "thermal:apatite_ore"
},
"pointer": 0,
"rarity": [
  {
    "blacklist": {
      "type": "minecraft:worldgen/biome",
      "values": [
        "minecraft:the_end",
        "minecraft:the_void",
        "minecraft:small_end_islands",
        "minecraft:end_barrens",
        "minecraft:end_highlands",
        "minecraft:end_midlands"
      ]
    },
    "depth_max": 16,
    "depth_min": 5,
    "weight": 28,
    "whitelist": {}
  },
  {
    "blacklist": {
      "type": "minecraft:worldgen/biome",
      "values": [
        "minecraft:the_end",
        "minecraft:the_void",
        "minecraft:small_end_islands",
        "minecraft:end_barrens",
        "minecraft:end_highlands",
        "minecraft:end_midlands"
      ]
    },
    "depth_max": 255,
    "depth_min": 0,
    "weight": 4,
    "whitelist": {}
  }
]
}).id('ultimate_utilities:srnaptite')




//gas ether
nadien.custom({
  "type": "create:mixing",
  "heatRequirement": "superheated",
  "ingredients": [
    {
      "amount": 1000,
      "fluid": 'ultimate_utilities:nadienitefluid',
      "nbt": {}
    },
    {
      "amount": 1000,
      "fluid": "thermal:resin"
    }
  ],
  "results": [
    {
      "amount": 500,
      "fluid": "industrialforegoing:ether_gas"
    }
  ]
}).id('ultimate_utilities:gasether')


//laser ore base
nadien.shaped('industrialforegoing:ore_laser_base', ['PTP','OFO','GRG'],{
  P: 'industrialforegoing:plastic',
  T: 'thermal:flux_drill',
  O: '#forge:ores/iron',
  F: 'industrialforegoing:machine_frame_advanced',
  G: '#forge:gears/vibranium',
  R: 'allthemodium:allthemodium_pickaxe'
}).id('ultimate_utilities:industrialforegoings/ore_laser_drill')

//laser fluid base
nadien.shaped('industrialforegoing:fluid_laser_base', ['PTP','OFO','GRG'],{
  P: 'industrialforegoing:plastic',
  T: 'thermal:flux_drill',
  O: '#forge:ores/iron',
  F: 'industrialforegoing:machine_frame_advanced',
  G: '#forge:gears/vibranium',
  R: 'allthemodium:allthemodium_pickaxe'
}).id('ultimate_utilities:industrialforegoings/fluid_laser_drill')


//laser fluid base
nadien.shaped('industrialforegoing:laser_drill', ['PTP','OFO','GRG'],{
  P: 'industrialforegoing:plastic',
  T: 'thermal:machine_speed_augment',
  O: 'minecraft:piston',
  F: 'industrialforegoing:machine_frame_advanced',
  G: 'thermal_extra:abyssal_gear',
  R: 'allthemodium:allthemodium_pickaxe'
}).id('ultimate_utilities:industrialforegoings/laser_drill')



//pity machineframe
nadien.shaped('industrialforegoing:machine_frame_pity', ['WIW','IRI','WIW'],{
  W: '#minecraft:logs',
  I: '#forge:ingots/iron',
  R: 'create:brass_casing',
}).id('ultimate_utilities:pity_machine_frame')


//advanced machineframe
nadien.custom({
  "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "tag": "forge:plastic"
    },
    {
      "item": "create:railway_casing"
    },
    {
      "tag": "forge:plastic"
    },
    {
      "item": "minecraft:netherite_scrap"
    },
    {
      "item": "minecraft:netherite_scrap"
    },
    {
      "tag": "forge:ingots/gold"
    },
    {
      "tag": "forge:gears/diamond"
    },
    {
      "tag": "forge:ingots/gold"
    }
  ],
  "inputFluid": "{Amount:8000,FluidName:\"industrialforegoing:pink_slime\"}",
  "output": {
    "count": 1,
    "item": "industrialforegoing:machine_frame_advanced"
  },
  "processingTime": 300
}).id('ultimate_utilities:advanced_machine_frame')


//supreme machine frame 
nadien.custom({
  "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "tag": "forge:plastic"
    },
    {
      "tag": "industrialforegoing:machine_frame/advanced"
    },
    {
      "tag": "forge:plastic"
    },
    {
      "item": "minecraft:netherite_ingot"
    },
    {
      "item": "minecraft:netherite_ingot"
    },
    {
      "tag": "forge:gems/diamond"
    },
    {
      "item": "create:refined_radiance_casing"
    },
    {
      "tag": "forge:gems/diamond"
    }
  ],
  "inputFluid": "{Amount:8000,FluidName:\"industrialforegoing:ether_gas\"}",
  "output": {
    "count": 1,
    "item": "industrialforegoing:machine_frame_supreme"
  },
  "processingTime": 300
}).id('ultimate_utilities:supreme_machine_frame')

nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBCDCBBA",
    "BEEFGFEEB",
    "BEHIJIHEB",
    "CEKLMLNEC",
    "OGPMQMRGS",
    "CENLMLKEC",
    "BEHITIHEB",
    "BEEFGFEEB",
    "ABBCUCBBA"
  ],
  "key": {
    "A": {
      "item": "create:mechanical_arm"
    },
    "B": {
      "item": "extendedcrafting:enhanced_ender_ingot"
    },
    "C": {
      "item": "argentinas_delight:pava"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "E": {
      "item": "minecraft:lime_bed"
    },
    "F": {
      "type": "forge:nbt",
      "item": "minecraft:player_head",
      "count": 1,
      "nbt": "{SkullOwner:{Id:[I;2118518208,-1698609149,-1383017808,204096419],Name:\"SrNadien\",Properties:{textures:[{Value:\"ewogICJ0aW1lc3RhbXAiIDogMTc0ODg4NTYyNTk3NiwKICAicHJvZmlsZUlkIiA6ICI3ZTQ2MDVjMDlhYzE0ODAzYWQ5MGQyYjAwYzJhNDNhMyIsCiAgInByb2ZpbGVOYW1lIiA6ICJTck5hZGllbiIsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS83ZGQ2YWQ2MTYyMDBkNzNkZjA4NDUyYWMyYmE1MzVhY2FhMGQ1MmU0ZDhlNWM3YjAwNDg0MjNkNGVhMDE5Nzg0IgogICAgfSwKICAgICJDQVBFIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS81NjliN2YyYTFkMDBkMjZmMzBlZmUzZjlhYjlhYzgxN2IxZTZkMzVmNGYzY2ZiMDMyNGVmMmQzMjgyMjNkMzUwIgogICAgfQogIH0KfQ\u003d\u003d\"}]}}}"
    },
    "G": {
      "item": "thermalendergy:vibrating_core"
    },
    "H": {
      "item": "psi:cad_assembly_ebony_psimetal"
    },
    "I": {
      "item": "thermalendergy:stellarium_ingot"
    },
    "J": {
      "item": "botanypotstiers:elite_terracotta_hopper_botany_pot"
    },
    "K": {
      "item": "modularrouters:modular_router"
    },
    "L": {
      "item": "argentinas_delight:parrilla"
    },
    "M": {
      "item": "industrialforegoing:plastic"
    },
    "N": {
      "item": "xnet:controller"
    },
    "O": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "P": {
      "item": "botanypotstiers:creative_terracotta_hopper_botany_pot"
    },
    "Q": {
      "type": "forge:nbt",
      "item": "mystical_extended_tier:ouranium_watering_can",
      "count": 1,
      "nbt": "{Active:0b,Water:0b}"
    },
    "R": {
      "item": "botanypots:terracotta_hopper_botany_pot"
    },
    "S": {
      "item": "industrialforegoing:machine_frame_supreme"
    },
    "T": {
      "item": "botanypotstiers:ultra_terracotta_hopper_botany_pot"
    },
    "U": {
      "item": "industrialforegoing:machine_frame_pity"
    }
  },
  "result": {
    "item": 'industrialforegoing:hydroponic_bed'
  }
}).id('ultimate_utilities:hydroponic_bed')




})