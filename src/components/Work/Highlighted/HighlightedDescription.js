import React from "react";

const HighlightedDescription = () => {
  return (
    <div className="item description">
      <h3 className="text-secondary textShadow">Highlighted project:</h3>

      <p>
        This is an EMS software - [Employee management system] that can help
        companies reduce their time spent on salaries, penalties, bonuses and a
        lot of other things regarding the accounting department, as well as many
        things regarding HR department [adding a new employee is only a few
        clicks away, and giving an end date is only a click away]. It contains
        many other features, like giving loans to employees, tracking their
        installments, making annual/ monthly reports, and so much more. It looks
        and feels great thanks to great structure and design, and even though it
        possesses a lot of features, the complexity is hidden from the end-user,
        so it always appears easy to use, no matter what level of functionality
        you choose to use. It uses{" "}
        <span style={{ color: "#5371e8" }}> ReactJS </span> on the frontend and
        <span style={{ color: "#66bb6a" }}> NodeJS </span> on the backend.
      </p>
    </div>
  );
};

export default HighlightedDescription;
