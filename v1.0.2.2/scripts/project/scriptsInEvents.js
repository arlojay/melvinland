


const scriptsInEvents = {

	async Gameevents_Event126_Act1(runtime, localVars)
	{
		const tilemap = runtime.objects.EndTilemap.getFirstInstance();
		const endFlag = runtime.objects.EndFlag.getFirstInstance();
		const distance = endFlag.instVars.Distance;
		
		const levels = [
			[14],
			[0, 1, 2, 6, 7, 8].concat(Array(20).fill(14)).concat(Array(10).fill(12)),
			[14, 14, 14, 14, 14, 14, 14, 12, 12, 12, 12, 13, 0, 1, 2, 6, 7, 8],
			[14, 14, 14, 14, 13, 0, 1, 2, 6, 7, 8],
			[14, 14, 13, 12, 11, 10, 9, 3, 4, 5, -1],
			[14, 13, 12, 11, 10, 9, -1],
			[13, 12, 11, 10, 9, -1, -1, -1, -1, -1, -1],
			[13, 12, 11, 10, 9].concat(Array(20).fill(-1)),
			[13, 12, 11, 10, 9].concat(Array(100).fill(-1)),
		];
		
		function queryLevel(x) {
			const iLow = levels[Math.max(0, Math.floor(x * levels.length))];
			const iHigh = levels[Math.min(levels.length - 1, Math.ceil(x * levels.length))];
			
			const mid = (x * levels.length) % 1;
			
			const level = (Math.random() > mid ? iLow : iHigh) ?? (iLow ?? iHigh);
			return level[Math.floor(Math.random() * level.length)];
		}
		
		
		const maxX = tilemap.width / tilemap.tileWidth;
		const maxY = tilemap.height / tilemap.tileHeight;
		const offsetX = Math.floor((tilemap.x - endFlag.x) / tilemap.tileWidth) + distance;
		
		for(let x = 0; x <= maxX; x++) {
			for(let y = 0; y <= maxY; y++) {
				tilemap.setTileAt(x, y, queryLevel(1 - (x + offsetX) / distance));
			}
		}
	},

	async Multiplayerlobbyevents_Event8_Act1(runtime, localVars)
	{
		localVars.NextFreeRoomId = localVars.NextFreeRoomId.replace(/[0-9]/g, "") + ((+localVars.NextFreeRoomId.replace(/[^0-9]/g, "")) + 1);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

