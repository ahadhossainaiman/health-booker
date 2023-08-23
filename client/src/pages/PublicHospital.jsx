import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/user.css";

const PublicHospital = () => {
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
                <td>Dhaka Medical College Hospital </td>
                <td>Bakshibazar, Dhaka-1000</td>
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
                <td>Bangabandhu Sheikh Mujib Medical University </td>
                <td>Shahbag, Dhaka-1000</td>
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
                <td>Chittagong Medical College Hospital </td>
                <td>Agrabad Access Road, Chittagong-4210</td>
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
                <td>Rajshahi Medical College Hospital (RMCH)</td>
                <td>New Medical College Road, Rajshahi-6000</td>
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
                <td>Sylhet MAG Osmani Medical College Hospital</td>
                <td> Kajalshah, Sylhet-3100</td>
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
                <td>Sir Salimullah Medical College and Mitford Hospital</td>
                <td>Mitford Road, Dhaka-1100</td>
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
                <td>Khulna Medical College Hospital (KMCH)</td>
                <td> Khulna-9000</td>
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
                <td>Mymensingh Medical College Hospital (MMCH)</td>
                <td>Mymensingh-2200</td>
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
                <td>Rangpur Medical College Hospital</td>
                <td>Rangpur Medical College Road, Rangpur-5400</td>
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
                <td>Barisal Medical College Hospital</td>
                <td>Barisal Medical College Road, Barisal</td>
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

export default PublicHospital;
