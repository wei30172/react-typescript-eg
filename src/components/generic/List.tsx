export type ListProps<T> = {
  items: T[]
  onClick: (value: T) => void
}

const List = <T extends {}>({items, onClick}: ListProps<T>) => {
  // <T extends {}> vs <T extends string | number> vs <T extends { id: number }>
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        )
      })}
      {/* {items.map((item, index) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.name}
          </div>
        )
      })} */}
    </div>
  )
}

export default List