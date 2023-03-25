
import { Crp,Dec } from "./Main"

let App = () => {
  // const [txt, settxt] = useState<string>("")
  let test = () => { 

     let y = document.getElementById("copy") as HTMLInputElement
    navigator.clipboard.writeText(y.value)
  }
  return (<>
    <div className="bg-dark h-100">
      <div className="text-danger text-center bg-dark p-3 shadow-lg rounded-bottom rounded-5 font-monospace text-uppercase h-auto"><h1>- its ibada ?</h1></div>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "80%" }}  >
        


        <div className="mx-auto bg-dark  shadow-lg w-75 h-50 p-4 rounded-5"> 
          
          <div className="bg-dark form-outline d-flex justify-content-center align-items-center h-50 ">
            <input type="text" id="typeText" className=" form-control bg-dark border border-danger h-75 w-75 text-danger text-center font-monospace shadow-lg" placeholder="WRITE ANYTHING DOWN HERE !! "/>
          </div>
          <div className="d-flex justify-content-around align-items-center h-50" >
            <input type="button" onClick={()=>Crp()} value="CRYPT" className="text-center  btn btn-outline-warning w-auto" />
            <input type="button" onClick={()=>Dec()} value="DECRYPT" className="text-center  btn btn-outline-warning w-auto" />
            
          </div>
          {/* <div className="d-flex justify-content-center align-items-center text-danger bg-dark shadow-lg rounded-5" style={{ height: "40%" }}>
            
          </div>
           */}

    </div>
        </div>  
    </div>
    <div id="cdiv" className="h-100 bg-dark d-flex justify-content-center align-items-center d-none">
      <div className="bg-dark h-75 w-75 shadow-lg rounded-4 ">
        <div className="h-75 d-flex justify-content-center align-items-center">
          
      <input  type="text" id="copy" readOnly className=" bg-dark h-75 w-75 border border-danger text-danger text-center font-monospace shadow-lg"/>

        </div>
        
        <div className="h-25 d-flex justify-content-center align-items-center">
      <input type="submit"  value="COPY" onClick={()=>test()} className="btn btn-outline-danger p-4 shadow-lg rounded-2"/>
</div>

           </div>
           </div>
  
  </>
  )
}
export {App}
