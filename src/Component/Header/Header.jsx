import profile from "../../assets/images/profile.png";
const Header = () => {
    return (
        <div>
            <div className="flex justify-between items-center p-2 border-b-2 my-2">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </div>
            
        </div>
    );
};

export default Header;