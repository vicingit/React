import React from 'react'

export default function App() {

  const [formData, setFormData] = React.useState(
    {firstName: "", 
    lastName: "", 
    email: "", 
    comments: "",
    isFriendly: true,
    employment: ""
  }
  )

  console.log(formData.employment)

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  return (
    <form>

      <input 
        type='text'
        placeholder='First Name'
        onChange={handleChange}
        name='firstName'
        value={formData.firstName}
      />
      <input 
        type='text'
        placeholder='Last Name'
        onChange={handleChange}
        name='lastName'
        value={formData.lastName}
      />
      <input 
        type='email'
        placeholder='Email'
        onChange={handleChange}
        name='email'
        value={formData.email}
      />

      <textarea 
      placeholder='Comments'
      onChange={handleChange}
      name='comments'
      value={formData.comments} 
      />
      <input 
      type='checkbox'
      id='isFriendly'
      checked= {formData.isFriendly}
      onChange  ={handleChange}
      name='isFriendly'
      />
      htmlFor    <label htmlFor='isFriendly'> Are you friendly?</label>
      <hr />
      <br />

      <fieldset>
        <legend>Current Employment Status</legend>

        <div className="radio-label">
          <input type='radio' id='unemployed' name='employment' value={formData.employment} onChange={handleChange} />
          <label htmlFor='unemployed'>Unemployed</label>
        </div>

        <div className="radio-label">
          <input type='radio' id='full-time' name='employment' value={formData.employment} onChange={handleChange} />
          <label htmlFor='full-time'>Full-time</label>
        </div>
</fieldset>


    </form>
  )
}
