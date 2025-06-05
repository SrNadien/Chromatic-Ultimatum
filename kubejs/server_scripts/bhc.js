ServerEvents.recipes(nadien => {
  nadien.remove({ id: 'bhc:relic_apple' })
  nadien.shaped('bhc:relic_apple', [
    ' A ', 
    'CBC', 
    ' A '
  ], 
  {
    A: 'minecraft:diamond_block',
    B: 'minecraft:apple',
    C: 'minecraft:emerald_block'
  }).id('ultimate_utilities:relic_apple')
})
