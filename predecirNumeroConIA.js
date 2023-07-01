import * as tf from '@tensorflow/tfjs'
import { redimensionarCanvas } from './redimensionarCanvas'

export const predecirNumeroConIA = ( elementoBotonPredecir, elementoCanvasDibujo, elementoCanvasPeque, elementoResultado ) => {

  const contextCanvasPeque = elementoCanvasPeque.getContext( '2d' )
  let modelo

  const cargarModelo = async () => {
    modelo = await tf.loadLayersModel( '/model.json')
  }

  cargarModelo()

  const predecirNumero = () => {
    redimensionarCanvas( elementoCanvasDibujo, elementoCanvasPeque )
    const datosDeImagen = contextCanvasPeque.getImageData( 0, 0, elementoCanvasPeque.width, elementoCanvasPeque.height )

    let arreglo = []
    let arregloDe28 = []

    for ( let i = 0; i < datosDeImagen.data.length; i += 4 ) { // RGBA solo necesitamos la parte en blanco y negro
      const valor = datosDeImagen.data[ i + 3 ] / 255
      arregloDe28.push([ valor ])
      if ( arregloDe28.length === 28 ) {
        arreglo.push( arregloDe28 )
        arregloDe28 = []
      }
    }

    const nuevoArreglo = [ arreglo ]
    const tensor4d = tf.tensor4d( nuevoArreglo )
    const resultado = modelo.predict( tensor4d )
    const porcentajes = resultado.dataSync() // [ 0.5, 0.2, 0.01, 0.02 ... 0.02 ]

    const porcentajeMaximo = Math.max( ...porcentajes )
    const indiceMaximo = porcentajes.findIndex( ( valor ) => {
      return valor === porcentajeMaximo
    } )
    console.log({ resultado, porcentajes, indiceMaximo })
    elementoResultado.innerHTML = `${ indiceMaximo }`
  }
  elementoBotonPredecir.addEventListener( 'click', predecirNumero )
}

