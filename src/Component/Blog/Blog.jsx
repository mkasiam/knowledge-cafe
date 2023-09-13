import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';
const Blog = ({blog,handleBookmarks,handleReadingTime}) => {
    const {cover,id,title,author,author_img,hashtags,reading_time,posted_date}=blog;
    return (
        <div className="w-full shadow-xl rounded-xl p-4">
            <div>
                <div><img className="w-full rounded-lg" src={cover} alt="" /></div>
            </div>
            <div>
                {/* Author Info and Bookmark section */}
                <div className="flex justify-between my-2">
                     {/* Containing Author Image and description */}
                    <div className="flex justify-center item-center gap-3">
                        <div className="my-auto">
                            <img className="w-10 rounded-full" src={author_img} alt="" />
                        </div>
                        <div>
                            <p className="block">{author}</p>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    {/* Containing Reading time */}
                    <div className='flex items-center gap-4'>
                        <p className='inline'>{reading_time} min red</p>
                        <button onClick={()=>handleBookmarks(blog)}><FaBookmark></FaBookmark></button>
                    </div>
                </div>  
            </div>
            <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl
                 text-[#111]">{title}</h1>
                 <p>{hashtags.map((hashtag,idx)=><span key={idx}><a href=''>#{hashtag} </a></span>)}</p>
                 <button onClick={()=>handleReadingTime(id,reading_time)} className='underline text-blue-500'>Mark As read</button>
            </div>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}




export default Blog;