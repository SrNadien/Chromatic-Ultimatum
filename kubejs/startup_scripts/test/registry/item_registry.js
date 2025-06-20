/**
 * Item Registry - defines ID, name, texture
 * and certain other properties of custom items.
 */
StartupEvents.registry("item", event => {
    const miners = [
        "1",
        "2",
        "2half",
        "2half_damaged",
        "3",
        "4",
        "4half",
        "4half_damaged",
        "5",
        "6",
        "6_damaged",
        "7",
        "7_damaged",
        "8",
        "8_damaged",
        "8half",
        "9",
        "10",
        "11",
        "12"
    ]

    const stabilized_miners = [
        "2half",
        "4half",
        "6",
        "7",
        "8",
    ]


    // Regular Microminers
    for (const tier of miners) {
        event.create(`microminer_t${tier}`).maxStackSize(16).texture(`kubejs:item/microverse/microminer_t${tier}`)
    }

    // Stabilized Miners
    for (const tier of stabilized_miners) {
        event.create(`stabilized_microminer_t${tier}`)
            .maxStackSize(16)
            .texture(`kubejs:item/microverse/microminer_t${tier}`)
            .glow(true);
    }

    // Microminer Components
    event.create("basic_mining_laser").displayName("§eBasic Mining Laser")
    event.create("reinforced_mining_laser").displayName("§bReinforced Mining Laser")
    event.create("supercharged_laser_array").displayName("§eSupercharged Laser Array")
    event.create("basic_micro_miner_guidance_system").displayName("§eBasic Micro Miner Guidance System")
    event.create("advanced_micro_miner_guidance_system").displayName("§eAdvanced Micro Miner Guidance System")
    event.create("warp_engine").displayName("§dWarp Engine")
    event.create("hadal_warp_engine").displayName("§dHadal Warp Engine")
    event.create("universal_navigator").displayName("§dUniversal Navigator")
    event.create("extradimensional_navigator").displayName("§dExtradimensional Navigator")

    // Quantum Flux
    event.create("quantum_flux").displayName("§dQuantum Flux")

    // Miner kits
    event.create("gem_sensor").maxStackSize(16).displayName("Gemstone Sensor")
    event.create("basic_drilling_kit").maxStackSize(16).texture("kubejs:item/miner_kits/basic_drilling_kit")
    event.create("advanced_drilling_kit").maxStackSize(16).texture("kubejs:item/miner_kits/advanced_drilling_kit")
    event.create("elite_drilling_kit").maxStackSize(16).texture("kubejs:item/miner_kits/elite_drilling_kit")
    event.create("blasting_kit").maxStackSize(16).texture("kubejs:item/miner_kits/blasting_kit")
    event.create("microversal_alchemy_kit").maxStackSize(16).texture("kubejs:item/miner_kits/microversal_alchemy_kit")

    // T9+ Devices
    event.create("gravitational_amplifier").maxStackSize(16)
    event.create("universal_collapse_device").maxStackSize(16)

    // Heavy platings
    event.create("quantum_fluxed_eternium_heavy_plating")
        .displayName("§dQuantum Fluxed Eternium Heavy Plating")
        .texture("kubejs:item/microverse/eternium_heavy_plating")
    event.create("universe_resistant_neutronium_heavy_plating")
        .displayName("§dUniverse Resistant Neutronium Heavy Plating")
        .texture("kubejs:item/microverse/neutronium_heavy_plating")
    event.create("elementally_infused_omnic_matrix_heavy_plating")
        .displayName("§dElementally Infused Omnic Matrix Heavy Plating")
        .texture("kubejs:item/microverse/omnic_matrix_heavy_plating")
    event.create("dimensionally_stabilized_infinity_heavy_plating")
        .displayName("§dDimensionally Stabilized Infinity Heavy Plating")
        .texture("kubejs:item/microverse/infinity_heavy_plating")
    event.create("timeless_monic_heavy_plating")
        .displayName("§dTimeless Monic Heavy Plating")
        .texture("kubejs:item/microverse/dormant_monic_heavy_plating")
    event.create("causality_exempt_monic_heavy_plating")
        .displayName("§1Causality Exempt Monic Heavy Plating")
        .texture("kubejs:item/microverse/monic_heavy_plating")


   


    // Widgets
    event.create("wooden_widget").displayName("Wooden Widget")
    event.create("wooden_widget_left").displayName("Wooden Widget Left Part")
    event.create("wooden_widget_right").displayName("Wooden Widget Right Part")
    event.create("stone_widget").displayName("Stone Widget")
    event.create("stone_widget_up").displayName("Stone Widget Up Side")
    event.create("stone_widget_down").displayName("Stone Widget Down Side")
    event.create("alloy_widget").displayName("Alloy Widget")
    event.create("ender_widget").displayName("Ender Widget")


   


    // Spacefaring Items
    event.create("radiation_layer")
    event.create("pressure_layer")
    event.create("thermal_cloth")
    event.create("unprepared_space_helmet")
    event.create("unprepared_space_suit")
    event.create("unprepared_space_pants")
    event.create("unprepared_space_boots")


    // Data
    event.create("impossible_realm_data").displayName("§bImpossible Realm Data")
    event.create("dragon_lair_data").displayName("§dDragon Lair Data")
    event.create("wither_realm_data").displayName("§dWither Realm Data")
    event.create("deep_dark_data").displayName("§dDeep Dark Data")
    event.create("lair_of_the_warden_data").displayName("§dLair Of The Warden Data")
    event.create("stellar_creation_data").displayName("§bStellar Creation Data")
    event.create("universe_creation_data").displayName("§dUniverse Creation Data")
    event.create("shattered_star_data").displayName("§dShattered Star Data")
    event.create("shattered_universe_data").displayName("§dShattered Universe Data")
    event.create("corrupted_universe_data").displayName("§dCorrupted Universe Data")


    // Creative Data
    event.create("omnic_data")
    event.create("creative_storage_data")
    event.create("creative_computation_data")
    event.create("creative_energy_data")

    // Infinity Fluid Cell Base


    // Endgame Items
    event.create("diamond_lattice")
    event.create("neutron_emitter")
    event.create("ultimate_gem").displayName("§dUltimate Gem").glow(true)
    event.create("mote_of_omnium").displayName("Mote of Omnium")
        .glow(true).rarity("epic")
    event.create("heart_of_a_universe").displayName("§dHeart Of A Universe")
    event.create("exotic_materials_catalyst").displayName("Exotic Materials Catalyst")
    event.create("eternal_catalyst").displayName("Eternal Catalyst")


    // Infinity
    event.create("infinity_catalyst").rarity("epic")
    event.create("dormant_furious_infinity_catalyst")
    event.create("furious_infinity_catalyst").rarity("epic")
    event.create("inert_serene_infinity_catalyst")
    event.create("serene_infinity_catalyst").rarity("epic")
    event.create("dormant_infinity_compound_ingot")


    // Monium
    event.create("field_stabilised_omnic_pulsar_compound")
    event.create("quasi_stable_neutron_star").displayName("Quasi-Stable Neutron Star")


    // Singularities
    event.create("singularity_containment_unit")
    event.create("contained_singularity")


    // Infinity Tools
    event.create("infinity_power_unit").rarity("epic").maxStackSize(1)
    event.create("infinity_file").rarity("epic").maxStackSize(1)
    event.create("infinity_hammer").rarity("epic").maxStackSize(1)
    event.create("infinity_screwdriver").rarity("epic").maxStackSize(1)
    event.create("infinity_wrench").rarity("epic").maxStackSize(1)
    event.create("infinity_wire_cutter").rarity("epic").maxStackSize(1)


    // Solidified Elements
    const solidified_elements = [
        ["argon", "#12bc12"],
        ["chlorine", "#2d6d6d"],
        ["fluorine", "#4b7ba6"],
        ["helium", "#e8ea86"],
        ["hydrogen", "#12128a"],
        ["krypton", "#7ffe7f"],
        ["mercury", "#ad9dce"],
        ["neon", "#b88a8a"],
        ["nitrogen", "#129192"],
        ["oxygen", "#4494bc"],
        ["radon", "#bc38bc"],
        ["xenon", "#12bcbc"],
        ["experience", "#04ff00"]
    ]

    for (const [element, elemColor] of solidified_elements) {
        event.create(`solidified_${element}`)
            .textureJson({ layer0: "kubejs:item/solidified_element" })
            .color(0, elemColor);
    }


    // Dense Elemental Gasses (Solidification recipes are part of the Solidified Elements Section)
    event.create("dense_hydrogen").rarity("Uncommon")
    event.create("ultra_dense_hydrogen").rarity("Rare")

    event.create("dense_helium").rarity("Uncommon")
    event.create("ultra_dense_helium").rarity("Rare")

    // Stabilized Elements
    const stabilized_elements = [
        ["einsteinium", "#ce9f00"],
        ["berkelium", "#a33f20"],
        ["neptunium", "#486d7b"],
        ["plutonium", "#ba2727"],
        ["uranium", "#1d891d"],
        ["curium", "#58307f"],
        ["californium", "#7d0222"],
        ["americium", "#287869"],
        ["oganesson", "#443936"]
    ]

    for (const [element, elemColor] of stabilized_elements) {
        event.create(`stabilized_${element}`)
            .textureJson({ layer0: "kubejs:item/stabilized_element" })
            .color(0, elemColor);
    }


    // Misc Items
    event.create("ender_star").glow(true)
    event.create("endest_star").glow(true)
    event.create("grains_of_innocence")
    event.create("radium_salt").rarity("Epic")

    // Thrusters
    const thrusters = ["conductive_iron","leadstone","electrical_steel","hardened","energetic","reinforced","resonant","vibrant","dark_soularium","fluxed"]

    thrusters.forEach(thruster => {
        event.create(`${thruster}_thruster`).texture(`kubejs:item/thruster/${thruster}`)
    })

    // Planet dusts
    event.create("moon_dust").texture("kubejs:item/regolith_dust/moon_dust")
    event.create("mars_dust").texture("kubejs:item/regolith_dust/mars_dust")
    event.create("venus_dust").texture("kubejs:item/regolith_dust/venus_dust")
    event.create("mercury_dust").texture("kubejs:item/regolith_dust/mercury_dust")
    event.create("glacio_dust").texture("kubejs:item/regolith_dust/glacio_dust")


    // Thermal Series item ports
    event.create("aerotheum_dust").texture("kubejs:item/aerotheum_blend")
    event.create("cryotheum_dust").texture("kubejs:item/cryotheum_blend")
    event.create("petrotheum_dust").texture("kubejs:item/petrotheum_blend")
    event.create("pyrotheum_dust").texture("kubejs:item/pyrotheum_blend")
    event.create("primal_mana").rarity("epic")

    event.create("destabilized_clathrate").rarity("uncommon")
    event.create("energized_clathrate").rarity("uncommon")
    event.create("resonant_clathrate").rarity("rare")


  
        event.create("ender_spore")






    // Jetpack Units
    event.create("empty_fluxed_jetpack_unit")
    event.create("empty_soularium_jetpack_unit")
    event.create("flight_control_unit")
    event.create("glowstone_elevation_unit")
    event.create("cryotheum_coolant_unit")

    // EnderIO Capacitors
    // TODO: GIVE CAPACITORS LORE AND NBT FOR THEM TO WORK
    event.create("compressed_octadic_capacitor")
    event.create("double_compressed_octadic_capacitor")


    // Extra Utilities 2
    event.create("resonating_crystal")
    event.create("ender_shard")


    // Nether Star Crafting Components
    event.create("nether_star_north").displayName("Nether Star North Tip")
    event.create("nether_star_south").displayName("Nether Star South Tip")
    event.create("nether_star_east").displayName("Nether Star East Tip")
    event.create("nether_star_west").displayName("Nether Star West Tip")
    event.create("nether_star_center").displayName("Nether Star Center")


    // ArmorPlus monster drops
    event.create("guardian_scale").rarity("rare")
    event.create("ender_dragon_scale").rarity("epic")
    event.create("ender_dragon_scale_dust")
    event.create("wither_bone")
    event.create("the_ultimate_material")


    // Pulsating Items
    event.create("pulsating_mesh")
    event.create("pulsating_dust")


    // Sculk Items
    event.create("warden_horn")
    event.create("sculk_core")
    event.create("mesol_energy_core")
    event.create("bathyal_energy_core")
    event.create("abyssal_energy_core")
    event.create("hadal_energy_core")
    event.create("dischargement_core")
    event.create("warden_heart")
    event.create("hadal_shard")


    // Nethline intermediate products
    event.create("purified_ancient_debris_dust").texture("kubejs:item/netherite/purified_ancient_debris_dust")
    event.create("processed_ancient_debris_dust").texture("kubejs:item/netherite/processed_ancient_debris_dust")
    event.create("inert_netherite_scrap").texture("kubejs:item/netherite/inert_netherite_scrap")
    event.create("inert_nether_compound_ingot").texture("kubejs:item/netherite/inert_nether_compound_ingot")

    // Solid Naquadah Fuel Line
    event.create("empty_fuel_rod").texture("kubejs:item/naquadah/empty_fuel_rod")
    event.create("naquadah_fuel_pellet").texture("kubejs:item/naquadah/naquadah_fuel_pellet")
    event.create("naquadah_fuel_rod").texture("kubejs:item/naquadah/naquadah_fuel_rod")
    event.create("hot_depleted_naquadah_fuel_rod").texture("kubejs:item/naquadah/hot_depleted_naquadah_fuel_rod")
    event.create("depleted_naquadah_fuel_rod").texture("kubejs:item/naquadah/depleted_naquadah_fuel_rod")
    event.create("unsintered_naquadah_fuel_pellet").texture("kubejs:item/naquadah/unsintered_naquadah_fuel_pellet")
    event.create("depleted_naquadah_fuel_pellet").texture("kubejs:item/naquadah/depleted_naquadah_fuel_pellet")
    event.create("naquadah_fuel_dust").texture("kubejs:item/naquadah/naquadah_fuel_dust")
    event.create("naquadah_fuel_primer_dust").texture("kubejs:item/naquadah/naquadah_fuel_primer_dust")
    event.create("naquadah_waste").texture("kubejs:item/naquadah/naquadah_waste")
    event.create("inactivated_naquadah_fuel_dust").texture("kubejs:item/naquadah/inactivated_naquadah_fuel_dust")
    event.create("depleted_naquadah_fuel_dust").texture("kubejs:item/naquadah/depleted_naquadah_fuel_dust")
    event.create("crude_naquadah_fuel_blend").texture("kubejs:item/naquadah/crude_naquadah_fuel_blend")
    event.create("hot_naquadah_fuel_crystal").texture("kubejs:item/naquadah/hot_naquadah_fuel_crystal")
    event.create("naquadah_fuel_crystal").texture("kubejs:item/naquadah/naquadah_fuel_crystal")
    event.create("naquadah_fuel_mixture_dust").texture("kubejs:item/naquadah/naquadah_fuel_mixture_dust")

    // Crystal Matrix Line
    event.create("raw_nanotube_substrate").texture("kubejs:item/matrix/raw_nanotube_substrate")
    event.create("prepared_nanotube_substrate").texture("kubejs:item/matrix/prepared_nanotube_substrate")
    event.create("cobalt_nanoparticles").texture("kubejs:item/matrix/cobalt_nanoparticles")
    event.create("grown_nanotube_substrate").texture("kubejs:item/matrix/grown_nanotube_substrate")
    event.create("carbon_nanotubes").texture("kubejs:item/matrix/carbon_nanotubes")
    event.create("porous_matrix_mesh").texture("kubejs:item/matrix/porous_matrix_mesh")
    event.create("dense_matrix_mesh").texture("kubejs:item/matrix/dense_matrix_mesh")

    // Terbium Line
    event.create("rare_earth_sulfate").texture("kubejs:item/terbium/rare_earth_sulfate")
    event.create("rare_earth_oxide").texture("kubejs:item/terbium/rare_earth_oxide")
    event.create("rare_earth_salt").texture("kubejs:item/terbium/rare_earth_salt")


    // Sculk bioalloy processing intermediate products
    event.create("sculk-compatible_trellis_microstructure").texture("kubejs:item/bioalloy/sculk-compatible_trellis_microstructure")
    event.create("fibrinogenic_sculk_goo").texture("kubejs:item/bioalloy/fibrinogenic_sculk_goo")
    event.create("sculk-saturated_microstructure_pulp").texture("kubejs:item/bioalloy/sculk-saturated_microstructure_pulp")
    event.create("animated_bioalloy_pulp").texture("kubejs:item/bioalloy/animated_bioalloy_pulp")


    // Alien Scrapline
    event.create("alien_scrap")
    event.create("ruined_hull")
    event.create("ruined_machine_parts")
    event.create("ruined_capacitor")
    event.create("ruined_sensor")
    event.create("ruined_emitter")
    event.create("crushed_capacitor")
    event.create("magnetic_capacitor_dust")
    event.create("crushed_sensor")
    event.create("holmium_compound")
    event.create("holmium_oxide_glass_dust")


    // Eltz metal processing intermediate products
    event.create("reactive_dust_mixture").textureJson({ layer0: "kubejs:item/eltz/reactive_dust_mixture_base", layer1: "kubejs:item/eltz/reactive_dust_mixture_overlay" })
    event.create("inert_dust_mixture").texture("kubejs:item/eltz/inert_dust_mixture")
    event.create("dusty_inert_powder").texture("kubejs:item/eltz/dusty_inert_powder")
    event.create("shiny_powder_mixture").texture("kubejs:item/eltz/shiny_powder_mixture")
    event.create("shiny_metal_powder").texture("kubejs:item/eltz/shiny_metal_powder")
    event.create("inert_clumps").texture("kubejs:item/eltz/inert_clumps")
    event.create("clean_inert_cluster").texture("kubejs:item/eltz/clean_inert_cluster")
    event.create("eltic_crystal_seed").texture("kubejs:item/eltz/eltic_crystal_seed")


    // Post-Tank Wafer items
    event.create("uxpic_wafer").texture("kubejs:item/uxpic/uxpic_wafer").displayName("UXPIC Wafer")
    event.create("uxpic_chip").texture("kubejs:item/uxpic/uxpic_chip").displayName("UXPIC Chip")
    event.create("universe_boule").texture("kubejs:item/universalwafer/universal_boule").displayName("Universe-doped Monocrystalline Silicon Boule")
    event.create("universe_wafer").texture("kubejs:item/universalwafer/universal_wafer").displayName("Universe-doped Wafer")
    event.create("unactivated_multidimensional_cpu_wafer").texture("kubejs:item/multidimensionalcpu/unactivated_multidimensional_cpu_wafer").displayName("Unactivated Multidimensional CPU Wafer")
    event.create("multidimensional_cpu_wafer").texture("kubejs:item/multidimensionalcpu/multidimensional_cpu_wafer").displayName("Multidimensional CPU Wafer")
    event.create("multidimensional_cpu_chip").texture("kubejs:item/multidimensionalcpu/multidimensional_cpu_chip").displayName("Multidimensional CPU Chip")
    event.create("hyperdynamic_ram_wafer").texture("kubejs:item/hyperdynamicram/hyperdynamic_ram_wafer").displayName("Hyperdynamic RAM Wafer")
    event.create("hyperdynamic_ram_chip_base").texture("kubejs:item/hyperdynamicram/hyperdynamic_ram_chip").displayName("Hyperdynamic RAM Chip Base")
    event.create("hyperdynamic_ram_chip").texture("kubejs:item/hyperdynamicram/activated_hyperdynamic_ram_chip").displayName("Hyperdynamic RAM Chip")
    event.create("quantum_soc_wafer").texture("kubejs:item/quantumsoc/quantum_soc_wafer").displayName("Quantum SoC Wafer")
    event.create("quantum_soc_chip_base").texture("kubejs:item/quantumsoc/quantum_soc_chip_base").displayName("Quantum SoC Chip Base")
    event.create("quantum_soc_chip").texture("kubejs:item/quantumsoc/quantum_soc_chip").displayName("Quantum SoC Chip")


    // Complex SMDs
    const smds = [
        "transistor",
        "resistor",
        "capacitor",
        "diode",
        "inductor"
    ]

    for (const name of smds) {
        event.create(`complex_smd_${name}`)
    }


    // Post-tank circuits, circuit boards, processing units
    function Circuit(theme, type, volt) {
        event.create(`${theme}_${type}`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_${type}` })
            .tag(`ultimate_utilities:circuits/${volt}`)
    }

    function Mainframe(theme, volt) {
        event.create(`${theme}_processor_mainframe`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_processor_mainframe_base`, layer1: `kubejs:item/circuits/${theme}_processor_mainframe_lights` })
            .tag(`ultimate_utilities:circuits/${volt}`)
    }

    function Unit(theme) {
        event.create(`${theme}_processing_unit`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_processing_unit` })
        event.create(`${theme}_circuit_board`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_circuit_board` })
    }

    Unit("matter")
    Circuit("matter", "processor", "zpm")
    Circuit("matter", "processor_assembly", "uv")
    Circuit("matter", "processor_computer", "uhv")
    Mainframe("matter", "uev")

    Unit("dimensional")
    Circuit("dimensional", "processor", "uv")
    Circuit("dimensional", "processor_assembly", "uhv")
    Circuit("dimensional", "processor_computer", "uev")
    Mainframe("dimensional", "uiv")

    Unit("monic")
    Circuit("monic", "processor", "uhv")
    Circuit("monic", "processor_assembly", "uev")
    Circuit("monic", "processor_computer", "uiv")
    Mainframe("monic", "max")

    // Smores
    const smoreHunger = [
        4, 10, 22, 46, 94, 190, 382
    ]
    const smoreSaturation = [
        12, 76, 379, 1675, 7032, 28805, 116587
    ]
    let effDuration = 300;

    for (let i = 0; i <= 6; i++) {
        event.create(`smore_${2 ** i}`).food(food => {
            food.hunger(smoreHunger[i] * 2);
            food.saturation(smoreSaturation[i] / (1 + 4 * smoreHunger[i]) * 2);
            food.effect("absorption", effDuration, 1, 1);
            food.effect("speed", effDuration, 1, 1);
            food.effect("haste", effDuration, 1, 1);

            if (i > 2) {
                food.effect("saturation", effDuration, 1, 1);
                food.effect("health_boost", effDuration, 1, 1);
            }

            food.alwaysEdible();

        }).maxStackSize(64)

        effDuration *= 2;
    }

    // Universal Circuits
    const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv"]
    tiers.forEach((universal_circuit) => {
        event.create(`${universal_circuit}_universal_circuit`)
            .tag(`ultimate_utilities:circuits/${universal_circuit}`)
            .tag("gtceu:circuits/universal")
            .displayName(`${universal_circuit.toUpperCase()} Universal Circuit`)
            .tooltip("§7A Universal Circuit")
            .textureJson({ layer0: `kubejs:item/circuits/universal/${universal_circuit}_universal_circuit` })
    })

    // Phantom Paste
    event.create("framedblocks:phantom_paste")
})
