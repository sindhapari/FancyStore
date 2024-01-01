// sports.js
import './ProductDetails.css';

import React, { useState, useEffect,useRef } from 'react';
import { Range } from 'react-range';
import * as XLSX from 'xlsx';
import './ProductGrid.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { Link } from 'react-router-dom';

function Notebooks() {
  const buttonRef = useRef(null);
  const MIN = 0;
  const MAX = 100;
 // State to manage selected options
 const [selectedOptions, setSelectedOptions] = useState([]);

 // onChange event handler
 const handleMultiSelectChange = (selected) => {
   setSelectedOptions(selected);
   console.log("multi")
   // You can do additional logic here if needed
 };
  const [values, setValues] = React.useState([0, 100]); // Initial values

  const handleChange = (newValues) => {
    setValues(newValues);
  };
  
    const [isExpanded, setExpanded] = useState(false);
  
    const toggleExpansion = () => {
      setExpanded(!isExpanded);
    };

 
const [selectedItems, setSelectedItems] = useState([]);
function handleClickfiltersindha(arraysfiltervalue) {
  // Your logic here
  console.log("Received Array"+arraysfiltervalue);
  {
   
    console.log('print',filteredData)
   // if (!filteredData || filteredData.length === 0) return;

    console.log('print filteredDatadup',filteredData)
    const filteredResults = jsonDatasliced.filter((element) => {
      var retval=false;
        console.log('print element',element)
      // You can customize the filtering logic here
      /*const title = element[7].toUpperCase();
      console.log('ret val',title.includes(filterValue.toUpperCase()))
      return title.includes(filterValue.toUpperCase());*/
      console.log('selectedItems element',arraysfiltervalue)
      console.log('selectedItems electedItems.size',arraysfiltervalue.length)
      if(arraysfiltervalue.length>0 ){
        console.log('selectedItems inside')
        arraysfiltervalue.forEach(e=>
                {
                  console.log('selectedItems inside2'+e)
                    const title = element[7].toUpperCase();
                    console.log('ret val',title.includes(e.toUpperCase()))
                    if(title.includes(e.toUpperCase())){
                      retval= true;
                    }   
                     
                }
              
                )
                
      }
      else{
        retval= true
      }
      console.log('is my console printed?'+retval+"999"+element[7])
      return retval
    });
    console.log('filteredResults',filteredResults)
    setFilteredData([ ...filteredResults]);
  }
}
const handleToggleItemsindha = (item) => 
 {
  console.log("Hey sindha type"+typeof(selectedItems))

  var filterv1= []

selectedItems.forEach(function (item) {
	filterv1.push(item);
});

console.log("filterv1"+filterv1);
 
  if (selectedItems.includes(item)) {
    
    filterv1.pop(item);
    // If item is already selected, remove it
    setSelectedItems(selectedItems.filter((selected) => selected !== item));
    console.log("inside 1"+selectedItems)
  } else {
    filterv1.push(item);
    // If item is not selected, add it
    setSelectedItems([...selectedItems, item]);
    console.log("inside 2"+selectedItems)
  }
  console.log("Hey sindha button clicked"+selectedItems)
  handleClickfiltersindha(filterv1);
 
};
const MultiSelect = ({ options }) => {
   //buttonRef.current.click();
  
  
    const handleToggleItem = (item) => {
      
     
      if (selectedItems.includes(item)) {
        // If item is already selected, remove it
        setSelectedItems(selectedItems.filter((selected) => selected !== item));
      } else {
        // If item is not selected, add it
        setSelectedItems([...selectedItems, item]);
      }
      console.log("Hey sindha button clicked"+item)
      buttonRef.current.click();
    };
  
    return (
      
      
      <div>




        <h2>Selected Items: {selectedItems.join(', ')}</h2>
        <ul>
          {options.map((item) => (
            <li key={item}>
              <label>
                <input
                  type="checkbox"
                  value={item}
                  checked={selectedItems.includes(item)}
                  onChange={() => {handleToggleItem(item) }}
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

//
    
    //const dataToSend = { userId: '41'  , username : 'sindha' , password :'HHAha'}
  const [filteredData, setFilteredData] = useState(null);
  const [filterValue, setFilterValue] = useState('');
  const [jsonDatasliced, setjsonDatasliced] = useState(null);
  const [Ruling, SetRuling] = useState([]);

  useEffect(() => {
    // Load the static XLSX file data
    fetch('/Kolathur.xlsx')
      .then((response) => response.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[4];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
         const jsonDatasliced  = jsonData.slice(1);
         var replacedjsonDatasliced=[]
         var Ruling=[]
         jsonDatasliced.forEach(e=>{console.log("e",e[9],e[7])
         
         var maintemp=e;
         var temp = ""+maintemp[9];
         var temprulling=""+maintemp[7]
         temp=temp.replace(/\//g, "Q~~~Q")
         maintemp[9]=temp;
         replacedjsonDatasliced.push(maintemp)
         Ruling.push(temprulling)
        })
        console.log('is my jsonData jsonDatasliced',jsonDatasliced)
         console.log('is my jsonData printed',replacedjsonDatasliced,Ruling)
         const Rule = new Set(Ruling);
         console.log('is my Rule',Rule)
         let array = [...Rule];
         SetRuling(array)
         setjsonDatasliced(jsonDatasliced)
        setFilteredData(jsonDatasliced);
       
      })
      .catch((error) => console.error('Error loading XLSX file:', error));
  }, []);

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
    
  };

  function applyFilter () {
    var retval=false;
    console.log('print',filteredData)
   // if (!filteredData || filteredData.length === 0) return;

    console.log('print filteredDatadup',filteredData)
    const filteredResults = jsonDatasliced.filter((element) => {
        console.log('print element',element)
      // You can customize the filtering logic here
      /*const title = element[7].toUpperCase();
      console.log('ret val',title.includes(filterValue.toUpperCase()))
      return title.includes(filterValue.toUpperCase());*/
      console.log('selectedItems element',selectedItems)
      console.log('selectedItems electedItems.size',selectedItems.length)
      if(selectedItems.length>0 ){
        console.log('selectedItems inside')
            selectedItems.forEach(e=>
                {
                  console.log('selectedItems inside2'+e)
                    const title = element[7].toUpperCase();
                    console.log('ret val',title.includes(e.toUpperCase()))
                    retval= title.includes(e.toUpperCase());   
                     
                }
              
                )
                
      }
      else{
        retval= true
      }
      console.log('is my console printed?'+retval)
      return retval
    });
    console.log('filteredResults',filteredResults)
    setFilteredData([ ...filteredResults]);
  };
  

  return (


    
    <div className="App">

<>
    <Slider range />
  </>  

  <div className="expandable-section">
      <div className="header" onClick={toggleExpansion}>
        <h2>Section Header</h2>
        <span>{isExpanded ? '▼' : '►'}</span>
      </div>
      {isExpanded && (
        <div className="content">
          {/* Contents to be shown when expanded */}
          <p>This is the content of the expandable section.</p>
          <p>It can include any content you want to display.</p>
        </div>
      )}
    </div>
  <div className="multi-range-slider">
      <Range
        values={values}
        step={10}
        min={MIN}
        max={MAX}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '10px',
              borderRadius: '5px',
              backgroundColor: '#ddd',
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '20px',
              width: '20px',
              borderRadius: '50%',
              backgroundColor: '#007bff',
              boxShadow: '0 2px 2px rgba(0, 0, 0, 0.2)',
            }}
          />
        )}
      />
      <div className="values-container">
        {values.map((value, index) => (
          <div key={index} className="value">
            {value}
          </div>
        ))}
      </div>
    </div>
  
    

      
      <h1>CARDS</h1>
      <h1>MultiSelect Example</h1>
      
      <div>




        <h2>Selected Items: {selectedItems.join(', ')}</h2>
        <ul>
          {Ruling.map((item) => (
            <li key={item}>
              <label>
                <input
                  type="checkbox"
                  value={item}
                  checked={selectedItems.includes(item)}
                  onChange={() => {handleToggleItemsindha(item) }}
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
     

      <MultiSelect
      options={Ruling}
      value={selectedOptions}
      onChange={handleMultiSelectChange}
    />

      <div>
        <label>
          Filter by Title:{' '}
          <input type="text" value={filterValue} onChange={handleFilterChange} />
        </label>
        <button ref={buttonRef} onClick={handleClickfiltersindha}>Apply Filter</button>
      </div>

      {filteredData && filteredData.length > 0 ? (
        <div>
          <h2>sports Data:</h2>

          <div className="product-grid">
            {filteredData.map((row, index) => (
                
                <Link to={`/ProductDetails/${row[9]}/${row[3]}/${row[4]}/${row[5]}/${row[6]}/${row[7]}`}>
              
                    
                <div className="product-item">
                  <img src={row[1]} alt="" className="product-image" />
                  <h4>{row[7]}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <p>No matching data found.</p>
      )}
    </div>
  );
}

export default Notebooks;
