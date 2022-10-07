
import Hotels from "./hotels.js";
import hotelinfo from "./hotelinfo.js";
import React, {useState} from 'react';
import hotelInfo from "./hotelinfo.js";

export default function Header() {
    
    const [filter, setFilter] = useState({
        location:"",
        rating:"",
        price:"",
        property:""
    });

    const hotel = hotelinfo.map(room => {
        return(<Hotels key={room.id} {...room}  />)
    });
    
    const [ display , setDisplay ] = useState(hotel)
    
    function change(event){
       const {name , value} = event.target
        setFilter(prev =>{
            return{
                ...prev,
                [name]: value
            }
        })
    }
    const {location ,rating,price,property} = filter

    function Reset(){
        setDisplay(hotelInfo.map(room =>{
            return(<Hotels key={room.id} {...room}  />)
        }))
    }
    
    function getstuff(){
            const priceList = hotelInfo.filter(item2 => {
                    if( !price === false && !rating === false)
                        return item2.price >= 2500 && item2.rating >= 7
                    else if(!price === false)
                        return item2.price >= 2500
                    else if(!rating === false)
                        return item2.rating >= 7        
                } )

            const PropertyList = hotelInfo.filter(item => {
                if(!location === false && !property === false )
                return item.location === location && item.property === property
             else if(!location === false) 
                return item.location === location
             else if(!property === false)
                return item.property === property        
             } )    
            
            const updatedList = [...PropertyList,...priceList]    
            
            const m = new Map();
            const listArr = [];
            
            for(let i=0; i<updatedList.length;i++){
                if(m.get(updatedList[i].id) === undefined)
                m.set(updatedList[i].id,updatedList[i])
                else
                    listArr.push(updatedList[i]);
            }

            let displayList = [];

            if(PropertyList.length > 0 && priceList.length > 0 )
                displayList = [...listArr];
                else if(priceList.length > 0)
                displayList = [...priceList];
                else if(PropertyList.length > 0)
                displayList = [...PropertyList];
                    
            
            setDisplay(displayList.map(room =>{
                return(<Hotels key={room.id} {...room}  />)
            }))
    }
    
    
  return (
    <div className='bg-violet-50 conti heig'>

         {/* Navbar */}
        <div className="navbar flex justify-between py-3 px-36 text-xs bg-white">
            <div className="purchase flex text-sm">
                <img src="favicon.ico" alt="Logo" className="hover mr-2"  width="35px" height="25px "/>
                <button className="hover py-2 px-6 ml-6 mr-4 text-lg font-bold hover:bg-purple-200 hover:text-violet-700">Rent</button>
                <button className="hover py-2 px-6 mr-4 text-lg font-bold hover:bg-purple-200 hover:text-violet-700">Buy</button>
                <button className="hover py-2 px-6 mr-4 text-lg font-bold hover:bg-purple-200 hover:text-violet-700">Sell</button>
                <button className="hover py-2 px-6 mr-4 text-lg font-bold hover:bg-purple-200 hover:text-violet-700">Manage Property</button>
                <button className="hover py-2 px-6 mr-4 text-lg font-bold hover:bg-purple-200 hover:text-violet-700">Resources</button>
            </div>
            <div className="loginSet">
                <button className="login py-2 px-4 ml-2 text-sm">Login</button>
                <button className="signup text-white py-2 px-4 ml-2 text-sm">Sign Up</button>
            </div>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center pt-8">
            <div className="search flex justify-between w-3/5 items-center content-center">
                <p className="text-4xl font-bold">Search properties to rent</p>
                <div className="flex">
                <label htmlFor="fname"></label>
                <input type="text" id="fname" name="fname" placeholder='Click reset to remove filters' />
                <button className="signup text-white p-1 m-1" onClick={Reset}> Reset </button>
                </div>
            </div>
        </div>

        {/* Filter */}
        <div className='Filter flex justify-center mt-8 mx-60 mb-4 bg-white justify-between' >
            <div className=" p-4 my-3 ">
                <div className="des text-sm text-gray-400 font-medium pl-1">Location</div>
                <select className='selection' id="location"
                name="location"
                value={filter.location}
                onChange={change}
                >
                <option value="select">Select</option>  
                <option value="New York">New York</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                </select>
            </div>
            <div className="box p-4 my-3">
                <div className="des text-sm text-gray-400 font-medium pl-1">Rating</div>
                <select
                 className='selection' 
                 id="rating"
                 name="rating"
                 value={filter.rating}
                 onChange={change}
                 >
                <option value="select">Select</option>  
                <option value="no">Above 7</option>
                </select>
            </div>
            <div className="box p-4 my-3">
                <div className="des text-sm text-gray-400 font-medium pl-1">Price</div>
                <select className='selection' id="price"
                name="price"
                value={filter.price}
                onChange={change}
                >
                <option value="select">Select</option>  
                <option value="thousand">above $2500</option>
                </select>
            </div>
            <div className="box p-4 my-3">
                <div className="des text-sm text-gray-400 font-medium pl-1">Property Type</div>
                <select className='selection' id="property"
                name="property"
                value={filter.property}
                onChange={change}
                >
                <option value="select">Select</option>    
                <option value="House">House</option>
                <option value="Office">Office</option>
                </select>
            </div>
            <div className='box mx-4 px-5 my-3 py-5 '>
            <button className='signup text-white px-3 py-2' onClick={getstuff} >Search</button>
            </div> 
        </div>

        {/* Hotel Images */}
        <div className="content flex justify-center bg-violet-50">
         <div className="grid grid-cols-3 gap-x-20">
            {display}
         </div>
        </div>
    </div>
  );
}
