import React from 'react'
import TableElement from './TableElement'
import Panel from './Panel'

function Table({gastos}) {
  return (
    <div className='flex justify-around'>
        <div className="relative overflow-scroll  shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        FECHA
                    </th>
                    <th scope="col" className="px-6 py-3">
                        DESCRIPCION
                    </th>
                    <th scope="col" className="px-6 py-3">
                        CATEGORIA
                    </th>
                    <th scope="col" className="px-6 py-3">
                        MONTO
                    </th>
                    <th scope="col" className="px-6 py-3">
                        SUCURSAL
                    </th>
                </tr>
            </thead>
            <tbody>
                {gastos.map((gasto) => <TableElement gasto={gasto}/>)}
                
                
            </tbody>
        </table>
    </div>

    <Panel />
</div>
  )
}

export default Table