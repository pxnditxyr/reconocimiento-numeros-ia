
export const limpiarCanvas = ( elementoBotonLimpiar, canvasDibujo ) => {
  const limpiar = () => {
    const context = canvasDibujo.getContext( '2d' )
    context.clearRect( 0, 0, canvasDibujo.width, canvasDibujo.height )
  }
  elementoBotonLimpiar.addEventListener( 'click', limpiar )
}
