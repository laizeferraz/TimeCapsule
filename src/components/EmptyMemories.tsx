export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center p-16">
      <p className="w-[360px] text-center leading-relaxed">
        Your memories list is empty, create{' '}
        <a href="" className="underline hover:text-gray-50">
          one now!
        </a>
        !
      </p>
    </div>
  )
}
