StartupEvents.registry('block', event => {


	           //magical Soil
	            event.create('magical_soil').displayName('§bMagical Soil').material('grass').hardness(0.6);
               
               
	           //piglitch block
                event.create('piglich_heart_block').displayName('§6Piglich Heart Block').material('stone')
				.hardness(10).tagBlock('minecraft:needs_iron_tool').tagBlock('minecraft:beacon_base_blocks')
				.lightLevel(0.65).tagBlock('minecraft:mineable/pickaxe').requiresTool(true);

                //trofeo
				event.create('trophy_atm').displayName('Trofeo Final').material('stone')
				.hardness(10).tagBlock('minecraft:needs_iron_tool').tagBlock('minecraft:beacon_base_blocks')
				.lightLevel(0.65).tagBlock('minecraft:mineable/pickaxe').requiresTool(true);


                //bloque de estrellas wither
				event.create('nether_star_block').displayName('Bloque De Estrellas Wither').material('stone')
				.hardness(10).tagBlock('minecraft:needs_iron_tool').tagBlock('minecraft:beacon_base_blocks')
				.lightLevel(0.65).tagBlock('minecraft:mineable/pickaxe').requiresTool(true);


				
})
