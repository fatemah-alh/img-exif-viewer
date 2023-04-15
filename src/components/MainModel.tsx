
function importAll() {
    const r=require.context('../../public/', false)
    
    return r.keys();
  }
  
  
const MainModel= () => {
  //require('../../public'+
    const images = importAll().map((img)=>(require('../../public'+img.substring(1))));
    
    return{images}
}
export default MainModel;