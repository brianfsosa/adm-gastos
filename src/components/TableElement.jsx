import React from 'react'

function TableElement({gasto}) {
 const {
    amount,
    category,
    concept,
    fecha,
    franchise} = gasto

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {fecha}
                </th>
                <td className="px-6 py-4">
                    {concept}
                </td>
                <td className="px-6 py-4">
                    {category}
                </td>
                <td className="px-6 py-4">
                    ${amount}
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{franchise}</a>
                </td>
            </tr>
  )
}

export default TableElement
