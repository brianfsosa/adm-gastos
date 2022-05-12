import { useState } from 'react'
import Nav from './components/Nav'
import Table from './components/Table'

function App() {
  const gastos = [
    { amount: 300,
      category: 'INSUMOS DE OFICINA',
      concept: 'cinta scotch x2',
      fecha: '02-09-2021',
      franchise: 'Capilla'
    },
    { amount: 500,
      category: 'REFACCIONES',
      concept: 'plomeria',
      fecha: '02-09-2021',
      franchise: 'Balumba'
    },
    { amount: 500,
      category: 'REFACCIONES',
      concept: 'plomeria',
      fecha: '02-09-2021',
      franchise: 'Balumba'
    },
    { amount: 300,
      category: 'INSUMOS DE OFICINA',
      concept: 'cinta scotch x2',
      fecha: '02-09-2021',
      franchise: 'Capilla'
    },
    { amount: 500,
      category: 'REFACCIONES',
      concept: 'plomeria',
      fecha: '02-09-2021',
      franchise: 'Balumba'
    },
    { amount: 500,
      category: 'REFACCIONES',
      concept: 'plomeria',
      fecha: '02-09-2021',
      franchise: 'Balumba'
    },
    { amount: 300,
      category: 'INSUMOS DE OFICINA',
      concept: 'cinta scotch x2',
      fecha: '02-09-2021',
      franchise: 'Capilla'
    },
    { amount: 500,
      category: 'REFACCIONES',
      concept: 'plomeria',
      fecha: '02-09-2021',
      franchise: 'Balumba'
    },
    { amount: 500,
      category: 'REFACCIONES',
      concept: 'plomeria',
      fecha: '02-09-2021',
      franchise: 'Balumba'
    },
    { amount: 500,
      category: 'REFACCIONES',
      concept: 'plomeria',
      fecha: '02-09-2021',
      franchise: 'Balumba'
    }
  ]


  return (
    <div className="flex">
      <Nav />
      <Table  gastos={gastos}/>
    </div>
  )
}

export default App
