const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.TextBox,
		C3.Plugins.Button,
		C3.Plugins.Sprite,
		C3.Plugins.NinePatch,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.JavaScriptInEvents.EventSheet1_Event1_Act1
	];
};
self.C3_JsPropNameTable = [
	{Title: 0},
	{TextInput: 0},
	{GuessButton: 0},
	{ResultText: 0},
	{Preview: 0},
	{Preview2: 0},
	{Preview3: 0},
	{d591f2f8c7f97d: 0},
	{i: 0},
	{yellow3dquestionmarktransparentbackground_: 0},
	{questionmarksign3dquestionmark_: 0}
];

self.InstanceType = {
	Title: class extends self.ITextInstance {},
	TextInput: class extends self.ITextInputInstance {},
	GuessButton: class extends self.IButtonInstance {},
	ResultText: class extends self.ITextInstance {},
	Preview: class extends self.ISpriteInstance {},
	Preview2: class extends self.ISpriteInstance {},
	Preview3: class extends self.I9PatchInstance {},
	d591f2f8c7f97d: class extends self.ISpriteInstance {},
	i: class extends self.ISpriteInstance {},
	yellow3dquestionmarktransparentbackground_: class extends self.ISpriteInstance {},
	questionmarksign3dquestionmark_: class extends self.ISpriteInstance {}
}