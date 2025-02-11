const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.Tween,
		C3.Plugins.Keyboard,
		C3.Plugins.Flowchart,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.NinePatch,
		C3.Plugins.Spritefont2,
		C3.Plugins.Particles,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.PlatformInfo,
		C3.Plugins.Multiplayer,
		C3.Behaviors.Sin,
		C3.Behaviors.custom,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.viewportwidth,
		C3.Plugins.Sprite.Exps.LayerName,
		C3.Behaviors.Platform.Exps.VectorX,
		C3.Plugins.System.Exps.viewportheight,
		C3.Behaviors.Platform.Exps.VectorY,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.System.Acts.ScrollToObject,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.System.Cnds.OnSignal,
		C3.Behaviors.Platform.Acts.SetEnabled,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Sprite.Cnds.PickByUID,
		C3.Plugins.Sprite.Exps.UID,
		C3.Behaviors.Platform.Acts.SetVectorX,
		C3.Plugins.Sprite.Exps.Width,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.NinePatch.Acts.SetVisible,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.PickByHighestLowestValue,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.NinePatch.Acts.SetPos,
		C3.Plugins.Sprite.Exps.BBoxLeft,
		C3.Plugins.Sprite.Exps.BBoxTop,
		C3.Plugins.NinePatch.Acts.SetSize,
		C3.Plugins.Sprite.Exps.BBoxRight,
		C3.Plugins.Sprite.Exps.BBoxBottom,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.Sprite.Exps.ImagePointY,
		C3.Behaviors.custom.Acts.PushOutSolidAngle,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Mouse.Cnds.IsButtonDown,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.IsOverlappingOffset,
		C3.Behaviors.Platform.Acts.FallThrough,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Exps.random,
		C3.Behaviors.Platform.Exps.JumpStrength,
		C3.Behaviors.Platform.Exps.GravityAngle,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Behaviors.Platform.Acts.SetDeceleration,
		C3.Behaviors.Platform.Acts.SetAcceleration,
		C3.Behaviors.Platform.Acts.SetMaxSpeed,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Cnds.PickAll,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Sprite.Acts.MoveToLayer,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.IsMirrored,
		C3.Plugins.Sprite.Cnds.CompareWidth,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Cnds.OnAnyAnimFinished,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.Sprite.Exps.AnimationName,
		C3.Plugins.Audio.Acts.FadeVolume,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Tilemap.Acts.SetSize,
		C3.Plugins.Tilemap.Exps.LayerName,
		C3.Plugins.Tilemap.Exps.TileWidth,
		C3.Plugins.Tilemap.Exps.TileHeight,
		C3.Plugins.Tilemap.Acts.SetPos,
		C3.Plugins.System.Exps.max,
		C3.Plugins.System.Exps.viewportleft,
		C3.Plugins.System.Exps.viewporttop,
		C3.Plugins.Tilemap.Exps.X,
		C3.Plugins.Tilemap.Exps.Y,
		C3.ScriptsInEvents.Gameevents_Event182_Act1,
		C3.Plugins.Tilemap.Acts.Destroy,
		C3.Plugins.Particles.Acts.SetRate,
		C3.Plugins.Particles.Acts.SetDefaultColor,
		C3.Plugins.System.Exps.rgbex255,
		C3.Plugins.Particles.Acts.SetInitSpeed,
		C3.Plugins.Particles.Acts.SetSpeedRandomiser,
		C3.Plugins.Particles.Acts.SetGravity,
		C3.Plugins.Particles.Exps.Gravity,
		C3.Plugins.Particles.Acts.SetSpraying,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Particles.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.Sprite.Acts.SetAnimSpeed,
		C3.Plugins.Sprite.Cnds.HasChildren,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.AddChild,
		C3.Plugins.System.Cnds.EvaluateExpression,
		C3.Plugins.PlatformInfo.Cnds.IsOnMobile,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Acts.SetLayerInteractive,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.Browser.Cnds.IsFullscreen,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Browser.Cnds.OnWindowBlur,
		C3.Plugins.Touch.Exps.TouchCount,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Touch.Exps.TouchID,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Plugins.System.Cnds.PickByEvaluate,
		C3.ScriptsInEvents.Gameevents_Event246_Act1,
		C3.ScriptsInEvents.Gameevents_Event247_Act1,
		C3.ScriptsInEvents.Gameevents_Event248_Act1,
		C3.Plugins.Sprite.Acts.SetSolidCollisionFilter,
		C3.ScriptsInEvents.Gameevents_Event249_Act1,
		C3.ScriptsInEvents.Gameevents_Event250_Act1,
		C3.ScriptsInEvents.Gameevents_Event251_Act1,
		C3.ScriptsInEvents.Gameevents_Event252_Act1,
		C3.Plugins.Multiplayer.Acts.SignallingConnect,
		C3.Plugins.Multiplayer.Cnds.OnSignallingConnected,
		C3.Plugins.Multiplayer.Acts.SignallingLogin,
		C3.Plugins.Multiplayer.Cnds.OnSignallingLoggedIn,
		C3.Plugins.Multiplayer.Acts.SignallingAutoJoinRoom,
		C3.Plugins.System.Exps.projectversion,
		C3.Plugins.Multiplayer.Acts.SignallingRequestRoomList,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.Multiplayer.Exps.ListRoomCount,
		C3.Plugins.Multiplayer.Exps.ListRoomPeerCount,
		C3.Plugins.Multiplayer.Exps.ListRoomMaxPeerCount,
		C3.Plugins.Multiplayer.Exps.ListRoomState,
		C3.Plugins.Multiplayer.Exps.ListRoomName,
		C3.Plugins.System.Cnds.While,
		C3.ScriptsInEvents.Multiplayerlobbyevents_Event8_Act1,
		C3.Plugins.System.Acts.StopLoop,
		C3.Plugins.Multiplayer.Acts.SignallingJoinRoom,
		C3.Plugins.Multiplayer.Cnds.OnSignallingJoinedRoom,
		C3.Plugins.System.Cnds.PickLastCreated,
		C3.Plugins.Multiplayer.Cnds.OnSignallingLeftRoom,
		C3.Plugins.Multiplayer.Cnds.OnSignallingKicked,
		C3.Plugins.Browser.Acts.ConsoleLog,
		C3.Plugins.Multiplayer.Exps.ErrorMessage,
		C3.Plugins.Multiplayer.Cnds.OnPeerConnected,
		C3.Plugins.Multiplayer.Cnds.IsHost,
		C3.Plugins.Multiplayer.Exps.PeerID,
		C3.Plugins.Multiplayer.Acts.HostBroadcastMessage,
		C3.Plugins.Multiplayer.Acts.SendPeerMessage,
		C3.Plugins.Multiplayer.Exps.MyID,
		C3.Plugins.Multiplayer.Exps.PeerCount,
		C3.Plugins.Multiplayer.Exps.PeerIDAt,
		C3.Plugins.Multiplayer.Cnds.OnPeerDisconnected,
		C3.Plugins.Multiplayer.Exps.HostID,
		C3.Plugins.Multiplayer.Exps.CurrentRoom,
		C3.Plugins.Multiplayer.Acts.SignallingLeaveRoom,
		C3.Plugins.Multiplayer.Cnds.OnAnyPeerMessage,
		C3.Plugins.Multiplayer.Exps.FromID,
		C3.Plugins.Multiplayer.Exps.Tag,
		C3.Plugins.Multiplayer.Exps.Message,
		C3.Plugins.Multiplayer.Cnds.OnPeerMessage,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.System.Exps.float,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.System.Cnds.OnLayoutEnd,
		C3.Plugins.Multiplayer.Acts.SignallingDisconnect,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Multiplayer.Cnds.SignallingIsInRoom,
		C3.Behaviors.Tween.Acts.TweenValue,
		C3.Plugins.System.Acts.Signal,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.System.Exps.viewportright,
		C3.Behaviors.Tween.Cnds.IsPlaying,
		C3.Behaviors.Tween.Exps.Value,
		C3.Plugins.Audio.Acts.SetPlaybackRate,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Audio.Acts.SetVolume,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.System.Exps.viewportbottom
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{Ground: 0},
	{InExplosionKnockback: 0},
	{ColliderTags: 0},
	{CollisionTags: 0},
	{RespawnX: 0},
	{RespawnY: 0},
	{WasInAir: 0},
	{LastGroundX: 0},
	{LastGroundY: 0},
	{DeathCooldown: 0},
	{Dead: 0},
	{Platform: 0},
	{Player: 0},
	{TargetX: 0},
	{TargetY: 0},
	{Tween: 0},
	{Camera: 0},
	{Keyboard: 0},
	{GroundPassthrough: 0},
	{Cloud: 0},
	{Tiles: 0},
	{FlipCooldown: 0},
	{BaseSpeed: 0},
	{Snelvin: 0},
	{Gelvin: 0},
	{FlowchartController: 0},
	{Touch: 0},
	{Mouse: 0},
	{Saturn: 0},
	{Decoration: 0},
	{Screen: 0},
	{SpriteFont: 0},
	{Spike: 0},
	{Strength: 0},
	{Color: 0},
	{Bouncepad: 0},
	{Active: 0},
	{Checkpoint: 0},
	{ParticleBurst: 0},
	{ThoughtBubble: 0},
	{SpeechBubble: 0},
	{ThoughtBubbleFlipped: 0},
	{Audio: 0},
	{TapButton: 0},
	{TouchId: 0},
	{DirectActive: 0},
	{AuxiliaryActive: 0},
	{MobileButton: 0},
	{SnapX: 0},
	{SnapY: 0},
	{UISnapObject: 0},
	{Browser: 0},
	{DeviceInfo: 0},
	{Multiplayer: 0},
	{Purpose: 0},
	{Portal: 0},
	{PeerId: 0},
	{Local: 0},
	{LastX: 0},
	{LastY: 0},
	{RemotePlayer: 0},
	{EndTilemap: 0},
	{Distance: 0},
	{EndFlag: 0},
	{FlipDirection: 0},
	{TransitionWipe: 0},
	{LoadingScreenGraphic: 0},
	{VelocityX: 0},
	{VelocityY: 0},
	{RealX: 0},
	{RealY: 0},
	{JumpParticle: 0},
	{DeathField: 0},
	{Holding: 0},
	{LastValidX: 0},
	{LastValidY: 0},
	{WasHolding: 0},
	{Ignited: 0},
	{Cooldown: 0},
	{Bomb: 0},
	{SelectionBox: 0},
	{BombBlock: 0},
	{BombIgniter: 0},
	{BombSpawner: 0},
	{Crate: 0},
	{PickupCollider: 0},
	{MelvinHand: 0},
	{FlameParticles: 0},
	{Index: 0},
	{Hearts: 0},
	{Sine: 0},
	{Sine2: 0},
	{OscilationAnchor: 0},
	{melvinsleeping: 0},
	{GenericParticle: 0},
	{BackgroundProp: 0},
	{DecorationTilemap: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{SolidTiles: 0},
	{Killable: 0},
	{Bounceable: 0},
	{SolidEntities: 0},
	{Custom: 0},
	{PhysicsProp: 0},
	{Pickups: 0},
	{ExplosionReactant: 0},
	{Crates: 0},
	{SolidFilter: 0},
	{GLOBAL_COLLISION_IGNORE: 0},
	{X: 0},
	{Y: 0},
	{MinX: 0},
	{MaxX: 0},
	{MinY: 0},
	{MaxY: 0},
	{Margin: 0},
	{PlayerSpeedInfluence: 0},
	{PressedPickupKey: 0},
	{Velocity: 0},
	{PressingPickup: 0},
	{PressingLeft: 0},
	{PressingRight: 0},
	{PressingJump: 0},
	{PressingDown: 0},
	{Reason: 0},
	{Power: 0},
	{ImpulseX: 0},
	{ImpulseY: 0},
	{BombId: 0},
	{RowDensity: 0},
	{ColumnDensity: 0},
	{RandomX: 0},
	{RandomY: 0},
	{Closeness: 0},
	{Count: 0},
	{ColorR: 0},
	{ColorG: 0},
	{ColorB: 0},
	{GravityMultiplier: 0},
	{VelocityAngle: 0},
	{BombAngle: 0},
	{BombDistance: 0},
	{DisableSolid: 0},
	{Tags: 0},
	{Tag: 0},
	{HighestPeerCount: 0},
	{HighestPeerCountId: 0},
	{NextFreeRoomId: 0},
	{IdTaken: 0},
	{LastRoom: 0},
	{PeerID: 0},
	{Type: 0},
	{Message: 0},
	{PROJECT_ID: 0},
	{Transitioning: 0},
	{Progress: 0},
	{Name: 0},
	{Played: 0},
	{Touches: 0}
];

