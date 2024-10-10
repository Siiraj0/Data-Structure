class Heap {
  constructor() {
    this.heap = []

  }

  insert(value) {
    if (this.heap.length == 0) {
      this.heap.push(value)
    } else {
      this.heap.push(value)
      this.heapifyUp()
    }
  }


  heapifyUp() {
    let index = this.heap.length - 1
    let parant = Math.floor((index - 1) / 2)

    while (index > 0 && this.heap[index] > this.heap[parant]) {
      [this.heap[index], this.heap[parant]] = [this.heap[parant], this.heap[index]]
      index = parant
      parant = Math.floor((index - 1) / 2)
    }

  }

  remove() {
    let max = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown()
  }
  toGetLeft(index) {
    return (2 * index) + 1
  }
  toGetRight(index) {
    return (2 * index) + 2
  }
  heapifyDown() {

    let index = 0;
    let length = this.heap.length - 1
    while (index < length && this.toGetLeft(index) < length) {
      let large = this.toGetLeft(index)
      if (this.toGetRight(index) < length && this.heap[large] < this.heap[this.toGetRight(index)]) {
        large = this.toGetRight(index)

      }

      if (this.heap[index] < this.heap[large]) {
        [this.heap[index], this.heap[large]] = [this.heap[large], this.heap[index]]
        index = large
      }
    }
  }
}


