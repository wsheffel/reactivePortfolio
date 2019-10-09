import React from "react";

const HighlightedDescription = () => {
  return (
    <div className="item description">
      <h3 className="text-secondary textShadow">Highlighted project:</h3>

      <p>
        It's an EMS software - [employee management system] which was built to
        help companies reduce their time spent regarding the Accounting and HR
        departments. It helps with generating salaries, penalties, bonuses, etc.
        Employing a new staff member is only a few clicks away or giving an end
        date takes one click. It contains many other features, like giving loans
        to employees, tracking their instalments, making annual/ monthly
        reports, and much more. It looks and feels great thanks to great
        structure and design, and even though it possesses many features, the
        complexity is hidden from the end-user. So it always appears easy to
        use, no matter what level of functionality you choose to use. It uses
        <span style={{ color: "#5371e8" }}> ReactJS </span> on the frontend and
        <span style={{ color: "#66bb6a" }}> NodeJS </span> on the backend.
      </p>
    </div>
  );
};

export default HighlightedDescription;
