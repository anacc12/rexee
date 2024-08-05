import { useEffect, useState } from "react";
import { authService } from "../auth";

const UserDashboard = () => {
  const [hair, setHair] = useState([]);

  useEffect(() => {
    const fetchHair = async () => {
      try {
        const response = await authService.getUser();
        // setHair(response.data.projects); // Adjust according to your API response
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchHair();
  }, []);

  return (
    <>
      User dashboard
      {/* <ul>
        {hair.map((hr) => (
          <li key={hr.color}>{hr.type}</li> 
        ))}
      </ul> */}
    </>
  );
};

export default UserDashboard;
