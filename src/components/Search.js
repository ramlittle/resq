//usestate
import {useState}from 'react';

//component
import SearchResults from '../components/SearchResult.js';
const Search=(props)=>{
    //states
    const [searchedFirstName, setSearchedFirstName]=useState('');
    const [searchResult,setSearchResult]=useState([]);
    const [noResult,setNoResult]=useState('');
    console.log('search function is here', props.searchFunction)
    const onFormSearchHandler=(event)=>{
        console.log('DATA FROM SEARCHED JSmay laman kaya dito', searchedFirstName)
        event.preventDefault();
            // console.log('this is search handler from search js')
            // console.log(searchedFirstName);
            setSearchResult(props.searchFunction(searchedFirstName));
            if(searchResult.length===0){
                setNoResult('Nothing Found on Search');
            }else{
                setNoResult(' found ', searchResult.length, ' results');
            }
    }

   

    return(
        <>
        <form 
            className='search-form'
            onSubmit={onFormSearchHandler}>
            <input
                    type='search'
                    placeholder='enter first name here'
                    value={searchedFirstName}
                    onChange={(e)=> {
                        setSearchedFirstName(e.target.value);
                        onFormSearchHandler(e);
                    }
                    }
                ></input>
                <button 
                    type='submit'
                >Search
                </button>
                {noResult}
        </form>
            
            {/* search results here */}
           <table className='searched-table-result'>
            
            <tr className='searched-row-header'>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact</th>
                <th>Emergency</th>
                <th>Land Mark</th>
                <th>Responders</th>
                <th>Emergency Update</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
           
            {
          
            searchResult.map(result=>{
                return <SearchResults
                    key={result._id}
                    id={result._id}
                    firstName={result.firstName}
                    lastName={result.lastName}
                    contact={result.contactDetails}
                    emergency={result.emergencyDetails}
                    landmark={result.landmarkDetails}
                    emergencyUpdate={result.emergencyUpdate}
                    ERT={result.ERT}
                    ERTUpdate={result.ERTUpdate}
                    status={result.status}
                />
            })
            }
        </table>

        </>
    )
}

export default Search;
