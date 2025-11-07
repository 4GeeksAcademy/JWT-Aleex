import React, { useEffect, useState } from "react";

const Private = () => {
  const [message, setMessage] = useState(null);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) return;
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/private`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => setMessage(data.msg))
      .catch(err => console.error(err));
  }, [token]);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-10">
          <div className="card shadow text-center">
            <div className="card-body">
              <h2 className="card-title mb-3">Private Area</h2>
              {message && <div className="alert alert-info">{message}</div>}
              <button className="btn btn-danger mt-3" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Private;
