import React from 'react'

function YearFilter({year,updateYear}) {
    return (
        <div>
            <div className="year">
          <select  value={year} id='year' onChange={updateYear} name="birth-year">
            <option value=''>Select Year</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
          </select>
          </div>
        </div>
    )
}

export default YearFilter
