const BabyNewForm = (props) => {
  const getDataAndSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    props.submitForm({
      first_name: fd.get("first_name"),
      last_name: fd.get("last_name"),
      dob: fd.get("dob"),
      created_at: new Date(),
    });
    event.currentTarget.reset();
  };
  return (
    <div style={{ marginLeft: "25vw", textAlign: "center", width: "100vh" }}>
      <form onSubmit={getDataAndSubmit} style={{ marginTop: "5vh" }}>
        <div class="row mb-3">
          <label htmlFor="first_name" class="col-sm-2 col-form-label">
            First Name
          </label>
          <div class="col-sm-10">
            <input type="text" name="first_name" id="" class="form-control" />
          </div>
        </div>
        <div class="row mb-3">
          <label htmlFor="last_name" class="col-sm-2 col-form-label">
            Last Name
          </label>
          <div class="col-sm-10">
            <input type="text" name="last_name" class="form-control" />
          </div>
        </div>
        <div class="row mb-3">
          <label htmlFor="dob" class="col-sm-2 col-form-label">
            Date of birth
          </label>
          <div class="col-sm-10">
            <input type="date" name="dob" id="" class="form-control" />
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="Create Baby"
            class="btn babyButton"
            style={{
              float: "right",
              width: "20vw",
              backgroundColor: "#6495ed",
            }}
          />
        </div>
      </form>
    </div>
  );
};
export default BabyNewForm;
