import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2 } from 'lucide-react'
import { useState } from 'react'

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false) // iniciando o usestate para definir o estado inicial do convidado como falso

  function openGuestsInput(){ //funçao criada para setar o estado como true
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput(){
    setIsGuestsInputOpen(false)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">

          <div className='space-y-4'>  {/* garante que quando adicionado a nova div de convidados, os espaçamentos entre elas fiquem corretos*/}
            <div className='flex flex-col items-center gap-3'>
              <img src="/logo.svg" alt="plann.er" />
              <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
            </div>

            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <div className='flex items-center gap-2 flex-1'>
                <MapPin className='size-5 text-zinc-400'/>
                <input type="text" disabled={isGuestsInputOpen} placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 flex-1"/>
              </div>

              <div className='flex items-center gap-2'>
                <Calendar className='size-5 text-zinc-400'/>
                <input type="text" disabled={isGuestsInputOpen} placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40"/>
              </div>

              <div className='w-px h-6 bg-zinc-800'></div>

              {isGuestsInputOpen ? (
                <button onClick={closeGuestsInput} className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex gap-2 items-center hover:bg-zinc-700'>
                  Alterar local/data
                  <Settings2 className='size-5'/>
                </button>
              ) : (
              //  definimos no botao abaixo a funcao openGuestsInput, quando clicado o botão, será alterado o estado de false para true
              <button onClick={openGuestsInput} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex gap-2 items-center hover:bg-lime-400'>
              Continuar
              <ArrowRight className='size-5'/>
            </button>
              )}
              
            </div>

          {/* operador ternario (if else reduzido e simplificado) que indica que quando o estado for true, apresentara o html referente ao convidado*/}
            {isGuestsInputOpen ? (
              <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <div className='flex items-center gap-2 flex-1'>
                <UserRoundPlus className='size-5 text-zinc-400'/>
                <input type="text" placeholder="Quem estará na viagem?" className="bg-transparent text-lg placeholder-zinc-400 flex-1"/>
              </div>

              <div className='w-px h-6 bg-zinc-800'></div>

              <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex gap-2 items-center hover:bg-lime-400'>
                Confirmar Viagem
                <ArrowRight className='size-5'/>
              </button>
            </div>
            ): null}
          </div>
          <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-300" href="#">termos de uso </a>e <a className="text-zinc-300" href="#">políticas de privacidade</a>.</p>
        </div>
    </div>
  )
}
