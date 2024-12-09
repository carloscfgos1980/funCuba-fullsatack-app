const cuba = ({ img, text }: any) => {
  return (
      <div className="box row">        
        <p className="lead px-4" >
          <img className="float-start col-sm-4 mx-4 my-2" width="50%" src={img} alt="city" />
          {text}
          </p>
      </div>
  );
};

export default cuba;
