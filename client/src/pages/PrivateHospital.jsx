import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/user.css";

const PrivateHospital = () => {
  return (
    <div>
      <Navbar />
      <section className="user-section mb-10" style={{ width: "100%" }}>
        <h3 className="home-sub-heading mx-auto">Hospitals</h3>
        <div className="user-container">
          <table className="ml-[10%]">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Hospital Name</th>
                <th>Address</th>
                <th>ICU</th>
                <th>Bed site</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Square Hospitals Ltd.</td>
                <td>8/F, Bir Uttam Qazi Nuruzzaman Sarak,</td>
                <td>
                  <input type="number" className="w-10" />
                </td>
                <td>
                  <input type="number" className="w-10" />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>2</td>
                <td>United Hospital Ltd.</td>
                <td> Plot 15, Road 71, Gulshan, Dhaka 1212</td>
                <td>
                  <input type="number" className="w-10" />
                </td>
                <td>
                  <input type="number" className="w-10" />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>3</td>
                <td>Apollo Hospitals Dhaka</td>
                <td>Plot: 81, Block: E, Bashundhara R/A, Dhaka 1229</td>
                <td>
                  <input type="number" className="w-10" />
                </td>
                <td>
                  <input type="number" className="w-10" />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>4</td>
                <td>Labaid Specialized Hospital</td>
                <td>House 06, Road 04, Dhanmondi, Dhaka 1205</td>
                <td>
                  <input type="number" className="w-10" />
                </td>
                <td>
                  <input type="number" className="w-10" />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>5</td>
                <td>Ibn Sina Hospital</td>
                <td> House 64, Road 15/A, Dhanmondi, Dhaka 1209</td>
                <td>
                  <input type="number" className="w-10" />
                </td>
                <td>
                  <input type="number" className="w-10" />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>6</td>
                <td>Evercare Hospital Dhaka</td>
                <td>Plot 81, Block E, Bashundhara R/A, Dhaka 1229</td>
                <td>
                  <input type="number" className="w-10" />
                </td>
                <td>
                  <input type="number" className="w-10" />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>7</td>
                <td>Popular Medical College Hospital</td>
                <td>House No. 25, Road No. 2, Dhanmondi R/A, Dhaka 1205</td>
                <td>
                  <input type="number" className="w-10" />
                </td>
                <td>
                  <input type="number" className="w-10" />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>8</td>
                <td>Bangladesh Specialized Hospital</td>
                <td>Satmasjid Road, Dhanmondi, Dhaka 1209</td>
                <td>
                  <input type="number" className="w-10" />
                </td>
                <td>
                  <input type="number" className="w-10" />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>9</td>
                <td>Dhaka Medical College Hospital</td>
                <td> Dhanmondi, Dhaka 1205</td>
                <td>
                  <input type="number" className="w-10" />
                </td>
                <td>
                  <input type="number" className="w-10" />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>10</td>
                <td>Parkview Hospital Ltd.</td>
                <td> 82, Satmasjid Road, Dhaka 1205</td>
                <td>
                  <input type="number" className="w-10" />
                </td>
                <td>
                  <input type="number" className="w-10" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivateHospital;
