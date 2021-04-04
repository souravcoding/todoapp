import React from 'react'

function MonthFilter({month,updateMonth}) {
    return (
        <div>
            <div className="month"> 
          <select  value={month} id='Month' onChange={updateMonth}>
                <option value=''>Select Month</option>
                <option selected value='1'>Janaury</option>
                <option value='2'>February</option>
                <option value='3'>March</option>
                <option value='4'>April</option>
                <option value='5'>May</option>
                <option value='6'>June</option>
                <option value='7'>July</option>
                <option value='8'>August</option>
                <option value='9'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
          </select> 
          </div>
        </div>
    )
}

export default MonthFilter
