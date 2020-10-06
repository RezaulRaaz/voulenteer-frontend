import React from "react";

const Sidebar = () => {
  return (
    <div>
      <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block mt-5 bg-light sidebar collapse"
      >
        <div class="sidebar-sticky pt-3">
          <ul class="nav flex-column mt-5">
          <li class="nav-item">
            <a class="nav-link" >
              <span data-feather="file"></span>
              Dashboard
            </a>
          </li>
    
          </ul>
      </div>
      </nav>
    </div>
  );
};

export default Sidebar;