self.InstanceType = {
	Ground: class extends self.ITilemapInstance {},
	Player: class extends self.ISpriteInstance {},
	Camera: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	GroundPassthrough: class extends self.ITilemapInstance {},
	Cloud: class extends self.ISpriteInstance {},
	Tiles: class extends self.ITilemapInstance {},
	Snelvin: class extends self.ISpriteInstance {},
	Gelvin: class extends self.ISpriteInstance {},
	FlowchartController: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Saturn: class extends self.ISpriteInstance {},
	Decoration: class extends self.ISpriteInstance {},
	Screen: class extends self.IWorldInstance {},
	SpriteFont: class extends self.ISpriteFontInstance {},
	Spike: class extends self.ISpriteInstance {},
	Bouncepad: class extends self.ISpriteInstance {},
	Checkpoint: class extends self.ISpriteInstance {},
	ParticleBurst: class extends self.IParticlesInstance {},
	ThoughtBubble: class extends self.IWorldInstance {},
	SpeechBubble: class extends self.IWorldInstance {},
	ThoughtBubbleFlipped: class extends self.IWorldInstance {},
	Audio: class extends self.IInstance {},
	MobileButton: class extends self.ISpriteInstance {},
	UISnapObject: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	DeviceInfo: class extends self.IInstance {},
	Multiplayer: class extends self.IInstance {},
	Portal: class extends self.ISpriteInstance {},
	RemotePlayer: class extends self.ISpriteInstance {},
	EndTilemap: class extends self.ITilemapInstance {},
	EndFlag: class extends self.ISpriteInstance {},
	TransitionWipe: class extends self.ISpriteInstance {},
	LoadingScreenGraphic: class extends self.ISpriteInstance {},
	JumpParticle: class extends self.ISpriteInstance {},
	DeathField: class extends self.ISpriteInstance {},
	Bomb: class extends self.ISpriteInstance {},
	SelectionBox: class extends self.IWorldInstance {},
	BombBlock: class extends self.ISpriteInstance {},
	BombIgniter: class extends self.ISpriteInstance {},
	BombSpawner: class extends self.ISpriteInstance {},
	Crate: class extends self.ISpriteInstance {},
	PickupCollider: class extends self.ISpriteInstance {},
	MelvinHand: class extends self.ISpriteInstance {},
	FlameParticles: class extends self.IParticlesInstance {},
	Hearts: class extends self.ISpriteInstance {},
	OscilationAnchor: class extends self.ISpriteInstance {},
	melvinsleeping: class extends self.ISpriteInstance {},
	GenericParticle: class extends self.ISpriteInstance {},
	BackgroundProp: class extends self.ISpriteInstance {},
	DecorationTilemap: class extends self.ITilemapInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	SolidTiles: class extends self.ITilemapInstance {},
	Killable: class extends self.ISpriteInstance {},
	Bounceable: class extends self.ISpriteInstance {},
	SolidEntities: class extends self.ISpriteInstance {},
	PhysicsProp: class extends self.ISpriteInstance {},
	Pickups: class extends self.ISpriteInstance {},
	ExplosionReactant: class extends self.ISpriteInstance {},
	Crates: class extends self.ISpriteInstance {},
	SolidFilter: class extends self.ISpriteInstance {}
}