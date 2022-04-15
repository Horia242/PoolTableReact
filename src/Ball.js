

function Ball({ x, y }) {
    const style = {
        top: y,
        left: x
    }
    return (<div style={ style } className="ball"> </div>)

}

export default Ball;