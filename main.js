import { dibujarCanvas } from './dibujarCanvas'
import { limpiarCanvas } from './limpiarCanvas'
import { predecirNumeroConIA } from './predecirNumeroConIA'
import './styles.css'

document.querySelector( '#app' ).innerHTML = `
  <main>
    <h1> Reconocimiento de numeros </h1>
    <canvas
      id="canvas-dibujo"
      width="200"
      height="200"
      class="canvas-dibujo"
    ></canvas>

    <canvas
      id="canvas-peque"
      width="28"
      height="28"
      class="canvas-peque"
      style="display: none"
    ></canvas>

    <h2 id="resultado-prediccion" class="resultado-prediccion"></h2>

    <article class="botones-acciones">
      <button class="btn btn-warning" id="boton-limpiar"> Limpiar Canvas </button>
      <button class="btn btn-primary" id="boton-predecir"> Predecir Numero </button>
    </article>
  </main>
`

const elementoCanvasDibujo  = document.getElementById( 'canvas-dibujo' )
const elementoCanvasPeque   = document.getElementById( 'canvas-peque' )
const elementoBotonLimpiar  = document.getElementById( 'boton-limpiar' )
const elementoBotonPredecir = document.getElementById( 'boton-predecir' )
const elementoResultado     = document.getElementById( 'resultado-prediccion' )

dibujarCanvas( elementoCanvasDibujo )
limpiarCanvas( elementoBotonLimpiar, elementoCanvasDibujo )
predecirNumeroConIA( elementoBotonPredecir, elementoCanvasDibujo, elementoCanvasPeque, elementoResultado )
