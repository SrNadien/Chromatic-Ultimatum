ServerEvents.recipes(nadien => {


  //eliminadas
  nadien.remove({output:'immersiveengineering:treated_wood_horizontal'})

  function pedestal(input, output) {
    nadien.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": input
      },
      "result": {
        "item": output
      }
    }).id(`galaxyorigins:pedestal/${output.replace(':', '/')}`)
}


//trated wood
pedestal('immersiveengineering:duroplast', 'immersiveengineering:treated_wood_horizontal')

//soul stone
pedestal('mysticalagriculture:soulstone', 'mysticalagriculture:soulstone_cobble')

//black stone
pedestal('minecraft:coal_block', 'minecraft:blackstone')

//dust exnihilo
pedestal('exdeorum:compressed_dust', 'exdeorum:dust')
 
//crushed end stone exnihilo
pedestal('exdeorum:compressed_crushed_end_stone', 'exdeorum:crushed_end_stone')

//crushed netherack exnihilo
pedestal('exdeorum:compressed_netherrack', 'exdeorum:crushed_netherrack')

//end stone
pedestal('farmersdelight:organic_compost', 'minecraft:dirt')

//darksone forbidden
pedestal('minecraft:chiseled_polished_blackstone', 'forbidden_arcanus:darkstone')

//end stone
pedestal('minecraft:end_stone_bricks', 'minecraft:end_stone')

//cristal
pedestal('biggerreactors:heat_exchanger_glass', 'minecraft:glass')

//certus crystal
pedestal('ae2:64k_crafting_storage', 'ae2:quartz_block')

//pedestal
nadien.shaped('pedestals:block_pedestal', [
  'SLS',
  ' B ',
  'BBB'
  ], {
  S: 'minecraft:cobblestone_slab',
  L: '#pedestals:linkingtools',
  B: 'minecraft:cobblestone'
    }).id('galaxyorigins:pedestal_custom')
 
    
    })
