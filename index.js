document.addEventListener('DOMContentLoaded',()=>{
      datosFetch()
})

const datosFetch= /*async () => {
      const res = await fetch('api.json')
      const data = await res.json()
      console.log(data)
      //pintarCards(data)
} */function(){
      try {
            fetch(jason)
            .then(res => res.json())
            .then(data => console.log(data.precio))            
      } catch (error) {
            console.log(error)
      }
}