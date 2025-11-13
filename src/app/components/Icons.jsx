import React from 'react';

const Icon = ({ name, ...props }) => {
  const icons = {
    rocket: (
      <span className="material-icons-outlined" {...props}>rocket_launch</span>
    ),
    calendar: (
      <span className="material-icons-outlined" {...props}>calendar_today</span>
    ),
    heart: (
      <span className="material-icons-outlined" {...props}>favorite</span>
    ),
    lightbulb: (
      <span className="material-icons-outlined" {...props}>lightbulb</span>
    ),
    users: (
      <span className="material-icons-outlined" {...props}>group</span>
    ),
    child: (
      <span className="material-icons-outlined" {...props}>child_care</span>
    ),
    leaf: (
      <span className="material-icons-outlined" {...props}>eco</span>
    ),
    "arrow-right": (
      <span className="material-icons-outlined" {...props}>arrow_forward</span>
    ),
  };

  return icons[name] || null;
};

export default Icon;