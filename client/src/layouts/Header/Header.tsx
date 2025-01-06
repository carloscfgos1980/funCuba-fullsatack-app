import FunCubaLogo from "./headerComponents/FunCubaLogo";
import FunCubaTitle from "./headerComponents/FunCubaTitle";
import FunNav from "./headerComponents/FunNav";


const Header = () => {
    return (
        <div className="container-fluid bg-dark py-3">
            <div className="row d-flex justify-content-sm-between px-2">
                <div className="col-5 col-md-3 align-self-center text-start">
                    <FunCubaLogo/>
                </div>
                <div className="col-7 col-md-4 align-self-center text-center py-2">
                    <FunCubaTitle/>
                </div>
                <div className="col-md-5 align-self-end text-end mt-3">
                    <FunNav/>
                </div>
            </div>

        </div>
    )
}

export default Header