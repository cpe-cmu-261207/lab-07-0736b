import {Store} from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][] ,
  SelectColor: string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

// random all color on canvas
const randomColorCanvas = () => {
  const colorPicker: string[] = ['#000000', '#804000', '#FE0000', '#FE6A00', '#FFD800', '#00FF01', '#FFFFFF', '#01FFFF', '#0094FE', '#0026FF', '#B100FE', '#FF006E']
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push(colorPicker[Math.floor(Math.random() * colorPicker.length)])
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  SelectColor: "#000000"
})

//set select color button
export const setSelectColor = (color: string) => {
  PixelPainterStore.update(state => {
    state.SelectColor = color
  })
}

// paint on canvas at cell
export const setColorOnCell = (x : number, y : number) => {
  PixelPainterStore.update(state => {
    state.canvas[y][x] = state.SelectColor
  })
}

// execute emptyCanvas
export const clearCanvas = () => {
  PixelPainterStore.update(state => {
    state.canvas = createEmptyCanvas()
  })
}

// execute randomColorCanvas
export const randomCanvas = () => {
  PixelPainterStore.update(state => {
    state.canvas = randomColorCanvas()
  })
}