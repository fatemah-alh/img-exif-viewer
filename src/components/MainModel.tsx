
function importAll() {
    const r=require.context('../../public/', false)
    console.log(r,r.keys())
    return r.keys();
  }
  
  
const MainModel= () => {
    const images = importAll().map((img)=>(img.substring(1)));
    console.log(images)
    return{images}
}
export default MainModel;