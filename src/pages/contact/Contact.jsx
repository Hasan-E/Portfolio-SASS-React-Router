import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import "./Contact.scss"

const Contact = () => {
  return (
    <div className="contactContainer">
      <h1 className="contactTitle">Contact Me...</h1>
      <div className="contactItems">
        <div className="item">
          <p className="itemName">
            <i>
              <HiOutlineMail />
            </i>
            Email
          </p>
          <p className="itemPath">wednesday@nevermoreacademy.edu</p>
        </div>
        <div className="item">
          <p className="itemName">
            <i>
              <HiOutlinePhone />
            </i>
            Phone
          </p>
          <p className="itemPath">+40 (571) 360-1234</p>
        </div>
        <div className="item">
          <p className="itemName">
            <i>
              <HiOutlineLocationMarker />
            </i>
            Address
          </p>
          <p className="itemPath">Strada Zamorei 1, Bușteni 105500, Romania</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
