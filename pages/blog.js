// import { useDispatch, useSelector } from "react-redux";
// import { getSampleData } from "../store/actions/sampleAction";
// import { useEffect } from "react";
import Header from "@l/header";
import Navigator from "@l/navigator";
import Blogs from "@c/blogs";

export default function Blog() {
  // const dispatch = useDispatch();
  // const sampleListData = useSelector((state) => state.sampleData);
  // const { sample } = sampleListData;

  // useEffect(() => {
  //   dispatch(getSampleData());
  // }, [dispatch]);

  return (
    <div>
      <Header />
      <Blogs />
      <Navigator />
    </div>
  );
}

/**
  <label htmlFor="my-modal" className="btn modal-button">
        <Link href="/login">Login</Link>
      </label>
      <h3>{JSON.stringify(sample)}</h3>
      <label htmlFor="my-modal" className="btn modal-button">
        Osmana Tıkla
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Osmana Selam Olsun </h3>
          <p className="py-4">Yey</p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
 */