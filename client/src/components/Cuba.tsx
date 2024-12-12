const cuba = ({ img, text1, text2, slogan, showText, toggleText }: any) => {
  return (
      <div className="box">
        <div className="row py-3">
          <img className="col-sm-4 px-5" width="50%" src={img} alt="city" />
          <div className="col-sm-7 mx-4 align-self-end">
            <p className="display-5 mt-3 px-2">{slogan}</p>
            {!showText ? <button type="button" className="btn btn-link float-end pe-5" onClick={toggleText}>more...</button>
            :
            null
            }
          </div>
        </div>
        {showText ? 
          <div className="px-3">
            <p className="lead" >{text1}</p>
            <p className="lead" >{text2}</p>
            <button type="button" className="btn btn-link text-end" onClick={toggleText}>less...</button>
          </div>
          :
          null} 
     
      </div>
  );
};

export default cuba;
