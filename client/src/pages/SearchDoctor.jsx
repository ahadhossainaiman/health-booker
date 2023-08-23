import React, { useEffect, useState } from "react";
import fetchData from "../helper/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/reducers/rootSlice";
import DoctorCard from "../components/DoctorCard";
import Empty from "../components/Empty";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import "../styles/doctors.css";

const SearchDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  // new
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);

  const fetchAllDocs = async () => {
    dispatch(setLoading(true));
    const data = await fetchData(`/doctor/getalldoctors`);
    setDoctors(data);
    dispatch(setLoading(false));
  };
  console.log("doctor", doctors);

  useEffect(() => {
    fetchAllDocs();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchebleDoctor = [...doctors];

  const handleSearchTermChange = (event) => {
    const newSearchTerm = event.target.value;
    const filteredDoctors = searchebleDoctor.filter((doctor) =>
      // doctor.lastname?.toLowerCase().includes(newSearchTerm?.toLowerCase()) ||
      doctor.hospitalName?.toLowerCase().includes(newSearchTerm?.toLowerCase())
    );
    // console.log(filteredDoctors);
    setSearchTerm(newSearchTerm);
    console.log(searchTerm);
    setSearchResults(filteredDoctors);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSearchTerm("");
    setSearchResults([]);
  };
  console.log(searchResults);
  return (
    <div>
      <>
        <Navbar />
        {loading && <Loading />}
        {!loading && (
          <section className="container doctors">
            <h2 className="page-heading">Our Doctors</h2>
            <div class="wrap">
              <div>
                <form action="" className="search">
                  <input
                    type="text"
                    className="searchTerm"
                    placeholder="Search by name or hospital"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                  />
                  <button type="submit" className="searchButton border-2">
                    Reset
                  </button>
                </form>
              </div>
            </div>
            {/* <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Search by name or hospital"
                value={searchTerm}
                onChange={handleSearchTermChange}
              />
              <button type="submit">Reset</button>
            </form> */}
            {doctors.length > 0 ? (
              <div className="doctors-card-container">
                {searchResults?.map((ele) => {
                  return <DoctorCard ele={ele} key={ele._id} />;
                })}
              </div>
            ) : (
              <Empty />
            )}
          </section>
        )}
      </>
      <div style={{ marginTop: "20%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default SearchDoctor;
