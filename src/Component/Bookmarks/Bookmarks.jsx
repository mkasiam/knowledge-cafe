import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks,readingTime }) => {
  return (
    <>
      <div className="w-full md:w-1/3 lg:w-1/3 p-6">
        <div>
          <h3 className="text-4xl">Reading Time:{readingTime}</h3>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2">
          BookMark:{bookmarks.length}
        </h1>
        <div className="space-y-4">
          {bookmarks.map((bookmark, idx) => (
            <Bookmark key={idx} bookmark={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
