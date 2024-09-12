import React, { Component } from "react";
import axios from "axios";
import { Sidebar } from "./_component/Sidebar";

export class AddTeam extends Component {
  state = {
    formData: {
      photo: null,
      name: "",
      subject: "",
      faculty: "",
    },
    errors: {},
  };

  handleChange = (e) => {
    const { name, value, files } = e.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: files ? files[0] : value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { formData } = this.state;
    const token = localStorage.getItem('authToken');

    const formDataObj = new FormData();
    formDataObj.append("photo", formData.photo);
    formDataObj.append("name", formData.name);
    formDataObj.append("subject", formData.subject);
    formDataObj.append("faculty", formData.faculty);

    axios.post('https://jec.edu.np/api/teachers/', formDataObj, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${token}`, 
      },
    })
    .then((response) => {
      // console.log(response.data);
      alert("You have added a new teacher");
      window.location.reload();
    })
    .catch((error) => {
      console.error(error);
    });
  }; 

  render() {
    const { formData, errors } = this.state;

    return (
      <div className="">
        <Sidebar />
        <div className="flex-1 p-6">
          <h1 className="mb-6 text-3xl font-bold text-center text-red-600 transition-all duration-500 md:text-xl lg:text-2xl hover:text-red-800">
            Add Team
          </h1>
          <div className="max-w-lg mx-auto">
            <form onSubmit={this.handleSubmit}>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col">
                  <label className="mb-2 text-lg font-bold">
                    Add Photo
                    <input
                      type="file"
                      name="photo"
                      onChange={this.handleChange}
                      className="block w-full px-4 py-2 mt-2 border border-blue-600 rounded-lg"
                      required
                    />
                    {errors.photo && <p className="text-red-700">{errors.photo}</p>}
                  </label>
                  <label className="block mt-3 mb-2 text-lg font-bold">
                    Teacher's Name:
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={this.handleChange}
                      className="block w-full px-4 py-2 mt-2 border border-blue-700 rounded-lg"
                      required
                    />
                    {errors.name && <p className="text-red-700">{errors.name}</p>}
                  </label>
                  <label className="block mt-3 mb-2 text-lg font-bold">
                    Subject:
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={this.handleChange}
                      className="block w-full px-4 py-2 mt-2 border border-blue-700 rounded-lg"
                      required
                    />
                    {errors.subject && <p className="text-red-700">{errors.subject}</p>}
                  </label>
                  <div className="mt-4 text-center">
                    <h2 className="text-2xl font-bold text-red-700">
                      Choose the Faculty
                    </h2>
                    <div className="flex flex-col items-center justify-center gap-5 mt-4 md:flex-row">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="faculty"
                          value="BCE"
                          onChange={this.handleChange}
                          className="mr-2"
                          required
                        />
                        BCE
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="faculty"
                          value="BCT"
                          onChange={this.handleChange}
                          className="mr-2"
                          required
                        />
                        BCT
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="faculty"
                          value="BEI"
                          onChange={this.handleChange}
                          className="mr-2"
                          required
                        />
                        BEI
                      </label>
                    </div>
                    {errors.faculty && <p className="text-red-700">{errors.faculty}</p>}
                  </div>
                  <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="mt-6 w-full max-w-xs sm:w-[50%] lg:w-[25%] bg-red-600 text-white py-2 px-6 text-center rounded-lg hover:bg-red-800"
                  >
                    Submit
                  </button>
                </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTeam;
