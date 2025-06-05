//soloar flux reborn By SrNadien prohibido su uso externo
ServerEvents.recipes(nadien => {


    //neutronium solar panel
    nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "  AABAA  ",
    " ACDDDCAA",
    "ACCDDDCCA",
    "ADDEEEDDA",
    "BDDEFEDDB",
    "ADDEEEDDA",
    "ACCDDDCCA",
    " ACDDDCA ",
    "  AABAA  "
  ],
  "key": {
    "A": {
      "item": "avaritia:neutron_ingot"
    },
    "B": {
      "item": "solarpanels:singular_energy_tablet"
    },
    "C": {
      "item": "avaritia:crystal_matrix_ingot"
    },
    "D": {
      "item": "solarflux:sp_8"
    },
    "E": {
      "item": "kubejs:universe_resistant_neutronium_heavy_plating"
    },
    "F": {
      "item": "avaritia:infinity_catalyst"
    }
  },
  "result": {
    "item": 'solarflux:sp_avaritia.neutronium',
    "count": 1
  }
}).id('ultimate_utilities:neutronium_solar_panel')




//infinite solar panel
nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "  AABAA  ",
    " ACCACCA ",
    "ACADEDACA",
    "ACDFGFDCA",
    "BAEGHGEAB",
    "ACDFGFDCA",
    "ACADEDACA",
    " ACCACCA ",
    "  AABAA  "
  ],
  "key": {
    "A": {
      "item": "avaritia:neutron_pile"
    },
    "B": {
      "item": "avaritia:infinity_catalyst"
    },
    "C": {
      "item": "avaritia:crystal_matrix_ingot"
    },
    "D": {
      "item": "avaritia:neutron_ingot"
    },
    "E": {
      "item": "avaritia:neutron_nugget"
    },
    "F": {
      "item": "avaritia:infinity_ingot"
    },
    "G": {
      "item": "solarflux:sp_avaritia.neutronium"
    },
    "H": {
      "item": "avaritia:infinity"
    }
  },
  "result": {
    "item": 'solarflux:sp_avaritia.infinity',
    "count": 1
  }
}).id('ultimate_utilities:infinite_solar_panel')
    })









