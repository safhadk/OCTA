import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputField from './InputField';
import Radio from './Radio';

function Home() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [next, setNext] = useState(1)
  const [numWheels, setNumWheels] = useState(null)
  const [type, setType] = useState("")
  const [model, setModel] = useState("")
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onNextClick = () => {
    setNext(next + 1)
  }

  const onPrevClick = () => {
      setNext(next - 1)
  }

  const submit = () => {
    console.log("submitted")
  }

  return (

    <div className="mx-auto flex flex-col space-y-4 sm:w-1/2 md:w-1/3 lg:w-1/4 border-2 border-gray-300 bg-gray-100 p-6 rounded-lg">
      {next === 1 &&
        <>
          <InputField label={"First Name"} value={firstName} onChange={setFirstName} placeHolder={"Enter Your First Name"} />
          <InputField label={"Last Name"} value={lastName} onChange={setLastName} placeHolder={"Enter Your Last Name"} />
        </>
      }

      {next === 2 &&
        <>
          <label className="text-lg font-medium text-gray-700">
            Number Of Wheels
          </label>
          <div className="flex items-center mt-2">
            <Radio label={'2'} value={numWheels} onChange={setNumWheels} />
            <Radio label={'4'} value={numWheels} onChange={setNumWheels} />
          </div>
        </>
      }

      {next === 3 &&
        <>
          <label className="text-lg font-medium text-gray-700">
            Type of vehicle
          </label>
          <div className="flex items-center mt-2">
            <Radio label={'hatchback'} value={type} onChange={setType} />
            <Radio label={'suv'} value={type} onChange={setType} />
            <Radio label={'sedan'} value={type} onChange={setType} />
          </div>
        </>
      }

      {next === 4 &&
        <>
          <label className="text-lg font-medium text-gray-700">
            Specific Model
          </label>
          <div className="flex items-center mt-2">
            <Radio label={'Audi'} value={model} onChange={setModel} />
            <Radio label={'Baleno'} value={model} onChange={setModel} />
            <Radio label={'BMW'} value={model} onChange={setModel} />
          </div>
        </>
      }

      {next === 5 &&
        <>
          <label className="text-lg font-medium text-gray-700">
            Select a Date Range
          </label>
          <div className="flex items-center mt-2">
            
            
            <DatePicker
              selected={startDate}
              startDate={startDate}
              endDate={endDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              dateFormat="dd/MM/yyyy"
              placeholderText="Start Date"
              minDate={new Date()}
              className="w-full px-4 py-2 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <DatePicker
              selected={endDate}
              startDate={startDate}
              endDate={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              dateFormat="dd/MM/yyyy"
              placeholderText="End Date"
              className="w-full px-4 py-2 text-lg text-gray-900 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              minDate={startDate}
            />
          </div>
        </>
      }



      {next !== 1 &&
        <button
          className="w-full px-4 py-2 text-lg font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
          onClick={onPrevClick}
        >
          Previous
        </button>
      }
      {next !== 5 &&
        <button
          className="w-full px-4 py-2 text-lg font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
          onClick={onNextClick}
        >
          Next
        </button>
      }

      {next === 5 &&
        <button
          className="w-full px-4 py-2 text-lg font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
          onClick={submit}
        >
          Submit
        </button>}
    </div>
  )
}

export default Home