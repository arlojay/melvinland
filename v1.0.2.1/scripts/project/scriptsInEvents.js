


const scriptsInEvents = {

	async Multiplayerlobbyevents_Event8_Act1(runtime, localVars)
	{
		localVars.NextFreeRoomId = localVars.NextFreeRoomId.replace(/[0-9]/g, "") + ((+localVars.NextFreeRoomId.replace(/[^0-9]/g, "")) + 1);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

