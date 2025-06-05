//Avaritia Por Srnadien Prohibido Su Uso Externo
ServerEvents.recipes( nadien => {


    //diamond lattice
  nadien.remove({output: 'avaritia:diamond_lattice' })
  nadien.shaped("avaritia:diamond_lattice", ["X X", " D ", "X X"], {
    X: {
      tag: "forge:gems/diamond",
    },
    D: {
      item: 'mekanism:dirty_netherite_scrap',
    },
  }).id('ultimate_utilities:latituddediamantes')

//casco infinito
nadien.remove({output: 'avaritia:infinity_chestplate'})
nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "  AABAA  ",
    " ACDEDCA ",
    "AFFFGFFFA",
    "AFHFIFHFA",
    "AFFFGFFFA",
    " AFFJFFA ",
    " AFKLKFA ",
    "  AMNMA  ",
    "  AAAAA  "
  ],
  "key": {
    "A": {
      "item": "allthecompressed:obsidian_1x"
    },
    "B": {
      "item": "kubejs:heart_of_a_universe"
    },
    "C": {
      "item": "bhc:soul_heart_crystal"
    },
    "D": {
      "item": "mystical_extended_tier:ouranium_gemstone"
    },
    "E": {
      "item": "extendedcrafting:ultimate_singularity"
    },
    "F": {
      "item": "avaritia:neutron"
    },
    "G": {
      "item": "apotheosis:mythic_material"
    },
    "H": {
      "item": "mystical_extended_tier:infinity_crux"
    },
    "I": {
      "item": "mekanism:mekasuit_helmet"
    },
    "J": {
      "item": "ae2:singularity"
    },
    "K": {
      "item": "thermal_extra:abyssal_machine_speed_augment"
    },
    "L": {
      "item": "enderio:z_logic_controller"
    },
    "M": {
      "item": "mystical_extended_tier:ouranium_ingot"
    },
    "N": {
      "item": "allthemodium:piglich_heart"
    }
  },
  "result": {
    "item": 'avaritia:infinity_chestplate',
    "count": 1
  }
}).id('ultimate_utilities:infinity_helmet')




//Pechera Cosmica
nadien.remove({output: 'avaritia:infinity_chestplate'})
nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "AAAA AAAA",
    "ABCDEDCBA",
    "AFFFGFFFA",
    "AFFFHFFFA",
    "AAFFHFFAA",
    " AIF FIA ",
    " AJKLKJA ",
    " ABMNMBA ",
    "  AAAAA  "
  ],
  "key": {
    "A": {
      "item": "allthecompressed:obsidian_1x"
    },
    "B": {
      "item": "extendedcrafting:ultimate_singularity"
    },
    "C": {
      "item": "bhc:soul_heart_crystal"
    },
    "D": {
      "item": "mystical_extended_tier:ouranium_gemstone"
    },
    "E": {
      "item": "kubejs:heart_of_a_universe"
    },
    "F": {
      "item": "avaritia:neutron"
    },
    "G": {
      "item": "mekanism:mekasuit_bodyarmor"
    },
    "H": {
      "item": "mystical_extended_tier:infinity_crux"
    },
    "I": {
      "item": "apotheosis:mythic_material"
    },
    "J": {
      "item": "ae2:singularity"
    },
    "K": {
      "item": "thermal_extra:abyssal_machine_speed_augment"
    },
    "L": {
      "item": "enderio:z_logic_controller"
    },
    "M": {
      "item": "mystical_extended_tier:ouranium_ingot"
    },
    "N": {
      "item": "allthemodium:piglich_heart"
    }
  },
  "result": {
    "item": 'avaritia:infinity_chestplate',
    "count": 1
  }
}).id('ultimate_utilities:infinity_chestplate')

    

//Pantalones Infinitos
nadien.remove({output:'avaritia:infinity_chestplate'})
nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "AAAABAAAA",
    "ACDEFEDCA",
    "AGHIJIHGA",
    "AKLAAAKLA",
    "AMNA ANMA",
    "ALLA ALLA",
    "ALLA ALLA",
    "ALLA ALLA",
    "AAAA AAAA"
  ],
  "key": {
    "A": {
      "item": "allthecompressed:obsidian_1x"
    },
    "B": {
      "item": "kubejs:heart_of_a_universe"
    },
    "C": {
      "item": "extendedcrafting:ultimate_singularity"
    },
    "D": {
      "item": "mystical_extended_tier:ouranium_gemstone"
    },
    "E": {
      "item": "enderio:z_logic_controller"
    },
    "F": {
      "item": "mekanism:mekasuit_pants"
    },
    "G": {
      "item": "mystical_extended_tier:ouranium_ingot"
    },
    "H": {
      "item": "apotheosis:mythic_material"
    },
    "I": {
      "item": "thermal_extra:abyssal_machine_speed_augment"
    },
    "J": {
      "item": "allthemodium:piglich_heart"
    },
    "K": {
      "item": "bhc:soul_heart_crystal"
    },
    "L": {
      "item": "avaritia:neutron"
    },
    "M": {
      "item": "mystical_extended_tier:infinity_crux"
    },
    "N": {
      "item": "ae2:singularity"
    }
  },
  "result": {
    "item": 'avaritia:infinity_pants',
    "count": 1
  }
}).id('ultimate_utilities:infinity_pants')

//botas infinitas
nadien.remove({output: 'avaritia:infinity_boots'})
nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "AAAA AAAA",
    "ABCACACBA",
    "ADEADAEDA",
    "AFGAHAGFA",
    "AIGAJAGIA",
    "AGGA AGGA",
    "AKLA ALKA",
    "AMNA ANMA",
    "AAAA AAAA"
  ],
  "key": {
    "A": {
      "item": "allthecompressed:obsidian_1x"
    },
    "B": {
      "item": "extendedcrafting:ultimate_singularity"
    },
    "C": {
      "item": "mystical_extended_tier:ouranium_gemstone"
    },
    "D": {
      "item": "enderio:z_logic_controller"
    },
    "E": {
      "item": "thermal_extra:abyssal_machine_speed_augment"
    },
    "F": {
      "item": "mystical_extended_tier:ouranium_ingot"
    },
    "G": {
      "item": "avaritia:neutron"
    },
    "H": {
      "item": "kubejs:heart_of_a_universe"
    },
    "I": {
      "item": "bhc:soul_heart_crystal"
    },
    "J": {
      "item": "mekanism:mekasuit_boots"
    },
    "K": {
      "item": "ae2:singularity"
    },
    "L": {
      "item": "apotheosis:mythic_material"
    },
    "M": {
      "item": "mystical_extended_tier:infinity_crux"
    },
    "N": {
      "item": "allthemodium:piglich_heart"
    }
  },
  "result": {
    "item": 'avaritia:infinity_boots',
    "count": 1
  }
}).id('ultimate_utilities:infinity_boots')




//espada del cosmos
nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "      AAA",
    "     ABCA",
    "    ADEBA",
    " A AFGDA ",
    "AHAIEFA  ",
    " AJCIA   ",
    " AKJA    ",
    "ALAAHA   ",
    "AA  A    "
  ],
  "key": {
    "A": {
      "item": "allthecompressed:obsidian_1x"
    },
    "B": {
      "item": "mystical_extended_tier:ouranium_gemstone"
    },
    "C": {
      "item": "allthemodium:piglich_heart"
    },
    "D": {
      "item": "thermal_extra:abyssal_machine_speed_augment"
    },
    "E": {
      "item": "mystical_extended_tier:infinity_crux"
    },
    "F": {
      "item": "apotheosis:mythic_material"
    },
    "G": {
      "item": "kubejs:heart_of_a_universe"
    },
    "H": {
      "item": "ae2:singularity"
    },
    "I": {
      "item": "mystical_extended_tier:ouranium_ingot"
    },
    "J": {
      "item": "extendedcrafting:ultimate_singularity"
    },
    "K": {
      "item": "mystical_extended_tier:ouranium_sword"
    },
    "L": {
      "item": "mekanism:meka_tool"
    }
  },
  "result": {
    "item": 'avaritia:infinity_sword',
    "count": 1
  }
}).id('ultimate_utilities:cosmos_sword')

