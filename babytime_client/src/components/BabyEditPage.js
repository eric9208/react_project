import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Baby } from "../requests";
import BabyDetails from "./BabyDetails";
import BabyEditForm from "./BabyEditForm";

import { useNavigate } from "react-router-dom";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

const BabyEditPage = (props) => {
  const navigate = useNavigate();
  const [baby, setBaby] = useState({});
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    Baby.show(props.match.params.id).then((baby) => {
      setBaby(baby);
    });
  }, []);

  const updateBaby = (params) => {
    Baby.update(props.match.params.id, params).then((baby) => {
      if (baby.errors) {
        setErrors(baby.errors);
      } else {
        navigate(`/baby`);
      }
    });
  };
  if (baby.no === "no") {
    return (
      <>
        <div
          class="d-flex justify-content-center"
          style={{ fontSize: "5em", marginTop: "5vh" }}
        >
          {" "}
          Not Authorized
        </div>
        <div
          class="d-flex justify-content-center"
          style={{ fontSize: "2em", marginTop: "5vh" }}
        >
          {" "}
          Please Go back
        </div>
      </>
    );
  } else {
    return (
      <div>
        <BabyEditForm
          baby={baby}
          errors={errors}
          submitForm={(params) => updateBaby(params)}
        />
      </div>
    );
  }
};
export default withRouter(BabyEditPage);
