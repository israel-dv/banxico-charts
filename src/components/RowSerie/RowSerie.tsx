import React from 'react'

import { SeriesInfo } from 'src/utils/types/SeriesProps.types'

type RowSerieProps = SeriesInfo & {
  isChecked: boolean
  handleCheck: () => void
}

export const RowSerie: React.FC<RowSerieProps> = ({
  variable,
  display_name,
  isChecked,
  unit_id,
  display_name_en,
  handleCheck
}) => {
  return (
    <div className="w-full h-16 flex flex-row border border-1 justify-between items-center">
      <div className="px-3">{variable}</div>
      <div className="flex flex-1">{display_name}</div>
      <div className="px-3">{unit_id}</div>
      <div className="px-5">
        <input type="checkbox" onChange={handleCheck} checked={isChecked} />
      </div>
    </div>
  )
}