//espada infinita 1
      nadien.recipes.create.mechanical_crafting('ultimate_utilities:infinitysword_1', [
        "       II",
        "      III",
        "     III ",
        "    III  ",
        " C III   ",
        "  CII    ",
        "  NC     ",
        " N  C    ",
        "X        "
        ], {
          C: 'avaritia:crystal_matrix_ingot',
          I: 'avaritia:crystal_matrix',
          N: 'avaritia:neutron',
          X: 'avaritia:crystal_matrix'
        }).id('ultimate_utilities:infinitysworduno')


        nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "       II",
    "      III",
    "     III ",
    "    III  ",
    " C III   ",
    "  CII    ",
    "  NC     ",
    " N  C    ",
    "X        "
  ],
  "key": {
    "C": { "item": "avaritia:crystal_matrix_ingot" },
    "I": { "item": "avaritia:crystal_matrix" },
    "N": { "item": "avaritia:neutron" },
    "X": { "item": "avaritia:crystal_matrix" }
  },
  "result": {
    "item": "ultimate_utilities:infinitysword_1",
    "count": 1
  }
}).id('ultimate_utilities:infinityswordunoalt') 


        //espada del cosmos (balanced)
      nadien.recipes.create.mechanical_crafting('ultimate_utilities:infinityswordbalanced', [
        "       II",
        "      III",
        "     III ",
        "    III  ",
        " C III   ",
        "  CII    ",
        "  NC     ",
        " N  C    ",
        "X        "
        ], {
          C: 'avaritia:crystal_matrix_ingot',
          I: 'avaritia:infinity_ingot',
          N: 'avaritia:neutron_ingot',
          X: 'avaritia:infinity_catalyst'
        }).id('ultimate_utilities:cosmosswordbalanced')

nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "       II",
    "      III",
    "     III ",
    "    III  ",
    " C III   ",
    "  CII    ",
    "  NC     ",
    " N  C    ",
    "X        "
  ],
  "key": {
    "C": { "item": "avaritia:crystal_matrix_ingot" },
    "I": { "item": "avaritia:infinity_ingot" },
    "N": { "item": "avaritia:neutron_ingot" },
    "X": { "item": "avaritia:infinity_catalyst" }
  },
  "result": {
    "item": "ultimate_utilities:infinityswordbalanced",
    "count": 1
  }
}).id('ultimate_utilities:cosmosswordbalancedalt')









        //skullfire

       nadien.recipes.create.mechanical_crafting('avaritia:blaze_sword', [
        "       IX",
        "      IXI",
        "     IXI ",
        "    IXI  ",
        " B IXI   ",
        "  BXI    ",
        "  WB     ",
        " W  B    ",
        "D        "
        ], {
          B: 'minecraft:bone',
          D: 'minecraft:nether_star',
          I: 'avaritia:crystal_matrix_ingot',
          W: '#minecraft:logs',
          X: 'minecraft:blaze_powder'
        }).id('ultimate_utilities:blaze_sword')

        nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "       IX",
    "      IXI",
    "     IXI ",
    "    IXI  ",
    " B IXI   ",
    "  BXI    ",
    "  WB     ",
    " W  B    ",
    "D        "
  ],
  "key": {
    "B": { "item": "minecraft:bone" },
    "D": { "item": "minecraft:nether_star" },
    "I": { "item": "avaritia:crystal_matrix_ingot" },
    "W": { "tag": "minecraft:logs" },
    "X": { "item": "minecraft:blaze_powder" }
  },
  "result": {
    "item": "avaritia:blaze_sword",
    "count": 1
  }
}).id('ultimate_utilities:blaze_sword_alt')




       //arco multidisparo

       nadien.recipes.create.mechanical_crafting('avaritia:infinity_bow', [
        "   II",
        "  I W",
        " I  W",
        "I   W",
        "X   W",
        "I   W",
        " I  W",
        "  I W",
        "   II"
        ], {
          X: 'avaritia:infinity_catalyst',
          I: 'avaritia:infinity_ingot',
          W: 'minecraft:white_wool'
        }).id('ultimate_utilities:arco_de_los_dioses')


        nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "   II",
    "  I W",
    " I  W",
    "I   W",
    "X   W",
    "I   W",
    " I  W",
    "  I W",
    "   II"
  ],
  "key": {
    "X": { "item": "avaritia:infinity_catalyst" },
    "I": { "item": "avaritia:infinity_ingot" },
    "W": { "item": "minecraft:white_wool" }
  },
  "result": {
    "item": "avaritia:infinity_bow",
    "count": 1
  }
}).id('ultimate_utilities:arco_de_los_dioses_alt')




        //destructor de mundos
        nadien.remove({output: 'avaritia:infinity_pickaxe' })
        nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    " AAABAAA ",
    "AAAAAAAAA",
    "AA  C  AA",
    "    D    ",
    "    D    ",
    "    D    ",
    "    D    ",
    "    D    ",
    "    D    "
  ],
  "key": {
    "A": {
      "item": "avaritia:infinity_ingot"
    },
    "B": {
      "item": "kubejs:heart_of_a_universe"
    },
    "C": {
      "item": "avaritia:crystal_matrix"
    },
    "D": {
      "item": "avaritia:neutron"
    }
  },
  "result": {
    "item": 'avaritia:infinity_pickaxe',
    "count": 1
  }
}).id('ultimate_utilities:wold_breaker')



          //pala planetaria
          nadien.recipes.create.mechanical_crafting('avaritia:infinity_shovel', [
            "      III",
            "     IIXI",
            "      III",
            "     N I ",
            "    N    ",
            "   N     ",
            "  N      ",
            " N       ",
            "N        "
            ], {
              I: 'avaritia:infinity_ingot',
              N: 'avaritia:neutron_ingot',
              X: 'avaritia:infinity_catalyst'
            }).id('ultimate_utilities:palainfinita')

            nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "      III",
    "     IIXI",
    "      III",
    "     N I ",
    "    N    ",
    "   N     ",
    "  N      ",
    " N       ",
    "N        "
  ],
  "key": {
    "I": { "item": "avaritia:infinity_ingot" },
    "N": { "item": "avaritia:neutron_ingot" },
    "X": { "item": "avaritia:infinity_catalyst" }
  },
  "result": {
    "item": "avaritia:infinity_shovel",
    "count": 1
  }
}).id('ultimate_utilities:palainfinitaalt')



            //hacha de la naturaleza
            nadien.remove({output: 'avaritia:infinity_axe' })
            nadien.recipes.create.mechanical_crafting('avaritia:infinity_axe', [
              "   I   ",
              "  IIIII",
              "  IIXI ",
              "   IN  ",
              "    N  ",
              "    N  ",
              "    N  ",
              "    N  ",
              "    N  "
              ], {
                I: 'avaritia:infinity_ingot',
                N: 'avaritia:neutron_ingot',
                X: 'avaritia:infinity_catalyst'
              }).id('ultimate_utilities:hachainfinita')

              nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "   I   ",
    "  IIIII",
    "  IIXI ",
    "   IN  ",
    "    N  ",
    "    N  ",
    "    N  ",
    "    N  ",
    "    N  "
  ],
  "key": {
    "I": { "item": "avaritia:infinity_ingot" },
    "N": { "item": "avaritia:neutron_ingot" },
    "X": { "item": "avaritia:infinity_catalyst" }
  },
  "result": {
    "item": "avaritia:infinity_axe",
    "count": 1
  }
}).id('ultimate_utilities:hachainfinitaalt')



              //azada del la tierra verde
              nadien.remove({output: 'avaritia:infinity_hoe' })
              nadien.recipes.create.mechanical_crafting('avaritia:infinity_hoe', [
                "     N ",
                "   IIII",
                "  IIIII",
                "  I  XI",
                "     N ",
                "     N ",
                "     N ",
                "     N ",
                "     N "
                ], {
                  I: 'avaritia:infinity_ingot',
                  N: 'avaritia:neutron_ingot',
                  X: 'avaritia:infinity_catalyst'
                }).id('ultimate_utilities:azadainfinita')

                nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "     N ",
    "   IIII",
    "  IIIII",
    "  I  XI",
    "     N ",
    "     N ",
    "     N ",
    "     N ",
    "     N "
  ],
  "key": {
    "I": { "item": "avaritia:infinity_ingot" },
    "N": { "item": "avaritia:neutron_ingot" },
    "X": { "item": "avaritia:infinity_catalyst" }
  },
  "result": {
    "item": "avaritia:infinity_hoe",
    "count": 1
  }
}).id('ultimate_utilities:azadainfinitaalt')






