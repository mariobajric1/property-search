import {useState} from 'react'

import './App.css';

function App() {

  const [data, setData] = useState([
    {
      name: 'Building 1',
      url: 'https://example.com/property/1',
      location: 'New York City',
      price: '$500,000',
      units: '2 bedrooms',
    },
    {
      name: 'Building 2',
      url: 'https://example.com/property/2',
      location: 'Los Angeles',
      price: '$750,000',
      units: '3 bedrooms',
    },
    {
      name: 'Building 3',
      url: 'https://example.com/property/3',
      location: 'Chicago',
      price: '$300,000',
      units: '1 bedroom',
    },
  ]);



  const handleAddData = () => {
    const nameInput = document.querySelector('#name');
    const name = nameInput.value;
    nameInput.value = '';

    const urlInput = document.querySelector('#url');
    const url = urlInput.value;
    urlInput.value = '';

    const locationInput = document.querySelector('#location');
    const location = locationInput.value;
    locationInput.value = '';

    const priceInput = document.querySelector('#price');
    const price = priceInput.value;
    priceInput.value = '';

    const unitsInput = document.querySelector('#units');
    const units = unitsInput.value;
    unitsInput.value = '';
  
    const newData = {
      name: name,
      url: url,
      location: location, 
      price: '$' + price,
      units: units + ' bedroom',
    };
  
    setData([...data, newData]);
  };


  const removeItem = itemToRemove => {
    setData(data.filter(item => item !== itemToRemove))
  }

  return (
    <div className='app'>
      <h1 className='watchlist-header'>WATCHLIST</h1>

      <div className='property-list'>
        {data.map((item, index) => (
          <div className='property-card'
          key={index}>
              <a href={item.url}>
              {item.name}, in {item.location}
              </a> 
              <p>{item.price}</p>
              <p>{item.units}</p>
          </div>
        ))}
      </div>




      <div className='entry'>
        <input type="text" id='name' placeholder='name'/>
        <input type="text" id='url' placeholder='url'/>
        <input type="text" id='location' placeholder='location'/>
        <input type="text" id='price' placeholder='price'/>
        <input type="text" id='units' placeholder='units'/>
        <button onClick={handleAddData}>Add Data</button>
        <div className='search-links'>
          <p>Looking for something? Try:</p>
          <a href='https://loopnet.com'>Loopnet</a>
          <a href='https://www.marcusmillichap.com/properties?gclid=EAIaIQobChMIkPHWoJj0-wIVXCytBh0qqAhhEAAYASABEgLVPvD_BwE#pageNumber=1&stb=orderdate_dt,DESC'>Marcus & Millichap
          </a>
          <a href='https://invest.jll.com/us/en?location=country%253AUnited%2520States'>JLL</a>
        </div>

      </div>
    </div>
  );
}

export default App;
