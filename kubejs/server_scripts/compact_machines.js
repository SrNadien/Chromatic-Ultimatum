ServerEvents.recipes(nadien => {


   //tiny machine compact
  nadien.remove({id: 'compactmachines:machine_tiny'})
  nadien.shaped('compactmachines:machine_tiny', [
    'DDD',
    'VEU',
    'DDD'
  ], {
    D: 'compactmachines:wall',
    V: 'compactmachines:atom_enlarger',
    U: 'compactmachines:atom_shrinker',
    E:  'minecraft:copper_ingot'
  }).id('galaxyorigins:tinymachine')

    //small machine compact
    nadien.remove({id: 'compactmachines:machine_small'})
    nadien.shaped('compactmachines:machine_small', [
      'DDD',
      'VEU',
      'DDD'
    ], {
      D: 'compactmachines:wall',
      V: 'compactmachines:atom_enlarger',
      U: 'compactmachines:atom_shrinker',
      E: 'minecraft:iron_ingot'
    }).id('galaxyorigins:smallmachine')


        //normal machine compact
        nadien.remove({id: 'compactmachines:machine_normal'})
        nadien.shaped('compactmachines:machine_normal', [
          'DDD',
          'VEU',
          'DDD'
        ], {
          D: 'compactmachines:wall',
          V: 'compactmachines:atom_enlarger',
          U: 'compactmachines:atom_shrinker',
          E: 'minecraft:gold_ingot'
        }).id('galaxyorigins:normalmachine')

        

            //large machine compact
            const obsidiana = ['minecraft:obsidian', 'minecraft:crying_obsidian' , 'armorplus:compressed_obsidian', 'allthecompressed:obsidian_1x', 'allthecompressed:obsidian_2x', 'allthecompressed:obsidian_3x', 'allthecompressed:obsidian_4x', 'allthecompressed:obsidian_5x', 'allthecompressed:obsidian_6x', 'allthecompressed:obsidian_7x', 'allthecompressed:obsidian_8x', 'allthecompressed:obsidian_9x']
            nadien.remove({id: 'compactmachines:machine_large'})
            nadien.shaped('compactmachines:machine_large', [
              'DDD',
              'VEU',
              'DDD'
            ], {
              D: 'compactmachines:wall',
              V: 'compactmachines:atom_enlarger',
              U: 'compactmachines:atom_shrinker',
              E:  obsidiana
            }).id('galaxyorigins:largemachine')





             //giant machine compact
             nadien.remove({id: 'compactmachines:machine_giant'})
             nadien.shaped('compactmachines:machine_giant', [
               'DDD',
               'VEU',
               'DDD'
             ], {
               D: 'compactmachines:wall',
               V: 'compactmachines:atom_enlarger',
               U: 'compactmachines:atom_shrinker',
               E: 'minecraft:diamond'
             }).id('galaxyorigins:giantmachine')





     // maximum machine compact
     nadien.remove({id: 'compactmachines:machine_maximum'})
     nadien.shaped('compactmachines:machine_maximum', [
         'DDD',
         'VEU',
         'DDD'
       ], {
          D: 'compactmachines:wall',
          V: 'compactmachines:atom_enlarger',
          U: 'compactmachines:atom_shrinker',
          E: 'minecraft:netherite_ingot'
          }).id('galaxyorigins:maximummachine')



          //Atom Enlarging Module
          nadien.shaped('compactmachines:atom_enlarger', [
            'BPB',
            'BEB',
            'BLB'
          ], {
             B: 'minecraft:stone_button',
             E: 'minecraft:ender_eye',
             L: 'minecraft:light_weighted_pressure_plate',
             P: 'minecraft:piston'
             }).id('galaxyorigins:atom_enlarger_recipe_port')


             //Atom Shirinking Module
             nadien.shaped('compactmachines:atom_shrinker', [
              'BPB',
              'BEB',
              'BLB'
            ], {
               B: 'minecraft:stone_button',
               E: 'minecraft:ender_eye',
               L: 'minecraft:light_weighted_pressure_plate',
               P: 'minecraft:sticky_piston'
               }).id('galaxyorigins:atom_shrinker_recipe_port')
              
  })