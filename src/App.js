
import './App.css';
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react';
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios';
import apiKey from './data/config';
import Footer from './components/Footer/Footer'
function App() {
  const [category,setCategory] = useState("general");
  const [newsArray,setNewsArray] = useState([]);
  const [newsResults,setNewsResults] = useState();
  const [loadmore,setLoadMore] = useState(20);
  
  const newsApi = async ()=>{
   try {
    const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadmore}`);
     setNewsArray(news.data.articles);
     setNewsResults(news.data.totalResults);
  } catch (error) {
    console.log(error);
   }
  };
  console.log(newsArray);
  useEffect(()=>{
 newsApi(); // eslint-disable-next-line
},[newsResults,category,loadmore] );
  
  
  return (
    <div className="App">
     
    <Navbar setCategory={setCategory}/> 
     <NewsContent loadmore = {loadmore}
     setLoadMore ={setLoadMore} newsArray ={newsArray} newsResults ={newsResults}/>
     <Footer/>
    </div>
  );
}

export default App;
