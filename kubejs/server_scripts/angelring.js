ServerEvents.recipes(nadien => {
  nadien.remove({id: 'angelring:diamond_ring'})
  nadien.shaped('angelring:diamond_ring', [
     'DND',
     'VEU',
     'DAD'
   ], {
     D: '#forge:storage_blocks/diamond',
     N: 'gtceu:neutronium_ingot',
     V: 'gtceu:neutronium_ingot',
     U: 'gtceu:neutronium_ingot',
     A: 'gtceu:neutronium_ingot',
     E: 'minecraft:elytra'
   }).id('ultimate_utilities:diamondring')
 nadien.remove({id: 'angelring:angel_ring'})
 nadien.recipes.extendedcrafting.shaped_table('angelring:angel_ring', [
        " ANA ",
        "A B A",
        "AC CA",
        "A B A",
        " AAA "
    ], {
        A: "gtceu:rose_gold_ingot",
        B: 'create_sa:netherite_jetpack_chestplate',
        C: Item.of('mekanism:jetpack_armored', '{mekData:{GasTanks:[{Tank:0b,stored:{amount:24000L,gasName:"mekanism:hydrogen"}}]}}'),
        N: 'angelring:diamond_ring'
    }).id('ultimate_utilities:angelring')
  })