import { url } from '@/constants/routes'

export function NotFound() {
  return (
    <p>
      This route not found, come back to{' '}
      <a href={url.index} className='text-red-500 underline'>
        home
      </a>
    </p>
  )
}
