import toast, { ToastOptions } from 'react-hot-toast'

const addedToLikedToast = (t: any, title: string) => {
  t.duration = 3000

  return (
    <div
      className={`
        ${t.visible ? 'animate-enter' : 'animate-leave'}
    flex items-center font-main max-w-lg gap-4 bg-secondary p-4 rounded-xl`}
    >
      <p className='text-xl w-max'>
        added <b>{title}</b> to favorites!
      </p>
      <button
        onClick={() => {
          toast.dismiss(t.id)
        }}
        className='p-4 rounded-md bg-accent text-white'
      >
        cancel
      </button>
    </div>
  )
}

export default addedToLikedToast
