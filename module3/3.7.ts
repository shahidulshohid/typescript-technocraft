{
    //static
    class Counter {
      static  count: number = 0;
      static  increment(){
            return Counter.count = Counter.count + 1
        }
      static  decrement(){
            return Counter.count = Counter.count - 1
        }
    }

    // const instance1 = new Counter()
    // console.log(instance1.increment()) // 1---different memory location
    console.log(Counter.increment())

    // const instance2 = new Counter()
    // console.log(instance2.increment())// 1---different memory location
    console.log(Counter.increment())

    // const increment3  = new Counter()
    // console.log(increment3.increment()) // 1---different memory location
    console.log(Counter.increment())

    //
}