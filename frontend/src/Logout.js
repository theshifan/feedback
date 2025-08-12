import axios from "axios";

export const logoutUser = async (navigate) => {
  try {
    const refresh = localStorage.getItem("refresh");

    if (refresh) {
      await axios.post(
        "http://localhost:8000/logout/",
        { refresh },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );
    }
  } catch (error) {
    console.error("Logout error:", error.response?.data || error.message);
  } finally {

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");

    navigate("/login"); 
  }
};
