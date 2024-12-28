// Definindo o tipo fogão que será base dos outros 2 tipos
type Fogao = {
    modelo: string,
    material: string,
    bocas: number
}

// tipo de fogão com 4 bocas
type Fogao4 = Fogao & {
    tipo: string, // tipo único
    acender4bocas() : void
}

// tipo de fogão com 6 bocas
type Fogao6 = Fogao & {
    tipo : string,
    acender6bocas(): void
}

//

// e se houver um fogão de 6 bocas que precise acender só 4 sempre?
// podemos criar um adaptador que irá implementar nos fogões de 6 bocas um método para acender apenas 4

type AdaptadorDeFogao6bocasPara4 = {
    acenderApenas4bocas(): void
}

// criando um fogão nesses moldes

type FogaoAdaptado = Fogao6 & AdaptadorDeFogao6bocasPara4

// instanciando o tipo

// fogão não adaptado que só consegue acender as 6 bocas
const fog6 : Fogao6 = {
    modelo: 'x',
    material: 'y',
    bocas: 6,
    tipo: '6 bocas',
    acender6bocas() {
        console.log('6 bocas acendidas')
    },
}

// fogão de 6 bocas adaptado para acender só 4 bocas

const fogAdapt : FogaoAdaptado = {
    tipo: '6 bocas',
    modelo: 'x',
    material: 'y',
    bocas: 6,
    acender6bocas() {
        console.log('6 bocas acendidas')
    },
    acenderApenas4bocas() {
        console.log('Apenas 4 bocas acendidas')
    },
}

fogAdapt.acenderApenas4bocas()