//pipez By SrNadien
ServerEvents.recipes(nadien => {


  //eliminadas
  nadien.remove({output:'pipez:item_pipe'})
  nadien.remove({output:'pipez:fluid_pipe'})
  nadien.remove({output:'pipez:energy_pipe'})
  nadien.remove({output:'pipez:gas_pipe'})
  nadien.remove({output:'pipez:basic_upgrade'})
  nadien.remove({output:'pipez:improved_upgrade'})
  nadien.remove({output:'pipez:advanced_upgrade'})
  nadien.remove({output:'pipez:ultimate_upgrade'})


 //Tuberias
 nadien.shaped('8x pipez:item_pipe', [
 'TCQ',
 'ILW',
 'EHP'
], {
 T: '#forge:plates/steel',
 C: '#forge:plates/steel',
 Q: '#forge:plates/steel',
 I: 'minecraft:dropper',
 L: 'minecraft:redstone_block',
 W: 'minecraft:dropper',
 E: '#forge:plates/steel',
 H: '#forge:plates/steel',
 P: '#forge:plates/steel'
}).id('ultimate_utilities:itempipe')


 //fluid pipe
 nadien.shaped('6x pipez:fluid_pipe', [
 'TCQ',
 'ILW',
 'EHP'
], {
 T: '#forge:plates/osmium',
 C: '#forge:plates/osmium',
 Q: '#forge:plates/osmium',
 I: 'minecraft:bucket',
 L: 'minecraft:redstone_block',
 W: 'minecraft:bucket',
 E: '#forge:plates/osmium',
 H: '#forge:plates/osmium',
 P: '#forge:plates/osmium'
}).id('ultimate_utilities:fluidpipe')


 //energy pipe
 nadien.shaped('8x pipez:energy_pipe', [
 'TCQ',
 'ILW',
 'EHP'
], {
 T: '#forge:plates/osmium',
 C: '#forge:plates/osmium',
 Q: '#forge:plates/osmium',
 I: '#forge:ingots/steel',
 L: '#forge:ingots/steel',
 W: '#forge:ingots/steel',
 E: '#forge:plates/osmium',
 H: '#forge:plates/osmium',
 P: '#forge:plates/osmium'
}).id('ultimate_utilities:energypipe')


 // gas pipe
 nadien.shaped('8x pipez:gas_pipe', [
 'TCQ',
 'ILW',
 'EHP'
], {
 T: '#forge:plates/osmium',
 C: '#forge:plates/osmium',
 Q: '#forge:plates/osmium',
 I: 'mekanism:alloy_infused',
 L: 'minecraft:redstone_block',
 W: 'mekanism:alloy_infused',
 E: '#forge:plates/osmium',
 H: '#forge:plates/osmium',
 P: '#forge:plates/osmium'
}).id('ultimate_utilities:gaspipe')

//Iron upgrade
 nadien.shaped('pipez:basic_upgrade', [
 'ABA',
 'BCB',
 'ABA'
], {
 A: '#forge:plates/iron',
 B: '#forge:nuggets/iron',
 C: 'minecraft:redstone'
}).id('ultimate_utilities:basicupgrade')

 //Gold Upgrade
 nadien.shaped('pipez:improved_upgrade', [
 'ABA',
 'BCB',
 'ABA'
], {
 A: '#forge:plates/gold',
 B: 'minecraft:redstone_block',
 C: 'pipez:basic_upgrade'
}).id('ultimate_utilities:improvedupgrade')

 //Diamond Upgrade
 nadien.shaped('pipez:advanced_upgrade', [
 'ABA',
 'BCB',
 'ABA'
], {
 A: '#forge:plates/diamond',
 B: 'minecraft:redstone_block',
 C: 'pipez:improved_upgrade'
}).id('ultimate_utilities:advancedupgrade')

 //Netherite upgrade
 nadien.shaped('pipez:ultimate_upgrade', [
 'ABA',
 'BCB',
 'ABA'
], {
 A: '#forge:plates/netherite',
 B: 'minecraft:redstone_block',
 C: 'pipez:advanced_upgrade'
}).id('ultimate_utilities:ultimateupgrade')

//mejora infinita
 nadien.shaped('pipez:infinity_upgrade', [
 'AB ',
 '   ',
 '   '
], {
 A: 'pipez:ultimate_upgrade',
 B: 'avaritia:infinity_ingot',
}).id('ultimate_utilities:infiniteupgrade')


//wrench
nadien.replaceInput({id: 'pipez:wrench'}, 'minecraft:flint', 'ultimate_utilities:nadienite_ingot')

})