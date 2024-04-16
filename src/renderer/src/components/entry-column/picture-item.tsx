import dayjs from '@renderer/lib/dayjs'

export function PictureItem({
  entry,
}: {
  entry: any,
}) {
  return (
    <div className='flex'>
      <div>
        <div className='flex gap-2 overflow-x-auto'>
          {entry.images?.slice(0, 1).map((image) => (
            <img
              key={image}
              src={image}
              className="w-full aspect-square shrink-0 rounded object-cover"
              loading="lazy"
            />
          ))}
        </div>
        <div className="line-clamp-5 text-sm flex-1 px-2 pb-3 pt-1">
          <div className="font-medium line-clamp-2">{entry.title}</div>
          <div className="text-zinc-500 text-[13px]">
            {dayjs
              .duration(dayjs(entry.published_at).diff(dayjs(), 'minute'), 'minute')
              .humanize()}
          </div>
        </div>
      </div>
    </div>
  )
}
