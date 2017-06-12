import universalRender from '../shared/universal-render';

export default async function(ctx) {
    const {body} = await universalRender(ctx);
    ctx.body = body;
}