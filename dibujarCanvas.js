export const dibujarCanvas = ( canvas ) => {
  const context = canvas.getContext( '2d' )

  if ( !context ) return

  context.fillStyle = 'blue'
  let seEstaDibujando = false
  let ultimaPosX = 0
  let ultimaPosY = 0

  const dibujarLinea = ( { x, y } ) => {
    context.beginPath()
    context.strokeStyle = 'green'
    context.lineWidth = 10
    context.moveTo( ultimaPosX, ultimaPosY )
    context.lineTo( x, y )
    context.stroke()
    ultimaPosY = y
    ultimaPosX = x
  }

  canvas.addEventListener( 'mousedown', ( event ) => {
    ultimaPosX = event.offsetX
    ultimaPosY = event.offsetY
    seEstaDibujando = true
  } )

  canvas.addEventListener( 'mousemove', ( event ) => {
    if ( seEstaDibujando ) {
      dibujarLinea( { x: event.offsetX, y: event.offsetY } )
      dibujarLinea( { x: event.offsetX + 0.1, y: event.offsetY + 0.1 } )
      dibujarLinea( { x: event.offsetX + 0.2, y: event.offsetY + 0.2 } )
      dibujarLinea( { x: event.offsetX + 0.3, y: event.offsetY + 0.3 } )
      dibujarLinea( { x: event.offsetX + 0.4, y: event.offsetY + 0.4 } )
      dibujarLinea( { x: event.offsetX + 0.5, y: event.offsetY + 0.5 } )
      dibujarLinea( { x: event.offsetX + 0.6, y: event.offsetY + 0.6 } )
      dibujarLinea( { x: event.offsetX + 0.7, y: event.offsetY + 0.7 } )
      dibujarLinea( { x: event.offsetX + 0.8, y: event.offsetY + 0.8 } )
      dibujarLinea( { x: event.offsetX + 0.9, y: event.offsetY + 0.9 } )
      dibujarLinea( { x: event.offsetX + 1, y: event.offsetY + 1 } )
      dibujarLinea( { x: event.offsetX - 0.1, y: event.offsetY - 0.1 } )
      dibujarLinea( { x: event.offsetX - 0.2, y: event.offsetY - 0.2 } )
      dibujarLinea( { x: event.offsetX - 0.3, y: event.offsetY - 0.3 } )
      dibujarLinea( { x: event.offsetX - 0.4, y: event.offsetY - 0.4 } )
      dibujarLinea( { x: event.offsetX - 0.5, y: event.offsetY - 0.5 } )
      dibujarLinea( { x: event.offsetX - 0.6, y: event.offsetY - 0.6 } )
      dibujarLinea( { x: event.offsetX - 0.7, y: event.offsetY - 0.7 } )
      dibujarLinea( { x: event.offsetX - 0.8, y: event.offsetY - 0.8 } )
      dibujarLinea( { x: event.offsetX - 0.9, y: event.offsetY - 0.9 } )
      dibujarLinea( { x: event.offsetX - 1, y: event.offsetY - 1 } )
    }
  } )

  canvas.addEventListener( 'mouseup', () => {
    seEstaDibujando = false
  } )

  canvas.addEventListener( 'mouseleave', () => {
    seEstaDibujando = false
  } )
}
