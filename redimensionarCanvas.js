
export const redimensionarCanvas = ( elementoCanvasDibujo, elementoCanvasPeque ) => {
  const context = elementoCanvasPeque.getContext( '2d' )
  context.clearRect( 0, 0, elementoCanvasPeque.width, elementoCanvasPeque.height )
  context.drawImage( elementoCanvasDibujo, 0, 0, elementoCanvasDibujo.width, elementoCanvasDibujo.height, 0, 0, elementoCanvasPeque.width, elementoCanvasPeque.height )
}
