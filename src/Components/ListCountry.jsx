import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, modifier } from "../redux/CountrySlice";
import { getUniversities } from "../redux/UniversitySlicer";
import DetailCountry from "./DetailCountry";


export default function ListCountry() {
    const[pays,setpays]=useState(null)
    const pay = useSelector (state=> state.countries.selectedCountry)
    console.log(pay)
    const dispatch = useDispatch();
    const universities = useSelector (state=>state.universities.Data)
    const countries = useSelector((state) => state.countries.data);
    const selectedcountrydetail = countries?.filter(co=>co.name.common===pay);
    const univ= universities.filter(u=>u.country ===pay)
  useEffect(() => {
    dispatch(getCountries())
  },[])
  useEffect(() => {
    dispatch(getUniversities())
  },[])
  function handlechange (e){
  dispatch(modifier(e.target.value))
  }
  return (
    <div>
      <form>
      <label>Liste des pays: </label>
        <select value={pay} onChange={handlechange}>
          <option value={""}>----select country-----</option>
          {countries.map((c,i) => 
      

            <option key={i} value={c.name.common}>{c.name.official}
            </option>
      
         
          )
         
          }
        </select>
   {console.log(pays)}
        
      </form>
      <div>
      {console.log(selectedcountrydetail)}
       <img src={selectedcountrydetail[0]?.flags.png} alt={selectedcountrydetail[0]?.name.common} /> 
    <h1> Nom de pay : {selectedcountrydetail[0]?.name.common}</h1>
      {/* <DetailCountry country={selectedcountrydetail}/> */}
      </div>
      <div>
        <table border="1">
<tr>
  <td>nom</td>
  <td>Site Officiel</td>
</tr>
{univ.map(u=>
  <tr>
    <td>{u.name}</td>
    <td><a href={u.web_pages}>{u.web_pages}</a></td>
  </tr>)}

        </table>
      </div>
    </div>
  )
}
