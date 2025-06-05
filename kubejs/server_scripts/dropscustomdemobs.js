ServerEvents.entityLootTables(nadien => {
    nadien.modifyEntity('minecraft:guardian', table => {
        table.addPool(pool => {
            pool.addItem('minecraft:heart_of_the_sea').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
        })
    })

    nadien.modifyEntity('minecraft:ender_dragon', table => {
        table.addPool(pool => {
            pool.addItem('minecraft:dragon_egg').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
        })
    })

    
    nadien.modifyEntity('minecraft:sniffer', table => {
        table.addPool(pool => {
            pool.addItem('minecraft:torchflower_seeds').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
        })
    })


    nadien.modifyEntity('minecraft:sniffer', table => {
        table.addPool(pool => {
            pool.addItem('minecraft:pitcher_plant').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
        })
    })


    nadien.modifyEntity('minecraft:wither', table => {
        table.addPool(pool => {
            pool.addItem('minecraft:nether_star')
        })
    })


    




})
