ServerEvents.recipes(event => {
    // ETERNAL CATALYST
    event.recipes.extendedcrafting.shaped_table("ultimate_utilities:eternal_catalyst", [
        "    A    ",
        " A  A  A ",
        "  AAPAA  ",
        "  ARWEA  ",
        "AAVXUYDAA",
        "  AEZRA  ",
        "  AAIAA  ",
        " A  A  A ",
        "    A    "
    ], {
        A: "kubejs:mote_of_omnium",
        P: "gtceu:palis_empowered_gear",
        R: "gtceu:restonia_empowered_gear",
        V: "gtceu:void_empowered_gear",
        E: "gtceu:emeradic_empowered_gear",
        I: "gtceu:enori_empowered_gear",
        D: "gtceu:diamatine_empowered_gear",
        W: "kubejs:ender_star",
        X: "gtceu:gravi_star",
        Z: "gtceu:quantum_star",
        Y: "kubejs:endest_star",
        U: "kubejs:the_ultimate_material"
    }).id("ultimate_utilities:extended/eternal_catalyst");

    // INFINITY CATALYST
    event.recipes.extendedcrafting.shaped_table("ultimate_utilities:infinity_catalyst", [
        "PPPPEPPPP",
        "PEPPEPPEP",
        "PPEEEEEPP",
        "PPEECEEPP",
        "EEECHCEEE",
        "PPEECEEPP",
        "PPEEEEEPP",
        "PEPPEPPEP",
        "PPPPEPPPP",
    ], {
        P: "gtceu:tiny_neutronium_dust",
        E: "kubejs:eternal_catalyst",
        C: "kubejs:hadal_energy_core",
        H: "kubejs:heart_of_a_universe"
    }).id("ultimate_utilities:extended/infinity_catalyst");

    // infinity ingot
    event.recipes.extendedcrafting.shaped_table("ultimate_utilities:dormant_infinity_compound_ingot", [
        "         ",
        "     BAAA",
        "  BAAADCA",
        "AAACDCCDA",
        "ACDDCDDCA",
        "ADCCDCAAA",
        "ACDAAAB  ",
        "AAAB     ",
        "         "
    ], {
        A: "gtceu:neutronium_ingot",
        B: "gtceu:neutronium_nugget",
        C: "gtceu:activated_netherite_ingot",
        D: "kubejs:eternal_catalyst"
    }).id("ultimate_utilities:extended/infinity_compound")

    event.recipes.gtceu.electric_blast_furnace("infinity_ingot_activation")
        .itemInputs("ultimate_utilities:dormant_infinity_compound_ingot", "kubejs:infinity_catalyst")
        .inputFluids(Fluid.of("gtceu:omnium", 576))
        .itemOutputs("gtceu:infinity_ingot")
        .duration(400)
        .EUt(50000)
        .blastFurnaceTemp(12500)

    event.recipes.gtceu.electric_blast_furnace("infinity_ingot_activation_t2")
        .itemInputs("4x kubejs:dormant_infinity_compound_ingot", "kubejs:furious_infinity_catalyst")
        .inputFluids(Fluid.of("gtceu:omnium", 576))
        .itemOutputs("4x gtceu:infinity_ingot", "kubejs:dormant_furious_infinity_catalyst")
        .duration(300)
        .EUt(250000)
        .blastFurnaceTemp(12500)

    event.recipes.gtceu.electric_blast_furnace("infinity_ingot_activation_t3")
        .itemInputs("16x kubejs:dormant_infinity_compound_ingot", "kubejs:serene_infinity_catalyst")
        .inputFluids(Fluid.of("gtceu:omnium", 576))
        .itemOutputs("16x gtceu:infinity_ingot", "kubejs:inert_serene_infinity_catalyst")
        .duration(200)
        .EUt(1000000)
        .blastFurnaceTemp(12500)


    // mote of omnium
    event.recipes.extendedcrafting.shapeless_table(
        "kubejs:mote_of_omnium", [
            "gtceu:tiny_nether_star_dust",
            "kubejs:solidified_hydrogen",
            "kubejs:solidified_helium",
            "gtceu:lithium_dust",
            "gtceu:beryllium_ingot",
            "gtceu:boron_dust",
            "gtceu:carbon_dust",
            "kubejs:solidified_nitrogen",
            "gtceu:tiny_nether_star_dust",
            "kubejs:solidified_oxygen",
            "kubejs:solidified_fluorine",
            "kubejs:solidified_neon",
            "gtceu:sodium_dust",
            "gtceu:magnesium_dust",
            "gtceu:aluminium_ingot",
            "gtceu:silicon_dust",
            "gtceu:phosphorus_dust",
            "gtceu:sulfur_dust",
            "kubejs:solidified_chlorine",
            "kubejs:solidified_argon",
            "gtceu:potassium_dust",
            "gtceu:calcium_dust",
            "gtceu:titanium_ingot",
            "gtceu:vanadium_ingot",
            "gtceu:chromium_ingot",
            "gtceu:manganese_ingot",
            "iron_ingot",
            "gtceu:cobalt_ingot",
            "gtceu:nickel_ingot",
            "copper_ingot",
            "gtceu:zinc_ingot",
            "gtceu:gallium_ingot",
            "gtceu:arsenic_dust",
            "kubejs:solidified_krypton",
            "gtceu:yttrium_ingot",
            "gtceu:niobium_ingot",
            "gtceu:molybdenum_ingot",
            "gtceu:ruthenium_ingot",
            "gtceu:rhodium_ingot",
            "kubejs:exotic_materials_catalyst",
            "gtceu:palladium_ingot",
            "gtceu:silver_ingot",
            "gtceu:cadmium_dust",
            "gtceu:indium_ingot",
            "gtceu:tin_ingot",
            "gtceu:antimony_ingot",
            "kubejs:solidified_xenon",
            "gtceu:caesium_dust",
            "gtceu:barium_dust",
            "gtceu:lanthanum_dust",
            "gtceu:cerium_dust",
            "gtceu:neodymium_ingot",
            "gtceu:samarium_ingot",
            "gtceu:europium_ingot",
            "gtceu:lutetium_ingot",
            "gtceu:tantalum_ingot",
            "gtceu:tungsten_ingot",
            "gtceu:osmium_ingot",
            "gtceu:iridium_ingot",
            "gtceu:platinum_ingot",
            "gold_ingot",
            "kubejs:solidified_mercury",
            "gtceu:lead_ingot",
            "gtceu:bismuth_ingot",
            "kubejs:solidified_radon",
            "gtceu:thorium_ingot",
            "kubejs:stabilized_uranium",
            "kubejs:stabilized_neptunium",
            "kubejs:stabilized_plutonium",
            "gtceu:americium_ingot",
            "kubejs:stabilized_curium",
            "kubejs:stabilized_berkelium",
            "gtceu:tiny_nether_star_dust",
            "kubejs:stabilized_californium",
            "kubejs:stabilized_einsteinium",
            "gtceu:darmstadtium_ingot",
            "gtceu:tritanium_ingot",
            "gtceu:duranium_ingot",
            "gtceu:trinium_ingot",
            "gtceu:naquadah_ingot",
            "gtceu:tiny_nether_star_dust",
        ]
    ).id("ultimate_utilities:extended/mote_of_omnium")

    // exotic material catalyst
    event.recipes.extendedcrafting.shaped_table("ultimate_utilities:exotic_materials_catalyst", [
        "A  B  C",
        " D E F ",
        "  GHI  ",
        "JKLMNOP",
        "  QRS  ",
        " T U V ",
        "W  X  Y"
    ], {
        A: "gtceu:nichrome_ingot",
        B: "gtceu:red_steel_ingot",
        C: "gtceu:kanthal_ingot",
        D: "gtceu:magnalium_ingot",
        E: "gtceu:mythril_ingot",
        F: "gtceu:manyullyn_ingot",
        G: "gtceu:enderium_ingot",
        H: "gtceu:blue_steel_ingot",
        I: "gtceu:microversium_ingot",
        J: "gtceu:vanadium_steel_ingot",
        K: "gtceu:rhodium_plated_palladium_ingot",
        L: "gtceu:electrum_flux_ingot",
        M: "gtceu:dark_soularium_ingot",
        N: "gtceu:crystal_matrix_ingot",
        O: "gtceu:end_steel_ingot",
        P: "gtceu:electrical_steel_ingot",
        Q: "gtceu:signalum_ingot",
        R: "gtceu:vibrant_alloy_ingot",
        S: "gtceu:soularium_ingot",
        T: "gtceu:hsse_ingot",
        U: "gtceu:dark_steel_ingot",
        V: "gtceu:hssg_ingot",
        W: "gtceu:ruridit_ingot",
        X: "gtceu:hsss_ingot",
        Y: "gtceu:energetic_alloy_ingot"
    }).id("ultimate_utilities:extended/exotic_materials_catalyst")

   
})
