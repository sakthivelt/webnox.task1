import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CustomCard from "../../components/CustomCard/CustomCard";
import { Grid, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/porducts/actions";

function RandomApi() {
  const reduxData = useSelector((data) => data.productReducer);
  const dispatch = useDispatch();

  const [data, setData] = useState(reduxData.data);
  const [loading, setLoading] = useState(false);
  const animateVlue = [1, 2, 3, 4, 5, 6];
  console.log(reduxData);

  async function handlefetch() {
    setLoading(true);
    let data = await axios.get("https://fakestoreapi.com/products");
    if (!data) {
      setLoading(false);
      return toast.error("server error");
    }
    setLoading(false);
    setData();
    console.log(data);
  }

  useEffect(() => {
    // handlefetch();
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    setLoading(reduxData.status == "loading" ? true : false);
  }, [reduxData]);

  const loadingAnimation = (
    <Grid item xs={2} sm={4} md={4}>
      <Skeleton
        variant="rectangular"
        animation="wave"
        width={300}
        height={200}
        className="rounded-sm"
      />
      <Skeleton
        variant="rectangular"
        animation="pulse"
        width={180}
        height={10}
        className="mt-3 rounded-sm"
      />
      <Skeleton
        variant="rectangular"
        animation="pulse"
        width={180}
        height={10}
        className="mt-3 rounded-sm"
      />
    </Grid>
  );

  return (
    <div className="w-full h-full flex items-center justify-center">
      {reduxData.status == "error" && reduxData.error}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
        className="w-[90%]"
      >
        {loading
          ? animateVlue.map((item) => {
              return loadingAnimation;
            })
          : reduxData.data?.map((item, index) => {
              return (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <CustomCard data={item} />
                </Grid>
              );
            })}
      </Grid>
    </div>
  );
}

export default RandomApi;
