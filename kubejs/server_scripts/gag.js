ServerEvents.recipes(nadien => {
  nadien.remove({ id: 'gag:time_sand_pouch' })
  nadien.shaped('gag:time_sand_pouch', ['UFU', 'BCB', 'LBL'], {
    U: 'minecraft:netherite_ingot',
    L: 'ultimate_utilities:nadienite_ingot',
    C: 'minecraft:nether_star',
    F: 'minecraft:nautilus_shell',
    B: 'minecraft:leather'
  }).id('galaxyorigenes:temporalpouch')
})
