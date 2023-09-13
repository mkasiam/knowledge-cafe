const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="shadow-lg p-4 mb-3 border rounded-xl">
            <h2 className="text-2xl">{title} </h2>
        </div>
    );
};

export default Bookmark;