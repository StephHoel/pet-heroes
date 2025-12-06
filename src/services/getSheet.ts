import Papa from 'papaparse'
import { SHEET_URL } from '@/constants/routes'
import type { PetsProps } from '@/types/petsProps'
import type { RawPetsProps } from '@/types/rawPetsProps'
import { NumberParseFloat } from '@/utils/number'

export async function getSheet(): Promise<PetsProps[]> {
  const response = await fetch(SHEET_URL)
  const csvText = await response.text()

  return new Promise((resolve) => {
    Papa.parse<RawPetsProps>(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const pets: PetsProps[] = results.data.map((entry) => ({
          name: entry.Nome,
          attack: NumberParseFloat(entry.Ataque),
          life: NumberParseFloat(entry.Vida),
          velocity: NumberParseFloat(entry['Vel. por Seg.']),
        }))
        resolve(pets)
      },
    })
  })
}
