Ponder.tags(nadien => {
    nadien.createTag("kubejs:nihilo", "exdeorum:crook", "Ex Deourum", "Información sobre Generación de Recursos", [
        "exdeorum:crook",
        "exdeorum:wooden_hammer",
        "exdeorum:oak_sieve",
        "exdeorum:oak_crucible",
        "exdeorum:oak_barrel",
    ])
})

Ponder.registry(nadien => {

    nadien.create([
        "exdeorum:bone_crook",
        "exdeorum:crook",
        "exdeorum:silkworm",
        "exdeorum:infested_leaves",
    ])
        .scene("enscrook1", "usando el crook", "kubejs:oaktree", (scene, util) => {
            scene.showStructure()
            scene.showControls(40, [0, 4.5, 0], "left")
                .leftClick()
                .withItem("exdeorum:crook")
            scene.overlay.showText(30).text("Rompiendo hojas").independent(20).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(30).text("Con El Crook").independent(36).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(30).text("puede soltar gusanos de seda").independent(52).placeNearTarget()
            scene.idle(10)
            scene.world.modifyBlock([0, 4, 0], () => Block.id("minecraft:air"), true)
            let worm = scene.world.createItemEntity(util.vector.centerOf(0, 4, 0), util.vector.of(0, -0.2, 0), "exdeorum:silkworm")
            scene.idle(60)
            scene.world.removeEntity(worm)
            scene.markAsFinished()
        })
        .scene("enscrook2", "Playing with worms", "kubejs:oaktree", (scene, util) => {
            scene.showStructure()
            scene.showControls(40, [0, 5.5, 0], "left")
                .rightClick()
                .withItem("exdeorum:silkworm")
            scene.overlay.showText(30).text("Usando un gusano de seda").independent(-4).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(30).text("en las hojas").independent(12).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(30).text("Comienza a infestarlas").independent(28).placeNearTarget()
            scene.idle(10)
            scene.world.modifyBlock([0, 5, 0], () => Block.id("exdeorum:infested_leaves"), false)
            scene.idle(60)
            scene.addLazyKeyframe()
            scene.world.modifyBlock([0, 5, 0], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([0, 4, 0], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([1, 5, 0], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([0, 5, 1], () => Block.id("exdeorum:infested_leaves"), false)
            scene.idle(10)
            scene.world.modifyBlock([0, 4, 0], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([1, 4, 0], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([0, 4, 1], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([1, 5, 0], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([1, 5, 1], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([2, 5, 0], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([0, 5, 1], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([0, 5, 2], () => Block.id("exdeorum:infested_leaves"), false)
            scene.idle(10)
            scene.world.modifyBlock([1, 4, 0], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([2, 4, 0], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([0, 4, 1], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([0, 4, 2], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([1, 5, 1], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([1, 6, 1], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([2, 5, 1], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([1, 5, 2], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([2, 5, 0], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([3, 5, 0], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([0, 5, 2], () => Block.id("exdeorum:infested_leaves"), false)
            scene.world.modifyBlock([0, 5, 3], () => Block.id("exdeorum:infested_leaves"), false)
            scene.markAsFinished()
        })
        .scene("enscrook3", "Teoría de cuerdas", "kubejs:oakinfestedtree", (scene, util) => {
            scene.showStructure()
            scene.showControls(40, [0, 4.5, 0], "left")
                .leftClick()
                .withItem("exdeorum:crook")
            scene.overlay.showText(30).text("Rompiendo hojas infestadas").independent(20).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(30).text("Con Un Crook").independent(36).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(30).text("puede soltar gusanos de seda y cuerdas").independent(52).placeNearTarget()
            scene.idle(10)
            scene.world.modifyBlock([0, 4, 0], () => Block.id("minecraft:air"), true)
            let worm = scene.world.createItemEntity(util.vector.centerOf(0, 4, 0), util.vector.of(-0.01, -0.2, -0.01), "exdeorum:silkworm")
            let stringItem = scene.world.createItemEntity(util.vector.centerOf(0, 4, 0), util.vector.of(0.01, -0.2, 0.01), "minecraft:string")
            scene.idle(60)
            scene.world.removeEntity(worm)
            scene.world.removeEntity(stringItem)
            scene.markAsFinished()
        })
    nadien.create([
        "exdeorum:diamond_hammer",
        "exdeorum:golden_hammer",
        "exdeorum:iron_hammer",
        "exdeorum:netherite_hammer",
        "exdeorum:stone_hammer",
        "exdeorum:wooden_hammer",
    ])
        .scene("enshammer1", "usando el martillo", (scene, util) => {
            scene.showBasePlate()
            scene.world.setBlock([2, 1, 2], "minecraft:cobblestone", false)
            scene.world.showSection([2, 1, 2], Facing.down)
            scene.showControls(260, [2.5, 2.5, 2.5], "down")
                .leftClick()
                .withItem("exdeorum:wooden_hammer")
            scene.idle(10)
            scene.overlay.showText(20).text("Los martillos aplastan bloques").independent(40).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(20).text("hasta un material diferente").independent(56).placeNearTarget()
            scene.idle(30)
            let crushes = [
                { in: "minecraft:cobblestone", out: "minecraft:gravel", lang: ["Cobblestone", "to", "Gravel"] },
                { in: "minecraft:gravel", out: "minecraft:sand", lang: ["Gravel", "to", "Sand"] },
                { in: "minecraft:sand", out: "exdeorum:dust", lang: ["Sand", "to", "Dust"] }
            ]
            crushes.forEach((crush) => {
                scene.addLazyKeyframe()
                scene.overlay.showText(30).text(crush.lang[0]).independent(40).placeNearTarget()
                scene.idle(10)
                scene.overlay.showText(30).text(crush.lang[1]).independent(56).placeNearTarget()
                scene.idle(10)
                scene.overlay.showText(30).text(crush.lang[2]).independent(72).placeNearTarget();
                for (let x = 0; x < 10; x++) {
                    scene.world.setBlock([2, 1, 2], crush.in, false)
                    scene.world.incrementBlockBreakingProgress([2, 1, 2])
                    scene.idle(4)
                }
                let thing = scene.world.createItemEntity(util.vector.of(2, 1, 2), util.vector.of(-0.06, 0.3, -0.06), crush.out)
                scene.idle(20)
                scene.world.removeEntity(thing)
            })
            scene.idle(10)
            scene.markAsFinished()
        })
    nadien.create([
        "exdeorum:acacia_sieve",
        "exdeorum:birch_sieve",
        "exdeorum:dark_oak_sieve",
        "exdeorum:jungle_sieve",
        "exdeorum:oak_sieve",
        "exdeorum:spruce_sieve",
        "exdeorum:crimson_sieve",
        "exdeorum:warped_sieve",
    ])
        .scene("enssieve1", "Usando La Sieve", (scene, util) => {
            scene.showBasePlate()
            scene.world.setBlock([2, 1, 2], "exdeorum:oak_sieve", false)
            scene.world.showSection([2, 1, 2], Facing.down)
            scene.showControls(30, [2.5, 2.5, 2.5], "down")
                .rightClick()
                .withItem("exdeorum:diamond_mesh")
            scene.idle(10)
            scene.overlay.showText(30).text("Agrega Una mesh").independent(40).placeNearTarget()
            scene.idle(30)
            scene.overlay.showText(30).text("Shift Click Derecho").independent(56).placeNearTarget()
            scene.overlay.showText(30).text("para quitarlo de nuevo").independent(72).placeNearTarget()
            scene.world.modifyBlock([2, 1, 2], (state) => state.with("mesh", "diamond"), false)
            scene.idle(40)
            scene.addLazyKeyframe()
            scene.showControls(70, [2.5, 2.5, 2.5], "down")
                .rightClick()
                .withItem("minecraft:gravel")
            scene.idle(10)
            scene.overlay.showText(40).text("Agregar un material").independent(40).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("Continuar manteniendo presionado el botón derecho").independent(56).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("Hasta que esté completamente tamizada").independent(72).placeNearTarget();
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(p => {
                scene.world.modifyTileNBT([2, 1, 2], nbt => {
                    nbt.block = { id: "minecraft:gravel", Count: 1 }
                    nbt.progress = p
                }, true)
                scene.idle(6)
            })
            scene.world.modifyTileNBT([2, 1, 2], nbt => {
                nbt.block = {}
                nbt.progress = 0
            }, true)
            scene.addKeyframe()
            const centerTop = util.vector.topOf(2, 1, 2)
            scene.world.createItemEntity(centerTop, util.vector.of(-0.06, 0.2, -0.06), "exdeorum:iron_pieces")
            scene.world.createItemEntity(centerTop, util.vector.of(0.06, 0.2, -0.06), "exdeorum:uranium_pieces")
            scene.world.createItemEntity(centerTop, util.vector.of(0.06, 0.2, 0.06), "exdeorum:gold_pieces")
            scene.world.createItemEntity(centerTop, util.vector.of(-0.06, 0.2, 0.06), "exdeorum:silver_pieces")
            scene.idle(20)
        })
        .scene("enssieve2", "Producción en masa", (scene, util) => {
            scene.showBasePlate();
            [0, 1, 2, 3, 4].forEach(x => {
                [0, 1, 2, 3, 4].forEach(z => {
                    scene.world.setBlock([x, 1, z], Block.id("exdeorum:oak_sieve", { mesh: "iron" }), false)
                    scene.world.showSection([x, 1, z], Facing.down)
                    scene.idle(2)
                })
            })
            scene.overlay.showText(40).text("Una serie de tamices de 5x5").independent(40).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("Se pueden controlar todos juntos").independent(56).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("Usando el tamiz central").independent(72).placeNearTarget();
            scene.idle(10)
            scene.showControls(50, [2.5, 2.5, 2.5], "down")
                .rightClick()
                .withItem("minecraft:sand")
            scene.idle(10);
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(p => {
                [0, 1, 2, 3, 4].forEach(x => {
                    [0, 1, 2, 3, 4].forEach(z => {
                        scene.world.modifyTileNBT([x, 1, z], nbt => {
                            nbt.block = { id: "minecraft:sand", Count: 1 }
                            nbt.progress = p
                        }, true)
                    })
                })
                scene.idle(5)
            });
            [0, 1, 2, 3, 4].forEach(x => {
                [0, 1, 2, 3, 4].forEach(z => {
                    scene.world.modifyTileNBT([x, 1, z], nbt => {
                        nbt.block = {}
                        nbt.progress = 0
                    }, true)
                })
            })
            scene.idle(20)
        })

    nadien.create([
        "exdeorum:porcelain_crucible",
        "exdeorum:acacia_crucible",
        "exdeorum:birch_crucible",
        "exdeorum:dark_oak_crucible",
        "exdeorum:jungle_crucible",
        "exdeorum:oak_crucible",
        "exdeorum:spruce_crucible",
        "exdeorum:crimson_crucible",
        "exdeorum:warped_crucible",
    ])
        .scene("enscrucible1", "Usando el crisol", (scene, util) => {
            scene.showBasePlate()
            scene.world.setBlock([1, 1, 2], "exdeorum:oak_crucible", false)
            scene.world.showSection([1, 1, 2], Facing.down)
            scene.world.setBlock([3, 1, 2], "exdeorum:porcelain_crucible", false)
            scene.world.showSection([3, 1, 2], Facing.down)
            scene.overlay.showText(40).text("Los crisoles se derriten").independent(62).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("materiales en líquidos").independent(78).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("Crisoles de madera para agua.").independent(94).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("Crisol de porcelana cocida para lava.").independent(110).placeNearTarget()
            scene.idle(45)
            scene.addLazyKeyframe()
            scene.showControls(30, [1.5, 2.5, 2.5], "down")
                .rightClick()
                .withItem("minecraft:oak_leaves");
            [1, 2, 3, 4].forEach(ct => {
                scene.world.modifyTileNBT([1, 1, 2], nbt => {
                    nbt.currentItem = { id: "minecraft:oak_leaves", Count: ct }
                    nbt.solidAmount = ct * 250
                }, true)
                scene.idle(10)
            })
            scene.idle(10)
            scene.addLazyKeyframe()
            scene.showControls(30, [3.5, 2.5, 2.5], "down")
                .rightClick()
                .withItem("minecraft:cobblestone");
            [1, 2, 3, 4].forEach(ct => {
                scene.world.modifyTileNBT([3, 1, 2], nbt => {
                    nbt.currentItem = { id: "minecraft:cobblestone", Count: ct }
                    nbt.solidAmount = ct * 250
                }, true)
                scene.world.modifyTileNBT([1, 1, 2], nbt => {
                    nbt.currentItem = { id: "minecraft:oak_leaves", Count: ct }
                    nbt.solidAmount = 1000 - ct * 250
                    nbt.tank = { FluidName: "minecraft:water", Amount: 1000 * ct }
                }, true)
                scene.idle(10)
            });
            [1, 2, 3, 4].forEach(ct => {
                scene.world.modifyTileNBT([3, 1, 2], nbt => {
                    nbt.currentItem = { id: "minecraft:cobblestone", Count: ct }
                    nbt.solidAmount = 1000 - ct * 250
                    nbt.tank = { FluidName: "minecraft:lava", Amount: 1000 * ct }
                }, true)
                scene.idle(10)
            })
        })
        .scene("enscrucible2", "Bring the Heat!", (scene, util) => {
            scene.showBasePlate()
            scene.world.setBlock([1, 2, 2], "exdeorum:oak_crucible", false)
            scene.world.showSection([1, 2, 2], Facing.up)
            scene.world.setBlock([3, 2, 2], "exdeorum:fired_crucible", false)
            scene.world.showSection([3, 2, 2], Facing.up)
            scene.world.setBlock([1, 1, 2], "minecraft:campfire", false)
            scene.world.showSection([1, 1, 2], Facing.up)
            scene.world.setBlock([3, 1, 2], "minecraft:magma_block", false)
            scene.world.showSection([3, 1, 2], Facing.up)
            scene.overlay.showText(40).text("Los bloques térmicos aceleran la fusión").independent(20).placeNearTarget()
        })
    nadien.create([
        "exdeorum:stone_barrel",
        "exdeorum:acacia_barrel",
        "exdeorum:birch_barrel",
        "exdeorum:dark_oak_barrel",
        "exdeorum:jungle_barrel",
        "exdeorum:oak_barrel",
        "exdeorum:spruce_barrel",
        "exdeorum:crimson_barrel",
        "exdeorum:warped_barrel",
    ])
        .scene("ensbarrel1", "usando el barril", (scene, util) => {
            scene.showStructure()
            scene.world.setBlock([2, 1, 2], "exdeorum:oak_barrel", false)
            scene.world.showSection([2, 1, 2], Facing.up)
            scene.showControls(80, [2.5, 2, 2.5], "down")
                .rightClick()
                .withItem("minecraft:oak_leaves")
            scene.overlay.showText(40).text("Los barriles pueden funcionar de manera similar.").independent(62).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("a un compostador girando").independent(78).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("material vivo en tierra").independent(94).placeNearTarget();
            [1, 2, 3, 4, 5, 6, 7, 8].forEach((amt) => {
                scene.idle(10)
                scene.world.modifyTileNBT([2, 1, 2], nbt => {
                    nbt.barrelMode = "compost"
                    nbt.solidAmount = amt * 125
                }, true)
            })
            scene.idle(10)
            scene.particles.simple(40, "ash", [2.5, 2.2, 2.5]).withinBlockSpace()
            scene.idle(50)
            scene.world.modifyTileNBT([2, 1, 2], nbt => {
                nbt.barrelMode = "block"
                nbt.solidAmount = 0
                nbt.inventory = { Size: 1, Items: [{ Slot: 0, id: "minecraft:dirt", Count: 1 }] }
            }, true)
            scene.markAsFinished()
        })
        .scene("ensbarrel2", "Making Fluids", (scene, util) => {
            scene.showStructure()
            scene.world.setBlock([1, 2, 2], "exdeorum:oak_barrel", false)
            scene.world.showSection([1, 2, 2], Facing.up)
            scene.world.setBlock([3, 2, 2], "exdeorum:oak_barrel", false)
            scene.world.showSection([3, 2, 2], Facing.up)
            scene.world.setBlock([1, 1, 2], "minecraft:sand", false)
            scene.world.showSection([1, 1, 2], Facing.up)
            scene.world.setBlock([3, 1, 2], "minecraft:mycelium", false)
            scene.world.showSection([3, 1, 2], Facing.up)
            scene.overlay.showText(40).text("Barriles por encima").independent(20).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("los bloques se convertirán").independent(36).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("agua en otros fluidos").independent(52).placeNearTarget();
            scene.idle(30)
            scene.showControls(20, [3.5, 3, 2.5], "down")
                .rightClick()
                .withItem("minecraft:water_bucket");
            scene.idle(10)
            scene.world.modifyTileNBT([3, 2, 2], nbt => {
                nbt.blockMode = "fluid"
                nbt.tank = { FluidName: "minecraft:water", Amount: 1000 }
            }, true)
            scene.showControls(20, [1.5, 3, 2.5], "down")
                .rightClick()
                .withItem("minecraft:water_bucket");
            scene.idle(10)
            scene.world.modifyTileNBT([1, 2, 2], nbt => {
                nbt.blockMode = "fluid"
                nbt.tank = { FluidName: "minecraft:water", Amount: 1000 }
            }, true)
            scene.particles.simple(30, "effect", [3.5, 2, 2.5]).density(5)
            scene.idle(10)
            scene.particles.simple(30, "effect", [1.5, 2, 2.5]).density(5)
            scene.idle(40)
            scene.world.modifyTileNBT([3, 2, 2], nbt => {
                nbt.blockMode = "fluid"
                nbt.tank = { FluidName: "exdeorum:witch_water", Amount: 1000 }
            }, true)
            scene.idle(10)
            scene.world.modifyTileNBT([1, 2, 2], nbt => {
                nbt.blockMode = "fluid"
                nbt.tank = { FluidName: "exdeorum:sea_water", Amount: 1000 }
            }, true)
        })
})