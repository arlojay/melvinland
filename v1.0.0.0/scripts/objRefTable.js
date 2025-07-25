const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.Tween,
		C3.Plugins.Keyboard,
		C3.Plugins.Flowchart,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.NinePatch,
		C3.Plugins.Spritefont2,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.viewportwidth,
		C3.Plugins.Sprite.Exps.LayerName,
		C3.Behaviors.Platform.Exps.VectorX,
		C3.Plugins.System.Exps.viewportheight,
		C3.Behaviors.Platform.Exps.VectorY,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Cnds.IsMirrored,
		C3.Behaviors.Platform.Acts.FallThrough,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.MoveToLayer,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Sprite.Cnds.IsOverlappingOffset,
		C3.Plugins.Sprite.Exps.BBoxRight,
		C3.Plugins.Sprite.Exps.BBoxLeft
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{Ground: 0},
	{Platform: 0},
	{Player: 0},
	{TargetX: 0},
	{TargetY: 0},
	{ScrollTo: 0},
	{Tween: 0},
	{Camera: 0},
	{Keyboard: 0},
	{GroundPassthrough: 0},
	{Cloud: 0},
	{Tiles: 0},
	{Snelvin: 0},
	{Gelvin: 0},
	{FlowchartController: 0},
	{Touch: 0},
	{Mouse: 0},
	{Saturn: 0},
	{JumpPoof: 0},
	{Decoration: 0},
	{"9patch": 0},
	{SpriteFont: 0},
	{SolidTiles: 0},
	{MinX: 0},
	{MaxX: 0},
	{MinY: 0},
	{MaxY: 0},
	{Margin: 0},
	{PlayerSpeedInfluence: 0},
	{RowDensity: 0},
	{ColumnDensity: 0},
	{RandomX: 0},
	{RandomY: 0},
	{Closeness: 0}
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
	JumpPoof: class extends self.ISpriteInstance {},
	Decoration: class extends self.ISpriteInstance {},
	_9patch: class extends self.IWorldInstance {},
	SpriteFont: class extends self.ISpriteFontInstance {},
	SolidTiles: class extends self.ITilemapInstance {}
}