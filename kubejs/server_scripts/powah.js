//powah by SrNadien
ServerEvents.recipes(nadien => {




  nadien
    .custom({
      type: "powah:energizing",
      ingredients: [
        { item: "minecraft:iron_block" },
        { item: "minecraft:gold_block" },
      ],
      energy: 90000,
      result: Item.of("2x powah:energized_steel_block"),
    }).id("galaxyorigenes:powah/energizing/energized_steel_block");

  nadien.custom({
      type: "powah:energizing",
      ingredients: [{ item: "botania:blaze_block" }],
      energy: 900000,
      result: {
        item: "powah:blazing_crystal_block",
      },
    }).id("galaxyorigenes:powah/energizing/blaze_block");

  nadien.custom({
      type: "powah:energizing",
      ingredients: [{ item: "minecraft:diamond_block" }],
      energy: 2700000,
      result: {
        item: "powah:niotic_crystal_block",
      },
    }).id("galaxyorigenes:powah/energizing/niotic_block");

  nadien.custom({
      type: "powah:energizing",
      ingredients: [{ item: "minecraft:emerald_block" }],
      energy: 9000000,
      result: {
        item: "powah:spirited_crystal_block",
      },
    }).id("galaxyorigenes:powah/energizing/spirited_block");

    //dielectric paste
    nadien.remove({output: 'powah:dielectric_casing' })
    nadien.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
      "ihi",
      "vbv",
      "ihi"
      ],
      "key": {
      "v": {
        "item": "powah:dielectric_rod"
      },
      "h": {
        "item": "powah:dielectric_rod_horizontal"
      },
      "b": {
        "item": "thermal:machine_frame"
      },
      "i": {
        "item": "minecraft:iron_ingot"
      }
      },
      "result": {
      "item": "powah:dielectric_casing"
      }
    }).id("galaxyorigenes:powah/dielectriccassing");
  
     //dielectric paste
    nadien.remove({output: 'powah:dielectric_paste' })
    nadien.custom({
      "type": "minecraft:crafting_shapeless",
      "ingredients": [
      {
        "item": "mekanism:enriched_carbon"
      },
      {
        "item": "mekanism:enriched_carbon"
      },
      {
        "item": "mekanism:enriched_carbon"
      },
      {
        "item": "minecraft:clay_ball"
      },
      {
        "item": "minecraft:clay_ball"
      },
      {
        "item": "minecraft:lava_bucket"
      }
      ],
      "result": {
      "item": "powah:dielectric_paste",
      "count": 24
      }
    }).id("galaxyorigenes:powah/dielectricpaste");


    //dielectric rod
    nadien.remove({output: 'powah:dielectric_rod' })
    nadien.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
      "pip",
      "pip",
      "pip"
      ],
      "key": {
      "p": {
        "item": "powah:dielectric_paste"
      },
      "i": {
        "item": "create:sturdy_sheet"
      }
      },
      "result": {
      "item": "powah:dielectric_rod",
      "count": 8
      }
    }).id("galaxyorigenes:powah/dielectricrod");


   //dielctric rod horizontal
    nadien.remove({output: 'powah:dielectric_rod_horizontal' })
    nadien.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
      "ppp",
      "iii",
      "ppp"
      ],
      "key": {
      "p": {
        "item": "powah:dielectric_paste"
      },
      "i": {
        "item": "create:sturdy_sheet"
      }
      },
      "result": {
      "item": "powah:dielectric_rod_horizontal",
      "count": 8
      }
    }).id("galaxyorigenes:powah/dielectricrodhorizontal");


    nadien.custom({
      "type": "minecraft:crafting_shapeless",
      "ingredients": [
      {
        "item": "powah:dielectric_rod_horizontal"
      }
      ],
      "result": {
      "item": "powah:dielectric_rod"
      }
    }).id("galaxyorigenes:powah/dielectricrodalt");


    nadien.custom({
      "type": "minecraft:crafting_shapeless",
      "ingredients": [
      {
        "item": "powah:dielectric_rod"
      }
      ],
      "result": {
      "item": "powah:dielectric_rod_horizontal"
      }
    }).id("galaxyorigenes:powah/dielectricrodaltalt");
});
