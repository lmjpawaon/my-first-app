import React, {useState} from 'react';
import './App.css';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Header from './components/Header';
import Category from './components/Category';
import Items from './components/Items';

const sportingGoods = [
  {id:1, name: 'Football', price:49.99, stock:0},
  {id:2, name:'Baseball', price:9.99, stock:1},
  {id:3, name:'Basketball', price:29.99, stock:2}
]

function App() {

  const [txtValue, setTxtValue] = useState('')
  const [form, setForm] = useState({
    nameItem:'',
    priceItem:0,
    stockItem:0,
  })
  const [showOnlyStock, setshowOnlyStock] = useState(false);
  const [data, setData] = useState(sportingGoods);
  
  const handleClick = () =>{
    alert('Clicked')
  }

  const handleForm = (e) => setForm({...form, [e.target.id]: e.target.value})
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    setData([...data,{id:data.length+1, name:form.nameItem, price:form.priceItem, stock:form.stockItem}])
  }

  return (
    <div className="App">
      <form style={{display:'flex', flexDirection:'column', gap:10, marginBottom: 20}} onSubmit={handleSubmit}>

          <div>
            <label htmlFor='nameItem'>Name: </label>
            <input id='nameItem' type='text' value={form.nameItem} onChange={handleForm}/> 
          </div>

          <div>
            <label htmlFor='priceItem'>Price: </label>
            <input id='priceItem' type='number' value={form.priceItem} onChange={handleForm}/> 
          </div>

          <div>
            <label htmlFor='stockItem'>Stock: </label>
            <input id='stockItem' type='number' value={form.stockItem} onChange={handleForm}/> 
          </div>
          
          <button type='submit'>Submit</button>
      </form>
      {txtValue}
      <TextInput value={txtValue} onChange={(e)=>setTxtValue(e.target.value)}/>
      <Checkbox checked={showOnlyStock} onChange={(e)=>setshowOnlyStock(e.target.checked)}/>
      <button onClick={handleClick}>Submit</button>
      <table>
        <tbody>
          <Header/>
          <Category/>
          <Items items={data} includePrice query={txtValue} showOnlyStock={showOnlyStock}/>
          <tr style={{fontWeight:'bold'}}>
            <td colSpan={2} style={{textAlign:'right'}}>Total</td>
            <td style={{paddingLeft:'50px'}}>{data.reduce((total,data)=>{return total+ parseInt(data.stock)},0)}</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
