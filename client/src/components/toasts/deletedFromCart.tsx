const deletedFromCartToast = (t: any, title: string) => {
  t.duration = 3000

  return (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } flex items-center font-main max-w-lg gap-4 bg-secondary p-4 rounded-xl `}
    >
      <p className='text-xl w-max '>
        deleted <b>{title}</b> from your cart.
      </p>
    </div>
  )
}

export default deletedFromCartToast
