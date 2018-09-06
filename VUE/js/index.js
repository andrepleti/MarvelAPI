new Vue({
        el:"#app",
        data:{
         loadurl:'http://localhost:8000/Personagens',
         items:[]
        },
        mounted(){
          axios.get(this.loadurl)
          .then((response) => {
            this.items = response.data.data.results;
          })
        }
       });