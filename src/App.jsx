import './App.css'
import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);

  const handleBookmarks =(blog)=> {
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  const handleReadingTime = (id,time)=>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    // setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='flex flex-col-reverse md:flex-row lg:flex-row'>
          <Blogs handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
      </div>
    </>
  )
}

export default App
