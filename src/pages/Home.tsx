import { usePets } from '@/components/layout/Layout'

export function Home() {
  const { pets, loading } = usePets()

  return (
    <div className=''>
      {/* <div>Filtros</div>

      <div>Lista de pets</div> */}
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <div className='py-4'>
          <div className='grid grid-cols-5 gap-4 border-b font-bold text-left'>
            <div>Nome</div>
            <div>Vida</div>
            <div>Ataque</div>
            <div>Velocidade</div>
            <div>Ataque por segundo</div>
          </div>

          {pets?.map((pet) => (
            <div
              key={pet.name}
              className='grid grid-cols-5 gap-4 border-b p-2 hover:bg-gray-700/50'
            >
              <div>{pet.name}</div>
              <div>{pet.life}</div>
              <div>{pet.attack}</div>
              <div>{pet.velocity}</div>
              <div>{(pet.attack * pet.velocity).toFixed(2)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
