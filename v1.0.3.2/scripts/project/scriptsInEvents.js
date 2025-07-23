


const scriptsInEvents = {

	async Gameevents_Event182_Act1(runtime, localVars)
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

	async Gameevents_Event246_Act1(runtime, localVars)
	{
		const instance = runtime.objects.SolidFilter.getFirstPickedInstance();
		const underlyingInstance = runtime.getInstanceByUid(instance.uid);
		
		if(underlyingInstance == null) return;
		
		for(const behaviorId of Reflect.ownKeys(underlyingInstance.behaviors)) {
			const behavior = underlyingInstance.behaviors[behaviorId];
			if(!(behavior instanceof ISolidBehaviorInstance)) continue;
			
			behavior.tags = localVars.Tags;
		}
	},

	async Gameevents_Event247_Act1(runtime, localVars)
	{
		const instance = runtime.objects.SolidFilter.getFirstPickedInstance();
		const DELIMITER = " ";
		
		const colliderTags = instance.instVars.ColliderTags.split(DELIMITER);
		
		for(const tag of localVars.Tags.split(" ")) {
			console.log("add tag " + tag + " to " + instance.uid);
			if(!colliderTags.includes(tag)) colliderTags.push(tag);
		}
		
		instance.instVars.ColliderTags = colliderTags.filter(v => v.length).join(DELIMITER);
	},

	async Gameevents_Event248_Act1(runtime, localVars)
	{
		const instance = runtime.objects.SolidFilter.getFirstPickedInstance();
		const DELIMITER = " ";
		
		const collisionTags = instance.instVars.CollisionTags.split(DELIMITER);
		
		for(const tag of localVars.Tags.split(" ")) {
			if(!collisionTags.includes(tag)) collisionTags.push(tag);
		}
		
		console.log(collisionTags);
		
		instance.instVars.CollisionTags = collisionTags.filter(v => v.length).join(DELIMITER);
	},

	async Gameevents_Event249_Act1(runtime, localVars)
	{
		const instance = runtime.objects.SolidFilter.getFirstPickedInstance();
		const DELIMITER = " ";
		
		const colliderTags = instance.instVars.ColliderTags.split(DELIMITER);
		
		for(const tag of localVars.Tags.split(" ")) {
			console.log("remove tag " + tag + " from " + instance.uid);
			colliderTags.splice(colliderTags.indexOf(tag), 1);
		}
		
		instance.instVars.ColliderTags = colliderTags.filter(v => v.length).join(DELIMITER);
	},

	async Gameevents_Event250_Act1(runtime, localVars)
	{
		const instance = runtime.objects.SolidFilter.getFirstPickedInstance();
		const DELIMITER = " ";
		
		const collisionTags = instance.instVars.CollisionTags.split(DELIMITER);
		
		for(const tag of localVars.Tags.split(" ")) {
			collisionTags.splice(colliderTags.indexOf(tag), 1);
		}
		
		instance.instVars.CollisionTags = collisionTags.filter(v => v.length).join(DELIMITER);
	},

	async Gameevents_Event251_Act1(runtime, localVars)
	{
		const instance = runtime.objects.SolidFilter.getFirstPickedInstance();
		runtime.setReturnValue(instance.instVars.ColliderTags.split(" ").includes(localVars.Tag) ? 1 : 0);
	},

	async Gameevents_Event252_Act1(runtime, localVars)
	{
		const instance = runtime.objects.SolidFilter.getFirstPickedInstance();
		runtime.setReturnValue(instance.instVars.CollisionTags.split(" ").includes(localVars.Tag) ? 1 : 0);
	},

	async Multiplayerlobbyevents_Event8_Act1(runtime, localVars)
	{
		localVars.NextFreeRoomId = localVars.NextFreeRoomId.replace(/[0-9]/g, "") + ((+localVars.NextFreeRoomId.replace(/[^0-9]/g, "")) + 1);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