//albondigas cosmicas
                nadien.remove({output: 'avaritia:cosmic_meatballs' })
                nadien.recipes.createMechanicalCrafting(
                  'avaritia:cosmic_meatballs',
                  ["ABCDEFGHI", "JKLM     "],
                  {
                    A: {
                      item: "minecraft:porkchop",
                    },
                    B: {
                      item: "minecraft:beef",
                    },
                    C: {
                      item: "minecraft:mutton",
                    },
                    D: {
                      item: "minecraft:cod",
                    },
                    E: {
                      item: "minecraft:salmon",
                    },
                    F: {
                      item: "minecraft:tropical_fish",
                    },
                    G: {
                      item: "minecraft:pufferfish",
                    },
                    H: {
                      item: "minecraft:rabbit",
                    },
                    I: {
                      item: "minecraft:chicken",
                    },
                    J: {
                      item: "minecraft:rotten_flesh",
                    },
                    K: {
                      item: "minecraft:spider_eye",
                    },
                    L: {
                      item: "minecraft:egg",
                    },
                    M: {
                      item: "avaritia:neutron_nugget",
                    },
                  }).id('ultimate_utilities:cosmic_meatballs')

                nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "ABCDEFGHI",
    "JKLM     "
  ],
  "key": {
    "A": { "item": "minecraft:porkchop" },
    "B": { "item": "minecraft:beef" },
    "C": { "item": "minecraft:mutton" },
    "D": { "item": "minecraft:cod" },
    "E": { "item": "minecraft:salmon" },
    "F": { "item": "minecraft:tropical_fish" },
    "G": { "item": "minecraft:pufferfish" },
    "H": { "item": "minecraft:rabbit" },
    "I": { "item": "minecraft:chicken" },
    "J": { "item": "minecraft:rotten_flesh" },
    "K": { "item": "minecraft:spider_eye" },
    "L": { "item": "minecraft:egg" },
    "M": { "item": "avaritia:neutron_nugget" }
  },
  "result": {
    "item": "avaritia:cosmic_meatballs",
    "count": 1
  }
}).id('ultimate_utilities:cosmic_meatballs_alt')


                //estofado ultimo
                nadien.remove({output: 'avaritia:ultimate_stew' })
                nadien.recipes.createMechanicalCrafting(
                  'avaritia:ultimate_stew',
                  [
                    "ABCDEFGHI",
                    "JKLMOPQRS",
                    "TUVWXYZab",
                    "cdefghijk",
                    "lmnopqrst",
                    "uvwxyz123",
                    "45       ",
                  ],
                  {
                    A: {
                      item: "minecraft:apple",
                    },
                    B: {
                      item: "minecraft:golden_apple",
                    },
                    C: {
                      item: "minecraft:bread",
                    },
                    D: {
                      item: "minecraft:kelp",
                    },
                    E: {
                      item: "minecraft:cocoa_beans",
                    },
                    F: {
                      item: "minecraft:cake",
                    },
                    G: {
                      item: "minecraft:glistering_melon_slice",
                    },
                    H: {
                      item: "minecraft:carrot",
                    },
                    I: {
                      item: "minecraft:poisonous_potato",
                    },
                    J: {
                      item: "minecraft:chorus_fruit",
                    },
                    K: {
                      item: "minecraft:beetroot",
                    },
                    L: {
                      item: "minecraft:mushroom_stew",
                    },
                    M: {
                      item: "minecraft:honey_bottle",
                    },
                    O: {
                      item: "minecraft:sweet_berries",
                    },
                    P: {
                      item: "farmersdelight:apple_pie",
                    },
                    Q: {
                      item: "farmersdelight:sweet_berry_cheesecake",
                    },
                    R: {
                      item: "farmersdelight:chocolate_pie",
                    },
                    S: {
                      item: "farmersdelight:melon_popsicle",
                    },
                    T: {
                      item: "farmersdelight:fruit_salad",
                    },
                    U: {
                      item: "farmersdelight:mixed_salad",
                    },
                    V: {
                      item: "farmersdelight:nether_salad",
                    },
                    W: {
                      item: "farmersdelight:barbecue_stick",
                    },
                    X: {
                      item: "farmersdelight:egg_sandwich",
                    },
                    Y: {
                      item: "farmersdelight:chicken_sandwich",
                    },
                    Z: {
                      item: "farmersdelight:hamburger",
                    },
                    a: {
                      item: "farmersdelight:bacon_sandwich",
                    },
                    b: {
                      item: "farmersdelight:mutton_wrap",
                    },
                    c: {
                      item: "farmersdelight:dumplings",
                    },
                    d: {
                      item: "farmersdelight:stuffed_potato",
                    },
                    e: {
                      item: "farmersdelight:cabbage_rolls",
                    },
                    f: {
                      item: "farmersdelight:cooked_rice",
                    },
                    g: {
                      item: "farmersdelight:beef_stew",
                    },
                    h: {
                      item: "farmersdelight:chicken_soup",
                    },
                    i: {
                      item: "farmersdelight:vegetable_soup",
                    },
                    j: {
                      item: "farmersdelight:fish_stew",
                    },
                    k: {
                      item: "farmersdelight:fried_rice",
                    },
                    l: {
                      item: "farmersdelight:pumpkin_soup",
                    },
                    m: {
                      item: "farmersdelight:baked_cod_stew",
                    },
                    n: {
                      item: "farmersdelight:noodle_soup",
                    },
                    o: {
                      item: "farmersdelight:bacon_and_eggs",
                    },
                    p: {
                      item: "farmersdelight:pasta_with_meatballs",
                    },
                    q: {
                      item: "farmersdelight:pasta_with_mutton_chop",
                    },
                    r: {
                      item: "farmersdelight:roasted_mutton_chops",
                    },
                    s: {
                      item: "farmersdelight:vegetable_noodles",
                    },
                    t: {
                      item: "farmersdelight:steak_and_potatoes",
                    },
                    u: {
                      item: "farmersdelight:ratatouille",
                    },
                    v: {
                      item: "farmersdelight:salmon_roll",
                    },
                    w: {
                      item: "farmersdelight:stuffed_pumpkin_block",
                    },
                    x: {
                      item: "farmersdelight:roast_chicken_block",
                    },
                    y: {
                      item: "farmersdelight:grilled_salmon",
                    },
                    z: {
                      item: 'farmersdelight:sweet_berry_cheesecake_slice',
                    },
                    1: {
                      item: 'ultimate_utilities:cajita_feliz',
                    },
                    2: {
                      item: "create:blaze_cake",
                    },
                    3: {
                      item: "create:chocolate_glazed_berries",
                    },
                    4: {
                      item: "create:honeyed_apple",
                    },
                    5: {
                      item: "avaritia:neutron_nugget",
                    },
                  }).id('ultimate_utilities:estofado_ultimo')

                    nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "ABCDEFGHI",
    "JKLMOPQRS",
    "TUVWXYZab",
    "cdefghijk",
    "lmnopqrst",
    "uvwxyz123",
    "45       "
  ],
  "key": {
    "A": { "item": "minecraft:apple" },
    "B": { "item": "minecraft:golden_apple" },
    "C": { "item": "minecraft:bread" },
    "D": { "item": "minecraft:kelp" },
    "E": { "item": "minecraft:cocoa_beans" },
    "F": { "item": "minecraft:cake" },
    "G": { "item": "minecraft:glistering_melon_slice" },
    "H": { "item": "minecraft:carrot" },
    "I": { "item": "minecraft:poisonous_potato" },
    "J": { "item": "minecraft:chorus_fruit" },
    "K": { "item": "minecraft:beetroot" },
    "L": { "item": "minecraft:mushroom_stew" },
    "M": { "item": "minecraft:honey_bottle" },
    "O": { "item": "minecraft:sweet_berries" },
    "P": { "item": "farmersdelight:apple_pie" },
    "Q": { "item": "farmersdelight:sweet_berry_cheesecake" },
    "R": { "item": "farmersdelight:chocolate_pie" },
    "S": { "item": "farmersdelight:melon_popsicle" },
    "T": { "item": "farmersdelight:fruit_salad" },
    "U": { "item": "farmersdelight:mixed_salad" },
    "V": { "item": "farmersdelight:nether_salad" },
    "W": { "item": "farmersdelight:barbecue_stick" },
    "X": { "item": "farmersdelight:egg_sandwich" },
    "Y": { "item": "farmersdelight:chicken_sandwich" },
    "Z": { "item": "farmersdelight:hamburger" },
    "a": { "item": "farmersdelight:bacon_sandwich" },
    "b": { "item": "farmersdelight:mutton_wrap" },
    "c": { "item": "farmersdelight:dumplings" },
    "d": { "item": "farmersdelight:stuffed_potato" },
    "e": { "item": "farmersdelight:cabbage_rolls" },
    "f": { "item": "farmersdelight:cooked_rice" },
    "g": { "item": "farmersdelight:beef_stew" },
    "h": { "item": "farmersdelight:chicken_soup" },
    "i": { "item": "farmersdelight:vegetable_soup" },
    "j": { "item": "farmersdelight:fish_stew" },
    "k": { "item": "farmersdelight:fried_rice" },
    "l": { "item": "farmersdelight:pumpkin_soup" },
    "m": { "item": "farmersdelight:baked_cod_stew" },
    "n": { "item": "farmersdelight:noodle_soup" },
    "o": { "item": "farmersdelight:bacon_and_eggs" },
    "p": { "item": "farmersdelight:pasta_with_meatballs" },
    "q": { "item": "farmersdelight:pasta_with_mutton_chop" },
    "r": { "item": "farmersdelight:roasted_mutton_chops" },
    "s": { "item": "farmersdelight:vegetable_noodles" },
    "t": { "item": "farmersdelight:steak_and_potatoes" },
    "u": { "item": "farmersdelight:ratatouille" },
    "v": { "item": "farmersdelight:salmon_roll" },
    "w": { "item": "farmersdelight:stuffed_pumpkin_block" },
    "x": { "item": "farmersdelight:roast_chicken_block" },
    "y": { "item": "farmersdelight:grilled_salmon" },
    "z": { "item": "farmersdelight:sweet_berry_cheesecake_slice" },
    "1": { "item": "ultimate_utilities:cajita_feliz" },
    "2": { "item": "create:blaze_cake" },
    "3": { "item": "create:chocolate_glazed_berries" },
    "4": { "item": "create:honeyed_apple" },
    "5": { "item": "avaritia:neutron_nugget" }
  },
  "result": {
    "item": "avaritia:ultimate_stew",
    "count": 1
  }
}).id('ultimate_utilities:estofado_ultimo_alt')



                //perla destructora
                nadien.remove({output: 'avaritia:endest_pearl' })
                nadien.recipes.createMechanicalCrafting(
                  'avaritia:endest_pearl',
                  [
                    "   AAA   ",
                    " AABBBAA ",
                    " ABBBBBA ",
                    "ABBBDBBBA",
                    "ABBDCDBBA",
                    "ABBBDBBBA",
                    " ABBBBBA ",
                    " AABBBAA ",
                    "   AAA   ",
                  ],
                  {
                    A: {
                      item: "minecraft:end_stone",
                    },
                    B: {
                      item: "minecraft:ender_pearl",
                    },
                    C: {
                      item: "minecraft:nether_star",
                    },
                    D: {
                      item: "avaritia:neutron_ingot",
                    },
                  }).id('ultimate_utilities:endest_pearl')

                  nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "   AAA   ",
    " AABBBAA ",
    " ABBBBBA ",
    "ABBBDBBBA",
    "ABBDCDBBA",
    "ABBBDBBBA",
    " ABBBBBA ",
    " AABBBAA ",
    "   AAA   "
  ],
  "key": {
    "A": { "item": "minecraft:end_stone" },
    "B": { "item": "minecraft:ender_pearl" },
    "C": { "item": "minecraft:nether_star" },
    "D": { "item": "avaritia:neutron_ingot" }
  },
  "result": {
    "item": "avaritia:endest_pearl",
    "count": 1
  }
}).id('ultimate_utilities:endest_pearl_alt')


                //compresor
                
                nadien.recipes.createMechanicalCrafting(
                  'extendedcrafting:compressor',
                  [
                    "IIIHHHIII",
                    "X N   N X",
                    "I N   N I",
                    "X N   N X",
                    "RNN O NNR",
                    "X N   N X",
                    "I N   N I",
                    "X N   N X",
                    "IIIXIXIII",
                  ],
                  {
                    N: {
                      item: "avaritia:neutron_ingot",
                    },
                    H: {
                      item: "minecraft:hopper",
                    },
                    I: {
                      tag: "forge:storage_blocks/iron",
                    },
                    O: {
                      item: "avaritia:neutronium_block",
                    },
                    X: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    R: {
                      tag: "forge:storage_blocks/redstone",
                    },
                  }).id('ultimate_utilities:compresor')

nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "IIIHHHIII",
    "X N   N X",
    "I N   N I",
    "X N   N X",
    "RNN O NNR",
    "X N   N X",
    "I N   N I",
    "X N   N X",
    "IIIXIXIII"
  ],
  "key": {
    "N": { "item": "avaritia:neutron_ingot" },
    "H": { "item": "minecraft:hopper" },
    "I": { "tag": "forge:storage_blocks/iron" },
    "O": { "item": "avaritia:neutronium_block" },
    "X": { "item": "avaritia:crystal_matrix_ingot" },
    "R": { "tag": "forge:storage_blocks/redstone" }
  },
  "result": {
    "item": "extendedcrafting:compressor",
    "count": 1
  }
}).id('ultimate_utilities:compresor_alt')


                //colector de neutrones
              
                nadien.recipes.createMechanicalCrafting(
                  'avaritia:neutron_collector',
                  [
                    "IIQQQQQII",
                    "I QQQQQ I",
                    "I  RRR  I",
                    "X RRRRR X",
                    "I RRXRR I",
                    "X RRRRR X",
                    "I  RRR  I",
                    "I       I",
                    "IIIXIXIII",
                  ],
                  {
                    I: {
                      tag: "forge:storage_blocks/iron",
                    },
                    X: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    R: {
                      tag: "forge:storage_blocks/redstone",
                    },
                    Q: {
                      tag: "forge:storage_blocks/quartz",
                    },
                  }).id('ultimate_utilities:neutron_collector')

                  nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "IIQQQQQII",
    "I QQQQQ I",
    "I  RRR  I",
    "X RRRRR X",
    "I RRXRR I",
    "X RRRRR X",
    "I  RRR  I",
    "I       I",
    "IIIXIXIII"
  ],
  "key": {
    "I": { "tag": "forge:storage_blocks/iron" },
    "X": { "item": "avaritia:crystal_matrix_ingot" },
    "R": { "tag": "forge:storage_blocks/redstone" },
    "Q": { "tag": "forge:storage_blocks/quartz" }
  },
  "result": {
    "item": "avaritia:neutron_collector",
    "count": 1
  }
}).id('ultimate_utilities:neutron_collector_alt')


                 //colector de neutrones Dense

                 nadien.recipes.createMechanicalCrafting(
                  'avaritia:dense_neutron_collector',
                  [
                    "aaa",
                    "aga",
                    "aaa"
                  ],
                  {
                    a: {
                        "item": "avaritia:neutron_collector",
                      },
                    g: {
                        "item": "avaritia:neutron_gear",
                    },

                  }
                ).id('ultimate_utilities:neutroncollectordense')

                 nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "aaa",
    "aga",
    "aaa"
  ],
  "key": {
    "a": { "item": "avaritia:neutron_collector" },
    "g": { "item": "avaritia:neutron_gear" }
  },
  "result": {
    "item": "avaritia:dense_neutron_collector",
    "count": 1
  }
}).id('ultimate_utilities:neutroncollectordensealt')


                //colector de neutrones Denser
 
                nadien.recipes.createMechanicalCrafting(
                  'avaritia:denser_neutron_collector',
                  [
                    "aaa",
                    "aga",
                    "aaa"
                  ],
                  {
                    a: {
                        "item": "avaritia:dense_neutron_collector",
                      },
                    g: {
                        "item": "avaritia:neutron_gear",
                    },

                  }).id('ultimate_utilities:neutroncollectordenser')

                 nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "aaa",
    "aga",
    "aaa"
  ],
  "key": {
    "a": { "item": "avaritia:dense_neutron_collector" },
    "g": { "item": "avaritia:neutron_gear" }
  },
  "result": {
    "item": "avaritia:denser_neutron_collector",
    "count": 1
  }
}).id('ultimate_utilities:neutroncollectordenseralt')


                //colector de neutrones Densest

                nadien.recipes.createMechanicalCrafting(
                  'avaritia:densest_neutron_collector',
                  [
                    "CC     CC",
                    "C  BBB  C",
                    "  AAAAA  ",
                    " BAXXXAB ",
                    " BAXYXAB ",
                    " BAXXXAB ",
                    "  AAAAA  ",
                    "C  BBB  C",
                    "CC     CC" 
                  ],
                  {
                    A: {
                      "item": "minecraft:redstone_block"
                    },
                    "B": {
                      "item": "avaritia:neutron_ingot"
                    },
                    C: {
                      "item": "avaritia:neutron_gear"
                    },
                    X: {
                      "item": "avaritia:denser_neutron_collector"
                    },
                    Y: {
                      "type": "forge:nbt",
                      "item": "extendedcrafting:singularity",
                      "count": 1,
                      "nbt": "{Id:\"extendedcrafting:redstone\"}"
                    },

                  }).id('ultimate_utilities:neutroncollectordensest')

                  nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "CC     CC",
    "C  BBB  C",
    "  AAAAA  ",
    " BAXXXAB ",
    " BAXYXAB ",
    " BAXXXAB ",
    "  AAAAA  ",
    "C  BBB  C",
    "CC     CC"
  ],
  "key": {
    "A": { "item": "minecraft:redstone_block" },
    "B": { "item": "avaritia:neutron_ingot" },
    "C": { "item": "avaritia:neutron_gear" },
    "X": { "item": "avaritia:denser_neutron_collector" },
    "Y": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:redstone\"}"
    }
  },
  "result": {
    "item": "avaritia:densest_neutron_collector",
    "count": 1
  }
}).id('ultimate_utilities:neutroncollectordensestalt')


                //infinity catalyst

                nadien.recipes.createMechanicalCrafting("avaritia:infinity_catalyst", [
                  "    A    ",
                  " A  A  A ",
                  "  BBABB  ",
                  "  BCDCB  ",
                  "AAAECEAAA",
                  "  BCDCB  ",
                  "  BBABB  ",
                  " A  A  A ",
                  "    A    "
                   ],
                  {
                     A: "avaritia:crystal_matrix_ingot",
                     B: "avaritia:ultimate_stew",
                     C: "avaritia:neutron",
                     D: "megacells:cell_component_1m",
                     E: 'avaritia:eternal_singularity'
                  }).id("galaxyorigenes:infinity_catalyst")


    nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "    A    ",
    " A  A  A ",
    "  BBABB  ",
    "  BCDCB  ",
    "AAAECEAAA",
    "  BCDCB  ",
    "  BBABB  ",
    " A  A  A ",
    "    A    "
  ],
  "key": {
    "A": {
      "item": "avaritia:crystal_matrix_ingot"
    },
    "B": {
      "item": "avaritia:ultimate_stew"
    },
    "C": {
      "item": "avaritia:neutron"
    },
    "D": {
      "item": "megacells:cell_component_1m"
    },
    "E": {
      "item": 'avaritia:eternal_singularity'
    }
  },
  "result": {
    "item": "avaritia:infinity_catalyst",
    "count": 1
  }
}).id("galaxyorigenes:infinity_catalyst_alt")

