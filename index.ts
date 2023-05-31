interface ICollection {
  length: number
}
function iteratorCollection(collection: ICollection) {
  console.log(collection[0])
  console.log(collection[1])
}
iteratorCollection({ length: 4 })
