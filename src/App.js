import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Container, Grid } from '@mui/material';
import bgDevice from './assets/background-device.png'

function App() {
  const [widthDevice, setwidthDevice] = React.useState(480)
  const [heightDevice, setheightDevice] = React.useState(800)

  const [heightObject, setheightObject] = React.useState(40)
  const [widthObject, setWidthObject] = React.useState(40)
  const [xObject, setXObject] = React.useState(0)
  const [yObject, setYObject] = React.useState(0)

  React.useEffect(() => {
    console.log('width', widthObject)

  }, [heightObject, widthObject, xObject, yObject])

  return (
    <Container>
      <div style={{ marginTop: '32px', marginLeft: '32px', fontWeight: 'bold', fontFamily: 'Agency FB', fontSize: '32px' }}>
        Super Basic 2D - Calculator
      </div>

      <Grid container spacing={2} style={{ marginTop: '28px' }}>
        <Grid item xs={12} md={8}>
          <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>

            <div style={{ width: widthDevice / 2, height: heightDevice / 2, backgroundImage: `url(${bgDevice})`, position: 'relative', backgroundSize: 'cover' }}>
              <div id="div-object" style={{ width: `${widthObject / 2}px`, height: `${heightObject / 2}px`, top: `${yObject / 2}px`, left: `${xObject / 2}px`, background: 'yellow', position: 'absolute' }}></div>
            </div>

          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '22px' }}>
            <div style={{ marginBottom: '16px' }}>
              Dimensões da tela: 480 x 800
            </div>
            <form autocomplete="off" style={{ display: 'flex', flexDirection: 'column' }}>

              <TextField value={widthObject} onChange={(e) => { setWidthObject(e.target.value) }} style={{ marginBottom: '10px' }} type="number" id="outlined-basic" label="Largura" variant="outlined" />
              <TextField value={heightObject} onChange={(e) => { setheightObject(e.target.value) }} style={{ marginBottom: '10px' }} type="number" id="outlined-basic" label="Altura" variant="outlined" />
              <TextField value={xObject} onChange={(e) => { setXObject(e.target.value) }} style={{ marginBottom: '10px' }} type="number" id="outlined-basic" label="Posição X" variant="outlined" />
              <TextField value={yObject} onChange={(e) => { setYObject(e.target.value) }} style={{ marginBottom: '20px' }} type="number" id="outlined-basic" label="Posição Y" variant="outlined" />

              <TextField value={`${xObject}, ${yObject}, ${widthObject}, ${heightObject}`} disabled id="outlined-basic" label="Resultado: (x, y, width, height)" variant="outlined" />
            </form>

          </div>
        </Grid>
      </Grid>

      <div class="footer">
        <p>Super Basic 2D - Android Game Lib | Treinamento disponível na <a target="_blank" href="https://www.udemy.com/course/desenvolvimento-de-jogos-para-android-com-android-studio">Udemy</a></p>
      </div>
    </Container >
  )
}

export default App