nadien.recipes.createMechanicalCrafting(
                  "avaritia:infinity_catalyst",
                  ["ABCDEFGHI", "8        "],
                  {
                    A: {
                      item: "avaritia:diamond_lattice",
                    },
                    B: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    C: {
                      item: "avaritia:neutron_pile",
                    },
                    D: {
                      item: "avaritia:neutron_nugget",
                    },
                    E: {
                      item: "avaritia:neutron_ingot",
                    },
                    F: {
                      item: "avaritia:record_fragment",
                    },
                    G: {
                      item: "avaritia:endest_pearl",
                    },
                    H: {
                      item: "avaritia:ultimate_stew",
                    },
                    I: {
                      item: "avaritia:cosmic_meatballs",
                    },
                    8: {
                      item: 'avaritia:eternal_singularity',
                    },
                  }).id("galaxyorigenes:infinity_catalyst_alt_alt")




                //ethernal singularity
               nadien.remove({output: 'avaritia:eternal_singularity' })
                nadien.recipes.create.mechanical_crafting('avaritia:eternal_singularity', [
                  "ABCDEFGHI",
                  "JKLMNOPQR",
                  "STUVWXYce",
                  "f        "
                  ], {
                  A: 'avaritia:dark_iron_ingot_singularity',
                  B: 'avaritia:esmarelda_singularity',
                  C: 'avaritia:xp_jelly_baby_singularity',
                  D: 'avaritia:cheese_singularity',
                  E: 'avaritia:uraninite_singularity',
                  F: 'avaritia:fusion_reactor_casing_singularity',
                  G: 'avaritia:addon_singularity',
                  H: 'avaritia:track_singularity',
                  I: 'avaritia:source_gem_singularity',
                  J: 'avaritia:mateico_singularity',
                  K: 'avaritia:singularity_emerlad_to_emerald_singularity',
                  L: 'avaritia:flux_block_singularity',
                  M: 'avaritia:uranium_235_singularity',
                  N: 'avaritia:enderium_block_singularity',
                  O: 'avaritia:crafting_table_singularity',
                  P: 'avaritia:soul_berry_singularity',
                  Q: 'avaritia:nether_star_singularity',
                  R: 'avaritia:crystal_nitro_singularity',
                  S: 'avaritia:neutronium_singularity',
                  T: 'avaritia:balloon_singularity',
                  U: 'avaritia:certus_quartz_singularity',
                  V: 'avaritia:hopper_botany_pot_singularity',
                  W: 'avaritia:caca_singularity',
                  X: 'avaritia:pellet_polonium_singularity',
                  Y: 'avaritia:record_singularity',
                  c: 'avaritia:nadienite_singularity',
                  e: 'avaritia:andesite_cassing_singularity',
                  f: 'avaritia:double_uranium_235_plate_singularity'
                  }).id('ultimate_utilities:ultimatesingularity')

nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "ABCDEFGHI",
    "JKLMNOPQR",
    "STUVWXYce",
    "f        "
  ],
  "key": {
    "A": { "item": "avaritia:dark_iron_ingot_singularity" },
    "B": { "item": "avaritia:esmarelda_singularity" },
    "C": { "item": "avaritia:xp_jelly_baby_singularity" },
    "D": { "item": "avaritia:cheese_singularity" },
    "E": { "item": "avaritia:uraninite_singularity" },
    "F": { "item": "avaritia:fusion_reactor_casing_singularity" },
    "G": { "item": "avaritia:addon_singularity" },
    "H": { "item": "avaritia:track_singularity" },
    "I": { "item": "avaritia:source_gem_singularity" },
    "J": { "item": "avaritia:mateico_singularity" },
    "K": { "item": "avaritia:singularity_emerlad_to_emerald_singularity" },
    "L": { "item": "avaritia:flux_block_singularity" },
    "M": { "item": "avaritia:uranium_235_singularity" },
    "N": { "item": "avaritia:enderium_block_singularity" },
    "O": { "item": "avaritia:crafting_table_singularity" },
    "P": { "item": "avaritia:soul_berry_singularity" },
    "Q": { "item": "avaritia:nether_star_singularity" },
    "R": { "item": "avaritia:crystal_nitro_singularity" },
    "S": { "item": "avaritia:neutronium_singularity" },
    "T": { "item": "avaritia:balloon_singularity" },
    "U": { "item": "avaritia:certus_quartz_singularity" },
    "V": { "item": "avaritia:hopper_botany_pot_singularity" },
    "W": { "item": "avaritia:caca_singularity" },
    "X": { "item": "avaritia:pellet_polonium_singularity" },
    "Y": { "item": "avaritia:record_singularity" },
    "c": { "item": "avaritia:nadienite_singularity" },
    "e": { "item": "avaritia:andesite_cassing_singularity" },
    "e": { "item": "avaritia:double_uranium_235_plate_singularity" }
  },
  "result": {
    "item": "avaritia:eternal_singularity",
    "count": 1
  }
}).id('ultimate_utilities:ultimatesingularityalt')


                //lingote infinito

                nadien.recipes.createMechanicalCrafting(
                  'avaritia:infinity_ingot',
                  ["NNNNNNNNN", "NCIICIICN", "NICCICCIN", "NCIICIICN", "NNNNNNNNN"],
                  {
                    C: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    N: {
                      item: "avaritia:neutron_ingot",
                    },
                    I: {
                      item: "avaritia:infinity_catalyst",
                    },
                  }
                ).id('ultimate_utilities:infinityingot')


                nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "AAAAAAAAA",
    "ABCCBCCBA",
    "ACBBCBBCA",
    "ABCCBCCBA",
    "AAAAAAAAA",
    "         ",
    "         ",
    "         ",
    "         "
  ],
  "key": {
    "A": {
      "item": "avaritia:neutron_ingot"
    },
    "B": {
      "item": "avaritia:crystal_matrix_ingot"
    },
    "C": {
      "item": "avaritia:infinity_catalyst"
    }
  },
  "result": {
    "item": 'avaritia:infinity_ingot',
    "count": 1
  }
}).id('ultimate_utilities:infinityingotalt')

	
	
	
	//endless cake

  nadien.recipes.createMechanicalCrafting(
    'avaritia:endless_cake',
    [
      "aaa",
      "bcb",
      "ded"
    ],
    {
          a: {
            "item": "minecraft:milk_bucket",
          },
          b: {
            "item": "minecraft:sugar",
          },
          "c": {
            "item": "minecraft:dragon_egg",
          },
          d: {
            "tag": "forge:crops/wheat",
          },
          e: {
            "item": "avaritia:infinity_ingot",
          },
    }).id('ultimate_utilities:tartainfinita')

   nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "aaa",
    "bcb",
    "ded"
  ],
  "key": {
    "a": { "item": "minecraft:milk_bucket" },
    "b": { "item": "minecraft:sugar" },
    "c": { "item": "minecraft:dragon_egg" },
    "d": { "tag": "forge:crops/wheat" },
    "e": { "item": "avaritia:infinity_ingot" }
  },
  "result": {
    "item": "avaritia:endless_cake",
    "count": 1
  }
}).id('ultimate_utilities:tartainfinitaalt')



		//infinity totem

  nadien.recipes.createMechanicalCrafting(
    'avaritia:infinity_totem',
    [
      "   NNN   ",
      "  NIIIN  ",
      "  NYIYN  ",
      "CCCIIICCC",
      " CCIIICC ",
      "  NIIIN  ",
      "  NNNNN  ",
      "   CCC   ",
      "    C    "
    ],
    {
      C: {
        "item": "avaritia:crystal_matrix_ingot"
      },
      I: {
        "item": "avaritia:infinity_nugget"
      },
      N: {
        "item": "avaritia:neutron_ingot"
      },
      Y: {
        "item": "minecraft:totem_of_undying"
          },
    }).id('ultimate_utilities:toteminfinito')

    nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "   NNN   ",
    "  NIIIN  ",
    "  NYIYN  ",
    "CCCIIICCC",
    " CCIIICC ",
    "  NIIIN  ",
    "  NNNNN  ",
    "   CCC   ",
    "    C    "
  ],
  "key": {
    "C": { "item": "avaritia:crystal_matrix_ingot" },
    "I": { "item": "avaritia:infinity_nugget" },
    "N": { "item": "avaritia:neutron_ingot" },
    "Y": { "item": "minecraft:totem_of_undying" }
  },
  "result": {
    "item": "avaritia:infinity_totem",
    "count": 1
  }
}).id('ultimate_utilities:toteminfinitoalt')




  		//star fuel

      nadien.recipes.createMechanicalCrafting(
        'avaritia:star_fuel',
        [
          "ccc",
          "cxc",
          "ccc"
        ],
        {
          c: {
            "item": "allthecompressed:coal_block_9x"
          },
          x: {
            "item": "avaritia:infinity_catalyst"
              },
        }).id('ultimate_utilities:starfuel')

        nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "ccc",
    "cxc",
    "ccc"
  ],
  "key": {
    "c": { "item": "allthecompressed:coal_block_9x" },
    "x": { "item": "avaritia:infinity_catalyst" }
  },
  "result": {
    "item": "avaritia:star_fuel",
    "count": 1
  }
}).id('ultimate_utilities:starfuelalt')





        		//infinite bucket

            nadien.recipes.createMechanicalCrafting(
              "avaritia:infinity_bucket",
              [
                "NN     NN",
                "NNX   XNN",
                "NBBX XBBN",
                "NBBI IBBN",
                "NBBI IBBN",
                "NBBIIIBBN",
                "NNBBBBBNN",
                " NNBBBNN ",
                "  NNNNN  "
              ],
              {
                B: "minecraft:bucket",
                I: "avaritia:infinity_ingot",
                N: "avaritia:neutron_ingot",
                X: "avaritia:infinity_catalyst"
              }).id('ultimate_utilities:infinitybucket')
      
                    nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "NN     NN",
    "NNX   XNN",
    "NBBX XBBN",
    "NBBI IBBN",
    "NBBI IBBN",
    "NBBIIIBBN",
    "NNBBBBBNN",
    " NNBBBNN ",
    "  NNNNN  "
  ],
  "key": {
    "B": { "item": "minecraft:bucket" },
    "I": { "item": "avaritia:infinity_ingot" },
    "N": { "item": "avaritia:neutron_ingot" },
    "X": { "item": "avaritia:infinity_catalyst" }
  },
  "result": {
    "item": "avaritia:infinity_bucket",
    "count": 1
  }
}).id('ultimate_utilities:infinitybucketalt')



      //crystal pickaxe

      nadien.recipes.createMechanicalCrafting(
        "avaritia:crystal_pickaxe",
        [
          " CCCWCCC ",
          "CWWWWWWWC",
          "CW  N  WC",
          "    N    ",
          "    N    ",
          "    N    ",
          "    N    ",
          "    N    ",
          "    N    "
        ],
        {
          C: "avaritia:crystal_matrix_ingot",
          W: "avaritia:crystal_matrix",
          N: "avaritia:neutron",
        }).id('ultimate_utilities:crystalpickaxe')

        nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    " CCCWCCC ",
    "CWWWWWWWC",
    "CW  N  WC",
    "    N    ",
    "    N    ",
    "    N    ",
    "    N    ",
    "    N    ",
    "    N    "
  ],
  "key": {
    "C": { "item": "avaritia:crystal_matrix_ingot" },
    "W": { "item": "avaritia:crystal_matrix" },
    "N": { "item": "avaritia:neutron" }
  },
  "result": {
    "item": "avaritia:crystal_pickaxe",
    "count": 1
  }
}).id('ultimate_utilities:crystalpickaxealt')


        //cofre compreso
        nadien.remove({output: 'avaritia:compressed_chest' })
        nadien.recipes.create.mechanical_crafting("avaritia:compressed_chest", [
          "ccc",
          "cgc",
          "ccc"
        ], {
          c: "minecraft:chest",
          g: "avaritia:neutron_gear"
        }).id('ultimate_utilities:cofrecompreso')

        nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "ccc",
    "cgc",
    "ccc"
  ],
  "key": {
    "c": { "item": "minecraft:chest" },
    "g": { "item": "avaritia:neutron_gear" }
  },
  "result": {
    "item": "avaritia:compressed_chest",
    "count": 1
  }
}).id('ultimate_utilities:cofrecompresoalt')


       //cofre infinito
     nadien.remove({output: 'avaritia:infinity_chest' })
     nadien.recipes.create.mechanical_crafting('avaritia:infinity_chest', [
      "mxn",
      "xyx",
      "mxn"
       ], {
        m: 'minecraft:crafting_table',
        n: 'minecraft:furnace',
        x: 'avaritia:infinity_ingot',
        y: 'avaritia:compressed_chest'
       }).id('ultimate_utilities:infinity_chest')

       nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "mxn",
    "xyx",
    "mxn"
  ],
  "key": {
    "m": { "item": "minecraft:crafting_table" },
    "n": { "item": "minecraft:furnace" },
    "x": { "item": "avaritia:infinity_ingot" },
    "y": { "item": "avaritia:compressed_chest" }
  },
  "result": {
    "item": "avaritia:infinity_chest",
    "count": 1
  }
}).id('ultimate_utilities:infinity_chest_alt')


  //sculk crafting
   nadien.remove({output: 'avaritia:sculk_crafting_table' })
      nadien.recipes.create.mechanical_crafting('avaritia:sculk_crafting_table', [
        "aba",
        "cxc",
        "ada"
        ], {
          a: "minecraft:echo_shard",
          b: "minecraft:sculk_shrieker",
          c: "minecraft:sculk",
          d:  "minecraft:sculk_catalyst",
          x: "extendedcrafting:ultimate_table"
        }).id('ultimate_utilities:sculk_crafting_table')

        nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "aba",
    "cxc",
    "ada"
  ],
  "key": {
    "a": { "item": "minecraft:echo_shard" },
    "b": { "item": "minecraft:sculk_shrieker" },
    "c": { "item": "minecraft:sculk" },
    "d": { "item": "minecraft:sculk_catalyst" },
    "x": { "item": "extendedcrafting:ultimate_table" }
  },
  "result": {
    "item": "avaritia:sculk_crafting_table",
    "count": 1
  }
}).id('ultimate_utilities:sculk_crafting_table_alt')

        //end crafting table
      nadien.remove({output: 'avaritia:end_crafting_table' })
      nadien.recipes.create.mechanical_crafting('avaritia:end_crafting_table', [
        'bcccb',
        'dfifd',
        'dgagd',
        'dhjhd',
        'beeeb'
        ], {
         a: 'avaritia:nether_crafting_table',
         b: 'minecraft:end_crystal',
         c: 'minecraft:end_portal_frame',
         d: 'minecraft:obsidian',
         e: 'minecraft:dragon_breath',
         f: 'minecraft:purpur_pillar',
         g: 'minecraft:end_stone_bricks',
         h: 'minecraft:end_stone',
         i: 'minecraft:ender_eye',
         j: 'minecraft:ender_chest'
        }).id('ultimate_utilities:end_crafting_table')

        nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "bcccb",
    "dfifd",
    "dgagd",
    "dhjhd",
    "beeeb"
  ],
  "key": {
    "a": { "item": "avaritia:nether_crafting_table" },
    "b": { "item": "minecraft:end_crystal" },
    "c": { "item": "minecraft:end_portal_frame" },
    "d": { "item": "minecraft:obsidian" },
    "e": { "item": "minecraft:dragon_breath" },
    "f": { "item": "minecraft:purpur_pillar" },
    "g": { "item": "minecraft:end_stone_bricks" },
    "h": { "item": "minecraft:end_stone" },
    "i": { "item": "minecraft:ender_eye" },
    "j": { "item": "minecraft:ender_chest" }
  },
  "result": {
    "item": "avaritia:end_crafting_table",
    "count": 1
  }
}).id('ultimate_utilities:end_crafting_table_alt')


      //nether ctafting tabe
      nadien.remove({output: 'avaritia:nether_crafting_table' })
      nadien.recipes.create.mechanical_crafting('avaritia:nether_crafting_table', [
        'cbc',
        'dad',
        'efe'
        ], {
         a: 'avaritia:sculk_crafting_table',
         b: 'minecraft:respawn_anchor',
         c: 'minecraft:wither_skeleton_skull',
         d: 'minecraft:netherrack',
         e: 'minecraft:netherite_ingot',
         f: 'minecraft:nether_star'
        }).id('ultimate_utilities:nether_crafting_table')

  nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "cbc",
    "dad",
    "efe"
  ],
  "key": {
    "a": { "item": "avaritia:sculk_crafting_table" },
    "b": { "item": "minecraft:respawn_anchor" },
    "c": { "item": "minecraft:wither_skeleton_skull" },
    "d": { "item": "minecraft:netherrack" },
    "e": { "item": "minecraft:netherite_ingot" },
    "f": { "item": "minecraft:nether_star" }
  },
  "result": {
    "item": "avaritia:nether_crafting_table",
    "count": 1
  }
}).id('ultimate_utilities:nether_crafting_table_alt')

  

      //enchanced core
      nadien.remove({output: 'avaritia:enhancement_core' })
      nadien.recipes.create.mechanical_crafting('avaritia:enhancement_core', [
        '   PPP   ',
        ' NPCCCPN ',
        ' PABBBAP ',
        'PCBBXBBCP',
        'PCBXEXBCP',
        'PCBBXBBCP',
        ' PABBBAP ',
        ' NPCCCPN ',
        '   PPP   '
        ], {
         A:  'avaritia:crystal_matrix',
         B: 'avaritia:infinity_nugget',
         C: 'avaritia:crystal_matrix_ingot',
         E: 'avaritia:endest_pearl',
         N: 'avaritia:neutron_ingot',
         P: 'avaritia:neutron_pile',
         X: 'avaritia:infinity_catalyst'
        }).id('ultimate_utilities:enhancement_core')

        nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "   PPP   ",
    " NPCCCPN ",
    " PABBBAP ",
    "PCBBXBBCP",
    "PCBXEXBCP",
    "PCBBXBBCP",
    " PABBBAP ",
    " NPCCCPN ",
    "   PPP   "
  ],
  "key": {
    "A": { "item": "avaritia:crystal_matrix" },
    "B": { "item": "avaritia:infinity_nugget" },
    "C": { "item": "avaritia:crystal_matrix_ingot" },
    "E": { "item": "avaritia:endest_pearl" },
    "N": { "item": "avaritia:neutron_ingot" },
    "P": { "item": "avaritia:neutron_pile" },
    "X": { "item": "avaritia:infinity_catalyst" }
  },
  "result": {
    "item": "avaritia:enhancement_core",
    "count": 1
  }
}).id('ultimate_utilities:enhancement_core_alt')


        //extreme smithing table
        nadien.remove({output: 'avaritia:extreme_smithing_table' })
        nadien.recipes.create.mechanical_crafting('avaritia:extreme_smithing_table', [
          'aaaaaaaaa',
          'bccfgfccb',
          'bcdhhhdcb',
          'lfhijihfl',
          'eghjkjhge',
          'lfhijihfl',
          'bcdhhhdcb',
          'bccfgfccb',
          'bleeeeelb'
          ], {
           a:  'avaritia:neutron',
           b: 'avaritia:neutron_ingot',
           c: 'avaritia:diamond_lattice',
           d: 'avaritia:blaze_cube',
           e: 'avaritia:crystal_matrix',
           f:  'avaritia:infinity_nugget',
           g: 'avaritia:infinity_ingot',
           h: 'avaritia:neutron_gear',
           i: 'avaritia:infinity_catalyst',
           j:  'minecraft:smithing_table',
           k: 'avaritia:extreme_crafting_table',
           l: 'avaritia:crystal_matrix_ingot',
          }).id('ultimate_utilities:extreme_smithing_table')


          nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "aaaaaaaaa",
    "bccfgfccb",
    "bcdhhhdcb",
    "lfhijihfl",
    "eghjkjhge",
    "lfhijihfl",
    "bcdhhhdcb",
    "bccfgfccb",
    "bleeeeelb"
  ],
  "key": {
    "a": { "item": "avaritia:neutron" },
    "b": { "item": "avaritia:neutron_ingot" },
    "c": { "item": "avaritia:diamond_lattice" },
    "d": { "item": "avaritia:blaze_cube" },
    "e": { "item": "avaritia:crystal_matrix" },
    "f": { "item": "avaritia:infinity_nugget" },
    "g": { "item": "avaritia:infinity_ingot" },
    "h": { "item": "avaritia:neutron_gear" },
    "i": { "item": "avaritia:infinity_catalyst" },
    "j": { "item": "minecraft:smithing_table" },
    "k": { "item": "avaritia:extreme_crafting_table" },
    "l": { "item": "avaritia:crystal_matrix_ingot" }
  },
  "result": {
    "item": "avaritia:extreme_smithing_table",
    "count": 1
  }
}).id('ultimate_utilities:extreme_smithing_table_alt')




