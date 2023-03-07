import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { SeriesInfo } from 'src/utils/types/SeriesProps.types'

import { RowSerie } from '../RowSerie/RowSerie'

type ListSeriesProps = {
  series: SeriesInfo[]
  isLoading: boolean
  isEmpty: boolean
  setSeries: Dispatch<SetStateAction<string[]>>
}

export const ListSeries: React.FC<ListSeriesProps> = ({
  series,
  isLoading,
  isEmpty,
  setSeries
}) => {
  const [cloneSeries, setCloneSeries] = useState<Array<SeriesInfo & { checked: boolean }>>([])

  useEffect(() => {
    if (series) {
      const clone = series.map((serie) => ({
        ...serie,
        checked: false
      }))
      setCloneSeries(clone)
    }
  }, [series])

  const handleCheckSerie = (selectVariable: string) => {
    const newClone = cloneSeries.map((serie) => {
      if (selectVariable === serie.variable) {
        return { ...serie, checked: !serie.checked }
      }
      return { ...serie }
    })
    setCloneSeries(newClone)
    setSeries(newClone.filter((serie) => serie.checked).map((serie) => serie.variable))
  }

  return (
    <div className="w-full h-80 overflow-scroll bg-slate-700 border-solid border-2 border-black overflow-x-hidden">
      {isEmpty ? <div>Ups an error was occured</div> : null}
      {isLoading ? (
        <div>loading</div>
      ) : (
        cloneSeries.map(({ variable, display_name, checked, unit_id, display_name_en }) => (
          <RowSerie
            key={variable}
            variable={variable}
            display_name={display_name}
            unit_id={unit_id}
            isChecked={checked}
            display_name_en={display_name_en}
            handleCheck={() => handleCheckSerie(variable)}
          />
        ))
      )}
    </div>
  )
}
