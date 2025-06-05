ServerEvents.loaded(event => {
  if (event.server.persistentData.gameRules) return
  event.server.gameRules.set("doTraderSpawning", false)
  event.server.gameRules.set("mobGriefing", false)
  event.server.gameRules.set("doInsomnia", false)
  event.server.gameRules.set("doImmediateRespawn", true)
  event.server.gameRules.set("playerSleepingPercentage", 1)
  event.server.gameRules.set("spectatorsGenerateChunks", false)
  event.server.gameRules.set("doWeatherCycle", false)
  event.server.gameRules.set("doPatrolSpawning", false)
  event.server.gameRules.set("keepInventory", true)



  event.server.persistentData.gameRules = true



})
0