nadien.shaped('avaritia:record_fragment', [
  'A  ',
  '   ',
  '   '
], {
  A: cds
}).id('ultimate_utilities:fragmentos_de_disco')
const cds = ['minecraft:music_disc_13', 'minecraft:music_disc_chirp', 'minecraft:music_disc_cat', 'minecraft:music_disc_blocks', 'minecraft:music_disc_chirp', 'minecraft:music_disc_far', 'minecraft:music_disc_mall', 'minecraft:music_disc_mellohi', 'minecraft:music_disc_stal', 'minecraft:music_disc_strad', 'minecraft:music_disc_ward', 'minecraft:music_disc_11', 'minecraft:music_disc_wait', 'minecraft:music_disc_otherside', 'minecraft:music_disc_5', 'minecraft:music_disc_pigstep', 'minecraft:music_disc_relic', 'ars_nouveau:music_disc_thistle_the_sound_of_glass', 'ars_nouveau:music_disc_aria_biblio', 'ultimate_utilities:avengers', 'ultimate_utilities:mc_caco']




//SINGULARIDADES//
 function singularidad(output, energia, input, catalyst, cantidad) {
    nadien.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": energia,
        "inputCount": cantidad,
        "ingredient": {
          "item": input
        },
        "catalyst": {
          "item": catalyst
        },
        "result": {
          "item": output
        }
      }).id(`galaxyorigins:pedestal/${output.replace(':', '/')}`)
      //example add singularity
      //singularidad(output, energia, input, catalyst, cantidad)//
}



