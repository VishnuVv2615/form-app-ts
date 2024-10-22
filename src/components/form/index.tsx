import React, { useState } from "react";

const Form: React.FC = () => {

    const[formData,setFormData]=useState({
        name:"",
        email:"",
        mobile:"",
        gender:"",
        age:"",
        location:"",
        amountOpinion:"",
        daysOpinion:"",
        travelPreference:"",
        extraOpinions:""
    });


    const handleChange=(e:React.ChangeEvent<HTMLInputElement |HTMLSelectElement |HTMLTextAreaElement>)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    }

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        window.alert("Venam Philipseyy:இத்துடன் விளையாட்டு செய்திகள் முடிவடைந்தன :நன்றி மீண்டும் வருக.....");

        setFormData({
            name: "",
      email: "",
      mobile: "",
      gender: "",
      age: "",
      location: "",
      amountOpinion: "",
      daysOpinion: "",
      travelPreference: "",
      extraOpinions: ""
        })
    }

  return (
    <div>
      <div className="heading text-center">
        <h2 className="text-2xl font-bold font-serif text-blue-950">Tour Plan Form</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center m-4 bg-slate-300 rounded-lg">
        {/* Name Field */}
        <div className="mt-5">
          <label htmlFor="name" className="block font-bold">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-56"
            aria-required="true"
            required
            placeholder="Enter your name"
          />
        </div>
        <br />

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block font-bold">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-56"
            aria-required="true"
            required
            placeholder="Enter your email"
          />
        </div>
        <br />

        {/* Mobile Number Field */}
        <div>
          <label htmlFor="mobile" className="block font-bold">Mobile Number:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="border p-2 w-56"
            aria-required="true"
            required
            placeholder="Enter your mobile number"
            pattern="[0-9]{10}" // Ensures only 10-digit numbers
            maxLength={10}
          />
        </div>
<br />
        {/* Gender Selection */}
          <div className="flex gap-4">
          <label className="font-bold">Gender:</label>
            <div><input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={formData.gender==="Male"}
              onChange={handleChange}
              required
            />
            <label htmlFor="male" className="ml-2">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={formData.gender==="female"}
              onChange={handleChange}
            />
            <label htmlFor="female" className="ml-2">Female</label></div>
          </div>
        <br />

        {/* Age Field */}
        <div>
          <label htmlFor="age" className="block font-bold">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="border p-2 w-56"
            aria-required="true"
            required
            placeholder="Enter your age"
            min="1"
          />
        </div>
        <br />

        {/* Tour Location Dropdown */}
        <div>
          <label htmlFor="location" className="block font-bold">Select Tour Location:</label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border p-2 w-56"
            aria-required="true"
            required
          >
            <option value="">Choose location...</option>
            <option value="kerala">Kerala - Munnar</option>
            <option value="goa">Goa</option>
            <option value="kodai">Kodaikanal</option>
            <option value="ooty">Ooty</option>
            <option value="yercaud">Yercaud</option>
            <option value="thirumayam">Thirumayam Fort</option>
            <option value="vellyangiri">VellayanGiri Malai</option>
            <option value="KanyaKumari">KanyaKumari</option>
            <option value="kundraKudi">Kundrakudi</option>
          </select>
        </div>
        <br />

        {/* Amount Opinion Field */}
        <div>
        <label htmlFor="location" className="block font-bold">Amount Opinion:</label>
          <select
            id="amountOpinion"
            name="amountOpinion"
            value={formData.amountOpinion}
            onChange={handleChange}
            className="border p-2 w-56"
            aria-required="true"
            required
          >
            <option value="">Choose Amount...</option>
            <option value="1500">1500</option>
            <option value="1500">2000</option>
            <option value="1500">3500</option>
            <option value="1500">4000</option>
            <option value="1500">5500</option>
            <option value="1500">6000</option>
            <option value="1500">5500</option>
            <option value="1500">6000</option>
    </select>
        </div>
<br />
        {/* Days Opinion Field */}
        <div>
          <label htmlFor="daysOpinion" className="block font-bold">Days Opinion:</label>
        <select id="daysOpinion"
        name="daysOpinion"
        value={formData.daysOpinion}
        onChange={handleChange}
        className="border w-56 p-2"
        aria-required='true'
        required>
            <option value="">select days...</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="10">10</option>
        </select>
        </div>
<br />
        {/* Travel Preference Field */}
        <div>
          <label htmlFor="travelPreference" className="block font-bold">Select Travel by Preference:</label>
          <select name="travelPreference" id="travelPreference"
          value={formData.travelPreference}
          onChange={handleChange}
          aria-required="true"
          className="border p-2 w-56"
          required>
            <option value="">choose Preference...</option>
            <option value="rent">Rent Bus</option>
            <option value="train">Train</option>
            <option value="gvnt">Government Bus</option>
            <option value="bike">Bike</option>
            <option value="walk">Walk</option>
          </select>
        </div>
<br />
        {/* Extra Opinions Field */}
        <div>
          <label htmlFor="extraOpinions" className="block font-bold">Give some extra Opinions:</label>
          <textarea
            id="extraOpinions"
            name="extraOpinions"
            value={formData.extraOpinions}
            onChange={handleChange}
            className="border p-2 w-56"
            placeholder="Enter any additional opinions"
          />
        </div>
<br />
        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
