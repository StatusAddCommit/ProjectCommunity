import React from 'react';

const EventsPagination = () => (
  <ul className="pagination">
    <li className="disabled prev">
      <a href="#" />
    </li>
    <li>
      <span className="page-numbers current">1</span>
    </li>
    <li>
      <a className="page-numbers" href="#">
        2
      </a>
    </li>
    <li>
      <span className="page-numbers dots">…</span>
    </li>
    <li>
      <a className="page-numbers" href="#">
        6
      </a>
    </li>
    <li>
      <a className="page-numbers" href="#">
        7
      </a>
    </li>
    <li className="next">
      <a href="#" />
    </li>
  </ul>
);

export default EventsPagination;