//xpjelly baby singularity
singularidad('avaritia:xp_jelly_baby_singularity', 500000, 'mob_grinding_utils:solid_xp_baby', 'extendedcrafting:ultimate_catalyst', 150)

//reactor cassing
singularidad('avaritia:fusion_reactor_casing_singularity', 500000, 'mekanism:induction_casing', 'extendedcrafting:ultimate_catalyst', 8)

//cheese singularity
singularidad('avaritia:cheese_singularity', 500000, 'farmersdelight:sweet_berry_cheesecake_slice', 'extendedcrafting:ultimate_catalyst', 90)

//uraninite singularity
  singularidad('avaritia:uraninite_singularity', 500000, 'powah:uraninite', 'extendedcrafting:ultimate_catalyst', 500)

//track
singularidad('avaritia:track_singularity',500000,'create:track','extendedcrafting:ultimate_catalyst',10000)


// source gem singularity
singularidad('avaritia:source_gem_singularity', 500000, 'ars_nouveau:source_gem', 'extendedcrafting:ultimate_catalyst', 100)

// mateico singularity
singularidad('avaritia:mateico_singularity', 500000, 'argentinas_delight:matedulceitem', 'extendedcrafting:ultimate_catalyst', 777)

// neutronium singularity
singularidad('avaritia:neutronium_blockium_singularity', 500000, 'avaritia:neutronium_block', 'extendedcrafting:ultimate_catalyst', 9500)

// uranium235 singularity
singularidad('avaritia:uranium_235_singularity', 500000, 'mekanism:yellow_cake_uranium', 'extendedcrafting:ultimate_catalyst', 500)

// ultimate ore processing singularity
singularidad('avaritia:addon_singularity', 500000, 'industrialforegoing:processing_addon_2', 'extendedcrafting:ultimate_catalyst', 50)

// addon processing tier 2 singularity
singularidad('avaritia:ultimate_upgrade_singularity', 500000, 'betterfurnacesreforged:ultimate_ore_processing_upgrade', 'extendedcrafting:ultimate_catalyst', 50)

// certus singularity
singularidad('avaritia:certus_quartz_singularity', 500000, '#ae2:all_certus_quartz', 'extendedcrafting:ultimate_catalyst', 350)

// enderium singularity
singularidad('avaritia:enderium_block_singularity', 500000, 'thermal:enderium_block', 'extendedcrafting:ultimate_catalyst', 350)

// crafting table singularity
singularidad('avaritia:crafting_table_singularity', 500000, 'minecraft:crafting_table', 'extendedcrafting:ultimate_catalyst', 20)

// soul berry singularity
singularidad('avaritia:soul_berry_singularity', 500000, 'allthemodium:ancient_soulberries', 'extendedcrafting:ultimate_catalyst', 15)

// nether star singularity
singularidad('avaritia:nether_star_singularity', 500000, 'minecraft:nether_star', 'extendedcrafting:ultimate_catalyst', 90)

// flux block singularity
singularidad('avaritia:flux_block_singularity', 500000, 'fluxnetworks:flux_block', 'extendedcrafting:ultimate_catalyst', 450)

// nitro crystal singularity
singularidad('avaritia:crystal_nitro_singularity', 500000, 'powah:crystal_nitro', 'extendedcrafting:ultimate_catalyst', 800)

// record singularity
singularidad('avaritia:record_singularity', 500000, 'avaritia:record_fragment', 'extendedcrafting:ultimate_catalyst', 35)

// polonium singularity
singularidad('avaritia:pellet_polonium_singularity', 500000, 'mekanism:pellet_polonium', 'extendedcrafting:ultimate_catalyst', 250)

//caca singularity
singularidad('avaritia:caca_singularity', 500000, 'ultimate_utilities:super_caca', 'extendedcrafting:ultimate_catalyst', 777)

//hopper botany pot singularity
singularidad('avaritia:hopper_botany_pot_singularity', 500000, 'botanypots:terracotta_hopper_botany_pot', 'extendedcrafting:ultimate_catalyst', 22)

//dark iron ingot singularity
singularidad('avaritia:dark_iron_ingot_singularity', 500000, 'extendedcrafting:black_iron_ingot', 'extendedcrafting:ultimate_catalyst', 3500)

//balloon singularity
singularidad('avaritia:balloon_singularity', 500000, 'immersiveengineering:balloon', 'extendedcrafting:ultimate_catalyst', 5000)

// singularidad de singularidad de esmerald
singularidad('avaritia:singularity_emerlad_to_emerald_singularity', 500000, 'avaritia:esmarelda_singularity', 'extendedcrafting:ultimate_catalyst', 1500)

//singularidad de esmeralda
singularidad('avaritia:esmarelda_singularity', 500000, 'minecraft:emerald_block', 'extendedcrafting:ultimate_catalyst', 100)

//singularidad ethereal slate
// singularidad('avaritia:ethereal_singularity', 500000, 'bloodmagic:etherealslate', 'extendedcrafting:ultimate_catalyst', 150)

//singularidad chaotica
// singularidad('avaritia:chaotic_singularity', 500000, 'draconicevolution:chaos_shard', 'extendedcrafting:ultimate_catalyst', 250)

//singulaidad de nadienite
singularidad('avaritia:nadienite_singularity', 500000, 'ultimate_utilities:nadienitebloque', 'extendedcrafting:ultimate_catalyst', 250)

//singularidad de terracero
// singularidad('avaritia:terra_steel_singularity', 500000, 'botania:terrasteel_block', 'extendedcrafting:ultimate_catalyst', 1000)

//singularidad de revestidor de andesita
singularidad('avaritia:andesite_cassing_singularity', 500000, 'create:andesite_casing', 'extendedcrafting:ultimate_catalyst', 3)

//uranium plate singularity
singularidad('avaritia:double_uranium_235_plate_singularity', 500000, 'gtceu:double_uranium_235_plate', 'extendedcrafting:ultimate_catalyst', 10)
})