import RenderWebGL from 'scratch-render';

RenderWebGL.powerPreference = 'high-performance';

const renderer = new RenderWebGL(document.createElement('canvas'));
renderer.dirty = true;

const Skin = renderer.exports.Skin;
const skin = new Skin(renderer._nextSkinId++, renderer);
skin.emitWasAltered();

class NewSkin extends Skin {
    constructor(id: number, renderer: RenderWebGL) {
        super(id, renderer);
    }
    override updateSilhouette(): void {
        // ...
    }
}
const newSkin = new NewSkin(43, renderer);
newSkin.setEmptyImageData();

// @ts-expect-error
newSkin.emit('WasAltered');

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const measurementProvider = new renderer.exports.CanvasMeasurementProvider(ctx);
const wrapper = renderer.createTextWrapper(measurementProvider);
wrapper.wrapText(50, 'hello');

const overlay = renderer.addOverlay(document.createElement('div'), 'manual');
overlay.mode = 'scale';
renderer._updateOverlays();

declare const textSkin: RenderWebGL.TextBubbleSkin;
// @ts-expect-error
textSkin._style.cornerRadius = 10;
// @ts-expect-error
textSkin._style = textSkin._style;
textSkin.setStyle({
    fontSize: 50,
    lineHeight: 40
});
