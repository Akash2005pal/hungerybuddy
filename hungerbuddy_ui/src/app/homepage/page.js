import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import Card from "../components/Card"
import Category from "../components/Category"
export default function HomePage()
{
    return(<div><div style={{
     background: 'linear-gradient(90deg,rgba(131, 58, 180, 1) 16%, rgba(253, 29, 29, 1) 66%, rgba(252, 176, 69, 1) 97%)'
      }}>
        
       <Header/>
       <SearchBar/>
      <Category/>
      
    </div>
     
    </div>)
}