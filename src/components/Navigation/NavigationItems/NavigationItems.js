import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const NavigationItems = (props) => {
  const menuItems = [
    {
      title: "Products",
      columns: [
        {
          details: [
            {
              title: "Talent Sourcing",
              url: "/",
            },
            { title: "Payroll Mgmt", url: "/" },
          ],
        },
        {
          details: [
            { title: "Core-HR", url: "/" },
            { title: "Performance", url: "https://performance-hr.netlify.app" },
          ],
        },
        { details: [{ title: "Attendance", url: "/" }] },
      ],
    },
    {
      title: "Company",
      columns: [
        {
          details: [
            { title: "About Us", url: "/" },
            { title: "Blog", url: "/" },
            { title: "Terms of Service", url: "/" },
          ],
        },
        {
          details: [
            { title: "Contact Us", url: "" },
            { title: "Support Center", url: "/" },
          ],
        },
        {
          details: [
            { title: "FAQs", url: "" },
            { title: "Privacy", url: "/" },
          ],
        },
      ],
    },
  ];

  return (
    <ul className="NavigationItems">
      {menuItems.map((item) => {
        return (
          <div key={item.title} className="dropdown">
            <NavigationItem>
              {item.title}
              <i className="fas fa-chevron-down"></i>
            </NavigationItem>
            <div className="dropdown-content">
              {item.columns.map((column, index) => {
                return (
                  <ul key={index * Math.random()} className="p-2">
                    {column.details.map((list) => {
                      return (
                        <li key={list.title}>
                          <a href={list.url}>{list.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
            </div>
          </div>
        );
      })}

      <NavigationItem link="/#">Pricing</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
