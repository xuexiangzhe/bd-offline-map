const init  = async function (init = {tdir: '/tiles'}) {
    window.mapconfig = init
    const {default: BMap} = await import('./getscript3_0')
    // console.log(BMap)
    if (init.drawingManager) {
        // await import('./DrawingManager.min.css')
        await import('./DrawingManager.min.js')
    }
    window.tdir = init.tdir
}
export default init