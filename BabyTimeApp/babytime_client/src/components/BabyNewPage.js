import React, { useState, useEffect } from "react";
import { Baby } from "../requests";
import { useNavigate } from "react-router-dom";
import BabyNewForm from "./BabyNewForm";

function BabyNewPage() {
  const navigate = useNavigate();
  const [error, setError] = useState([]);

  const createNewBaby = (params) => {
    Baby.create(params).then((baby) => {
      if (baby.errors) {
        setError(baby.errors);
      } else {
        navigate(`/baby`);
      }
    });
  };

  return (
    <div>
      <BabyNewForm
        errors={error}
        submitForm={(params) => createNewBaby(params)}
      />
    </div>
  );
}

export default BabyNewPage;
