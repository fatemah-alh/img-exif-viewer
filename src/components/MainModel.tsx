
function importAll() {
    const r=require.context('../../public/', false)
    
    return r.keys();
  }
  
  
const MainModel= () => {
  //require('../../public'+
    const imagesPaths = importAll().map((img)=>(img.substring(1)));
    const images= importAll().map((img)=>(require('../../public'+img.substring(1))));

    
    return{imagesPaths,images}
}
export default MainModel;