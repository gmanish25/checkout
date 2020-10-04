import React from 'react'
import './App.js'
import logo1 from './1mg.jpg'

const newLocal = <div />
const Cart = () => {
    return (
        
      
         
        <div className=" w-1/2 float-left mr-12 xl:overflow-hidden" style={{width: '665px'}}>
          
        <div className="text-2xl font-semibold">Item Requiring Prescription (2)</div>
        <div className="  mt-2 w-full border rounded-md flex bg-white shadow-md">
            <div   className="float-left     " >
              <img src={logo1} alt={'1mg'} style={{borderRadius: '5px' }}  className="p-3 "/>
            </div>
            
              <div className="float-left block ml-12  pt-5">
              <div className="font-semibold">Aztor 40mg</div>
            <div className=" text-teal-300">Mfr. Lupin Ltd</div>
              <select className="text-sm" name="Strip of 10 tablets" id="qty" className=" cursor-pointer  bg-transparent -ml-1 " style={{color: 'gray'}}>
                 <option  >Strip of 10 tablets</option></select>
              </div>
              <div className="quantity float-left  pt-8 ml-20">
              <input type="text" name="name" value="10" maxlength="2" className="w-5 ml-3 "></input>
            <div style={{color: 'gray'}}>Tablets</div>
            </div>     
            <div  className="float-left pt-8 pl-2">
              <div><button>▲</button> </div> 
              <div><button>▼</button></div>
              
            </div>      
            
            <div className="float-right mt-10 ml-32 font-semibold text-3xl">₹150</div>
            <input type="button" value="X" class="delete" onclick="delete_row('1')" className="float-right bg-transparent h-5 pr- "></input>
        </div>

        <div className="text-2xl font-semibold mt-5">Item Requiring Prescription (2)</div>
        <div className="  mt-2 w-full border rounded-md flex bg-white shadow-md">
            <div   className="float-left     " >
              <img src={logo1} alt={'1mg'} style={{borderRadius: '5px' }}  className="p-3 "/>
            </div>
            
              <div className="float-left block ml-12  pt-5">
              <div className="font-semibold">Aztor 40mg</div>
            <div className=" text-teal-300">Mfr. Lupin Ltd</div>
              <select className="text-sm" name="Strip of 10 tablets" id="qty" className=" cursor-pointer  bg-transparent -ml-1 " style={{color: 'gray'}}>
                 <option  >Strip of 10 tablets</option></select>
              </div>
              <div className="quantity float-left  pt-8 ml-20">
              <input type="text" name="name" value="10" maxlength="2" className="w-5 ml-3 "></input>
            <div style={{color: 'gray'}}>Tablets</div>
            </div>     
            <div  className="float-left pt-8 pl-2">
              <div><button>▲</button> </div> 
              <div><button>▼</button></div>
              
            </div>      
            
            <div className="float-right mt-10 ml-32 font-semibold text-3xl">₹150</div>
            <input type="button" value="X" class="delete" onclick="delete_row('1')" className="float-right bg-transparent h-5  "></input>
        </div>
        <div className=" text-2xl pt-12 font-semibold">Cart Summary</div>
        <div className=" bg-white border  rounded-md h-auto mt-2 w-1/2 shadow-md"  style={{width: '360px'}}>
          
        
          <div className="  border h-16 pt-5 font-medium text-opacity-75 pl-4">
            <div className="float-left">Item Total</div>
            <div className="float-right pr-3 " > ₹450</div>
          </div>
          <div className= "border h-16 pt-5 font-semibold  text-opacity-75 pl-4">
            <div className="float-left">Coupons</div>
            <div className="float-right pr-3 "> ₹-50</div>
          </div>
          <div className="border h-16 pt-5 font-semibold  text-opacity-75 pl-4">
            <div className="float-left">Membership Discount</div>
            <div className="float-right pr-3 "> ₹+10</div>
          </div>
          <div className="border h-16 pt-5 font-semibold  text-opacity-75 pl-4">
            <div className="float-left">Total to be paid</div>
            <div className="float-right pr-3 "> ₹450</div>
          </div>
          
        </div>


      </div>
     
     
        
         
    )
}

export default Cart
