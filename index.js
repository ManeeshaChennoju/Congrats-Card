const element = (
  <div className="bg_container">
    <h1 className="main_heading"> Congratulations </h1>
    <div class="details_container">
      <img
        className="personImage"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="person_name"> Kiran V </h1>
      <p className="collegeNme">
        Vishnu Institute of Computer Education and Technology, Bhimavaram.
      </p>
      <img
        className="watchImg"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
