ServerEvents.recipes(nadien => {





    //eliminadas
    nadien.remove({ output:'enchantinginfuser:advanced_enchanting_infuser' })
    

    //mesa de encantamientos avanzda ultima
    nadien.custom({
    "type": "occultism:ritual",
    "ritual_type": "occultism:craft",
    "activation_item": {
      "item": "enchantinginfuser:enchanting_infuser"
    },
    "pentacle_id": "occultism:craft_djinni",
    "duration": 30,
    "ritual_dummy": {
      "item": "occultism:ritual_dummy/craft_storage_remote"
    },
    "ingredients": [
      {
        "item": 'allthecompressed:obsidian_1x'
      },
      {
        "item": 'allthecompressed:obsidian_1x'
      },
      {
        "item": 'allthecompressed:obsidian_1x'
      },
      {
        "item": 'allthecompressed:obsidian_1x'
      },
      {
        "item": 'ars_nouveau:archmage_spell_book'
      },
      {
        "item": 'minecraft:netherite_block'
      },
      {
        "item": 'minecraft:netherite_block'
      },
      {
        "item": "advancednetherite:netherite_emerald_ingot"
      },
      {
        "item": 'apotheosis:rectifier_t3'
      },
      {
        "item": 'apotheosis:rectifier_t3'
      },
      {
        "item": "occultism:afrit_essence"
      },
      {
        "item": "occultism:afrit_essence"
      }
      
    ],
    "result": {
      "item": "enchantinginfuser:advanced_enchanting_infuser"
    }
})

nadien.recipes.occultism.ritual(
    'enchantinginfuser:advanced_enchanting_infuser', // resultado
    [ // ingredientes
        'allthecompressed:obsidian_1x',
        'allthecompressed:obsidian_1x',
        'allthecompressed:obsidian_1x',
        'allthecompressed:obsidian_1x',
        'ars_nouveau:archmage_spell_book',
        'minecraft:netherite_block',
        'minecraft:netherite_block',
        'advancednetherite:netherite_emerald_ingot',
        'apotheosis:rectifier_t3',
        'apotheosis:rectifier_t3',
        'occultism:afrit_essence',
        'occultism:afrit_essence'
    ],
    'enchantinginfuser:enchanting_infuser', // item de activación
    'occultism:craft_djinni' // tipo de ritual (pentáculo)
)
.dummy('occultism:ritual_dummy/craft_storage_remote') // dummy
.duration(30); // duración

    
})
