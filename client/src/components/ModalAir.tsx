import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useAppSelector } from "../redux/configureStore";
import CarouselAirDetails from "./CarouselAir";
import Reviews from "./Reviews";

const style = {
  position: "absolute",
  paddingLeft: "3%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: "70vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "scroll",
};

const ModalAir = ({
  toggle,
  modal,
  name,
  img,
  items,
  description,
  airId,
}: any) => {
  const { reviews }: any = useAppSelector((state) => state.filteredReviews);

  const selectedFeeds = reviews.filter((feed: any) => {
    return feed.feedId === airId;
  });
  
  const itemSrc = `${process.env.PUBLIC_URL}/imagesAir/${img}`;

  return (
    <div>
      <Modal
        style={{ overflow: "scroll" }}
        open={modal}
        onClose={toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex justify-content-between mx-2"
          >
            <p className="display-3 mt-5">"{name}"</p>
            <p
              className="display-5 mt-3 me-3"
              onClick={toggle}
              style={{ cursor: "pointer" }}
            >
              X
            </p>
          </div>
          <div>
              <div className="row">
                <div className="location row justify-content-around my-5">
                  <img
                    width="30%"
                    src={itemSrc}
                    alt={name}
                    className="text-center col-10 col-sm-4"
                  />
                  <p className="col-sm-6 align-self-center fs-3">
                    {description}
                  </p>
                </div>
                <div className="modalCarousel justify-content-center col-sm-10 mb-5">
                  <p className="lead text-danger text-center">swipe to wathc the pics!</p>
                  <CarouselAirDetails items={items} />
                </div>
                <div className="reviews mx-2">            
                  {selectedFeeds.length > 0 ? <Reviews items={selectedFeeds}/> : <p className="display-5 text-center">No Reviews</p>
                  }
                </div>
              </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAir;
